import "./style.css";
function Hero() {
  return (
    <section id="section-hero" className="box-default">
      <div>
        <h3 className="h3-default">
          Bem-vindo ao Evento XYZ - Onde o Futuro da Tecnologia é Agora!
        </h3>
        <p className="p-default">
          Prepare-se para mergulhar em um mundo de inovação no Evento XYZ. Este
          evento anual reúne os maiores nomes da tecnologia, as mentes mais
          brilhantes e os entusiastas mais apaixonados para explorar o que o
          futuro nos reserva.
        </p>

        <img
          src="src\assets\_53402b81-426a-4b6f-8436-98552b1ba94f.jpg"
          alt=""
        />

        <h3 className="h3-default">O Que Esperar:</h3>

        <li className="p-default">
          Palestras Inspiradoras: Ouça as histórias de sucesso, os fracassos
          transformadores e as visões futuristas de nossos palestrantes
          renomados.
        </li>
        <img src="src\assets\Tipos-de-palestras.jpg" alt="palestras" />
        <li className="p-default">
          Workshops Interativos: Participe de sessões práticas onde você pode
          aprender novas habilidades, experimentar tecnologias emergentes e
          colaborar em projetos inovadores.
        </li>
        <img
          src="src\assets\_76c434e2-5342-40c9-9812-d68559b042d3.jpg"
          alt=""
        />
        <li className="p-default">
          Demonstrações Tecnológicas: Experimente em primeira mão os produtos e
          soluções que estão moldando o amanhã.
        </li>
        <img src="src\assets\Fujitsu-Innovation-Gathering.jpg" alt="" />
        <li className="p-default">
          Networking: Conecte-se com colegas, faça novos contatos e troque
          ideias em nossas sessões de networking estruturadas.
        </li>
        <img
          src="src\assets\xnetworking-principal.jpg.pagespeed.ic.9VUzezb3m2.webp"
          alt=""
        />

        <h3 className="h3-default">Palestrantes Principais: </h3>
        <ul className="p-default">
          <li>Jane Doe - CEO da Tech Innovators</li>
          <li>John Smith - Diretor de Pesquisa em IA da Global Tech</li>
          <li>Maria Silva - Especialista em Cibersegurança da SecureNet</li>
          <li>
            Dr. João Silva - Um pioneiro em inteligência artificial e
            aprendizado de máquina
          </li>
          <li>
            Eng. Maria Costa - Líder em inovação em tecnologias sustentáveis.
          </li>
        </ul>

        <h3 className="h3-default">Localização</h3>
        <p className="p-default">
          A Tech Conference 2024 será realizada no Centro de Convenções de São
          Paulo, localizado no coração da cidade, com fácil acesso a hotéis,
          restaurantes e atrações turísticas.
        </p>
        <p className="p-default">
          Endereço: Av. Paulista, 1234, São Paulo - SP, 01310-100
        </p>
        {/* <img
          src="src\assets\Captura de tela 2024-06-17 190002.png"
          alt="Localização Evento"
        /> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1402500865593!2d-46.65633242378789!3d-23.563405861668908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8884adb63%3A0x16728097a6799f4d!2sAv.%20Paulista%2C%201234%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1718753531016!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{border:"0", borderRadius:"2rem"}}
          loading="lazy"
        ></iframe>

        <h3 className="h3-default">Data e Horário</h3>
        <p className="p-default">Data: 12 a 14 de agosto de 2024</p>
        <p className="p-default">Horário: 8:00 - 19:00</p>

        <h3 className="h3-default">Agenda Detalhada:</h3>
        <li className="p-default">
          08:00 - 09:00: Credenciamento e café da manhã de boas-vindas
        </li>
        <li className="p-default">
          09:00 - 12:00: Sessão de abertura e palestras matinais
        </li>
        <li className="p-default">
          12:00 - 13:30: Almoço e tempo para networking
        </li>
        <li className="p-default">
          13:30 - 17:30: Workshops e painéis de discussão
        </li>
        <li className="p-default">
          17:30 - 19:00: Happy hour e encerramento do primeiro dia
        </li>

        <p className="p-defaultt">
          Registre-se agora! Garanta seu lugar nesse evento imperdível.
        </p>

        <p className="p-defaultt">
          Junte-se a nós no Evento XYZ para uma jornada rumo ao futuro da
          tecnologia!
        </p>

        <p className="p-defaultt">
          Informações Adicionais: Para saber mais sobre acomodações, transporte
          ou outras questões, visite nossa seção FAQ ou entre em contato conosco
          diretamente aqui em baixo.
        </p>
      </div>
    </section>
  );
}

export default Hero;
