import solonda from '../assets/solonda.png';

export function Home() {
  return (
    <div className="md:grid md:grid-cols-2 items-center text-white pl-12 gap-8">
      <div>
        <h1 className="text-5xl md:text-6xl font-bold text-azulet dark:text-azulct leading-tight">
          Umidificador <br /> para regiões secas
        </h1>
        <p className="text-xl md:text-3xl font-bold text-black dark:text-white mt-8 ">
          AquaAir oferece uma solução inovadora para fornecer umidificação acessível e sustentável às regiões secas e carentes.
        </p>
        <button className="bg-azulet dark:bg-azulc dark:text-black text-white  font-bold py-3 px-10 rounded-lg mt-10 text-lg hover:bg-[#1e9a9a]">
          Baixar o app
        </button>

        <div className=" grid sm:grid-cols-3 gap-6 mt-12 bottom-[15%] gap-x-6">
          <div>
            <h3 className="text-azulet dark:text-azulct text-2xl font-bold ">Diferencial do Projeto</h3>
            <p className="text-xl font-semibold text-black dark:text-white ">
              Combina tecnologia com práticas ecologicamente responsaveis
            </p>
          </div>
          <div>
            <h3 className="text-azulet dark:text-azulct  text-2xl font-bold ">Publico-Alvo</h3>
            <p className="text-xl font-semibold text-black dark:text-white ">
              Comunidades em áreas secas com dificuldade de acesso à água e energia.
            </p>
          </div>
          <div>
            <h3 className="text-azulet dark:text-azulct text-2xl font-bold ">Objetivo</h3>
            <p className="text-xl font-semibold text-black dark:text-white ">
              Usar energia solar e água reutilizada para umidificar ambientes.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img src={solonda} alt="Imagem de onda no fundo" className="w-full h-auto" />
      </div>
    </div>
  );
}
