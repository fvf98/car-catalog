import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import SharedTable from '../../shared/table';
import { Column } from '../../../models/Column.model';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';
import { deleteUser, setEditing } from '../../../redux/actions/user';
import { UserModel } from '../../../models/User.model';
import FormUser from '../FormUser/FormUser';

const columns: Column[] = [
    { id: 'name', label: 'Nombre', minWidth: 100 },
    { id: 'lastName', label: 'Apellidos', minWidth: 100 },
    { id: 'email', label: 'Correo', minWidth: 100 },
    { id: 'roles', label: 'Roles', minWidth: 100 },
    { id: 'status', label: 'Estatus', minWidth: 100, format: (value: boolean) => value ? "Activo" : "Baja" },

];

const Users = () => {
    const users = useSelector((store: RootState) => store.users.usersList);
    const [isOpenUser, setOpenUser] = useState(false);
    const dispatch = useDispatch();

    const classes = useStyles()

    const upDown = (id: number) => {
        dispatch(deleteUser(id));
    }

    const update = (user: UserModel) => {
        dispatch(setEditing(user));
        setOpenUser(true)
    }

    return (
        <>
            <div className={classes.add}>
                <Button variant='contained' color='primary' onClick={() => setOpenUser(true)}> <AddIcon fontSize="large" />Nuevo usuario</Button>
                <FormUser isOpenUser={isOpenUser} setOpenUser={setOpenUser} />
            </div>
            <SharedTable rows={users} columns={columns} update={update} upDown={upDown} />
        </>
    );
};

export default Users;
