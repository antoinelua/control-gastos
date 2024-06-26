import { categories } from "../data/categories"
import { useBudget } from "../hooks/useBudget"

export default function FilterByCategory() {

    const { dispatch } = useBudget()

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: 'add-filter-category', payload: { id: e.target.value } }) // le estamos pasando el value como id
    }

    return (
        <div className="mt-10 bg-white shadow-lg rounded-lg p-10">
            <form>
                <div className="flex flex-col md:flex-row md:items-center gap-5">
                    <label htmlFor="category">Filtrar los Gastos</label>
                    <select
                        id="category"
                        className="bg-slate-100 p-3 flex-1 rounded"
                        onChange={handleChange}
                    >
                        <option value="">-- Todas las Categorias</option>
                        {categories.map(category => (
                            <option
                                value={category.id} // value como id
                                key={category.id}
                            >
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    )
}
