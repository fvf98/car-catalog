import React, { useState } from 'react';
import { CircularProgress, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination, Button, Typography, Tooltip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './styles';

const SharedTable = ({ rows, columns, update, upDown }: { rows: any, columns: any, update: any, upDown: any }) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const classes = useStyles();

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        !rows.length ? <CircularProgress color='secondary' /> : (
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column: any) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                                <TableCell
                                    key='acciones'
                                    align='center'
                                    style={{ minWidth: 100 }}>
                                    acciones
                                    </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any) => {
                                return (
                                    <TableRow hover tabIndex={-1} key={row.id} className={!row.status ? classes.down : classes.active}>
                                        {columns.map((column: any) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'boolean' ? column.format(value) : value}
                                                </TableCell>
                                            );
                                        })}
                                        {
                                            (row.company || row.webURL) &&
                                            <TableCell key='actions' align='center'>
                                                <Button size='small' color='primary' onClick={() => update(row)}>
                                                    <Tooltip title="Modificar">
                                                        <EditIcon fontSize="small" />
                                                    </Tooltip>
                                                </Button>
                                                <Button size='small' color={row.status ? 'secondary' : 'primary'} onClick={() => upDown(row.id)}>
                                                    {
                                                        row.status ?
                                                            <Tooltip title="Dar de baja">
                                                                <DeleteIcon fontSize="small" />
                                                            </Tooltip>
                                                            :
                                                            <Tooltip title="Dar de alta">
                                                                <AddCircleIcon fontSize="large" />
                                                            </Tooltip>

                                                    }
                                                </Button>
                                            </TableCell>
                                        }
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        )
    );
};

export default SharedTable;
