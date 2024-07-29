export function CardCustomer() {
    return (
        <article className="flex flex-col bg-gray-100/50 border-2 p-2 rounded-lg gap-2 hover:bg-gray-100 duration-300">
            <h2>
                <a className="font-bold">Nome:</a> Mercado Silva
            </h2>
            <p><a className="font-bold">Email:</a> teste@teste.com</p>
            <p><a className="font-bold">Telefone:</a> XX9999-9999</p>
            <button className="bg-red-600 text-white px-4 rounded mt-2 self-start">
                Deletar
            </button>
        </article>
    )
}