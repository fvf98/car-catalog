import React, { useEffect } from 'react';
import { Container, AppBar, Button, Grow, Grid, Toolbar, IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';

import Cars from './components/Cars/Cars';
import useStyles from './styles';
import { getCars } from './redux/actions/car';

function App() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <Container maxWidth='lg'>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs='auto' sm={12}>
              <Cars />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
