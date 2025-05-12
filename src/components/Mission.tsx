
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
                <span>Nossa Missão</span>
              </h3>
              <p className="text-foreground/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor tortor in nisi dignissim, at efficitur arcu bibendum. Cras auctor ligula in diam eleifend, vel pharetra quam ullamcorper. Quisque quis ligula quis ex commodo finibus.
              </p>
              <p className="text-foreground/80 mt-4">
                Nam at massa ut nulla sodales hendrerit at vel justo. Donec vel placerat tellus, a tempus ipsum. Integer sed sollicitudin tellus.
              </p>
            </div>
            
            <div className="bg-black/50 p-8 rounded-lg border border-gold/20">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="text-gold mr-3 text-3xl">02</span>
                <span>Nossa Visão</span>
              </h3>
              <p className="text-foreground/80">
                Curabitur auctor diam id dolor vehicula varius. Donec vehicula lorem non urna aliquam, at finibus nibh tincidunt. Suspendisse potenti. Etiam dapibus justo in leo sagittis, vel finibus erat condimentum. 
              </p>
              <p className="text-foreground/80 mt-4">
                Phasellus finibus mauris sed mi sagittis, vel rhoncus justo tempor. Aenean in vehicula felis.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="text-gold mr-3 text-3xl">03</span>
              <span>Nossos Valores</span>
            </h3>
            
            <div className="space-y-4">
              {[
                {
                  title: "Excelência",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor tortor in nisi dignissim."
                },
                {
                  title: "Integridade",
                  description: "Cras auctor ligula in diam eleifend, vel pharetra quam ullamcorper."
                },
                {
                  title: "Criatividade",
                  description: "Quisque quis ligula quis ex commodo finibus. Nam at massa ut nulla sodales hendrerit."
                },
                {
                  title: "Colaboração",
                  description: "Donec vel placerat tellus, a tempus ipsum. Integer sed sollicitudin tellus."
                },
                {
                  title: "Inovação",
                  description: "Curabitur auctor diam id dolor vehicula varius. Donec vehicula lorem non urna aliquam."
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
                    <p className="text-foreground/70">{value.description}</p>
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
