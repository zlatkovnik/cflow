import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Transaction } from '../models/Transaction.model'
import { add, fetchTransactions, selectTransactions, set } from "../redux/transactions/transactions.slice";

function TransactionsPage() {
    const transactions = useSelector(selectTransactions);
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(fetchTransactions());
        return () => {}
    }, [])

    return (
        <div>
            {transactions.map(t => 
            <div key={t.id}>
                <div>{t.id}</div>
                <div>{t.name}</div>
                <div>{t.type}</div>
            </div>
            )}
        </div>
    )
}

export default TransactionsPage
