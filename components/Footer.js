import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
    </footer>
  );
}
