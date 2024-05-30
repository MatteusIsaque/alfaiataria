import Img1 from "./img/0367968c-3cfd-41c2-a8d8-9e849b9b9f42.jpg";
import Img2 from "./img/1009d456-2334-4e7a-900a-8c96a7abbd22-1.jpg";
import Img3 from "./img/33864f4e-a52a-4d2a-acd8-3d03892b24fa.jpg";
import Img4 from "./img/5dccc955-5996-4134-8eed-113d16305298.jpg";
import Img5 from "./img/5f41c040-140c-4368-bfeb-33e3a6982de6.jpg";
import Img6 from "./img/6a3a5d82-3280-45c6-a2f4-d835db6f7dae.jpg";
import Img7 from "./img/8b8391d8-6883-4249-a2a2-70ed7095e5c2.jpg";
import Img8 from "./img/IMG_2571.jpg";
import Img9 from "./img/IMG_3428.jpg";
import Img10 from "./img/IMG_7859.jpg";
import Img11 from "./img/IMG_8267.jpg";
import Img12 from "./img/a3aced40-6d3b-4b0a-9366-76610134c86f.jpg";

export function App() {
  return (
    <main>
      <div id="main-background" className="min-h-screen h-full w-full ">
        <div className="flex flex-col justify-center items-start h-screen ml-[10%] max-w-[750px]">
          <h1 className="text-7xl font-semibold text-start text-white">
            Ternos sob medida para homens modernos
          </h1>
        </div>
      </div>

      <div className="min-h-screen h-full flex justify-center flex-col px-[15%]">
        <div className="flex justify-center items-center flex-col text-center mb-12 mt-10">
          <h2 className="text-4xl font-semibold mb-4">
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
        <div className="grid grid-cols-4 gap-4">
          <div>
            <img src={Img1} />
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
            <img src={Img8} />
          </div>
          <div>
            <img src={Img9} />
          </div>
          <div>
            <img src={Img10} />
          </div>
          <div>
            <img src={Img11} />
          </div>
          <div>
            <img src={Img12} />
          </div>
        </div>
      </div>
    </main>
  );
}
