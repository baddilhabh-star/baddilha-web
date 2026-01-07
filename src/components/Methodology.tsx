import { Workflow, CheckCircle2 } from 'lucide-react';
import architectureDiagram from '@/assets/architecture-diagram.png';

const methodologyPoints = [
  {
    title: 'Development Approach',
    description: 'Agile / Iterative methodology with weekly sprints and continuous feedback integration',
  },
  {
    title: 'Tools & Frameworks',
    description: 'Flutter / FlutterFlow for cross-platform mobile development with Firebase backend',
  },
  {
    title: 'Testing Strategy',
    description: 'Comprehensive functional testing combined with usability testing sessions',
  },
  {
    title: 'Datasets / Hardware',
    description: 'Cloud-based infrastructure with Firebase services; no specialized hardware required',
  },
];

const Methodology = () => {
  return (
    <section id="methodology" className="bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-mint-light mb-4">
            <Workflow className="w-7 h-7 text-primary" />
          </div>
          <h2 className="section-title">Methodology / Approach</h2>
          <p className="section-subtitle mx-auto">
            Our development process and technical approach
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Architecture Diagram */}
          <div className="card-base">
            <div className="rounded-xl overflow-hidden bg-background">
              <img
                src={architectureDiagram}
                alt="System Architecture Diagram of the Baddilha platform"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center mt-4 italic">
              System Architecture Diagram of the Baddilha platform.
            </p>
          </div>

          {/* Methodology Points */}
          <div className="flex flex-col gap-4">
            {methodologyPoints.map((point, index) => (
              <div
                key={index}
                className="card-base card-hover flex gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-mint-light flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
