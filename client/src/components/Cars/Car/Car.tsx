import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';
import { CarModel } from '../../../models/Car.model';
import { UserloggedModel } from '../../../models/UserLogged.model';

const Car = ({ car, userData }: { car: CarModel, userData: UserloggedModel }) => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.add}>
                <Button variant='contained' color='primary'> <AddIcon fontSize="large" />Nuevo vehiculo</Button>
            </div>
            <Card className={classes.card}>
                <CardMedia className={classes.media} image={car.image} title='asd' />
                <div className={classes.overlay}>
                    <Typography variant='h6' color='primary'>{car.company.name}</Typography>
                </div>
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">Colores: {car.colors.map((color) => `${color}, `)}</Typography>
                </div>
                <Typography className={classes.title} variant='h5' gutterBottom>{car.name}</Typography>
                <CardContent >
                    <Typography variant='body1' color='textSecondary'>Modelo: {car.model}</Typography>
                    <Typography variant='body1' color='textSecondary'>Motor: {car.motor}</Typography>
                    <Typography variant='body1' color='textSecondary'>Transmicion: {car.transmision}</Typography>
                    <Typography variant='body1' color='textSecondary'>Potencia: {car.power}</Typography>
                    <Typography variant='body1' color='textSecondary'>Cilindros: {car.cylinders}</Typography>
                    <Typography variant='body1' color='textSecondary'>Numero de puertas: {car.numDoors}</Typography>
                    <Typography variant='body1' color='textSecondary'>Precio: {car.price}</Typography>
                </CardContent>
                {userData.accessToken &&
                    <CardActions className={classes.cardActions}>
                        <Button size='medium' color='primary' onClick={() => { }}>
                            <EditIcon fontSize="large" /> Modificar
                    </Button>
                        <Button size='medium' color='primary' onClick={() => { }}>
                            <DeleteIcon fontSize="large" /> Baja
                </Button>
                    </CardActions>}
            </Card>
        </div>
    );
}

export default Car;