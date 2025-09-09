import solonda from '../assets/solonda.png';

export function Home() {
    return (
        <div className="relative">
            <div className="p-6">
                <h1 className="w-[725px] h-44 justify-center text-cyan-700 text-7xl font-semibold font-['Inter'] leading-[83.52px]m-6">Umidificador <br/> para regiões secas</h1>

                <h2 className="w-[625px] h-32 justify-center text-teal-950 text-2xl font-bold font-['Inter'] leading-10">AquaAir oferece uma soluçăo inovadora para <br/>
                fornecer umidificação acessivel e sustentável <br/> às regiões secas e carentes.</h2>

                <button className="w-56 h-14 bg-[#32789E] rounded-2xl border border-slate-900 text-white font-bold text-xl mt-10">Baixar o app</button>
            </div>
            <img className="absolute bottom-0 right-0 w-17" src={solonda} alt="solonda" />
        </div>
    )

}
