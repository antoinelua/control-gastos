import { useMemo, useEffect } from "react"
import BudgetForm from "./components/BudgetForm"
import { useBudget } from "./hooks/useBudget"
import BudgetTracker from "./components/BudgetTracker"
import ExpenseModal from "./components/ExpenseModal"
import ExpenseList from "./components/ExpenseList"
import FilterByCategory from "./components/FilterByCategory"

function App() {

  const { state } = useBudget()

  // Validamos que el presupuesto sea mayor a 0 utilizando memo, para que se ejecute cada vez que el state de budget cambie
  const isValidBudget = useMemo(() => state.budget > 0, [state.budget])

  useEffect(() => {
    localStorage.setItem('budget', state.budget.toString()) // storage solo acepta string
    localStorage.setItem('expenses', JSON.stringify(state.expenses)) // un arreglo no se puede guardar en storage
  }, [state])
  return (
    <>
      <header className=" bg-blue-600 py-8 max-h-72">
        <h1 className=" uppercase text-center font-black text-4xl text-white">
          Planificador de Gastos
        </h1>

      </header>

      <div className=" max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-5 rounded-lg">
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>

      <div className="">

      </div>

      {isValidBudget && (
        <main className="max-w-3xl mx-auto py-10">
          <FilterByCategory />
          <ExpenseList />
          <ExpenseModal />
        </main>

      )}
    </>
  )
}

export default App
