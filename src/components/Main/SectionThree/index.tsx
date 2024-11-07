
 import "../../../components/Main/SectionThree/style.css";

export default function SectionThree(){
    return(
<section className="services-section-power">
  {/* Div do lado direito com texto */}
  <div className="text-container-power">
    <p style={{ color: '#FBBF24' }}>System features</p>
    <h1 style={{ color: '#000000' }}>Powerful features</h1>
    <h4 style={{ color: '#525866' }}>
      Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.
    </h4>

    {/* Container com duas colunas de texto */}
    <div className="text-columns-power">
      {/* Coluna da direita */}
      <div className="text-column-power">
        <h2 style={{ color: '#252D3E' }}>Erat sit</h2>
        <h4 style={{ color: '#525866' }}>
          Id quis lecturs pharetra, ultricies integer montes, amet, gravida <br />
          consectetur. Nunc convallis fringilla nisl magna sagittis.
        </h4><br /><br /><br /><br /><br />

        <h2 style={{ color: '#252D3E', marginTop: '30px' }}>Et pellentesque</h2>
        <h4 style={{ color: '#525866' }}>
          Mi vitae, massa eu molestie massa euismod volutpat condimentum. <br />
          Blandit molestie ullamcorper hendrerit purus lorem vulputate.
        </h4>
      </div>

      {/* Coluna da esquerda */}
      <div className="text-column-power">
        <h2 style={{ color: '#252D3E' }}>Ullamcorper arcu</h2>
        <h4 style={{ color: '#525866' }}>
          Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus <br />
          auctor habitant duis dictum.
        </h4><br /><br /><br /><br /><br />
        <div className="text-column-power-4">
        <h2  style={{ color: '#252D3E', marginTop: '55px' }}>Amet egestas</h2>
        <h4 style={{ color: '#525866' }}>
          Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, <br />
          ullamcorper malesuada amet, felis.
        </h4>
        </div>
        
      </div>
    </div>
  </div>

  {/* Div da esquerda com a imagem */}
  <div className="image-container-power">
    <img src="./images/mOt.png" alt="Right side" className="full-image-power" />
  </div>
</section>




    )
}