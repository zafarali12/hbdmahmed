const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <span className="text-4xl animate-float inline-block">🎂</span>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Wishing you the happiest birthday ever! 🎉
        </p>
        
        <p className="text-lg text-primary font-medium mb-6">
          Made with 💙 by Ali Mamu
        </p>
        
        <div className="flex justify-center gap-4 text-2xl">
          <span className="animate-float" style={{ animationDelay: '0s' }}>🎈</span>
          <span className="animate-float-delayed" style={{ animationDelay: '0.2s' }}>🎉</span>
          <span className="animate-float" style={{ animationDelay: '0.4s' }}>🦖</span>
          <span className="animate-float-delayed" style={{ animationDelay: '0.6s' }}>🚗</span>
          <span className="animate-float" style={{ animationDelay: '0.8s' }}>⭐</span>
        </div>
        
        <p className="mt-8 text-sm text-muted-foreground">
          Muhammad Ahmed's 4th Birthday Celebration 🎂
        </p>
      </div>
    </footer>
  );
};

export default Footer;
