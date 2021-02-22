import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import SharedTable from '../../shared/table';
import { Column } from '../../../models/Column.model';
import { deleteCompany, setEditing } from '../../../redux/actions/company';
import { CompanyModel } from '../../../models/Company.model';
import FormCompany from '../FormCompany/FormCompany';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';

const columns: Column[] = [
    { id: 'name', label: 'Nombre', minWidth: 170 },
    { id: 'webURL', label: 'Pagina web', minWidth: 100 },
    { id: 'country', label: 'Pais', minWidth: 100 },
    { id: 'street', label: 'Direccion', minWidth: 100 },
    { id: 'number', label: 'numero', minWidth: 100 },
    { id: 'cp', label: 'Codigo postal', minWidth: 100 },
    { id: 'state', label: 'Estado', minWidth: 100 },
    { id: 'city', label: 'Ciudad', minWidth: 100 },
    { id: 'col', label: 'Colonia', minWidth: 100 },

];

const Companies = () => {
    const companies = useSelector((store: RootState) => store.companies.companiesList);
    const [isOpenCompany, setOpenCompany] = useState(false);
    const dispatch = useDispatch();

    const classes = useStyles()

    const upDown = (id: number) => {
        dispatch(deleteCompany(id));
    }

    const update = (company: CompanyModel) => {
        dispatch(setEditing(company));
        setOpenCompany(true)
    }

    return (
        <>
            <div className={classes.add}>
                <Button variant='contained' color='primary' onClick={() => setOpenCompany(true)}> <AddIcon fontSize="large" />Nueva compañia</Button>
                <FormCompany isOpenCompany={isOpenCompany} setOpenCompany={setOpenCompany} />
            </div>
            <SharedTable rows={companies} columns={columns} update={update} upDown={upDown} />
        </>
    );
};

export default Companies;
