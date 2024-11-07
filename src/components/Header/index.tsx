import "../Header/style.css";

export default function Header() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="navbar-logo">Soller</div>
          <ul className="navbar-links">
            <li><a href="#products">Products</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#configure">Configure</a></li>
          </ul>
          <div className="navbar-contact">
            <span className="phone-icon">
              <i className="fas fa-headset"></i>
              555818282
            </span>
            <button className="quote-btn">
              Request a Quote
              <span className="arrow">→</span>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}



