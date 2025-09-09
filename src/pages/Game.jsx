import jogo from '../assets/jogo.png';
import game from '../assets/game.png';

export function Game() {
  return (
    <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
            <img src={jogo} alt="Vapores da Esperança" className="mx-auto" />
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
          <div className="text-black dark:text-gray-200 text-lg">
            <p className="mb-4">
              No ano de 2187, a Terra agoniza — oceanos sumiram, rios secaram, e a chuva virou lenda. Nas sombras do colapso, surge uma última esperança: o Umidificador Global, criado por um gênio desaparecido e espalhado em cinco biomas hostis. Agora, cinco heróis improváveis partem em uma missão desesperada para reunir as peças, ativar a máquina e mudar o destino do planeta.
            </p>
            <p className="mb-6">
              A água é vida. E a vida está por um fio. Você está pronto para fazer chover?
            </p>
            <button className="bg-azule dark:bg-azulc hover:bg-[#548c8b] text-white dark:text-azulet font-bold py-3 px-10 rounded-2xl text-xl">
              Jogar
            </button>
          </div>

          <div className="mt-8 md:mt-0">
            <div className="bg-azule  dark:bg-azulc rounded-lg p-2 border-2 border-azulc dark:border-azule">
              <img src={game} alt="Gameplay" className="rounded-lg w-full" />
              <div className="flex items-center mt-2 text-white dark:text-black text-sm px-2">
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                <div className="w-full bg-gray-500 rounded-full h-1.5 mx-4">
                  <div className="bg-white dark:bg-black h-1.5 rounded-full" style={{ width: '10%' }}></div>
                </div>
                <div className="">0:40</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
