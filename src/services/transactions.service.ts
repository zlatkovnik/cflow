import axios from "axios";
import { Transaction } from "../models/Transaction.model";
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
        return axios.get<Transaction[]>(this.domain.getEndpoint() + '/transactions');
    }
}