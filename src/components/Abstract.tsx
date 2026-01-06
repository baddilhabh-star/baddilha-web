import { FileText } from 'lucide-react';

const Abstract = () => {
  return (
    <section id="abstract" className="bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-mint-light mb-4">
            <FileText className="w-7 h-7 text-primary" />
          </div>
          <h2 className="section-title">Abstract</h2>
        </div>

        <div className="card-base max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Children grow rapidly, often outpacing their clothes, toys, and gear before these items
            show significant wear. In Bahrain, families frequently discard or store usable children's
            items due to a lack of convenient platforms for swapping or reselling them. This creates
            both economic waste and environmental impact, as perfectly functional items go unused.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mt-4">
            <strong className="text-foreground">Baddilha</strong> addresses this problem by providing
            a mobile-first platform specifically designed for swapping, donating, and affordable
            shopping of children's items. The application facilitates sustainable consumption by
            connecting parents who want to exchange items their children have outgrown with others
            who need them.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mt-4">
            Built using Flutter and Firebase, the platform offers a seamless user experience with
            features including item listings, in-app messaging, category browsing, and secure
            authentication. The expected outcome is a thriving community-driven marketplace that
            promotes sustainability, reduces household expenses, and fosters a culture of reuse
            within Bahraini families.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Abstract;
