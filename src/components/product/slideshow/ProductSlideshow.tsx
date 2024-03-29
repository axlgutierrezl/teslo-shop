'use client';

import { Swiper as SwiperObject } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './slideshow.css';

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import Image from 'next/image';

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductSlideshow = ({ images, title, className }: Props) => {

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

  return (
    <>
      <div className={className}>
        <Swiper
          // style={{
          //   '--swiper-navigation-color': '#fff',
          //   '--swiper-pagination-color': '#fff',
          // } as React.CSSProperties
          // }
          spaceBetween={10}
          navigation={true}
          autoplay={{
            delay: 2000
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="mySwiper2"
        >
          {
            images.map(image => (
              <SwiperSlide key={image}>
                <Image
                  width={1024} // desktop
                  height={800} // desktop
                  src={`/products/${image}`}
                  alt={title}
                  className="rounded-lg object-fill"
                />
              </SwiperSlide>
            ))
          }

        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {
            images.map(image => (
              <SwiperSlide key={image}>
                <Image
                  width={300} // desktop
                  height={300} // desktop
                  src={`/products/${image}`}
                  alt={title}
                  className="rounded-lg object-fill"
                />
              </SwiperSlide>
            ))
          }

        </Swiper>
      </div>

    </>
  )
}
