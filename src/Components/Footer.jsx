import "./Styles.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top links */}
      <div className="footer-links">
        <div className="footer-column">
          <a href="#shop">Shop All</a>
          <a href="#faq">FAQ</a>
          <a href="#returns">Returns</a>
          <a href="#giftcards">Gift Cards</a>
        </div>

        <div className="footer-column">
          <a href="#about">About</a>
          <a href="#jobs">Jobs</a>
          <a href="#press">Press</a>
        </div>

        <div className="footer-column">
          <a href="#instagram">Instagram</a>
          <a href="#tiktok">TikTok</a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="footer-bottom">
        <p>© 2025 Your Brand. All rights reserved.</p>
      </div>
    </footer>
  );
}
