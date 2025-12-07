interface LoveItem {
  emoji: string;
  title: string;
  description: string;
}

const loveItems: LoveItem[] = [
  {
    emoji: '🚗',
    title: 'Cars & Trucks',
    description: 'Zooming around with wheels of all kinds!',
  },
  {
    emoji: '🦖',
    title: 'Dinosaurs',
    description: 'Roaring like the mighty T-Rex!',
  },
  {
    emoji: '🏎️',
    title: 'Racing',
    description: 'Fast cars and the thrill of speed!',
  },
  {
    emoji: '🦕',
    title: 'T-Rex Adventures',
    description: 'Exploring the prehistoric world!',
  },
  {
    emoji: '🚚',
    title: 'Big Trucks',
    description: 'Monster trucks and construction vehicles!',
  },
  {
    emoji: '🎮',
    title: 'Playtime',
    description: 'Fun games and exciting adventures!',
  },
];

const ThingsHeLoves = () => {
  return (
    <section className="py-16 px-4 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Things Muhammad Ahmed Loves 💙
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          All the wonderful things that make you smile!
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loveItems.map((item, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                {item.emoji}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThingsHeLoves;
