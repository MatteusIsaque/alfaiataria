import { WhatsappLogo } from "phosphor-react";
import Img from "./img/ALFAIATARIA gotino.jpg";
import Img2 from "./img/ALFAIATARIA henri.jpg";
import Img7 from "./img/client.jpg";
import Img6 from "./img/doutor.jpg";
import Img3 from "./img/IMG_2780.jpg";
import Img4 from "./img/IMG_9348_politico.jpg";
import Img5 from "./img/WhatsApp_Image.jpg";
import Image8 from "./img/roupa.jpg";

import carla from "./img/carla.jpg";

export function App() {
  return (
    <main>
      <div
        id="main-background"
        className="min-h-screen h-full w-full mobile:min-h-[90vh]"
      >
        <div className="flex flex-col justify-center items-start h-screen ml-[10%] max-w-[750px] mobile:h-[80vh] mobile:mx-[5%]  mobile:flex mobile:justify-center mobile:items-center">
          <h1 className="text-7xl font-semibold text-start text-white mobile:text-5xl mobile:text-center mobile:leading-[55px]">
            Roupas sob medida para pessoas modernas
          </h1>
          <a href="https://wa.me/5511983462226?text=Ol%C3%A1%21+Estou+interessado%28a%29+em+saber+mais+sobre+os+seus+servi%C3%A7os+de+alfaiataria.+Voc%C3%AA+pode+me+ajudar%3F ">
            <button className="border rounded-xl text-white flex justify-center items-center gap-2 text-xl px-10 py-2 mt-6 bg-[#199347] font-medium hover:bg-[#116631] transition-all mobile:w-full">
              <WhatsappLogo size={24} /> Falar com atendente
            </button>
          </a>
        </div>
      </div>

      <div className="min-h-screen h-full flex justify-center flex-col px-[15%] mobile:px-[5%]">
        <div className="flex justify-center items-center flex-col text-center mb-12 mt-10">
          <h2 className="text-4xl font-semibold mb-4 mobile:text-2xl">
            Excelência Tradicional: O Compromisso da
            <br /> Carla Siqueira Alfaiataria
          </h2>
          <p>
            Na Carla Siqueira Alfaiataria, nossa longa experiência e compromisso
            com a qualidade nos destacam como uma das marcas líderes no mercado
            de alfaiataria. Dedicamo-nos a oferecer um atendimento personalizado
            que respeita as preferências de cada cliente, garantindo que nossos
            produtos alcancem aqueles que verdadeiramente apreciam a excelência
            e o profissionalismo tradicionais. Com um foco contínuo em qualidade
            e satisfação, trabalhamos para atender e superar as expectativas dos
            nossos clientes, sempre com elegância e precisão.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 mobile:grid-cols-2">
          <div>
            <img src={Img} />
          </div>
          <div>
            <img src={Img2} />
          </div>
          <div>
            <img src={Img3} />
          </div>
          <div>
            <img src={Img4} />
          </div>
          <div>
            <img src={Img5} />
          </div>
          <div>
            <img src={Img6} />
          </div>
          <div>
            <img src={Img7} />
          </div>
          <div>
            <img src={Image8} />
          </div>
        </div>
      </div>


      <div className="flex items-center justify-center  mobile:mt-0 mx-[5%]">
        <a href="https://wa.me/5511983462226?text=Ol%C3%A1%21+Estou+interessado%28a%29+em+saber+mais+sobre+os+seus+servi%C3%A7os+de+alfaiataria.+Voc%C3%AA+pode+me+ajudar%3F ">
          <button className="border rounded-xl text-white flex justify-center items-center gap-2 text-xl px-10 py-2 mt-6 bg-[#199347] font-medium hover:bg-[#116631] transition-all mobile:w-full">
            <WhatsappLogo size={24} /> Falar com atendente
          </button>
        </a>
      </div>

      <div className="mx-[15%] mt-20 mobile:mx-[5%]">
        <h3 className="text-3xl font-bold">
          POR QUE ESCOLHER A CARLA SIQUEIRA ALFAIATARIA?{" "}
        </h3>
        <p>
          Aqui na Carla Siqueira Alfaiataria, acreditamos que roupas em
          Alfaiataria Sob Medida não é apenas uma vestimenta, mas uma extensão
          da sua identidade e um reflexo da sua sofisticação. Descubra os
          motivos pelos quais nossos clientes escolhem nossos serviços
          repetidamente:
        </p>

        <div className="grid grid-cols-3 gap-y-10 gap-x-10 mt-8 mobile:grid-cols-2">
          <div>
            <h4>Personalização Exclusiva</h4>
            <p>
              Cada peça é exclusivamente para você, permitindo a seleção de
              tecidos, estilos, cortes e detalhes que capturam sua personalidade
              e preferências únicas.
            </p>
          </div>

          <div>
            <h4>Ajuste Impecável</h4>
            <p>
              Com medições precisas e ajustes detalhados, asseguramos que cada
              peça tenha um caimento perfeito, oferecendo conforto e elegância
              em qualquer situação.
            </p>
          </div>

          <div>
            <h4>Materiais de Qualidade</h4>
            <p>
              Selecionamos nossos tecidos com rigor para assegurar qualidade,
              durabilidade e conforto. Com uma ampla variedade de opções, desde
              clássicos até os mais modernos, temos o tecido ideal para cada
              necessidade.
            </p>
          </div>

          <div>
            <h4>Compromisso com a Satisfação</h4>
            <p>
              Nosso objetivo é a sua completa satisfação. Se algo não estiver
              conforme suas expectativas, estamos prontos para fazer os ajustes
              necessários até que você esteja completamente satisfeito.
            </p>
          </div>

          <div>
            <h4>Processo Conveniente e Eficiente</h4>
            <p>
              Desde a visita inicial até a entrega final, todo o processo é
              projetado para ser o mais conveniente possível, oferecendo
              atendimento personalizado no nosso ateliê ou se preferir vamos até
              você.
            </p>
          </div>

          <div>
            <h4>Personalização Exclusiva</h4>
            <p>
              Cada peça é exclusivamente para você, permitindo a seleção de
              tecidos, estilos, cortes e detalhes que capturam sua personalidade
              e preferências únicas.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 mx-[15%] gap-10 mt-20 mobile:grid-cols-1 mobile:mx-[5%]">
        <div>
          <img src={carla} alt="Imagem" />
        </div>
        <div className="col-span-2 flex justify-center flex-col">
          <h3 className="text-3xl font-bold">
            Carla Siqueira: Elegância Sob Medida
          </h3>
          <p>
            Carla Siqueira é uma empreendedora e consultora de imagem com uma
            paixão por moda. Após 26 anos no mercado financeiro, ela reinventou
            sua carreira e fundou a Carla Siqueira Alfaiataria, especializada em
            camisas sob medida para homens. Com um olhar detalhista e feminino,
            Carla oferece não apenas roupas de alta qualidade, mas também
            consultoria de imagem abrangendo visagismo e comportamento. Ela se
            dedica a atender profissionais que dependem da própria imagem e
            pessoas que buscam se destacar pela aparência e elegância, fazendo
            da Carla Siqueira Alfaiataria um símbolo de sofisticação e estilo.
          </p>
        </div>
      </div>
    </main>
  );
}
