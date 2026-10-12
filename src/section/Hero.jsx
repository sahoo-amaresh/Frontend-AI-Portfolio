import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ArrowUpRightFromSquareIcon, ChevronDown } from "lucide-react";
import { socialLinks } from "@/Utils/socialLInks";

const skills = [
  "Javascript",
  "React",
  "Tailwind CSS",
  "Java",
  "Python",
  "MySQL",
  "Netlify",
  "Vercel",
  "Git",
  "Github",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Frontend & AI Engineer • JavaScript & React
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">Robust</span>
                <br />
                solutions with
                <br />
                <span className="font-serif italic font-normal text-white">
                  purpose.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Amaresh Sahoo, a Frontend & AI Engineer. I like building
                responsive User interfaces integrated with LLMs. .
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="https://jarvis-amber-one.vercel.app/" target="_blank">
                <Button size="lg">
                  Try my voice Assistant
                  <ArrowUpRightFromSquareIcon className="w-4 h-4" />
                </Button>
              </a>
              <a
                href="https://drive.google.com/file/d/1kDuvZpdk5_XVY7YDse2k6mdpj6u6cfKq/view?usp=sharing"
                target="_blank"
              >
                <AnimatedBorderButton>
                  {/* <Download className="w-5 h-5" /> */}
                  Check My CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-200"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse
              "
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Amaresh Sahoo"
                  className="w-full aspect-square
                  object-cover rounded-2xl"
                />

                {/* Shade on the project screen. */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-80" />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-xs text-muted-foreground">
                    Projects Shipped
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills*/}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 px-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Button */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
