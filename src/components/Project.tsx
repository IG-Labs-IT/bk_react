
import VideoPlayer from './VideoPlayer';

const Project = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projeto Inaugural</h2>
          <div className="h-1 w-24 bg-gold mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-3/5">
            <VideoPlayer 
              thumbnailUrl="https://images.unsplash.com/photo-1555306746-a47adcc5aaf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              title="Documentário Edhie Colucci"
            />
          </div>
          
          <div className="lg:w-2/5 space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Documentário <span className="text-gold">Edhie Colucci</span>
            </h3>
            <p className="text-foreground/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor tortor in nisi dignissim, at efficitur arcu bibendum. Cras auctor ligula in diam eleifend, vel pharetra quam ullamcorper.
            </p>
            <p className="text-foreground/80">
              Quisque quis ligula quis ex commodo finibus. Nam at massa ut nulla sodales hendrerit at vel justo. Donec vel placerat tellus, a tempus ipsum.
            </p>
            
            <div className="pt-4 space-y-4">
              <h4 className="text-xl font-medium">Detalhes do Projeto</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Diretor", value: "Nome do Diretor" },
                  { label: "Ano", value: "2023" },
                  { label: "Duração", value: "90 minutos" },
                  { label: "Categoria", value: "Documentário" }
                ].map((detail, index) => (
                  <div key={index} className="bg-graphite-dark/50 p-3 rounded">
                    <span className="text-gold text-sm block">{detail.label}</span>
                    <span className="font-medium">{detail.value}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href="#" 
                className="inline-block px-6 py-3 bg-gold hover:bg-gold-light text-background font-medium rounded-md transition-colors mt-2"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
