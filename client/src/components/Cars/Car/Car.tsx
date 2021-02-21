import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'

import useStyles from './styles';
import { CarModel } from '../../../models/Car.model';

const Car = ({ car }: { car: CarModel }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={car.image} title='asd' />
            <div className={classes.overlay}>
                <Typography variant='h6' color='primary'>{car.company.name}</Typography>
            </div>
            {/* <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={() => { }}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div> */}
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
            <CardActions className={classes.cardActions}>
                {/* <Button size='small' color='primary' onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize="small" /> &nbsp; Like &nbsp; {post.likeCount}
                </Button>
                <Button size='small' color='primary' onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" /> Delete
                </Button> */}
            </CardActions>
        </Card>
    );
}

export default Car;