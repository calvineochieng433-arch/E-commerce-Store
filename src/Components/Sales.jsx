import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

import Bags from "../Components/Bags";
import Skis from "../Components/Skis";
import Coat from "../Components/Coat";
import Baskets from "../Components/Baskets";
import "./Styles.css";

gsap.registerPlugin(Draggable);

export default function Sales() {
  const scrollRef = useRef(null);
  const itemRefs = useRef([]);

  const components = [<Bags />, <Skis />, <Coat />, <Baskets />];

  useEffect(() => {
    // Make the horizontal scroll draggable
    if (scrollRef.current) {
      Draggable.create(scrollRef.current, {
        type: "x",
        edgeResistance: 0.1,
        bounds: {
          minX: -scrollRef.current.scrollWidth + scrollRef.current.offsetWidth,
          maxX: 0,
        },
        inertia: true,
        cursor: "grab",
        activeCursor: "grabbing",
      });
    }

    // Fade-in animation for each component when in viewport
    itemRefs.current.forEach((item) => {
      gsap.fromTo(
        item,
        { autoAlpha: 0, y: 50 },
        {
          duration: 0.8,
          autoAlpha: 1,
          y: 0,
          ease: "power3.out",
          stagger: 0.3, 
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);
  const pictureRef = useRef(null);

  useEffect(() => {
    if (pictureRef.current) {
      gsap.fromTo(
        pictureRef.current,
        { autoAlpha: 0, y: 50 }, 
        {
          duration: 1,
          autoAlpha: 1, 
          y: 0, 
          ease: "power3.out",
        }
      );
    }
  }, []);
  

  return (
    <>
    <section className="sales-section">
      <div className="sales-intro">
        <h2 className="sales-heading">Our Bestsellers</h2>
        <a className="sales-link" href="#read-more">
          Read more
        </a>
      </div>

      <div className="sales-scroll-wrapper">
        <div className="sales-scroll" ref={scrollRef}>
          {components.map((Comp, idx) => (
            <div
              key={idx}
              className="sales-item"
              ref={(el) => (itemRefs.current[idx] = el)}
            >
              {Comp}
            </div>
          ))}
        </div>
      </div>
    </section>
    <picture className="sales-picture" ref={pictureRef}>
        <img src="https://media.yardsale.day/images/8l1z5dyl/production/f2915650781a019027f2db3179f1a6928f9d651b-2400x3600.jpg?rect=0,600,2400,2400&w=1024&h=1024&fm=webp&q=75&fit=crop&auto=format" alt="CEO" />
    </picture>
    </>
  );
}
