import solonda from '../assets/solonda.png';

export function Manual() {
    return (
        <div className="relative h-full flex flex-col p-8 ">
            <div className="flex items-center mb-4  text-azulet dark:text-azulct">
                <div>
                    <h1 className="text-5xl font-bold">MANUAL</h1>
                    <h2 className="text-2xl font-bold">UMIDIFICADOR E PURIFICADOR SOLAR SUSTENTAVEL</h2>
                </div>
            </div>

            <div className="border-t-2 border-black dark:border-white my-4"></div>

            <div className="mb-8">
                <h3 className="text-3xl font-bold mb-2  text-azulet dark:text-azulct">SOBRE O PROJETO:</h3>
                <p className="text-lg font-semibold dark:text-white">
                    Este manual apresenta o funcionamento e montagem de um filtro purificador solar, criado com foco em comunidades que enfrentam escassez de agua potavel. Utiliza energia solar para aquecimento e esterilizacao da agua.
                </p>
            </div>

            <div className="border-t-2 border-black dark:border-white my-4"></div>

            <div className="grid grid-cols-2 gap-x-8 text-azulet dark:text-azulct">
         
                <div className="flex flex-col gap-y-4">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Passo 1:</h2>
                        <p className='text-black dark:text-white'><lorem>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</lorem></p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Passo 2:</h2>
                        <p className='text-black dark:text-white'><lorem>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</lorem></p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Passo 3:</h2>
                        <p className='text-black dark:text-white'><lorem>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</lorem></p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Passo 4:</h2>
                        <p className='text-black dark:text-white'><lorem>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</lorem></p>
                    </div>
                </div>

                <div className="flex flex-col gap-y-4">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Passo 5:</h2>
                        <p className='text-black dark:text-white'><lorem>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</lorem></p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Passo 6:</h2>
                        <p className='text-black dark:text-white'><lorem>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</lorem></p>
                    </div>
                </div>
            </div>

            <img
                className="absolute bottom-[15%] right-0 w-[20%] h-[25%]"
                src={solonda}
                alt="Imagem de onda no fundo"
            />
        </div>
    );
}