import { useMemo } from "react"
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from 'react-swipeable-list'
import { categories } from "../data/categories"
import { formatDate } from "../helpers"
import { Expense } from "../types"
import AmountDisplay from "./AmountDisplay"
import "react-swipeable-list/dist/styles.css"
import { useBudget } from "../hooks/useBudget"

type ExpenseDetailProps = {
    expense: Expense
}

export default function ExpenseDetail({ expense }: ExpenseDetailProps) {

    // 'filter' nos permite filtrar sobre el arreglo el id que estamos solicitando para que nos traga toda su informacion
    const categoryInfo = useMemo(() => categories.filter(cat => cat.id === expense.category)[0], [expense]) // Devuelve un arreglo, por lo tanto lo traemos desde la posición [0]

    const { dispatch } = useBudget()

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction
                onClick={() => dispatch({ type: 'get-expense-by-id', payload: { id: expense.id } })}
            >
                Actualizar
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActinos = () => (
        <TrailingActions>
            <SwipeAction
                onClick={() => dispatch({ type: 'remove-expense', payload: { id: expense.id } })}
                destructive={true}
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

    return (
        // con ! garantizamos que el valor va a existir
        <SwipeableList>
            <SwipeableListItem
                maxSwipe={1}
                leadingActions={leadingActions()}
                trailingActions={trailingActinos()}
            >
                <div className="bg-white shadow-lg rounded-lg p-5 w-full border-b border-gray-200 flex gap-5 items-center">
                    <div>
                        <img
                            src={`/icono_${categoryInfo.icon}.svg`}
                            alt="Icono gasto"
                            className="w-20"
                        />
                    </div>

                    <div className="flex-1 space-y-2">
                        <p className=" text-sm font-bold uppercase text-slate-500">{categoryInfo.name}</p>
                        <p>{expense.expenseName}</p>
                        <p className="text-slate-600 text-sm">{formatDate(expense.date!.toString())}</p>
                    </div>

                    <AmountDisplay
                        amount={expense.amount}
                    />

                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}
