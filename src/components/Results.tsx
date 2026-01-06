import { BarChart3, ImageIcon, CheckSquare } from 'lucide-react';

const screenshots = [
  {
    title: 'Home Screen',
    caption: 'Main dashboard showing featured items and category browsing',
  },
  {
    title: 'Item Listing',
    caption: 'Detailed item view with swap/buy options and seller contact',
  },
  {
    title: 'User Profile',
    caption: 'Personal profile with listed items and transaction history',
  },
];

const Results = () => {
  return (
    <section id="results" className="bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-mint-light mb-4">
            <BarChart3 className="w-7 h-7 text-primary" />
          </div>
          <h2 className="section-title">Results</h2>
          <p className="section-subtitle mx-auto">
            Visual evidence and outcomes of our development process
          </p>
        </div>

        {/* Screenshots Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="card-base card-hover">
              <div className="aspect-[9/16] bg-mint-light/50 rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-mint mb-4">
                <ImageIcon className="w-12 h-12 text-mint mb-2" />
                <p className="text-sm text-muted-foreground">{screenshot.title}</p>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                {screenshot.caption}
              </p>
            </div>
          ))}
        </div>

        {/* Testing Outcomes */}
        <div className="card-base max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-pink-light flex items-center justify-center">
              <CheckSquare className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="font-heading font-semibold text-xl">Testing Outcomes</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Functional testing confirmed all core features work as expected, including user registration,
            item listing, search functionality, and in-app messaging. Usability testing with 10 participants
            showed a 92% task completion rate and positive feedback on the interface design. Minor UI
            adjustments were made based on user suggestions to improve navigation clarity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Results;
