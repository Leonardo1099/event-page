import "./style.css";

function Contact() {
  return (
    <section id="section-contact">
      <div>
        <h3 className="h3-default">Entre em Contato Conosco</h3>
        <p className="p-default">
          Temos uma equipe dedicada pronta para responder a todas as suas
          perguntas sobre o Evento XYZ. Seja você um participante, palestrante,
          patrocinador ou membro da imprensa, estamos aqui para ajudar.
        </p>

        <form action="submit">
          <fieldset className="fieldset-form">
            <label htmlFor="name">Nome:</label>
            <input
              name="name"
              type="text"
            />
          </fieldset>

          <fieldset className="fieldset-form">
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              type="text"
            />
          </fieldset>

          <fieldset className="fieldset-form">
            <label htmlFor="tel">Telefone:</label>
            <input
              name="tel"
              type="number"
            />
          </fieldset>

          <button className="button-default" type="submit">Enviar</button>
        </form>

        <h3 className="h2-default">Nossos Canais de Comunicação:</h3>

        <li className="p-default" >
          Email: <a style={{textDecoration: "none", color: "white"}} href="mailto:contato@eventoxyz.com">contato@eventoxyz.com</a>
          <li>Telefone: +55 (27) 1234-5678</li>
          <li>WhatsApp: +55 (27) 91234-5678</li>
        </li>

        <p className="p-default">
          Endereço para Correspondência: Evento XYZ Rua da Inovação, 100,
          Campinas - SP Brasil
        </p>

        <p className="p-default">
          Horário de Atendimento: Segunda a Sexta: 9h às 18:30h Sábado: 9h às
          12h
        </p>

        <h3 className="h2-default">Redes Sociais:</h3>
        <p className="p-default">
          Siga-nos nas redes sociais para atualizações em tempo real e
          informações exclusivas.
        </p>

        <div>
          <li className="p-default">
            Facebook: evento_xyz
            <li>Twitter: XYZEVENTOS</li>
            <li>Instagram: Eventos-XYZ</li>
            <li>LinkedIn: Eventos-XYZ</li>
          </li>
        </div>

        <p className="p-defaultt">
          Agradecemos seu interesse no Evento XYZ e esperamos vê-lo em breve!
        </p>
      </div>
    </section>
  );
}

export default Contact;
