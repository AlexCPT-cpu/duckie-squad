import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";
import img1 from "../assets/Nfts/1.png";
import img2 from "../assets/Nfts/2.png";
import img3 from "../assets/Nfts/3.png";
import img4 from "../assets/Nfts/4.png";
import img5 from "../assets/Nfts/5.png";
import img6 from "../assets/Nfts/6.png";
import img7 from "../assets/Nfts/7.png";
import img8 from "../assets/Nfts/8.png";
import img9 from "../assets/Nfts/9.png";
import img10 from "../assets/Nfts/10.png";
import Arrow from '../assets/Arrow.svg';

const Container = styled.div`
  width: 25vw;
  height: 70vh;

  @media (max-width: 70em) {
    height: 60vh;
    margin:5px;
  }

  @media (max-width: 64em) {
    height: 50vh;
    width: 30vw;
    margin:5px;
  }
  @media (max-width: 48em) {
    height: 50vh;
    width: 30vw;
    margin:5px;
  }
  @media (max-width: 30em) {
    height: 45vh;
    width: 60vw;
    margin:5px;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide{
    background-color: ${props => props.theme.carouselColor};
    border-radius:20px;

    display:flex;
    justify-content:center;
    align-items:center;

    img{
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius:15px;
      margin:5px;
    }
  }
  .swiper-button-next{
    color: ${props => props.theme.text};
    right:0;
    top:60%;
    width: 4rem;

    background-image: url(${Arrow});
    background-position:center;
    background-size:cover;

    &:after{
        display:none;
    }

    @media (max-width: 64em) {
      width: 3rem;
    }
    @media (max-width: 30em) {
      width: 2rem;
    }
  }
  .swiper-button-prev{
    color: ${props => props.theme.text};
    left:0;
    top:60%;
    width: 4rem;
    transform:rotate(180deg);

    background-image: url(${Arrow});
    background-position:center;
    background-size:cover;

    &:after{
        display:none;
    }
  }
`;

const Carousel = () => {
  return (
    <Container>
      <Swiper
      autoplay={{
        delay:2000,
        disableOnInteraction:false,
      }}
      pagination={{
        type:'fraction',
      }}
      scrollbar={{
        draggable:true
      }}
      modules={[EffectCards, Pagination, Navigation, Autoplay]}
        navigation={true}
        grabCursor={true}
        effect={"cards"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img src={img1} alt="img1" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img2} alt="img2" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img3} alt="img3" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img4} alt="img4" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img5} alt="img5" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img6} alt="img6" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img7} alt="img7" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img8} alt="img8" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img9} alt="img9" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img10} alt="img10" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Carousel;
