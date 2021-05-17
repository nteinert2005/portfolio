import React from 'react';
import styled from 'styled-components';

const Hero = () => {
    return (
        <HeroWrapper>
            <HeroContent>
                <GradientWrapper> 
                    <Row>
                        <span>Welcome to my World</span>
                        <h1> Hi, I'm Nick Teinert</h1>
                        <span> based out of College Station, TX </span>
                    </Row>
                </GradientWrapper>
            </HeroContent>
        </HeroWrapper>
    );
};

const HeroWrapper = styled.div`
    background-image: url('https://images.unsplash.com/photo-1536567901538-b873c1915f79?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ&s=128e33d79dc67a5e718420a296f6ef84');
    background-size: cover;
    background-position: 50%;
    height: 1000px;
    width: 100%;
    font-family: "Montserrat";
    z-index: 10;
    
`

const Row = styled.div`
    max-width: 1460px;
    width: 90%;
    color: white;
    margin: 0 auto;

    @media screen (max-width: 700px){
        text-align: center !important;
    }

    span {
        font-size: 15px;
        letter-spacing: 4px;
        margin-bottom: 20px;
        text-transform: uppercase;
        font-weight: 500;
    }

    h1 {
        font-size: 54px;
        letter-spacing: 4px;
        text-transform: uppercase;
        font-weight: 800;
        color: #A88B69;
    }

    
`

const GradientWrapper = styled.div`
    background: -webkit-linear-gradient(top,rgba(15,15,15,.45),rgba(15,15,15,.8) 65%,#0f0f0f);
    width: 100%;
    height: 100%;
    padding: 350px 0;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 700px){
        padding: 230px 0;
    }
`

const HeroContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
`

export default Hero;