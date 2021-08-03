import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { NextArrow, PrevArrow, SliderContent, SliderContentTitle, SliderContentLogo } from "./styled"
import chocolateSanMartin from "@images/home/chocolate-san-martin.jpg";
import cacaoMaravilla from "@images/home/cacao-maravilla.jpg";
import habanosAmazonicos from "@images/home/habanos-amazonico.jpg";
import bioselvaImage from "@images/home/bioselva-image.jpg";
import logoTesoroAmazonico from "@images/home/tesoro-amazonico.png";
import logoCacaoMaravilla from "@images/home/cacao-maravilla.png";
import logoHabanosAmazonicos from "@images/home/habanos-amazonico-logo.png";
import logoBioSelva from "@images/home/bioselva-logo.png";

const partners = [
  {
    id: 1,
    image: chocolateSanMartin,
    label: 'Tesoro Amazónico',
    logo: logoTesoroAmazonico,
    size: {
      width: '62px',
      height: '66px'
    }
  },
  {
    id: 2,
    image: cacaoMaravilla,
    label: 'Cacao Maravillao',
    logo: logoCacaoMaravilla,
    size: {
      width: '116px',
      height: '47px'
    }
  },
  {
    id: 3,
    image: habanosAmazonicos,
    label: 'Habanos Amazónico',
    logo: logoHabanosAmazonicos,
    size: {
      width: '75px',
      height: '70px'
    }
  },
  {
    id: 4,
    image: bioselvaImage,
    label: 'Bioselva',
    logo: logoBioSelva,
    size: {
      width: '63px',
      height: '63px'
    }
  },
]

const renderSliders = () =>
  partners.map((partner, i) =>
    (<SliderContent key={i}>
        <img src={partner.image} alt={partner.label} />
        <SliderContentLogo>
          <img
              src={partner.logo}
              alt={partner.label}
              style={{
                width: partner.size.width,
                height: partner.size.height
              }}
            />
          <SliderContentTitle>{partner.label}</SliderContentTitle>
        </SliderContentLogo>
    </SliderContent>)
  );

export const SliderComponent = () => {
  const settings = {
    dots: false,
    slidesToShow: 4,
    autoplay: true,
    mobileFirst: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div>
      <Slider {...settings}>
        {renderSliders()}
      </Slider>
    </div>
  )
}
