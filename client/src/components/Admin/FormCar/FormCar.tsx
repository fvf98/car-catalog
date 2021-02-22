import { Button, Dialog, DialogActions, DialogContent, DialogTitle, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { CarModel, initialCarModel } from '../../../models/Car.model';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createCar, setEditing, updateCar } from '../../../redux/actions/car';
import { RootState } from '../../../redux/reducers';
import company from '../../../redux/reducers/company';
import { CompanyModel } from '../../../models/Company.model';

const FormCar = ({ isOpenCar, setOpenCar }: { isOpenCar: boolean, setOpenCar: any }) => {
    const car = useSelector((store: RootState) => store.cars.editing);
    const compaies = useSelector((store: RootState) => store.companies.companiesList);
    const [carForm, setCarForm] = useState(car);
    const dispatch = useDispatch()

    useEffect(() => {
        setCarForm(car);
    }, [isOpenCar])

    const handleClose = () => {
        dispatch(setEditing(initialCarModel));
        setOpenCar(false);
    };

    const report = (text: String) => toast.error(text);

    const handleSubmit = () => {
        if (carForm.name && carForm.company && carForm.model && carForm.motor && carForm.power && carForm.transmission
            && carForm.cylinders && carForm.numDoors && carForm.image && carForm.colors && carForm.price) {
            if (car.id)
                dispatch(updateCar(car.id, carForm));
            else
                dispatch(createCar(carForm));
        }
        else report('Favor de rellenar todos los datos')
    }

    return (
        <Dialog open={isOpenCar} onClose={handleClose} aria-labelledby="FormCar">
            <DialogTitle id="FormCar">{car.id ? 'Modificar vehiculo' : 'Nuevo vehiculo'}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    fullWidth
                    value={carForm.name}
                    onChange={(e) => setCarForm({ ...carForm, name: e.target.value })}
                />
                <InputLabel id="company">Compañia</InputLabel>
                <Select
                    labelId="company"
                    id="company"
                    margin="dense"
                    fullWidth
                    value={carForm.company.id}
                    onChange={(e) => setCarForm({ ...carForm, company: { id: e.target.value } as CompanyModel })}
                >
                    {compaies.length && compaies.map((company) => (
                        <MenuItem key={company.id} value={company.id}>{company.name}</MenuItem>
                    ))}
                </Select>
                <TextField
                    margin="dense"
                    id="model"
                    label="Modelo"
                    fullWidth
                    value={carForm.model}
                    onChange={(e) => setCarForm({ ...carForm, model: e.target.value })}
                />
                <TextField
                    margin="dense"
                    id="motor"
                    label="Motor"
                    fullWidth
                    value={carForm.motor}
                    onChange={(e) => setCarForm({ ...carForm, motor: e.target.value })}
                />
                <TextField
                    margin="dense"
                    id="power"
                    label="Poder"
                    fullWidth
                    value={carForm.power}
                    onChange={(e) => setCarForm({ ...carForm, power: e.target.value })}
                />
                <TextField
                    margin="dense"
                    id="transmision"
                    label="Transmision"
                    fullWidth
                    value={carForm.transmission}
                    onChange={(e) => setCarForm({ ...carForm, transmission: e.target.value })}
                />
                <TextField
                    margin="dense"
                    id="cylinders"
                    label="Cilindros"
                    type='number'
                    fullWidth
                    value={carForm.cylinders}
                    onChange={(e) => setCarForm({ ...carForm, cylinders: parseInt(e.target.value) || 0 })}
                />
                <TextField
                    margin="dense"
                    id="numDoors"
                    label="Numero de puertas"
                    type='number'
                    fullWidth
                    value={carForm.numDoors}
                    onChange={(e) => setCarForm({ ...carForm, numDoors: parseInt(e.target.value) || 0 })}
                />
                <TextField
                    margin="dense"
                    id="image"
                    label="Imagen"
                    fullWidth
                    value={carForm.image}
                    onChange={(e) => setCarForm({ ...carForm, image: e.target.value })}
                />
                <TextField
                    margin="dense"
                    id="colors"
                    label="Colores"
                    fullWidth
                    value={carForm.colors}
                    onChange={(e) => setCarForm({ ...carForm, colors: e.target.value.split(',') })}
                />
                <TextField
                    margin="dense"
                    id="price"
                    label="Precio"
                    type='number'
                    fullWidth
                    value={carForm.price}
                    onChange={(e) => setCarForm({ ...carForm, price: parseFloat(e.target.value) || 0 })}
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

export default FormCar;