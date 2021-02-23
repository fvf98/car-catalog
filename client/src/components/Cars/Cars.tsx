import React, { useState } from 'react';
import { Grid, CircularProgress, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import useStyles from './styles';
import Car from './Car/Car';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import FormCar from '../Admin/FormCar/FormCar';

const Cars = () => {
    const userData = useSelector((store: RootState) => store.userLogged);
    const cars = useSelector((store: RootState) => store.cars.carList);
    const [isOpenCar, setOpenCar] = useState(false);
    const classes = useStyles();

    return (
        !cars.length ? <CircularProgress color='secondary' /> : (
            <div>
                {userData.accessToken &&
                    <div className={classes.add}>
                        <Button variant='contained' color='primary' onClick={() => setOpenCar(true)}> <AddIcon fontSize="large" />Nuevo vehiculo</Button>
                        <FormCar isOpenCar={isOpenCar} setOpenCar={setOpenCar} />
                    </div>
                }
                <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                    {cars.map((car) => (
                        <Grid key={car.id} item sm={12} md={6}>
                            <Car car={car} setOpenCar={setOpenCar} />
                        </Grid>
                    ))}
                </Grid>
            </div >
        )
    );
};

export default Cars;
