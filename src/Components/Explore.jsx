import "./Styles.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Explore() {
  const exploreRef = useRef(null);

  useEffect(() => {
    const section = exploreRef.current;
    if (!section) return;

    const contents = section.querySelectorAll(".explore-content > *"); // h1, p, a

    // Set initial state
    gsap.set(contents, { opacity: 0, y: 50 });

    // Fade in with stagger
    gsap.to(contents, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
    });

    // Button hover effect
    const btn = section.querySelector(".explore-link");
    const defaultText = btn.querySelector(".btn-text");
    const hoverText = btn.querySelector(".btn-hover-text");

    gsap.set(defaultText, { yPercent: 0, opacity: 1 });
    gsap.set(hoverText, { yPercent: 30, opacity: 0 });

    const onEnter = () => {
      gsap.to(defaultText, { yPercent: -30, opacity: 0, duration: 0.2, ease: "power2.out" });
      gsap.to(hoverText, { yPercent: 0, opacity: 1, duration: 0.2, ease: "power2.out" });
    };
    const onLeave = () => {
      gsap.to(defaultText, { yPercent: 0, opacity: 1, duration: 0.2, ease: "power2.in" });
      gsap.to(hoverText, { yPercent: 30, opacity: 0, duration: 0.2, ease: "power2.in" });
    };

    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);
  }, []);

  return (
    <section className="first-cta" ref={exploreRef}>
      <picture className="explore">
        <img
          className="explore-image"
          src="https://media.yardsale.day/images/8l1z5dyl/production/b687354d534d658295f3a4c028308c0f69c5360b-3411x2300.jpg?fp-x=0.5&fp-y=0.4953907773162668&w=1024&h=576&fm=webp&q=75&fit=crop&auto=format"
          alt="First CTA"
        />
      </picture>

      <div className="explore-content">
        <h1>Looking for more?</h1>
        <p>Shop everything we've got</p>
        <a className="explore-link" href="#explore">
          <span className="btn-text">Explore</span>
          <span className="btn-hover-text">See More</span>
        </a>
      </div>
    </section>
  );
}
