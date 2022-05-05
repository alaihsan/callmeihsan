import React from 'react';
import styled from 'styled-components';

const Divi = styled.div `
background-color: rgba(0, 22 , 100, 0.5);
padding: 10px;
border-radius: 4%`;

const Paragraph1 = styled.p `
font-size: 3em;
color: white;
text-align: center;
`;

export default function About() {
    return (
        <>
        <Divi>
            <Paragraph1>
                haiii red
            </Paragraph1>
        </Divi>
        </>
    );
}