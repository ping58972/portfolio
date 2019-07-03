import React from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/scss/swiper.scss';

const MianProject = () => {
  const params = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    autoplay: {
      delay: 1500
      // disableOnInteraction: false,
    },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function(index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    }
  };

  return (
    <div className='swiper-container'>
      <div className='swiper-wrapper'>
        <Swiper {...params}>
          <div className='swiper-slide'>
            <h3>02. Side Project</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              dolor ad, culpa repellat maiores officiis assumenda consequuntur
              cum cupiditate sapiente quos voluptates exercitationem libero
              tempora, natus animi. Possaepe temporibus. Provident, expedita.
              Inventore, vitae dolores, faci.
            </p>
          </div>
          <div className='swiper-slide'>
            <h3>02. Side Project</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              dolor ad, culpa repellat maiores officiis assumenda consequuntur
              cum cupiditate sapiente quos voluptates exercitationem libero
              tempora, natus animi. Possaepe temporibus. Provident, expedita.
              Inventore, vitae dolores, faci.
            </p>
          </div>
          <div className='swiper-slide'>
            <h3>03. Side Project</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              dolor ad, culpa repellat maiores officiis assumenda consequuntur
              cum cupiditate sapiente quos voluptates exercitationem libero
              tempora, natus animi. Possimusentium aperiam sequi eius,
              reiciendis porro, ex dicta molestiae vitae voluptatum aliquam ea
              fugit mollitia? Culpa mollitia rem saepe temporibus. Provident,
              expedita. Inventore, vitae dolores, faci.
            </p>
          </div>
          <div className='swiper-slide'>
            <h3>04. Side Project</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              dolor ad, culpa repellat maiores officiis assumenda consequuntur
              cum cupiditate sapiente quos voluptates exercitationem libero
              tempora, natus animi. Possimus, expedita. Inventore, vitae
              dolores, faci.
            </p>
          </div>
          <div className='swiper-slide'>
            <h3>05. Side Project</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              dolor ad, culpa repellat maiores officiis assumenda consequuntur
              cum cupiditate sa esse blanditiis voluptate iure ratione neque
              illum non praesentium aperiam sequi eius, reiciendis porro, ex
              dicta molestiae vitae voluptatum aliquam ea fugit mollitia? Culpa
              mollitia rem saepe temporibus. Provident, expedita. Inventore,
              vitae dolores, faci.
            </p>
          </div>
          <div className='swiper-slide'>
            <h3>06. Side Project</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              dolor ad, culpa repellat maiores officiis assumenda consequuntur
              cum cupiditate sapienm sequi eius, reiciendis porro, ex dicta
              molestiae vitae voluptatum aliquam ea fugit mollitia? Culpa
              mollitia rem saepe temporibus. Provident, expedita. Inventore,
              vitae dolores, faci.
            </p>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default MianProject;
