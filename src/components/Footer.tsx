
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-12 px-6 border-t border-gold/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold font-playfair">
              <span className="gold-gradient">Vox88</span>
            </a>
            <p className="text-foreground/60 mt-2 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor tortor in nisi dignissim, at efficitur arcu bibendum.
            </p>
          </div>
          
          <div className="flex gap-6">
            {/* Social Media Icons */}
            {["facebook", "twitter", "instagram", "youtube"].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="h-10 w-10 rounded-full border border-gold/30 flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-colors"
                aria-label={`Visit our ${social}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                </svg>
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gold/10 mt-8 pt-8 flex flex-col md:flex-row md:justify-between items-center text-sm text-foreground/60">
          <div>
            &copy; {currentYear} Vox88. Todos os direitos reservados.
          </div>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gold transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
