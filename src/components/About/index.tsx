import "./style.css";
function About() {
  return (
    <section id="section-about" className="box-default">
      <div>
        <h3 className="h3-default">Sobre a Tech Conference 2024</h3>
        <p className="p-default">
          A Tech Conference 2024 é um evento anual que reúne os principais nomes
          da indústria de tecnologia para compartilhar conhecimentos, discutir
          as últimas tendências e explorar as inovações que estão moldando o
          futuro.
        </p>

        <h3 className="h3-default">Objetivos</h3>
        <ul className="p-default">
          <p>
            Promover a troca de conhecimentos entre profissionais da área de
            tecnologia. Apresentar as últimas tendências e inovações
            tecnológicas. Oferecer oportunidades de networking para os
            participantes.
          </p>
        </ul>

        <h3 className="h3-default">Público-Alvo</h3>
        <p className="p-default">
          A conferência é destinada a desenvolvedores, engenheiros de software,
          cientistas de dados, profissionais de TI, estudantes de tecnologia e
          qualquer pessoa interessada nas últimas tendências e inovações
          tecnológicas.
        </p>
      </div>
    </section>
  );
}

export default About;
