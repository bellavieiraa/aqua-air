import solonda from '../assets/solonda.png';


export function Home() {
    return (
    
            <div className="relative h-full flex flex-col">
                <img
                    className="absolute bottom-1/3 right-0 w-1/2 h-[80%] "
                    src={solonda}
                    alt="Imagem de onda no fundo"
                />

                <div className="absolute z-10  md:p-8 flex flex-col h-full">
                    <div className="flex-grow">
                        <h1 className="text-azulet dark:text-azulct text-5xl md:text-8xl font-bold font-['Inter'] leading-snug ">
                            Umidificador para <br /> regiões secas
                        </h1>
                        <h2 className=" text-xl md:text-3xl font-bold dark:text-white font-['Inter'] mt-8 ">
                            AquaAir oferece uma solução inovadora para <br />
                            fornecer umidificação acessivel e sustentável <br /> às regiões secas e carentes.
                        </h2>
                        <button className="w-56 h-14 bg-[#32789E] rounded-2xl border border-slate-900 text-white dark:text-black font-bold text-xl mt-10">
                            Baixar o app
                        </button>
                    </div>

                    <div className=" w-full absolute flex flex-row mt-10 z-0 justify-between bottom-[15%] gap-x-6">
                        <div className="w-1/3">
                            <h3 className="text-azulet dark:text-azulct text-4xl font-bold font-['Inter']">Diferencial do Projeto</h3>
                            <p className=" text-2xl font-semibold dark:text-white font-['Inter']">Combina tecnologia com práticas ecologicamente responsaveis</p>
                        </div>
                        <div className="w-1/3">
                            <h3 className="text-azulet dark:text-azulct text-4xl font-bold font-['Inter']">Publico-Alvo</h3>
                            <p className=" text-2xl font-semibold dark:text-white font-['Inter']">Comunidades em áreas secas com dificuldade de acesso à água e energia.</p>
                        </div>
                        <div className="w-1/3">
                            <h3 className="text-azulet dark:text-azulct text-4xl font-bold font-['Inter']">Objetivo</h3>
                            <p className=" text-2xl font-semibold dark:text-white font-['Inter']">Usar energia solar e água reutilizada para umidificar ambientes.</p>
                        </div>
                    </div>
                </div>
            </div>

    );
}
