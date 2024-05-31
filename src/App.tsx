import { WhatsappLogo } from "phosphor-react";
import Img from "./img/ALFAIATARIA gotino.jpg";
import Img2 from "./img/ALFAIATARIA henri.jpg";
import Img7 from "./img/client.jpg";
import Img6 from "./img/doutor.jpg";
import Img3 from "./img/IMG_2780.jpg";
import Img4 from "./img/IMG_9348 politico.jpg";
import Img5 from "./img/WhatsApp Image 2024-05-16 at 19.26.03.jpeg.jpg";

export function App() {
  return (
    <main>
      <div
        id="main-background"
        className="min-h-screen h-full w-full mobile:min-h-[90vh]"
      >
        <div className="flex flex-col justify-center items-start h-screen ml-[10%] max-w-[750px] mobile:h-[80vh] mobile:mx-[5%]">
          <h1 className="text-7xl font-semibold text-start text-white mobile:text-5xl mobile:text-center mobile:leading-[55px]">
            Roupas sob medida para pessoas modernas
          </h1>
          <button className="border rounded-xl text-white flex justify-center items-center gap-2 text-xl px-10 py-2 mt-6 bg-[#199347] font-medium hover:bg-[#116631] transition-all mobile:w-full">
            <WhatsappLogo size={24} /> Falar com atendente
          </button>
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
        </div>
      </div>
    </main>
  );
}
