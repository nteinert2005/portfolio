import React from 'react';
import styled from 'styled-components';


const skills = [
    {
        skill: "JS",
        years: "14 years",
        description: "I used Javascript frameworks like ReactJS, etc to help bring vision to companies."
    }, {
        skill: "NodeJS",
        years: "10 years",
        description: "Used NodeJS to build real time dashboard and apps"
    }, {
        skill: "JS",
        years: "14 years",
        description: "I used Javascript frameworks like ReactJS, etc to help bring vision to companies."
    }, {
        skill: "NodeJS",
        years: "10 years",
        description: "Used NodeJS to build real time dashboard and apps"
    },{
        skill: "JS",
        years: "14 years",
        description: "I used Javascript frameworks like ReactJS, etc to help bring vision to companies."
    }, {
        skill: "NodeJS",
        years: "10 years",
        description: "Used NodeJS to build real time dashboard and apps"
    },
];

const Skills = () => {
    return (
        <SkillContainer>
            <SkillWrapper>
                <h3>Skills</h3>
                { skills.map((item) => {
                    return(
                        <Skill>
                            <h4>{item.skill}</h4>
                            <p>{item.years}</p>
                            <p>{item.description}</p>
                        </Skill>
                    )
                })}
            </SkillWrapper>
        </SkillContainer>
    );
};


const SkillContainer = styled.div`
    width: 100%;
    min-height: 100px;
    align-items: center;
    justify-content: center;
    background: #101010;
    padding-top: 30px;
    color: white;
    font-family: "Montserrat"
`

const SkillWrapper = styled.div`
    width: 90%;
    max-width: 1660px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    h3 {
        width: 100%;
        display: block;
        text-align: center;
        letter-spacing: 2px;
        text-transform: uppercase;
    }
`

const Skill = styled.div`
    background: #191919;
    padding: 60px 45px;
    padding-top: 20px;
    display: flex;
    height: 150px;
    flex-direction: column;
    margin: 20px;
    width: 25%;

    @media screen and (max-width: 700px){
        width: 100%;
        padding-bottom: 120px;
    }

    h4 {
        color: #A88B69;
        font-size: 30px;
        margin-bottom: 10px;
    }

    p {
        margin-top: 10px;
        margin-bottom: 5px;
    }
`

export default Skills;