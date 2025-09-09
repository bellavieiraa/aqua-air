export function References() {
    const references = [
        {
            title: "MÉTODOS DE BAIXO CUSTO PARA PURIFICAÇÃO DE REAGENTES E CONTROLE DA CONTAMINAÇÃO PARA A DETERMINAÇÃO DE METAIS TRAÇOS EM ÁGUAS NATURAIS",
            link:"https://www.scielo.br/j/qn/a/pvmfGhz8FMjd4LmvLwhkR3k/?format=pdf&lang=pt"
        },
        {
            title: "AVALIAÇÃO PRELIMINAR DO DESEMPENHO DE UM DESTILADOR SOLAR PIRAMIDAL PARA PRODUÇÃO DE ÁGUA PARA CONSUMO HUMANO",
            link: "https://ojs.ufgd.edu.br/rbclima/article/view/14769"
        },
        {
            title: "APLICAÇÃO DA DESTILAÇÃO SOLAR NA POTABILIZAÇÃO DE ÁGUAS CONTAMINADAS",
            link: "https://rsdjournal.org/index.php/rsd/article/view/19644"
        },
        {
            title: "DIFERENTES TIPOS DE DESTILADORES SOLAR PARA POTABILIZAÇÃO DE ÁGUAS CONTAMINADAS",
            link: "https://www.editorarealize.com.br/editora/anais/conapesc/2020/TRABALHO_EV138_MD4_SA23_ID1062_09112020180037.pdf"
        },
        {
            title: "CLIMA E SAÚDE: VARIAÇÕES ATMOSFÉRICAS E ÓBITOS POR DOENÇAS CIRCULATÓRIAS",
            link: "https://revistas.ufpr.br/revistaabclima/article/view/25588"
        }
    ];

    return (
        <div className="p-8 min-h-screen">
            <h1 className="text-5xl font-bold text-center mb-16 text-azulet dark:text-azulct">REFERÊNCIAS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
                {references.map((ref, index) => (
                    <div key={index} className="bg-white dark:bg-[#4000B74F] rounded-3xl shadow-xl p-8 max-w-sm flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                        <a href={ref.link} target="_blank" rel="noopener noreferrer" className="text-center font-bold text-lg text-azulet dark:text-azulct hover:underline">
                            {ref.title}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}