const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-20 left-10 text-4xl md:text-6xl animate-float opacity-60">🎈</span>
        <span className="absolute top-32 right-16 text-3xl md:text-5xl animate-float-delayed opacity-50">⭐</span>
        <span className="absolute top-40 left-1/4 text-2xl md:text-4xl animate-float opacity-40">✨</span>
        <span className="absolute bottom-40 right-10 text-4xl md:text-6xl animate-float-delayed opacity-60">🎈</span>
        <span className="absolute bottom-32 left-16 text-3xl md:text-5xl animate-float opacity-50">🎉</span>
        <span className="absolute top-1/2 right-1/4 text-2xl md:text-4xl animate-float-delayed opacity-40">🌟</span>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-6 animate-bounce-soft">
          <span className="text-6xl md:text-8xl">🎂</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Happy 4th Birthday
        </h1>
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground">
          Muhammad Ahmed! 🎉
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          With all my love from your
        </p>
        
        <div className="inline-block bg-card/50 backdrop-blur-sm rounded-2xl px-8 py-4 border border-border animate-pulse-glow">
          <span className="text-2xl md:text-3xl font-semibold text-primary">
            Ali Mamu 💙
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-soft">
        <span className="text-2xl text-muted-foreground">↓</span>
      </div>
    </section>
  );
};

export default HeroSection;
