export interface ITransaction {
    id?: number,
    type: 'in' | 'out',
    name: string,
    description?: string
}