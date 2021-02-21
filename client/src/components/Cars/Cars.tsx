import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

// import Post from './Post/Post';
import useStyles from './styles';
import Car from './Car/Car';

const Cars = () => {
    const classes = useStyles();

    return (
        !true ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={6} md={6}>
                    <Car />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Car />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Car />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Car />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Car />
                </Grid>
                {/* {cars.map((car) => (
                    <Grid key={car.id} item xs={12} sm={6} md={6}>
                        <Car car={car} />
                    </Grid>
                ))} */}
            </Grid>
        )
    );
};

export default Cars;
