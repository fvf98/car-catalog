import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import asd from '../../../asd.jpg';

import useStyles from './styles';

const Car = () => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={asd} title='asd' />
            <div className={classes.overlay}>
                <Typography variant='h6'>asd</Typography>
            </div>
            {/* <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={() => { }}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div> */}
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">Colores: </Typography>
            </div>
            <Typography className={classes.title} variant='h5' gutterBottom>asdasd</Typography>
            <CardContent >
                <Typography variant='body1' color='textSecondary'>Modelo: 2020</Typography>
                <Typography variant='body1' color='textSecondary'>Motor: asd</Typography>
                <Typography variant='body1' color='textSecondary'>Transmicion: asd</Typography>
                <Typography variant='body1' color='textSecondary'>Potencia: asd</Typography>
                <Typography variant='body1' color='textSecondary'>Cilindros: asd</Typography>
                <Typography variant='body1' color='textSecondary'>Numero de puertas: asd</Typography>
                <Typography variant='body1' color='textSecondary'>Precio: asd</Typography>
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