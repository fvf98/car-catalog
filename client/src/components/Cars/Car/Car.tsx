import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import useStyles from './styles';
import { CarModel } from '../../../models/Car.model';
import { deleteCar, setEditing } from '../../../redux/actions/car';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';

const Car = ({ car, setOpenCar }: { car: CarModel, setOpenCar: any }) => {
    const userData = useSelector((store: RootState) => store.userLogged);
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <div>
            <Card className={classes.card}>
                <CardMedia className={classes.media} image={car.image} title='asd' />
                <div className={classes.overlay}>
                    <Typography variant='h6' color='primary'>{car.company.name}</Typography>
                </div>
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">Colores: {car.colors.map((color) => `#${color} `)}</Typography>
                </div>
                <Typography className={classes.title} variant='h5' gutterBottom>{car.name}</Typography>
                <CardContent >
                    <Typography variant='body1' color='textSecondary'>Modelo: {car.model}</Typography>
                    <Typography variant='body1' color='textSecondary'>Motor: {car.motor}</Typography>
                    <Typography variant='body1' color='textSecondary'>Transmisión: {car.transmission}</Typography>
                    <Typography variant='body1' color='textSecondary'>Potencia: {car.power}</Typography>
                    <Typography variant='body1' color='textSecondary'>Cilindros: {car.cylinders}</Typography>
                    <Typography variant='body1' color='textSecondary'>Numero de puertas: {car.numDoors}</Typography>
                    <Typography variant='body1' color='textSecondary'>Precio: {car.price}</Typography>
                </CardContent>
                {userData.accessToken &&
                    <CardActions className={classes.cardActions}>
                        <Button size='medium' color='primary' onClick={() => {
                            dispatch(setEditing(car));
                            setOpenCar(true);
                        }}>
                            <EditIcon fontSize="large" /> Modificar
                    </Button>
                        {
                            (userData.user.roles != 'Empleado') &&
                            <Button size='medium' color='primary' onClick={() => dispatch(deleteCar(car.id))}>
                                {
                                    car.status ?
                                        <div>
                                            <DeleteIcon fontSize="large" />
                                    Baja
                                    </div>
                                        :
                                        <div>
                                            <AddCircleIcon fontSize="large" />
                                    Alta
                                </div>
                                }
                            </Button>
                        }
                    </CardActions>}
            </Card>
        </div >
    );
}

export default Car;