
export type Expense = {
    id: string
    expenseName: string
    amount: number
    category: string
    date: Value
}

// Utilizamos el utility type de "Omit" para omitir el id de Expense y que se 
// copien los otros atributos
export type DraftExpense = Omit<Expense, 'id'>

type ValuePiece = Date | null
export type Value = ValuePiece | [ValuePiece, ValuePiece]

export type Category = {
    id: string
    name: string
    icon: string
}