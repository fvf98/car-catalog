import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { initialCompanyModel } from '../../../models/Company.model';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createCompany, setEditing, updateCompany } from '../../../redux/actions/company';
import { RootState } from '../../../redux/reducers';

const FormCompany = ({ isOpenCompany, setOpenCompany }: { isOpenCompany: boolean, setOpenCompany: any }) => {
    const company = useSelector((store: RootState) => store.companies.editing);
    const [companyForm, setCompanyForm] = useState(company);
    const dispatch = useDispatch()

    useEffect(() => {
        setCompanyForm(company);
    }, [isOpenCompany])

    const handleClose = () => {
        dispatch(setEditing(initialCompanyModel));
        setOpenCompany(false);
    };

    const report = (text: String) => toast.error(text);

    const handleSubmit = () => {
        if (companyForm.name && companyForm.webURL && companyForm.country && companyForm.street && companyForm.number && companyForm.cp
            && companyForm.state && companyForm.city && companyForm.col) {
            if (company.id)
                dispatch(updateCompany(company.id, companyForm));
            else
                dispatch(createCompany(companyForm));
            handleClose();
        }

        else report('Favor de rellenar todos los datos')
        console.log(companyForm);
    }

    return (
        <Dialog open={isOpenCompany} onClose={handleClose} aria-labelledby="FormCompany">
            <DialogTitle id="FormCompany">{company.id ? 'Modificar compañia' : 'Nueva compañia'}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    fullWidth
                    value={companyForm.name}
                    onChange={(e) => setCompanyForm({ ...companyForm, name: e.target.value })}
                />
                <TextField
                    margin="dense"
                    id="webURL"
                    label="Pagina web"
                    fullWidth
                    value={companyForm.webURL}
                    onChange={(e) => setCompanyForm({ ...companyForm, webURL: e.target.value })}
                />
                <TextField
                    margin="dense"
                    id="country"
                    label="Pais"
                    fullWidth
                    value={companyForm.country}
                    onChange={(e) => setCompanyForm({ ...companyForm, country: e.target.value })}
                />
                <TextField
                    margin="dense"
                    id="street"
                    label="Calle"
                    fullWidth
                    value={companyForm.street}
                    onChange={(e) => setCompanyForm({ ...companyForm, street: e.target.value })}
                />
                <TextField
                    margin="dense"
                    id="number"
                    label="Numero"
                    fullWidth
                    value={companyForm.number}
                    onChange={(e) => setCompanyForm({ ...companyForm, number: e.target.value })}
                />
                <TextField
                    margin="dense"
                    id="cp"
                    label="Codigo postal"
                    fullWidth
                    value={companyForm.cp}
                    onChange={(e) => setCompanyForm({ ...companyForm, cp: e.target.value })}
                />
                <TextField
                    margin="dense"
                    id="state"
                    label="Estado"
                    fullWidth
                    value={companyForm.state}
                    onChange={(e) => setCompanyForm({ ...companyForm, state: e.target.value })}
                />
                <TextField
                    margin="dense"
                    id="city"
                    label="Ciudad"
                    fullWidth
                    value={companyForm.city}
                    onChange={(e) => setCompanyForm({ ...companyForm, city: e.target.value })}
                />
                <TextField
                    margin="dense"
                    id="col"
                    label="Colonia"
                    fullWidth
                    value={companyForm.col}
                    onChange={(e) => setCompanyForm({ ...companyForm, col: e.target.value })}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancelar
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    {company.id ? 'Guardar' : 'Crear'}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default FormCompany;