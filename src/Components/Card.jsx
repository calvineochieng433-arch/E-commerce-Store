import "./Styles.css";
import { useRef } from "react";

export default function Card() {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    if (!trackRef.current) return;
    const amount = 300;
    trackRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const cards = [
    {
      image:
        "https://media.yardsale.day/images/8l1z5dyl/production/ad82bda09a591568dd8717106262ac97a418922a-318x398.jpg?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      title: "Sienna in Chamonix",
    },
    {
      image:
        "https://media.yardsale.day/images/8l1z5dyl/production/433bc84aff3b22df3fbe0f970e06e18ea140a795-1061x1600.jpg?rect=0,137,1061,1326&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      title: "Anya in Breckenridge",
    },
    {
      image:
        "https://media.yardsale.day/images/8l1z5dyl/production/27c8f43cf44beaba97636063fff32bd3f27c8ed3-1600x1061.jpg?rect=376,0,849,1061&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      title: "Nika in the Dolomites",
    },
    {
      image:
        "https://media.yardsale.day/images/8l1z5dyl/production/7bf329a1c6999b2c559019c4e60f989123574547-2048x3089.jpg?rect=0,265,2048,2560&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      title: "Nick in Tahoe",
    },
    {
      image:
        "https://media.yardsale.day/images/8l1z5dyl/production/2bd00771b9d0c07fffc1f242d2f393483ec2d863-1600x1061.jpg?rect=376,0,849,1061&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      title: "Mia in Aspen",
    },
    {
      image:
        "https://media.yardsale.day/images/8l1z5dyl/production/bfa0fa76c79135815f5741cfe9e3b6c9408f6753-2048x3089.jpg?rect=0,265,2048,2560&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      title: "Leo in Verbier",
    },
    {
      image:
        "https://media.yardsale.day/images/8l1z5dyl/production/d36e445ec638e716d0d361b0b4403c61e37281fb-3089x2048.jpg?rect=726,0,1638,2048&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      title: "Alex in Whistler",
    },
    {
      image:
        "https://media.yardsale.day/images/8l1z5dyl/production/ff213aa79befab54a9c7a3b054d298b4bc1241f4-1037x1565.jpg?rect=0,135,1037,1296&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      title: "Ella in St. Anton",
    },
  ];

  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <div className="testimonial-intro">
          <h2>Testimonials</h2>
          <p>
            Worn and tested by friends of the brand around the world from
            alpine starts to après finishes.
          </p>
        </div>

        <div className="testimonial-arrows">
          <button onClick={() => scroll("left")}>‹</button>
          <button onClick={() => scroll("right")}>›</button>
        </div>
      </div>

      <div className="testimonial-track" ref={trackRef}>
        {cards.map((card, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-image">
              <img src={card.image} alt={card.title} />
            </div>
            <p className="testimonial-title">{card.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
