import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import DrawSvg from '../DrawSvg'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width:fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
}

`;

const Container = styled.div`
width: 70%
height:200vh;
background-color: ${(props) => props.theme.text};
margin: 0 auto;
display:flex;
justify-content:center;
align-items:center;
position:relative;

@media (max-width: 64em) {
  width: 80%;
}
@media (max-width: 48em) {
  width: 90%;
}
`
const SvgContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
`

const Items = styled.ul`
list-style:none;
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
//background-color:lightblue;

@media (max-width: 48em) {
  width: 90%;
}

&>*:nth-of-type(2n +1){
  justify-content:start;
  @media (max-width: 48em) {
  justify-content: center;
}

  div{
    border-radius: 0 50px 0 50px;
    text-align: right;
  }
  p{
    border-radius: 0 40px 0 40px;
  }
}

&>*:nth-of-type(2n){
  justify-content:end;
  @media (max-width: 48em) {
  justify-content: center;
}

  div{
    border-radius: 0 50px 0 50px;
    text-align: left;
}

  p{
    border-radius: 0 40px 0 40px ;
  }
}


`
const Item = styled.li`
width:100%;
height:100%;
display:flex;
margin-bottom: 35px;

@media (max-width: 48em) {
  justify-content: flex-end !important;
}
`
const ItemContainer = styled.div`
width:40%;
height: fit fit-content;
padding:1rem;
border:3px solid ${props => props.theme.body};

@media (max-width: 48em) {
  width: 70%;
}
`
const Box = styled.p`
height:fit-content;
background-color:${(props) => props.theme.carouselColor};
color:${(props) => props.theme.text};
padding: 1rem;
position: relative;
border: 1px solid ${(props) => props.theme.text};

`
const SubTitle = styled.span`
display:block;
font-size: ${(props) => props.theme.fontxl};
text-transform:capitalize;
color:${(props) => props.theme.text};

@media (max-width: 40em) {
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 600;
}
`;
const Text = styled.span`
display:block;
font-size: ${props => props.theme.fontsm};
text-transform:capitalize;
color:${props => props.theme.text};

font-weight: 400;
margin:0.5rem 0;

@media (max-width: 40em) {
  font-size: ${(props) => props.theme.fontxs};
  font-weight: 600;
}
`;

const RoadMapItem = ({title, subtext,addToRef }) => {

  return(
    <Item ref={addToRef}> 
    <ItemContainer>
    <Box>
    <SubTitle>{title}</SubTitle>
    <Text>{subtext}</Text>
    </Box>
    </ItemContainer>
    </Item>
  )
}

const Roadmap = () => {

  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if(el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }

  useLayoutEffect(() => {
    let t1 = gsap.timeline();
  revealRefs.current.forEach( (el, index) => {

    t1.fromTo(
      el.childNodes[0],
      {
        y: '0'
      },{
        y:'-30%',

        scrollTrigger:{
          id: `section-${index + 1}`,
          trigger: el,
          start:'top center+=200px',
          end:'bottom center',
          scrub:true,
          // markers:true,
        }
      }
    )

  } )


    return () => {

    };
  }, [])

  return (
    <Section id="roadmap">
      <Title>Details</Title>
      <Container>
        <SvgContainer>
        <DrawSvg />
        </SvgContainer>
        <Items>
        <Item>&nbsp;</Item>
        <RoadMapItem addToRef={addToRefs} title="Earn Income" subtext="A percentage of the mint proceeds and royalties will be used to secure and generate income frictionlessly via yield generators. which will be distributed accross all NFT holders ." />
        <RoadMapItem addToRef={addToRefs} title="DAO" subtext="Each Duckies Squad NFT Holder will be able to access and vote on or DAO and decide on actions to take on pooled fonds. where each NFT counts as 1 vote" />
        <RoadMapItem addToRef={addToRefs} title="Access" subtext="Each Duckies Squad NFT Holder will gain early access the duckies squad ecosystem and all of our products." />
        <RoadMapItem addToRef={addToRefs} title="Buy backs" subtext="50% of the royalties earned from the trading of Duckies Squad NFT will be used to Buy back and raise the floor price of the Duckies NFT." />
        </Items>
      </Container>
    </Section>
  );
};

export default Roadmap;
