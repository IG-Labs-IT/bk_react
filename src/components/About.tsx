
const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Nós</h2>
          <div className="h-1 w-24 bg-gold mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 space-y-6 order-2 md:order-1">
            <h3 className="text-2xl font-semibold">
              <span className="text-gold">Vox88</span>
            </h3>
            <p className="text-foreground/80">
            A Vox88 é uma empresa de comunicação. Fundada por sócios pretos e com uma equipe majoritariamente preta, somos uma plataforma de mídia e conteúdo dedicada ao protagonismo negro. Nosso compromisso é entregar informação, arte, publicidade e jornalismo que elevem a representatividade e potência preta.
            </p>
            <p className="text-foreground/80">
            Nosso propósito é dar voz às narrativas ignoradas pela mídia tradicional, promovendo autoestima, cultura e transformação social por meio da comunicação.
            </p>
            <p className="text-foreground/80">
            Oferecemos uma programação com conteúdos originais e curadoria editorial que celebram nossa cultura. Em breve, ampliaremos nossa atuação como agência de publicidade, gestão de talentos, festivais e mais.
            </p>
          </div>
          
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded-md"></div>
              <img
                src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                alt="Nossa equipe trabalhando"
                className="w-full h-auto rounded-md object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: "Titulo",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              ),
              description: "Onde você estava em 13 de maio de 1888?"
            },
            {
              title: "",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              ),
              description: '"Que preto seja sinônimo de glória" – Beyoncé Knowles-Carter'
            },
            {
              title: "",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              ),
              description: "13 de maio 1988: a liberdade conquistada, a luta que continua."
            }
          ].map((item, index) => (
            <div key={index} className="bg-graphite-dark p-6 rounded-md border border-gold/20 hover:border-gold/40 transition-all">
              <div className="text-gold mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
