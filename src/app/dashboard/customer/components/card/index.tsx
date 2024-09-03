'use client'
import { api } from '@/lib/api'
import { CustomerProps } from '@/utils/customers.type'


export function CardCustomer({ customer }: { customer: CustomerProps }) {
    async function handleDeleteCustomer() {
        try {
            const response = await api.delete("/api/customer", {
                params: {
                    id: customer.id
                }
            })
            console.log(response.data)
        }catch(err){
            console.log(err)
        }
     }

    return (
        <article className="flex flex-col bg-gray-100/50 border-2 p-2 rounded-lg gap-2 hover:bg-gray-100 duration-300">
            <h2>
                <a className="font-bold">Nome:</a> {customer.name}
            </h2>
            <p><a className="font-bold">Email:</a> {customer.email}</p>
            <p><a className="font-bold">Telefone:</a> {customer.phone}</p>
            <button
                onClick={handleDeleteCustomer}
                className="bg-red-600 text-white px-4 rounded mt-2 self-start">
                Deletar
            </button>
        </article>
    )
}