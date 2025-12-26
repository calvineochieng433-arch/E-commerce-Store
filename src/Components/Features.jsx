import "./Styles.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Features() {
  const sectionRef = useRef(null);

  const features = [
    {
      Image:
        "https://media.yardsale.day/images/8l1z5dyl/production/2accb0eb0446b4281255dfbfd0ab30a35f8d1e0a-2400x3600.jpg?rect=0,300,2400,3000&w=640&h=800&fm=webp&q=75&fit=crop&auto=format",
      title: "The Sport Coat",
      link: "#Shop",
    },
    {
      Image:
        "https://media.yardsale.day/images/8l1z5dyl/production/7e4cf3a5b2181644ebdb87b40f3b7dcbf32098e6-2400x3600.jpg?rect=0,300,2400,3000&w=640&h=800&fm=webp&q=75&fit=crop&auto=format",
      title: "The Dinner Sweater",
      link: "#Shop",
    },
    {
      Image:
        "https://media.yardsale.day/images/8l1z5dyl/production/9cb4e7e1de2ab5a2eb6d8c5adcf0990cc78b748c-2400x3600.jpg?w=640&fm=webp&q=75&fit=crop&auto=format",
      title: "P1 Resort Poles",
      link: "#Shop",
    },
    {
      Image:
        "https://media.yardsale.day/images/8l1z5dyl/production/5d4cdc5128290b69f9dfb25011025bdfb0356462-1080x1350.png?fp-x=0.5191564234734338&fp-y=0.4886047281047906&w=640&fm=webp&q=75&fit=crop&auto=format",
      title: "The Day Bag",
      link: "#Shop",
    },
  ];

  // =========================
  // HERO BUTTON ANIMATION (REUSED)
  // =========================
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const buttons = section.querySelectorAll(".feature-btn");

    buttons.forEach((btn) => {
      const defaultText = btn.querySelector(".btn-text");
      const hoverText = btn.querySelector(".btn-hover-text");

      // Initial state
      gsap.set(defaultText, { yPercent: 0, opacity: 1 });
      gsap.set(hoverText, { yPercent: 30, opacity: 0 });

      const onEnter = () => {
        gsap.killTweensOf([defaultText, hoverText]);

        gsap.to(defaultText, {
          yPercent: -30,
          opacity: 0,
          duration: 0.2,
          ease: "power2.out",
        });

        gsap.to(hoverText, {
          yPercent: 0,
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      };

      const onLeave = () => {
        gsap.killTweensOf([defaultText, hoverText]);

        gsap.to(hoverText, {
          yPercent: 30,
          opacity: 0,
          duration: 0.2,
          ease: "power2.in",
        });

        gsap.to(defaultText, {
          yPercent: 0,
          opacity: 1,
          duration: 0.2,
          ease: "power2.in",
        });
      };

      btn.addEventListener("mouseenter", onEnter);
      btn.addEventListener("mouseleave", onLeave);
    });
  }, []);

  return (
    <section className="feature-section" ref={sectionRef}>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <a
            key={index}
            href={feature.link}
            className="feature-card"
            style={{ backgroundImage: `url(${feature.Image})` }}
          >
            <div className="feature-overlay">
              <h3>{feature.title}</h3>

              <span className="feature-btn">
                <span className="btn-text">Shop</span>
                <span className="btn-hover-text">Discover</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
