import { Play } from 'lucide-react';

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

        <div className="max-w-6xl mx-auto">
          {/* Video Embed */}
          <div className="card-base p-6 md:p-8">
            <div className="aspect-video bg-foreground rounded-2xl overflow-hidden shadow-xl">
            <video
  src="/baddilha-web/videos/demo-video-v2.mp4"
  controls
  className="w-full h-full object-cover"
>
  Your browser does not support the video tag.
</video>


            </div>
            <p className="text-base text-muted-foreground text-center mt-6 font-medium">
              Baddilha - Elevator Pitch Video
            </p>
          </div>

          {/* Description */}
          <div className="mt-8 card-base text-center">
            <h3 className="font-heading font-semibold text-xl mb-4">About Baddilha</h3>
            <p className="text-muted-foreground leading-relaxed">
              Baddilha is a sustainable mobile platform designed to help parents swap, donate, and 
              purchase affordable children's items. The app promotes environmental sustainability 
              by reducing waste while building a supportive community of parents in Bahrain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
