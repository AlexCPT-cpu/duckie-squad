import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import Logo from './Logo'
import Facebook from '../Icons/Facebook'
import Twitter from '../Icons/Twitter'
import LinkedIn from '../Icons/LinkedIn'
import Instagram from '../Icons/Instagram'

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: relative;

  display: flex;
  flex-direction: column;
`

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;

border-bottom: 1px solid ${props => props.theme.text};

@media (max-width: 48em) {
  width: 90%;

  h1{
  font-size: ${props => props.theme.fontxxxl};
}
}
`
const Left = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

@media (max-width: 48em) {
  width: 100%;
}
`

const IconList = styled.div`
display:flex;
align-items: center;
margin: 1rem auto;

&>*{
  padding-right: 0.5rem;
  transition: all 0.2s ease;

  &:hover{
    transform: scale(1.2);
  }
}
`

const MenuItems = styled.ul`
list-style: none;
width:50%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-gap: 1rem;

@media (max-width: 48em) {
  display: none;
}
`

const Item = styled.li`
width: fit-content;
cursor: pointer;

&::after{
    content:' ';
    display:block;
    width:0%;
    height:2px;
    background: ${props => props.theme.text};
    transition:width 0.5s ease;
}
&:hover::after{
    width:100%;
}
`
const Bottom = styled.div`
width:75%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;

a{
  text-decoration: underline;
}

@media (max-width: 48em) {
flex-direction: column;
width: 100%;

span{
  margin-bottom: 1rem;
}
}
`

const scrollTo = (id) => {

let element = document.getElementById(id);

element.scrollIntoView({
    behavior:'smooth',
    block: 'start',
    imline:'nearest',
})
}

export const Footer = () => {
  return (
    <Section>
      <Banner />
      <Container>
      <Left>
      <Logo/>
      <IconList>
      <a href="https://facebook.com" target='_blank'
      rel='noreferrer'>
      <Facebook />
      </a>
      <a href="https://twitter.com" target='_blank'
      rel='noreferrer'>
      <Twitter />
      </a>
      <a href="https://linkedin.com" target='_blank'
      rel='noreferrer'>
      <LinkedIn />
      </a>
      <a href="https://instagram.com" target='_blank'
      rel='noreferrer'>
      <Instagram />
      </a>
      </IconList>
      </Left>
      <MenuItems>
      <Item onClick={() => scrollTo('home')}>Home</Item>
            <Item onClick={() => scrollTo('about')}>About</Item>
            <Item onClick={() => scrollTo('roadmap')}>Details</Item>
            <Item onClick={() => scrollTo('showcase')}>Showcase</Item>
            <Item onClick={() => scrollTo('team')}>Team</Item>
            <Item onClick={() => scrollTo('faq')}>Faq</Item>
      </MenuItems>
      </Container>
      <Bottom>
      <span>
      &copy; {new Date().getFullYear()} Duckies Squad. All rights reserved.
      </span>
      <span>
      Made with &#10084; by <a href="/" target="_blank" rel='noreferrer' >
      Duckies Team
      </a>
      </span>
      </Bottom>
    </Section>
  )
}

export default Footer