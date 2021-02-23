import React, { useEffect, useState } from 'react';
import { Container, AppBar, Button, Grow, Grid, Toolbar, Tabs, Tab, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cars from './components/Cars/Cars';
import useStyles from './styles';
import { getCars } from './redux/actions/car';
import FormLogin from './components/Admin/FormLogin/FormLogin';
import { RootState } from './redux/reducers';
import { logOut } from './redux/actions/auth';
import { getCompanies } from './redux/actions/company';
import Companies from './components/Admin/Companies/Companies';
import { getUsers } from './redux/actions/user';
import Users from './components/Admin/Users/Users';

interface TabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
};

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`nav-tabpanel-${index}`}
			aria-labelledby={`nav-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					{children}
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: any) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

function App() {
	const userData = useSelector((store: RootState) => store.userLogged);
	const [isOpenLogin, setOpenLogin] = useState(false);
	const [value, setValue] = React.useState(0);
	const dispatch = useDispatch();

	const classes = useStyles();

	useEffect(() => {
		if (userData.accessToken) {
			setOpenLogin(false);
			if (userData.user.roles != 'Administrador') {
				dispatch(getCars(userData.user.company.id));
				dispatch(getCompanies(userData.user.company.id));
				dispatch(getUsers(userData.user.company.id));
			}
			else {
				dispatch(getCars(0, true));
				dispatch(getCompanies());
				dispatch(getUsers());
			}
		}
		else dispatch(getCars());
	}, [userData, dispatch]);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Container maxWidth='lg'>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover />
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						{!userData.accessToken ?
							<>
								<Button color="inherit" onClick={() => setOpenLogin(true)}>Iniciar sesion</Button>
							</>
							:
							<>
								<Button color="inherit" onClick={() => dispatch(logOut())}>Cerrar sesion</Button>
								<Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
									<Tab label="Vehiculos" {...a11yProps(1)} />
									{
										(userData.user.roles == 'Administrador' || userData.user.roles == 'Gerente') &&
										<Tab label="Compañias" {...a11yProps(2)} />
									}
									{
										(userData.user.roles == 'Administrador' || userData.user.roles == 'Gerente') &&
										<Tab label="Usuarios" {...a11yProps(3)} />

									}
								</Tabs>
							</>
						}

					</Toolbar>
				</AppBar>
			</div>
			<FormLogin isOpenLogin={isOpenLogin} setOpenLogin={setOpenLogin} />
			<Grow in>
				{
					!userData.accessToken ?
						<Container>
							<Grid container justify='space-between' alignItems='stretch' spacing={3}>
								<Grid item xs='auto' sm={12}>
									<Cars />
								</Grid>
							</Grid>
						</Container>
						:
						<Container>
							<TabPanel value={value} index={0}>
								<Grid container justify='space-between' alignItems='stretch' spacing={3}>
									<Grid item xs='auto' sm={12}>
										<Cars />
									</Grid>
								</Grid>
							</TabPanel>
							<TabPanel value={value} index={1}>
								<Companies />
							</TabPanel>
							<TabPanel value={value} index={2}>
								<Users />
							</TabPanel>
						</Container>
				}
			</Grow>
		</Container>
	);
}

export default App;
