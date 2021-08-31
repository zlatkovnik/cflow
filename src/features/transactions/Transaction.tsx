import React from 'react'
import { ITransaction } from '../../models/Transaction.model'

function Transaction(props: {transaction: ITransaction}) {
    const {transaction} = props;
    return (
        <div>
            <div>{transaction.id}</div>
            <div>{transaction.type}</div>
            <div>{transaction.name}</div>
            <div>{transaction.description}</div>
        </div>
    )
}

export default Transaction
