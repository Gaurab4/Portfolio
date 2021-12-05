import React from 'react'
import styled from 'styled-components';



const Home = () => {
    return (
        <Top>
        <BgImage/>,
          <Head> GAURAB</Head>
         <Subhead>A Web & App Developer</Subhead>
        </Top>
    )
};
const Top = styled.div`
    

`;
const BgImage  = styled.div`
height:100%;
background-position:top;
background-size:cover;
background-repeat:no-repeat;
background-image: url("/images/Back1.svg");
position: absolute;
top:0;
right:0;
left:0;
z-index:-1;
`;

const Head = styled.h1`
font-size:80px;
align-text:left;
z-index:1;
color:white;
padding-top:40px;
padding-right:32%;
margin-bottom:2px;
`;
const Subhead = styled.h2`
margin-top:2px;
font-style:;
font-size:35px;
color:white;
padding-right:23%;


`;





export default   Home
