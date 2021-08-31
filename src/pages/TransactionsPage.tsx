import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Transaction from '../features/transactions/Transaction';
import { fetchTransactions, selectTransactions } from "../redux/transactions/transactions.slice";
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: false,
    },
    {
      field: 'type',
      headerName: 'Type',
      width: 110,
      editable: false,
    }
  ];
  

function TransactionsPage() {
    const classes = useStyles();
    const transactions = useSelector(selectTransactions);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTransactions());
        return () => {}
    }, [])

    return (
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={transactions}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
    )
}

export default TransactionsPage
