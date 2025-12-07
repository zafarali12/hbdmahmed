interface Milestone {
  emoji: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    emoji: '👶',
    title: 'The Day You Arrived',
    description: 'The most beautiful day when you came into our lives',
  },
  {
    emoji: '🚶',
    title: 'First Brave Steps',
    description: 'Those wobbly little steps that filled our hearts with joy',
  },
  {
    emoji: '🗣️',
    title: 'First Words',
    description: 'When you started talking and melted everyone\'s hearts',
  },
  {
    emoji: '🦖',
    title: 'Discovered Dinosaurs',
    description: 'The day you fell in love with the amazing world of dinosaurs',
  },
  {
    emoji: '🚗',
    title: 'Car Obsession Begins',
    description: 'Vroom vroom! Cars became your favorite thing ever',
  },
];

const MilestonesTimeline = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Your Amazing Journey 🌈
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary rounded-full transform md:-translate-x-1/2" />
          
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10 animate-pulse-glow" />
              
              {/* Content card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                      {milestone.emoji}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">
                      {milestone.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestonesTimeline;
