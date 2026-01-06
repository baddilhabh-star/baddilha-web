import { CheckCircle, Rocket } from 'lucide-react';

const futureWork = [
  'AI-based item quality check and condition assessment',
  'Integrated payment gateway for secure transactions',
  'Charity partnerships for donation distribution',
  'Delivery integration with local courier services',
  'Scalability and expansion across Bahrain and GCC',
];

const Conclusion = () => {
  return (
    <section id="conclusion" className="bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-mint-light mb-4">
            <CheckCircle className="w-7 h-7 text-primary" />
          </div>
          <h2 className="section-title">Conclusion & Future Work</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Conclusion Card */}
          <div className="card-base card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-mint-light flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl">Conclusion</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Baddilha successfully demonstrates a viable solution for sustainable children's item
              exchange in Bahrain. The platform achieves its core objectives by providing an intuitive
              mobile experience for swapping, donating, and purchasing pre-loved children's items.
              Initial testing shows strong user acceptance and validates the market need for such a
              community-driven marketplace.
            </p>
          </div>

          {/* Future Work Card */}
          <div className="card-base card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-pink-light flex items-center justify-center">
                <Rocket className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-xl">Future Work</h3>
            </div>
            <ul className="space-y-3">
              {futureWork.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-mint-light flex items-center justify-center text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
