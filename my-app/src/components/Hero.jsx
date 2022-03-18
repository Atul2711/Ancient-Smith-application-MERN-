import React from 'react'
import {Link} from 'react-router-dom';
import { Button,Container,MainHeading} from '../globalStyle';
import {HeroVideo,HeroSection,HeroText,ButtonWrapper} from './HeroStyles';

function Hero() {
  return (
    <HeroSection>
        <HeroVideo src='./assets/Blue.mp4' autoPlay muted />
        <Container>
        <MainHeading>
            Think Design Build
        </MainHeading>
        <HeroText>
            Best tutorials on electronic projects
        </HeroText>
        <ButtonWrapper>
            <Link to="posts">
                <Button>Start Exploring</Button>
            </Link>
        </ButtonWrapper>
        </Container>
    </HeroSection>
  )
};

export default Hero;