import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

import useStyles from './styles';
import Car from './Car/Car';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';

const Cars = () => {
    const cars = useSelector((store: RootState) => store.cars);
    const classes = useStyles();

    return (
        !cars.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {cars.map((car) => (
                    <Grid key={car.id} item xs={12} sm={6} md={6}>
                        <Car car={car} />
                    </Grid>
                ))}
            </Grid>
        )
    );
};

export default Cars;
