import esp from '../assets/componentes/esp.png';
import disco from '../assets/componentes/disco.png';
import sensor from '../assets/componentes/sensor.png';
import sensornivel from '../assets/componentes/sensornivel.png';
import rele from '../assets/componentes/rele.png';
import mini from '../assets/componentes/mini.png';
import painel from '../assets/componentes/painel.png';

export function Product() {
  const components = [
    { name: 'ESP32', icon: esp, price: 'R$ 30,00' },
    { name: 'Disco Cerâmico Ultrassônico', icon: disco, price: 'R$ 25,00' },
    { name: 'Sensor DHT22', icon: sensor, price: 'R$ 18,00' },
    { name: 'Sensor de Nível de Água', icon: sensornivel, price: 'R$ 12,00' },
    { name: 'Relé 5V', icon: rele, price: 'R$ 10,00' },
    { name: 'Mini Ventilador 5V', icon: mini, price: 'R$ 15,00' },
    { name: 'Painel Solar 6V', icon: painel, price: 'R$ 45,00' },
  ];

  const totalPrice = 'R$ 289,90';

  return (
    <div className="text-white container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-azulet dark:text-azulct">COMPONENTES DO UMIDIFICADOR</h1>
        <p className="text-xl text-azulet dark:text-azulct">Tecnologia limpa para um futuro sustentável</p>
      </div>

      <div className="bg-azule dark:bg-azule rounded-2xl p-6 mb-8">
        <div className="flex justify-between text-white text-lg font-semibold pb-4 border-b border-white-500">
          <span>Itens:</span>
          <span>Valor:</span>
        </div>
        <ul>
          {components.map((item) => (
            <li key={item.name} className="text-white text-bold flex items-center justify-between py-3 border-b border-white-700">
              <div className="flex items-center">
                <img src={item.icon} alt={item.name} className="w-8 h-8 mr-4" />
                <span>{item.name}</span>
              </div>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between text-lg font-semibold pt-4">
          <span>Valor Total:</span>
          <span>{totalPrice}</span>
        </div>
      </div>

      <div className="bg-azule rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-2">Resultado Final</h2>
        <p>
          O sistema é capaz de purificar e umidificar o ar de forma automatizada usando energia solar, proporcionando água limpa e o bem-estar em regiões precárias com um custo acessível e baixa manutenção.
        </p>
      </div>
    </div>
  );
}
