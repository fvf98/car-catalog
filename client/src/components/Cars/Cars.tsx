import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

import useStyles from './styles';
import Car from './Car/Car';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { UserloggedModel } from '../../models/UserLogged.model';

const Cars = ({ userData }: { userData: UserloggedModel }) => {
    const cars = useSelector((store: RootState) => store.cars);
    const classes = useStyles();

    return (
        !cars.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {cars.map((car) => (
                    <Grid key={car.id} item sm={12} md={6}>
                        <Car car={car} userData={userData} />
                    </Grid>
                ))}
            </Grid>
        )
    );
};

export default Cars;
