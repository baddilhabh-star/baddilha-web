import { ArrowDown, Smartphone } from 'lucide-react';
import uobLogo from '@/assets/uob-logo.png';
import appMockup from '@/assets/app-mockup.png';

const Hero = () => {
  return (
    <section className="min-h-screen hero-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-mint/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink/10 rounded-full blur-3xl" />
      
      <div className="section-container pt-24 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            {/* University Info */}
            <div className="flex items-start gap-4 mb-8">
              <img
                src={uobLogo}
                alt="University of Bahrain Logo"
                className="h-16 w-16 object-contain"
              />
              <div className="text-sm text-muted-foreground leading-relaxed">
                <p className="font-semibold text-foreground">University of Bahrain</p>
                <p>College of Information Technology</p>
                <p>Department of Computer Science</p>
              </div>
            </div>

            {/* Project Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
              <span className="gradient-text">Baddilha</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              A sustainable platform for swapping, donating, and affordable shopping of children's items.
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap gap-4">
              <a
  href="https://baddilhabh-star.github.io/baddilha-web/videos/demo-video.mp4"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary gap-2"
>
  <Smartphone size={20} />
  View Demo
</a>

            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end animate-float">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-64 md:w-72 h-[500px] md:h-[560px] bg-foreground rounded-[3rem] p-3 shadow-large">
                <div className="w-full h-full bg-background rounded-[2.5rem] flex items-center justify-center overflow-hidden">
                  <img
                    src={appMockup}
                    alt="Baddilha App"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full" />
              </div>
              
              {/* Decorative circles */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-mint/20 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-pink/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#abstract" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
