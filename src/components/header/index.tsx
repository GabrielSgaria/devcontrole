'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FiLoader, FiLock, FiLogOut, FiUser } from "react-icons/fi";

export function Header() {
    const { status, data } = useSession();

    async function handleLogin() {
        await signIn();
    }

    async function handleLogout() {
        await signOut()
    }

    return (
        <header className="w-full flex items-center px-2 py-4 bg-zinc-50 h-20 shadow-md">
            <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
                <Link href='/'>
                    <h1 className="font-bold text-2xl pl-1 uppercase">
                        <span className="text-blue-500">Sgaria </span>
                        Controler
                    </h1>
                </Link>

                {status === 'loading' && (
                    <button onClick={handleLogout}>
                        <FiLoader size={26} className="text-zinc-600 animate-spin" />
                    </button>
                )}

                {status === 'unauthenticated' && (
                    <button onClick={handleLogin}>
                        <FiLock size={26} className="text-zinc-600" />
                    </button>
                )}


                {status === 'authenticated' && (
                    <div className="flex items-baseline gap-4">
                        <Link href='/dashboard' >
                            <FiUser size={26} className="text-zinc-600" />
                        </Link>

                        <button onClick={handleLogout}>
                            <FiLogOut size={26} className="text-red-600" />
                        </button>
                    </div>
                )}
            </div>
        </header>
    )
}