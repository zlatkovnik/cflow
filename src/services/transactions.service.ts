import axios from "axios";
import { ITransaction } from "../models/Transaction.model";
import DomainService from "./domain.service";

export default class TransactionsService {
    private static instance: TransactionsService | null = null;
    static get() {
        if (!TransactionsService.instance) {
            TransactionsService.instance = new TransactionsService();
        }
        return TransactionsService.instance;
    }

    private domain: DomainService;
    constructor() {
        this.domain = DomainService.get();
    }

    getAll() {
        return axios.get<ITransaction[]>(this.domain.getEndpoint() + '/transactions');
    }

    add(transaction: ITransaction) {
        return axios.post(this.domain.getEndpoint() + '/transactions', transaction);
    }
}