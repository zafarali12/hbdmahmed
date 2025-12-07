const AgeHighlight = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="relative bg-gradient-to-br from-card to-muted rounded-3xl p-8 md:p-12 border border-border shadow-2xl">
          {/* Corner decorations */}
          <span className="absolute -top-4 -left-4 text-4xl animate-float">🎉</span>
          <span className="absolute -top-4 -right-4 text-4xl animate-float-delayed">🎊</span>
          <span className="absolute -bottom-4 -left-4 text-4xl animate-float-delayed">🎁</span>
          <span className="absolute -bottom-4 -right-4 text-4xl animate-float">✨</span>
          
          <div className="text-center">
            <div className="mb-4">
              <span className="text-8xl md:text-9xl font-black bg-gradient-to-br from-primary via-accent to-secondary bg-clip-text text-transparent animate-pulse-glow inline-block">
                4
              </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Years Old! 🌟
            </h3>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Four amazing years of joy, laughter, adventures, and endless love! 
              You make every day brighter, Muhammad Ahmed! 💙
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgeHighlight;
