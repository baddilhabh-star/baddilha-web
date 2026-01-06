import { Target, Recycle, Users, Shield, Smartphone, TrendingUp } from 'lucide-react';

const objectives = [
  {
    icon: Smartphone,
    title: 'Objective 1',
    description: 'Develop a user-friendly mobile application that allows parents to list, swap, donate, or sell children\'s items efficiently.',
  },
  {
    icon: Recycle,
    title: 'Objective 2',
    description: 'Promote sustainable consumption by extending the lifecycle of children\'s products through a community-driven exchange platform.',
  },
  {
    icon: Users,
    title: 'Objective 3',
    description: 'Build a trusted community where users can safely connect, communicate, and complete transactions with other local parents.',
  },
  {
    icon: Shield,
    title: 'Objective 4',
    description: 'Implement secure authentication and data protection measures to ensure user privacy and platform security.',
  },
  {
    icon: TrendingUp,
    title: 'Objective 5',
    description: 'Reduce household expenses for families by providing access to quality second-hand children\'s items at affordable prices.',
  },
  {
    icon: Target,
    title: 'Objective 6',
    description: 'Achieve measurable user engagement with at least 100 active users and 500 item listings within the first three months of launch.',
  },
];

const Objectives = () => {
  return (
    <section id="objectives" className="bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-pink-light mb-4">
            <Target className="w-7 h-7 text-secondary" />
          </div>
          <h2 className="section-title">Objectives</h2>
          <p className="section-subtitle mx-auto">
            Our key goals and measurable outcomes for the Baddilha platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="card-base card-hover group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-mint-light flex items-center justify-center group-hover:bg-mint transition-colors">
                  <objective.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-lg">{objective.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{objective.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
