import React from 'react'
import styled from 'styled-components'
import { FaBeer, FaInstagram, FaLinkedinIn, FaMailBulk, FaMailchimp } from 'react-icons/fa';
const Contact = () => {
    return (
    
        <div>
            <Back/>
         <div>
            <P>Connect With Me ....</P>
         </div>
         <div >
         <A href="https://www.linkedin.com/in/gaurab-t/" ><FaLinkedinIn size="3%"   color="white"/></A> 
         <A href="https://instagram.com/gaurab8476?utm_medium=copy_link" ><FaInstagram size="3%"  color="white"/></A> 
         </div>
         <div>
             <B>From Gaurab!!!😁😄</B>
         </div>
        </div>
        
    )
}
const B = styled.p`
color:white;
font-size:30px;
padding-top:18%;
@media(max-width:768px){
    padding-top:64%;
}
`;
const P = styled.p`
padding-top:18%;
color:white;
font-size:30px;

`;
const A = styled.a`
padding-right:2%;
@media(max-width:768px){
    padding-top:34%;
}
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
export default Contact
