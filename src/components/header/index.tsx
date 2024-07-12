import Link from "next/link";
import { FiLogOut, FiUser } from "react-icons/fi";

export function Header() {
    return (
        <header className="w-full flex items-center px-2 py-4 bg-zinc-50 h-20 shadow-md">
            <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
                <Link href='/'>
                    <h1 className="font-bold text-2xl pl-1 uppercase">
                        <span className="text-blue-500">Sgaria </span>
                        Controler
                    </h1>
                </Link>
                <div className="flex items-baseline gap-4">
                    <Link href='/dashboard' >
                        <FiUser size={26} className="text-zinc-600" />
                    </Link>

                    <button>
                        <FiLogOut size={26} className="text-zinc-600" />
                    </button>
                </div>
            </div>
        </header>
    )
}