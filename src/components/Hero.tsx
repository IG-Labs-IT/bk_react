
import VideoPlayer from './VideoPlayer';

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 md:gap-16">
          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gold-gradient">Transformando</span> visões em experiências visuais
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-gold hover:bg-gold-light text-background font-medium rounded-md transition-colors"
              >
                Nossos Projetos
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-transparent hover:bg-white/10 border border-gold text-gold hover:text-gold-light font-medium rounded-md transition-colors"
              >
                Entre em Contato
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-fade-in animate-delay-200">
            <VideoPlayer 
              thumbnailUrl="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" 
              title="Documentário Edhie Colucci"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
