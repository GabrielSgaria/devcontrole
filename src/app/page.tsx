import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center flex-col justify-center min-h-[calc(100vh-80px)]">
      <h2 className="font-medium text-2xl mb-2">Gerencie a sua empresa</h2>
      <h1 className="font-bold text-3xl mb-8 text-blue-600 md:text-4xl">Atendimentos, clientes</h1>
      <Image
        src='/image/2.png'
        alt="Imagem logo Sgaria"
        quality={100}
        priority={true}
        width={600}
        height={600}
        className="max-w-sm md:max-w-lg"
      />

    </main>
  );
}
