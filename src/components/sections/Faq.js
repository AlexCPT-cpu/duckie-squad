import React, { useRef, useLayoutEffect } from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
 
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width:fit-content;
 
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`

const Container = styled.div`
width:75%;
margin:2rem auto;

display: flex;
justify-content: space-between;
align-content:center;

@media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    &>*:last-child{
      &>*:first-child{
      
        margin-top: 0;
    }

    }
  }
`

const Box = styled.div`
width: 45%;
@media (max-width: 64em) {
    width: 90%;
    align-items: center;
  }
`

export const Faq = () => {

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {

    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start:'top top',
      end:'bottom top',
      pin:true,
      pinSpacing:false,
      scrub:true,
      // markers:true,
    })

    return () => {
      ScrollTrigger.kill();
    };
  }, [])

  return (
    <Section ref={ref} id='faq'>
      <Title>
        FAQ
      </Title>
      <Container>
        <Box>
          <Accordion title="WHAT IS THE DUCKIE SQUAD?" >
          The Duckies Squad is a collection of 3,500 NFTs—unique digital collectibles, stored as ERC-721 tokens on the Binance Smart Chain.
            </Accordion>
          <Accordion title="WHERE CAN I VIEW MY NFTS?" >
          Once minted or bought simply connect to our dashboard, TofuNFT or NFYKEY to view your NFTs.
            </Accordion>
            <Accordion title="WHAT IS THE MINT PRICE?" >
               the mint price will be announced closely before the minting goes live . There will also be No Whitelist or Minting Tiers, it will be strictly public.
            </Accordion>
            <Accordion title="WHY DO WE NEED ROYALTIES?" >
            The amount of royalties was fixed at 5% to finance the Duckies Squad projects. We have the ambition to organize multiple events in order to strengthen the community and build our ecosystem.
            </Accordion>
        </Box>
        <Box>
        <Accordion title="HOW CAN I USE MY NFT?" >
        You will be able to use your NFT to access The Duckies Ecosystem. Holding also means that you are part of an exclusive network of investors and entrepreneurs who will gain early access to all of our products.
            </Accordion>
        </Box>
      </Container>
    </Section>
  )
}

export default Faq