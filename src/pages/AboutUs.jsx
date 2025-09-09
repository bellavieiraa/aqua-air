export function AboutUs() {
    const team = [
        { name: "Ana Carolina", instagram: "https://www.instagram.com/anagevulski/?igsh=MXdxaWhmamE1ZWF3aQ%3D%3D#", linkedin: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFxJPsgkq5ccgAAAZktPdjgKKHEzjli-MOxI2yqJutnKfvmLSnRmEpJbNPISmWoPNUvciV5mO4KDCV9ylx7zqIN2JlKvRMHQWSfqCb6PVGsSjyomUZ9jel3znmrPI23qLcjrPo=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fana-carolina-gevulski-3b10bb339%2F" },
        { name: "Eduardo França", instagram: "https://www.instagram.com/eduardo_frans18/?igsh=MW95Y2tteGZzazA4Nw%3D%3D#", linkedin: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEXQRHcKQNxhgAAAZktPh8wX7lsN2mse_cEBBb6XWdedfn6CD3ImAmSjs6sQTVdfffJMFUFc3k2K8W55KD585J_d2J-GAvoH_FlhvEWp35kJzwVih2ZX0NPRVG27huex4l3P1E=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Feduardo-fran%25C3%25A7a-119a2731b%2F" },
        { name: "Gustavo Monteiro", instagram: "https://www.instagram.com/gustaxmr77/?igsh=MXIwZHZkN3VlM2UwZA%3D%3D#", linkedin: "https://www.linkedin.com/in/gustavo-monteiro-541114297/" },
        { name: "Isabella Vieira", instagram: "https://www.instagram.com/bella.who_/?igsh=MTB4NWw5OXVicm4yaA%3D%3D#", linkedin: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQERAwAuT1ww5QAAAZktQO3wpuGfHYFl0lau3bFR_EL00fUbdbEhNdkMeSFYRYNL0d75uKtxxEYbZrA2hBG1O-Rz89E2g7GoHt1O7ToXUYvoxe4sshOplpbj3-VQkGRxTvG76Do=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fisabella-sousa-vieira-590101339%2F" },
        { name: "Isaac Imlau", instagram: "https://www.instagram.com/isaac.imlau7/?igsh=b2pqdXpobDJ3N3hm#", linkedin: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEEBgqvghLGLgAAAZktP-g4wbImdTc55N87mlM7rRorIsFewbyFgRkECk0xl7zq3SVoKVJXrSGZ_KnNj3U-f73fXgVZ_6QxPKokyoF_lQTcxydRNFCEDm5PT4rt4CIrY6Fo07I=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fisaac-gabriel-266102339%2F" }
    ];

    return (
        <div className="p-8 min-h-screen text-gray-800 dark:text-white">
            <h1 className="text-5xl font-bold text-center mb-16 text-azulet dark:text-white">CONTATO</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center mb-16">
                {team.map((member, index) => (
                    <div key={index} className=" bg-[#32789E] dark:bg-[#023756] border-2 dark:border-black border-[#023756] rounded-3xl shadow-lg p-6 text-center w-full max-w-xs transform hover:scale-105 transition-transform duration-300">
                        <h2 className="text-xl font-bold text-white dark:text-azulct mb-4">{member.name}</h2>
                        <div className="w-24 h-24 bg-azulct/80 rounded-full mx-auto mb-4 flex items-center justify-center">
        
                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        </div>
                        <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="block text-white dark:text-azulct hover:underline">Instagram</a>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="block text-white dark:text-azulct hover:underline">LinkedIn</a>
                    </div>
                ))}
            </div>

            <div className="bg-cyan-500/80 dark:bg-cyan-700/80 p-8 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0 text-white dark:text-gray-200">
                    <h2 className="text-3xl font-bold mb-4">Formulário de contato</h2>
                    <p className="text-lg">
                        Tem alguma dúvida, sugestão ou gostaria de conversar com a nossa equipe?
                        Estamos aqui para ajudar você! Preencha o formulário ao lado com suas informações e sua mensagem.
                    </p>
                </div>
                <div className="w-full md:w-1/2 md:pl-8">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-white text-sm font-bold mb-2">E-mail:</label>
                            <input type="email" id="email" className="shadow appearance-none border-none rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white/90" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-white text-sm font-bold mb-2">Mensagem:</label>
                            <textarea id="message" rows="4" className="shadow appearance-none border-none rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white/90"></textarea>
                        </div>
                        <div className="flex items-center justify-end">
                            <button className="bg-azulet hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-xl focus:outline-none focus:shadow-outline" type="button">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
