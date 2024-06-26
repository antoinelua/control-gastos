import { PropsWithChildren } from "react"

// Tambien podemos importar PropsWithChildren


export default function ErrorMessage({ children }: PropsWithChildren) {
    return (
        <p className='bg-red-600 font-bold p-2 text-white text-sm text-center'>
            {children}
        </p>
    )
}
