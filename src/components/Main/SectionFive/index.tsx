import '../SectionFive/style.css';

export default function SectionFive() {
  return (
    <section className="background-section">
      <div className="top-content">
        <div className="text-right">
          <h3 className="custom-h3">
            Get the Sun to power your home
          </h3><br />
          <h2 className="custom-h2">
            All the power that you need for<br />
            your house is now available
          </h2>
        </div>
        <div className="circle-left">
          <div className="purple-circle">
            <button className="navbar-button" style={{ marginTop: '35%', marginLeft: '-10%' }}>
              Request a Quote
              <span className="button-arrow">→</span>
            </button>
            <p>
              Egestas fringilla aliquam leo
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-image">
        {/* Imagem original */}
        <img src="/images/computer.png" alt="computer" className="central-image" />
        
        {/* Nova imagem para telas menores */}
        <img src="/images/computer.png" alt="new image" className="new-image" />
      </div>
    </section>
  );
}
