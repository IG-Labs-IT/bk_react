
const Mission = () => {
  return (
    <section id="mission" className="py-20 px-6 bg-gradient-to-b from-black to-graphite-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Missão e Valores</h2>
          <div className="h-1 w-24 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="bg-black/50 p-8 rounded-lg border border-gold/20">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="text-gold mr-3 text-3xl">01</span>
                <span>Missão</span>
              </h3>
              <p className="text-foreground/80">
              Inspirar, incentivar e transformar a vida de pessoas pretas por meio de conteúdos que as representem de forma real, profunda e valorizadas em toda sua pluralidade.
              </p>
              <p className="text-foreground/80 mt-4">
                
              </p>
            </div>
            
            <div className="bg-black/50 p-8 rounded-lg border border-gold/20">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="text-gold mr-3 text-3xl">02</span>
                <span>Visão</span>
              </h3>
              <p className="text-foreground/80">
              Ser a principal plataforma de comunicação preta do Brasil, promovendo inclusão, visibilidade e oportunidades através da mídia audiovisual. Em cinco anos, expandir nacionalmente como a principal referência em comunicação preta.
              </p>
              <p className="text-foreground/80 mt-4">
                
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="text-gold mr-3 text-3xl">03</span>
              <span>Valores</span>
            </h3>
            
            <div className="space-y-4">
              {[
                {
                  title: "Representatividade real",
                },
                {
                  title: "Compromisso com a comunidade preta",
                },
                {
                  title: "Criação com propósito",
                },
                {
                  title: "Propriedade intelectual preta",
                },
                {
                  title: "Resistência, inovação e afeto",
                }
              ].map((value, index) => (
                <div key={index} className="flex gap-4 p-4 border-b border-gold/10 last:border-b-0">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">{value.title}</h4>
                    <p className="text-foreground/70"></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
