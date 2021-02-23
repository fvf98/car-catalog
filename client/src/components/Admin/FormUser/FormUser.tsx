import { Button, Dialog, DialogActions, DialogContent, DialogTitle, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { initialUserModel, UserModel } from '../../../models/User.model';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createUser, setEditing, updateUser } from '../../../redux/actions/user';
import { RootState } from '../../../redux/reducers';
import { CompanyModel } from '../../../models/Company.model';

const FormUser = ({ isOpenUser, setOpenUser }: { isOpenUser: boolean, setOpenUser: any }) => {
    const user = useSelector((store: RootState) => store.users.editing);
    const userData = useSelector((store: RootState) => store.userLogged);
    const compaies = useSelector((store: RootState) => store.companies.companiesList);
    const [userForm, setUserForm] = useState(user);
    const dispatch = useDispatch()

    useEffect(() => {
        setUserForm(user);
        if (userData.user.roles != 'Administrador') setUserForm({ ...user, company: { id: userData.user.company.id } as CompanyModel });
    }, [isOpenUser])

    const handleClose = () => {
        dispatch(setEditing(initialUserModel));
        setOpenUser(false);
    };

    const report = (text: String) => toast.error(text);

    const handleSubmit = () => {
        if (userForm.name && userForm.lastName && userForm.email && userForm.roles) {
            if (user.id) {
                if (userForm.password)
                    dispatch(updateUser(user.id, userForm));
                else
                    dispatch(updateUser(user.id, { ...userForm, password: undefined }));
            }
            else
                dispatch(createUser(userForm));
            handleClose();
        }

        else report('Favor de rellenar todos los datos')
    }

    return (
        <Dialog open={isOpenUser} onClose={handleClose} aria-labelledby="FormUser">
            <DialogTitle id="FormUser">{user.id ? 'Modificar usuario' : 'Nueva usuario'}</DialogTitle>
            <DialogContent>
                <InputLabel id="company">Compañia</InputLabel>
                <Select
                    labelId="company"
                    id="company"
                    margin="dense"
                    fullWidth
                    disabled={userData.user.roles != 'Administrador'}
                    value={userForm.company.id}
                    onChange={(e) => setUserForm({ ...userForm, company: { id: e.target.value } as CompanyModel })}
                >
                    {compaies.length && compaies.map((company) => (
                        <MenuItem key={company.id} value={company.id}>{company.name}</MenuItem>
                    ))}
                </Select>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    fullWidth
                    value={userForm.name}
                    onChange={(e) => setUserForm({ ...userForm, name: e.target.value })}
                />
                <TextField
                    margin="dense"
                    id="lastName"
                    label="Apellidos"
                    fullWidth
                    value={userForm.lastName}
                    onChange={(e) => setUserForm({ ...userForm, lastName: e.target.value })}
                />
                <TextField
                    margin="dense"
                    id="email"
                    label="Correo"
                    fullWidth
                    value={userForm.email}
                    onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
                />
                <TextField
                    margin="dense"
                    id="password"
                    label="Contraseña"
                    type="password"
                    fullWidth
                    value={userForm.password}
                    onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
                />
                <InputLabel id="company">Roles</InputLabel>
                <Select
                    labelId="Roles"
                    id="roles"
                    margin="dense"
                    fullWidth
                    value={userForm.roles}
                    onChange={(e) => setUserForm({ ...userForm, roles: String(e.target.value) || 'Empleado' })}>
                    <MenuItem key={3} value='Empleado'>Empleado</MenuItem>
                    <MenuItem key={2} value='Gerente'>Gerente</MenuItem>
                    <MenuItem key={1} value='Administrador'>Administrador</MenuItem>
                </Select>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancelar
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    {user.id ? 'Guardar' : 'Crear'}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default FormUser;