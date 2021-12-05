import React from 'react'
import styled from 'styled-components'

const About = () => {
    return (
        <div>
            <Back/>
            <div>
            <P>
                Hey I'm Gaurab ,I am a self-motivated Web & App Developer from Dehradun , India<br></br>
                I'm passionate and hardworking with penchant for meeting deadlines.<br></br>
                Interested in exploring things and learning new things.<br></br>
                 I’m currently looking for opportunities.<br></br>
            </P>


            </div>
        
        </div>
    
        

    )
}
const P = styled.p`
position:block;
padding-top:18%;
padding-left:15%;
padding-right:15%;
color:white;
font-size:30px;
`;
const Back = styled.div`
height:100%;
background-position:top;
background-size:cover;
background-repeat:no-repeat;
background-image: url("/images/otherback.jpeg");
position: absolute;
top:0;
right:0;
left:0;
z-index:-1;
`;

export default About
