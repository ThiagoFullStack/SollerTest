
import "../../../components/Main/SectionFour/style.css";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules'; // Importando de modules

export default function SectionFour() {
  // Criar um array com as informações que deseja repetir
  const users = [
    { name: 'Jane Cooper', energy: 10, img: './images/imagem-1.png' },
    { name: 'Ralph Edwards', energy: 32, img: './images/imagem-2.png' },
    { name: 'Courtney Henry', energy: 6, img: './images/imagem-3.png' },
    { name: 'Robert Williams', energy: 12, img: './images/imagem-4.png' },
  ];

  return (
    <section className="purple-section">
      <div className="top-content"  style={{ marginTop: '-8%' }}>
        <div className="left-text">
          <p style={{ color: '#E3B755', paddingTop: '10%', fontSize: '20px', fontWeight:'bold' }}>Join other Sun harvesters</p>
          <h1 style={{ color: '#FFFFFF' }}>Make something awesome</h1>
          <h4 style={{ color: '#FFFFFF' }}>
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor.<br /><br />
            <h5 style={{ marginTop: '-14px' }}>Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.</h5>
          </h4>
        </div>

        <div className="right-button">
          <button className="navbar-button">
            Request a Quote
            <span className="button-arrow">→</span>
          </button>

        </div>
      </div>

      <div className="carousel-container">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10} // Ajuste para o espaço entre os slides
            slidesPerView={window.innerWidth <= 769 ? 1 : 5} // Exibir 1 slide por vez se a largura da tela for menor ou igual a 769px
          >
          {users.map((user, index) => (
            <SwiperSlide key={index}>
              <div className="card-item">
                <h4 className="user-name">
                  Purus maecenas quis elit eu, aliquet<br />
                  Tellus porttitor ut sollicitudin sit non<br />
                  fringilla. Quam nunc volutpat<br />
                  senectus neque eget amet pharetra,<br />
                  euismod. Tempus, nunc, molestie<br />
                  imperdiet curabitur commodo<br />
                  euismod.
                </h4>
                <div className="perfil-name">
                  <img src={user.img} alt={`User ${user.name}`} className="user-image" />
                  <h4 className="user-text">
                    {user.name}<br />
                    <p>{user.energy} KWh</p>
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* Repetir os usuários para criar mais slides */}
          {users.map((user, index) => (
            <SwiperSlide key={index + users.length}>
              <div className="card-item">
                <h4 className="user-name">
                  Purus maecenas quis elit eu, aliquet<br />
                  Tellus porttitor ut sollicitudin sit non<br />
                  fringilla. Quam nunc volutpat<br />
                  senectus neque eget amet pharetra,<br />
                  euismod. Tempus, nunc, molestie<br />
                  imperdiet curabitur commodo<br />
                  euismod.
                </h4>
                <div className="perfil-name">
                  <img src={user.img} alt={`User ${user.name}`} className="user-image" />
                  <h4 className="user-text">
                    {user.name}<br />
                    <p>{user.energy} KWh</p>
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  </section>
  );
}


