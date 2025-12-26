import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./UI.css";

export default function Offer() {
  const [isOpen, setIsOpen] = useState(false); // start closed
  const offerRef = useRef(null);

  // Show popup after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 2000); // 2000ms = 2s
    return () => clearTimeout(timer);
  }, []);

  // Animate popup when it opens
  useEffect(() => {
    if (isOpen && offerRef.current) {
      gsap.fromTo(
        offerRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "power4.out" }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="offer-backdrop">
      <div className="offer-container" ref={offerRef}>
        <button
          className="offer-close"
          onClick={() => setIsOpen(false)}
          aria-label="Close"
        >
          ×
        </button>

        <picture className="offer-image">
          <img
            src="https://cdn.commoninja.com/asset/d6f92c82-4619-45b7-b28e-0cd01248ec3c.png"
            alt="offer"
          />
        </picture>

        <div className="offer-content">
          <h2>Here's a $15 offer on us!</h2>
          <p>
            Sign up for updates on new products, events, and more to grab a
            discount off your first purchase.
          </p>
          <input type="email" placeholder="Drop your email" required />
          <button className="offer-cta">Get a $15 code</button>
        </div>
      </div>
    </div>
  );
}
