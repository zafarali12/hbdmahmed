const MessageFromMamu = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          A Message From Ali Mamu 💌
        </h2>
        
        <div className="relative">
          {/* Decorative elements */}
          <span className="absolute -top-6 left-4 text-3xl animate-float">💙</span>
          <span className="absolute -top-6 right-4 text-3xl animate-float-delayed">✨</span>
          
          <div className="bg-gradient-to-br from-card via-muted/50 to-card rounded-3xl p-8 md:p-12 border border-border shadow-2xl">
            <div className="text-center mb-8">
              <span className="text-5xl animate-bounce-soft inline-block">🤗</span>
            </div>
            
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                My Dearest <span className="text-primary font-semibold">Muhammad Ahmed</span>,
              </p>
              
              <p>
                Happy 4th Birthday, my precious little champion! 🎉
              </p>
              
              <p>
                Watching you grow these past four years has been one of the greatest joys of my life. 
                Your smile lights up every room, your laughter is the sweetest music, and your curiosity 
                about cars 🚗 and dinosaurs 🦖 makes every moment with you an adventure!
              </p>
              
              <p>
                 Ali Mamu is so proud of the 
                amazing little person you're becoming. May this year bring you endless happiness, 
                exciting discoveries, and all the love your heart can hold.
              </p>
              
              <p>
                I love you more than all the cars in the world and all the dinosaurs that ever lived! 
                Happy Birthday, my dear Ahmed! 💙
              </p>
              
              <p className="text-right text-foreground font-semibold pt-4">
                Forever yours,<br />
                <span className="text-primary">Ali Mamu</span> 💙
              </p>
            </div>
          </div>
          
          {/* Bottom decorations */}
          <span className="absolute -bottom-6 left-1/4 text-3xl animate-float">🎁</span>
          <span className="absolute -bottom-6 right-1/4 text-3xl animate-float-delayed">🎈</span>
        </div>
      </div>
    </section>
  );
};

export default MessageFromMamu;
