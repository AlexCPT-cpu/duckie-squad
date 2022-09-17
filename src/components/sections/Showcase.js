import React, {useRef} from 'react'
import styled, { keyframes } from 'styled-components';
import img1 from "../../assets/Nfts/1.png";
import img2 from "../../assets/Nfts/2.png";
import img3 from "../../assets/Nfts/3.png";
import img4 from "../../assets/Nfts/4.png";
import img5 from "../../assets/Nfts/5.png";
import img6 from "../../assets/Nfts/6.png";
import img7 from "../../assets/Nfts/7.png";
import img8 from "../../assets/Nfts/8.png";
import img9 from "../../assets/Nfts/9.png";
import img10 from "../../assets/Nfts/10.png";
import BSC from '../../assets/bsc.png'


const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  display:flex;
  justify-content:space-between;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;

  &>*:first-child{
    animation-duration:25s;

    @media (max-width: 30em) {
      animation-duration: 20s;
    }

  }
  &>*:last-child{
    animation-duration:15s;
    @media (max-width: 30em) {
      animation-duration: 10s;
    }
    
  }
`


const move = keyframes`
0%{ transform: translateX(100%)};
100%{ transform:translateX(-100%)}
`

const Row = styled.div`
//background-color: lightblue;
white-space: nowrap;
box-sizing:content-box;
margin: 2rem 0;
display: flex;

animation: ${move} linear infinite ${props => props.direction};

`

const ImgContainer = styled.div`
width: 15rem;
margin: 0 1rem;
background-color:${props => props.theme.body};
border-radius: 20px;
cursor: pointer;

@media (max-width: 48em) {
      width: 15rem;
}

@media (max-width: 30em) {
      width: 15rem;
}

img{
  width: 100%;
  height: auto;
}
`
const Details = styled.div`
display:flex;
justify-content: space-between;
padding:0.8rem 1rem;
background-color: ${props => props.theme.text};
border: 2px solid white;

border-bottom-left-radius:20px;
border-bottom-right-radius:20px;

span{
  font-size: ${props => props.theme.fontsm};
  color: white;
  font-weight: 600;
  line-height: 1.5rem;
}

h1{
  font-size: ${props => props.theme.fontmd};
 color: ${props => props.theme.body};
 font-weight: 600;

 @media (max-width: 30em) {
  font-size: ${props => props.theme.fontsm};
}
}
`

const Price = styled.div`
display:flex;
justify-content: center;
align-items: center;

img{
  width: 1rem;
  height: auto;
}
`

const NftItem = ({img, number=0, price=0, passRef}) => {

  let play = (e) => {
    passRef.current.style.animationPlaystate = 'running';
  }
  let pause = (e) => {
    passRef.current.style.animationPlaystate = 'paused';
  }

  return(
    <ImgContainer style={{alignItems:"center",JustifyContent:"center",textAlign:"center"}} onMouseOver={e => pause(e)} onMouseOut={e => play(e)} >
    <img src={img} style={{borderRadius:"15px",width:"225px",marginTop:"5px"}} alt="Duckies Squad" />
    <Details>
      <div>
        <span>Duckies</span> <br />
        <h1>#{number}</h1>
      </div>
      <div>
        <span>Price</span>
        <Price>
          <img src={BSC} alt='BSC'/>
          <h1>{Number(price).toFixed(1)}</h1>
          </Price>
      </div>
    </Details>
    </ImgContainer>
  )
}

export const Showcase = () => {

  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return (
    <Section id='showcase'>
      <Row direction='none' ref={Row1Ref}>
        <NftItem img={img1} number={1} price={0} passRef = {Row1Ref}  />
        <NftItem img={img2} number={2} price={0} passRef = {Row1Ref} />
        <NftItem img={img3} number={3} price={0} passRef = {Row1Ref} />
        <NftItem img={img4} number={4} price={0} passRef = {Row1Ref} />
        <NftItem img={img5} number={5} price={0} passRef = {Row1Ref} />
        </Row>
        <Row direction='reverse' ref={Row2Ref}>
        <NftItem img={img6} number={6} price={0} passRef = {Row2Ref} />
        <NftItem img={img7} number={7} price={0} passRef = {Row2Ref} />
        <NftItem img={img8} number={8} price={0} passRef = {Row2Ref} />
        <NftItem img={img9} number={9} price={0} passRef = {Row2Ref} />
        <NftItem img={img10} number={10} price={0} passRef = {Row2Ref} />
        </Row>
      </Section>
  )
}

export default Showcase