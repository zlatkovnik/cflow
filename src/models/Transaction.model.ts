export interface Transaction {
    id: number,
    type: 'in' | 'out',
    name: string,
    description?: string
}