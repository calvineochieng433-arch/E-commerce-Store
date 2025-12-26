import "./Styles.css";
import { useRef } from "react";

export default function Journal() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (!carouselRef.current) return;

    const cardWidth = 656; // 620px card + 36px gap
    carouselRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const JournalData = [
    {
      Image:
        "https://media.yardsale.day/images/8l1z5dyl/production/c1eac8959bf53c85e5ab7049c747eb44e735b102-3600x2400.jpg?rect=840,0,1920,2400&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      title: "Introducing Our Debut Apparel Collection",
      subtitle:
        "Everyday technical layers you can ski in. Lifestyle pieces for all the adventures in between.",
    },
    {
      Image:
        "https://media.yardsale.day/images/8l1z5dyl/production/94e372ca25719886af6c18a3b2c579cb71bdca41-3411x2300.jpg?rect=786,0,1840,2300&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      title: "FW25 Lookbook in Zermatt",
      subtitle:
        "Our full collection, shot in Zermatt on a proper Yardsale ski weekend.",
    },
    {
      Image:
        "https://media.yardsale.day/images/8l1z5dyl/production/7425871a0290b915d43f1e14352e824e43cfff96-2000x3000.jpg?rect=0,250,2000,2500&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      title: "Meet the New Day Bag",
      subtitle: "Revamped and ready to become your everyday bag.",
    },
    {
      Image:
        "https://media.yardsale.day/images/8l1z5dyl/production/37971d24a76cf354d159970f6c00fd4651564cf5-3000x2000.jpg?fp-x=0.5113533054916333&fp-y=0.5055985255262934&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      title: "Introducing the Next Chapter of Lin Essential's",
      subtitle: "A new look for even more epic days outside.",
    },
    {
      Image:
        "https://media.yardsale.day/images/8l1z5dyl/production/242f0de71e8b936f67c42fcd866eac6d4ac2aa83-3000x1996.webp?rect=702,0,1597,1996&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      title: "Bringing Magnetic Ski Poles to Shark Tank",
      subtitle: "The story behind our feature on ABC’s Shark Tank.",
    },
  ];

  return (
    <section className="journal-section">
      <div className="journal-intro">
        <h2 className="journal-heading">The Journal</h2>
        <a className="journal-link" href="#read-more">
          Read more
        </a>
      </div>

      {/* arrows – desktop only */}
      <div className="journal-arrows">
        <button onClick={() => scroll("left")}>‹</button>
        <button onClick={() => scroll("right")}>›</button>
      </div>

      <div className="journal-carousel" ref={carouselRef}>
        {JournalData.map((item, index) => (
          <div className="journal-card" key={index}>
            <div className="journal-image">
              <img src={item.Image} alt={item.title} />
            </div>

            <div className="journal-text">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
