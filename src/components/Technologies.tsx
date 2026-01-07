import { Cpu } from 'lucide-react';

const technologies = [
  { category: 'Programming', technology: 'Dart', purpose: 'Primary language for mobile app development' },
  { category: 'Framework', technology: 'Flutter / FlutterFlow', purpose: 'Cross-platform UI development and visual workflows' },
  { category: 'Backend / Cloud', technology: 'Firebase (Auth, Firestore, Storage)', purpose: 'User authentication, real-time database, and media storage' },
  { category: 'Design', technology: 'Figma / Canva', purpose: 'UI/UX design, mockups, and visual assets' },
  { category: 'Hosting', technology: 'GitHub Pages', purpose: 'Project website and documentation hosting' },
  { category: 'Domain & Email', technology: 'Custom Domain Provider', purpose: 'Professional domain and email configuration' },
];

const Technologies = () => {
  return (
    <section id="technologies" className="bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-pink-light mb-4">
            <Cpu className="w-7 h-7 text-secondary" />
          </div>
          <h2 className="section-title">Technologies Used</h2>
          <p className="section-subtitle mx-auto">
            The technical stack powering the Baddilha platform
          </p>
        </div>

        <div className="card-base overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table-styled">
              <thead>
                <tr>
                  <th className="rounded-tl-xl">Category</th>
                  <th>Technology</th>
                  <th className="rounded-tr-xl">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {technologies.map((tech, index) => (
                  <tr key={index}>
                    <td className="font-medium">{tech.category}</td>
                    <td>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-mint-light text-primary">
                        {tech.technology}
                      </span>
                    </td>
                    <td className="text-muted-foreground">{tech.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
