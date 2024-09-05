'use client'
import { CustomerProps } from "@/utils/customers.type";
import { TicketProps } from "@/utils/ticket.type";
import { FiCheckSquare, FiFile, FiTrash } from "react-icons/fi";
import { api } from "@/lib/api"
import { useRouter } from "next/navigation";
import { ModalContext } from "@/providers/modal";
import { useContext } from "react";


interface TicketItemProps {
    ticket: TicketProps;
    customer: CustomerProps | null;
}

export function TicketItem({ customer, ticket }: TicketItemProps) {
    const router = useRouter()
    const { handleModalVisible, setDetailTicket } = useContext(ModalContext)

    async function handleChangeStatus() {
        try {

            const response = await api.patch("/api/ticket", {
                id: ticket.id,
            })

            router.refresh()

        } catch (error) {
            console.log(error)
        }
    }

    function handleOpenModal() {
        handleModalVisible();
        setDetailTicket({
            customer: customer,
            ticket: ticket
        })
    }


    return (
        <>
            <tr className="border-b-2 border-b-slate-200 h-16 last:border-b-0 bg-slate-100 hover:bg-gray-200 duration-300">
                <td className="text-left pl-2">
                    {customer?.name}
                </td>
                <td className="text-left hidden sm:table-cell">
                    {ticket.created_at?.toLocaleDateString("pt-br")}
                </td>
                <td className="text-left">
                    <span className="bg-green-500 px-2 py-1 rounded-lg ">{ticket.status}</span>
                </td>
                <td className="text-left">
                    <button className="mr-2" onClick={handleChangeStatus}>
                        <FiCheckSquare size={24} className="text-gray-900" />
                    </button>
                    <button onClick={handleOpenModal}>
                        <FiFile size={24} className="text-blue-600" />
                    </button>
                </td>

            </tr>
        </>
    )
}