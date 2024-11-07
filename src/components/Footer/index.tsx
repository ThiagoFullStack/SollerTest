import '../Footer/style.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-right">
        <img src="/images/LOGOSoller.png" alt="Soller Logo" className="footer-image" />
        <p className="footer-text">@2023 Soller, Inc, All rights reserved.</p>
      </div>
      
      <div className="footer-left">
        <p className="footer-link">Terms</p>
        <p className="footer-link">Privacy</p>
        <p className="footer-link">Support</p>
      </div>
    </footer>
  );
}
