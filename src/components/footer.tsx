import Whatsapp from "./../img/whatsapp.png";

export function Footer() {
  return (
    <footer className="text-center w-full flex justify-center items-center h-10 bg-[#111316] text-white mt-20 mobile:text-[10px]">
      <a
        className="fixed bottom-10 right-10 w-20 cursor-pointer"
        href="https://wa.me/5511983462226?text=Ol%C3%A1%21+Estou+interessado%28a%29+em+saber+mais+sobre+os+seus+servi%C3%A7os+de+alfaiataria.+Voc%C3%AA+pode+me+ajudar%3F "
      >
        <img src={Whatsapp} alt="logo do aplicativo whatsapp" />
      </a>
      Endereço: R. Barão do Triunfo, 394 - Sala 1 - Brooklin, São Paulo - SP,
      04602-000
    </footer>
  );
}
