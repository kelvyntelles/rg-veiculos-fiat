'use client'

import Carousel from 'react-bootstrap/Carousel';
import styles from  './styles.module.css'

export function CarouselHome() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="/assets/banner-oferta-01.jpg" className={styles.banner} />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/assets/banner-oferta-02.jpg" className={styles.banner} />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/assets/banner-oferta-03.jpg" className={styles.banner} />
      </Carousel.Item>
    </Carousel>
  );
}
