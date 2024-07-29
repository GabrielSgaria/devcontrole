import { Container } from "@/components/container";
import Link from "next/link";

export function DashboardHeader(){
    return(
        <Container>
            <header className="w-full bg-gray-900 my-4 p-3 rounded-xl flex gap-3 items-center">
                <Link href="/dashboard" className="text-zinc-50 hover:font-semibold duration-300 ">
                    Chamados
                </Link>
                <Link href="/dashboard/customer" className="text-zinc-50 hover:font-semibold duration-300">
                    Clientes
                </Link>
            </header>
        </Container>
    )
}