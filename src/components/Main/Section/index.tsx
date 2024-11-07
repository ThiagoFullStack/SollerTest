
import '../../../App.css';

export default function Section() {
  return (
    <div>
      <main className="central-container">
        {/* Div da esquerda com o texto */}
        <div className="left-div">
          <h1>Get the Sun to <br /> Power Your Home</h1>
          <h3>
            Viverra viverra nibh enim et aliquam, enim.<br />
            Tempor, sit mus viverra orci dui consequat <br />
            tupis scelerisque.
          </h3>
          <button className="quote-btn">
            Request a Quote
            <span className="arrow">→</span>
          </button>
          <h4>
            "Viverra viverra nibh enim et aliquam, enim.<br />
            Tempor, sit mus viverra orci dui consequat <br />
            tupis scelerisque."
          </h4>
          <div className="profile">
            <img src="/images/ft-perfil.png" alt="Rwanda Melflor" className="profile-img" />
            <div className="profile-info">
              <p>Rwanda Melflor</p>
              <p>zerowaste.com</p>
            </div>
          </div>
        </div>
        {/* Div da direita com a imagem */}
        <div className="right-div">
          <img src="/images/LogoNovo.png"  alt="Soller" className="main-image" />
        </div>
      </main>
    </div>
  );
}

 
