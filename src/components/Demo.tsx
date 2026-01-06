import { Play, Download, ExternalLink } from 'lucide-react';

const Demo = () => {
  return (
    <section id="demo" className="bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-pink-light mb-4">
            <Play className="w-7 h-7 text-secondary" />
          </div>
          <h2 className="section-title">Demo</h2>
          <p className="section-subtitle mx-auto">
            Watch our elevator pitch and experience the Baddilha app
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Video Embed */}
          <div className="card-base mb-8">
            <div className="aspect-video bg-foreground rounded-xl overflow-hidden">
              <video
                controls
                className="w-full h-full object-cover"
                poster=""
              >
                <source src="/videos/demo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-4">
              Baddilha - Elevator Pitch Video
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary gap-2"
            >
              <ExternalLink size={20} />
              Watch on YouTube
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary gap-2"
            >
              <Download size={20} />
              Download APK
            </a>
          </div>

          {/* Walkthrough Section */}
          <div className="mt-12 card-base text-center">
            <h3 className="font-heading font-semibold text-xl mb-4">App Walkthrough</h3>
            <p className="text-muted-foreground mb-6">
              Explore the key features and user flow of the Baddilha application
            </p>
            <div className="aspect-video bg-mint-light/50 rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-mint">
              <Play className="w-16 h-16 text-mint mb-4" />
              <p className="text-muted-foreground font-medium">Interactive Walkthrough</p>
              <p className="text-sm text-muted-foreground mt-2">[Add GIF or video walkthrough]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
