import "../SelectionTwo/style.css";

export default function SectionTwo(){
    return(
<section className="services-section">
  {/* Div da esquerda com a imagem */}
  <div className="image-container">
    <img src="/images/OtF.png" alt="Left side" className="full-image" />
  </div>

  {/* Div da direita com os textos */}
  <div className="text-container">
    <p style={{ color: '#FBBF24' }}>Services</p>
    <h1 style={{ color: '#000000' }}>Personalized services</h1>
    <h2 style={{ color: '#525866' }}>
      Pretium lectus sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.
    </h2>

    {/* Container com duas colunas de texto */}
    <div className="text-columns">
      {/* Coluna da direita */}
      <div className="text-column">
        <div className="text-column-right">
            <h2 style={{ color: '#252D3E' }}>Et mauris</h2>
            <h3 style={{ color: '#525866' , marginTop: '10px' }}>
                Posuere quis sed mauris non curabitur pretium elementum eget. <br />
                Feugiat sed maecenas eu accumsan tristique.
            </h3>
        </div>
        <div className="text-column-right-1">
            <h2 style={{ color: '#252D3E', marginTop: '30px' }}>Imperdiet pellentesque</h2>
            <h3 style={{ color: '#525866' , marginTop: '10px'  }}>
                Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim <br />
                viverra parturient tristique nulla.
            </h3>
        </div>
      </div>

      {/* Coluna da esquerda */}
      <div className="text-column">
      <div className="text-column-left">
        <h2 style={{ color: '#252D3E' }}>Eget sit</h2>
        <h3 style={{ color: '#525866'  , marginTop: '10px' }}>
            Site bibendum donec dolor fames neque vulputate non sit aliquam. <br />
            Consequat turpis natoque leo, massa.
        </h3>
      <div className="text-column-left-1">
        <h2 style={{ color: '#252D3E', marginTop: '30px' }}>Non libero</h2>
        <h3 style={{ color: '#525866'  , marginTop: '10px' }}>
            Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut <br />
            sed eros, consectetur viverra.
        </h3>
        </div>
      </div>
      </div>
    </div>
  </div>
</section>

    )
}