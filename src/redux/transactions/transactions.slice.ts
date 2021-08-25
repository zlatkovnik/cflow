import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Transaction } from '../../models/Transaction.model'
import TransactionsService from '../../services/transactions.service';
import { AppThunk, RootState } from '../store'

export interface TransactionsState {
    transactions: Transaction[]
}

const initialState: TransactionsState = {
    transactions: []
}

export const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Transaction>) => {
            state.transactions = [...state.transactions, action.payload]
        },
        set: (state, action: PayloadAction<Transaction[]>) => {
            state.transactions = action.payload
        },
        remove: (state, action: PayloadAction<number>) => {
            state.transactions.slice(state.transactions.findIndex(t => t.id === action.payload))
        },
    },
})

// Action creators are generated for each case reducer function
export const { add, set, remove } = transactionsSlice.actions

export const selectTransactions = (state: RootState) => state.transactions.transactions

export const fetchTransactions = (): AppThunk => async (dispatch, getState) => {
    const response = await TransactionsService.get().getAll();
    dispatch(set(response.data));
};

export default transactionsSlice.reducer