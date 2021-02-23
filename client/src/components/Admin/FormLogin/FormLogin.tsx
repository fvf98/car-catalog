import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/actions/auth';
import { toast } from 'react-toastify';

const FormLogin = ({ isOpenLogin, setOpenLogin }: { isOpenLogin: boolean, setOpenLogin: any }) => {
    const [authForm, setAuthForm] = useState({ email: '', password: '' });
    const dispatch = useDispatch()

    const handleClose = () => {
        setAuthForm({ email: '', password: '' });
        setOpenLogin(false);
    };

    const report = (text: String) => toast.error(text);

    const handleSubmit = () => {
        if (authForm.email && authForm.password) {
            handleClose();
            dispatch(login(authForm));
        }
        else report('Favor de llenar los datos');
    }

    return (
        <Dialog open={isOpenLogin} onClose={handleClose} aria-labelledby="FormLogin">
            <DialogTitle id="FormLogin">Iniciar sesion</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Correo"
                    type="email"
                    fullWidth
                    value={authForm.email}
                    onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })}
                />
                <TextField
                    margin="dense"
                    id="password"
                    label="Contraseña"
                    type="password"
                    fullWidth
                    value={authForm.password}
                    onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Iniciar sesion
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default FormLogin;