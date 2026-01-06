import { Workflow, CheckCircle2, ImageIcon } from 'lucide-react';

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
          {/* Architecture Diagram Placeholder */}
          <div className="card-base">
            <div className="aspect-[4/3] bg-mint-light/50 rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-mint">
              <ImageIcon className="w-16 h-16 text-mint mb-4" />
              <p className="text-muted-foreground font-medium">System Architecture Diagram</p>
              <p className="text-sm text-muted-foreground mt-2">[Upload architecture diagram here]</p>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-4 italic">
              Figure 1: High-level system architecture showing Flutter frontend, Firebase services, and user interaction flow
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
