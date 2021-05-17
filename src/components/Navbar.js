import React from 'react';
import styled from 'styled-components';


const Navbar = () => {
    return (
        <NavbarWrapper>
            <Logo>
                NT
            </Logo>
            <LeftSection>
                <ul>
                    <li><a class="active" href="/">Home </a></li>
                    <li><a href="/">About </a></li>
                    <li><a href="/">Services </a></li>
                    <li><a href="/">Portfolio </a></li>
                    <li><a href="/">Blog </a></li>
                    <li><a href="/">Contact </a></li>
                </ul>
            </LeftSection>
            <RightSection>
                <ul>
                    <li><a href="/">Test </a></li>
                    <li><a href="/">Test </a></li>
                    <li><a href="/">Test </a></li>
                    <li><a href="/">Test </a></li>
                </ul> 
            </RightSection>
            <Hamburger>
                <i class="bi bi-list"></i>
            </Hamburger>
            <MobileMenu>

            </MobileMenu>
        </NavbarWrapper>
    );
};

const MobileMenu = styled.div`
    
`

const Hamburger = styled.a`
    display: none;
    flex: 4;

    @media screen and (max-width: 700px){
        display: block;
    }
`

const NavbarWrapper = styled.div`
    display: flex;
    height: auto;
    padding: 20px 0;
    width: 100%;
    color: white;
    align-items: center;
    font-family: "Montserrat";
    z-index: 100;
    position: absolute;
    top: 0; 
    left: 0;
`

const Logo = styled.a`
    flex: 1;
    font-size: 23px;
    padding: 1em 3em;
`

const LeftSection = styled.div`
    flex: 7;
    align-items: center;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            a {
                float: left;
                padding: 16px 20px;
                font-size: 20px;
                color: white;
                text-decoration: none;
            }

            .active {
                border-bottom: 1px solid #A88B69;
            }

            
        }

        @media screen and (max-width: 700px){
            display: none;
        }

    }
`
const RightSection = styled.div`
    flex: 4;
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        
        li {
            float: right;
            a {
                float: left;
                padding: 16px 20px;
                font-size: 20px;
                color: white;
                text-decoration: none;
            }
        }

        @media screen and (max-width: 700px){
            display: none;
        }
    }
`



export default Navbar;