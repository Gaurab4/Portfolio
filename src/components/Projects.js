// import styled from "styled-components";
// import React from 'react'



// const Viewers = () => {
//     return (
    
//         <Container>
//         <Back/>
        

//            <Wrap >

//            <a href="https://github.com/Gaurab4/Daan"><img src='/images/daan.svg' alt="" /></a>
//            <p>its an App</p>
//            </Wrap>
//            <Wrap>
//            <a href="https://github.com/Gaurab4/disneyPro"><img src='/images/disney.png' alt="" /></a>   
//            </Wrap>
//            <Wrap>
//                <a href="https://github.com/Gaurab4/web-amazon-clone"><img src='/images/amazon.png' alt=""/></a>
//            </Wrap>
//            <Wrap>
//            <a href="https://github.com/Gaurab4/cryptoUpdate"><img src='/images/crypto.png' alt=""/></a>
              
//            </Wrap>
//            <Wrap>
//            <a href="https://github.com/Gaurab4/chat_app"><img src='/images/whatsapp.png' alt=""/></a> 
//            </Wrap>
//            <Wrap>
//            <a href="https://github.com/Gaurab4/RandomPhotoGenerator"><img src='/images/random.jpeg' alt=""/></a>
//            </Wrap>


//         </Container>
//     )
// }

// const Back = styled.div`
// height:100%;
// background-position:top;
// background-size:cover;
// background-repeat:no-repeat;
// background-image: url("/images/otherback.jpeg");
// position: absolute;
// top:0;
// right:0;
// left:0;
// z-index:-1;
// `;

// const Container = styled.div`
// padding-top:20%;
// padding-left:2%;
// padding-right:2%;
// padding-bottom:30% ;
// display:grid;
// gap: 25px;
// position:relative;
// flex-flow:row nowrap;
// justify-content:flex-end;
//   grid-template-columns: repeat(3, minmax(0, 1fr));
//   @media (max-width: 768px) {
//     grid-template-columns: repeat(1, minmax(0, 1fr));
//   }

// `;

// const Wrap = styled.div`
// padding-top:68%;
// border-radius:15px;
// box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
// curser:pointer;
// overflow:hidden;
// position:relative;
// transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
//   border: 2px solid rgba(249, 249, 249, 0.1);

// img{
//         inset:0px;
//         display:block;
//         height:100%;
//         object-fit:cover;
//         opacity:1;
//         position:absolute;    
//         width:100%;
//         top:0;
        

// p{
    
//     opacity:1;
//     text-align:left;
//     font-size:10px;
//     z-index:1;
//     color:black;

// }


// &:hover{
//     box-shadow: rgb( 0 0 0/80%) 0px 40px 58px -16px ,rgb(0 0 0 /72%) 0px 30px 22px -10px;
//    transform:scale(1.1);
//    @media  (max-width:768px) {
//        transform:scale(1.3)
//    }

// }

// `;



// export default Viewers

import styled from "styled-components";
import React from 'react'



const Projects = () => {
    return (
        <Container>
        <Back/>
           <Wrap>
           <a href="https://github.com/Gaurab4/Daan"><img src='/images/daan.png' alt="" /></a>
           <br></br>
           <br></br>
           <br></br>
               <p>
                   Its an Online Blood  Bank ,<br></br>
                   where user can directly talk with the donar.<br>
                   </br>
                   
               </p>
               
                  
               
           </Wrap>
           <Wrap>
           <a href="https://github.com/Gaurab4/disneyPro"><img src='/images/disney.png' alt="" /></a>   
           <br></br>
           <br></br>
           <br></br>
               <p > It is a Disney+ Hotstar Web Clone <br></br>
               With Firebase for auth.
               </p>
              
              
           </Wrap>
           <Wrap>
           <a href="https://github.com/Gaurab4/web-amazon-clone"><img src='/images/amazon.png' alt=""/></a>
           <br></br>
           <br></br>
           <br></br>
               <p>
                   Its an Amazon  Shopping Website Clone <br></br>
                 
                   
               </p>
           </Wrap>
           <Wrap>
           <a href="https://github.com/Gaurab4/cryptoUpdate"><img src='/images/crypto.png' alt=""/></a>
           <br></br>
           <br></br>
           <br></br>
               <p > It is a Cryptocurrency Live<br></br> Data Website <br></br>
               
               </p>
           </Wrap>
           <Wrap>
           <a href="https://github.com/Gaurab4/chat_app"><img src='/images/whatsapp.png' alt=""/></a> 
           <br></br>
           <br></br>
           <br></br>
               <p > It's is a WhatsApp UI Clone <br></br>
               </p>
           </Wrap>
           <Wrap>
           <a href="https://github.com/Gaurab4/RandomPhotoGenerator"><img src='/images/random.png' alt=""/></a>
           <br></br>
           <br></br>
           <br></br>
               <p > It is a Random Photo Generator  <br></br>
               Using Swift.
               </p>
           </Wrap>
    
         
        </Container>
    )
}

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


const Container = styled.div`
padding-right:2%;
padding-left:2%;

padding-top:20%;
display:grid;
gap: 25px;
position:relative;
flex-flow:row nowrap;
justify-content:flex-end;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

`;

const Wrap = styled.div`
padding-top:68%;
border-radius:15px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
curser:pointer;
overflow:hidden;
position:relative;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 2px solid rgba(249, 249, 249, 0.1);

img{
        inset:0px;
        display:block;
        height:100%;
        object-fit:cover;
        opacity:1;
        position:absolute;    
        
        width:100%;
        
        top:0;
        
        webkit-filter: blur(4px); 
        filter: blur(3px); 
        z-index:-1;
    
    }

p{
margin-left:2%;
    opacity:0;
    text-align:left;
    font-size:10px;
    z-index:0;
    font-size:20px;
    

}


&:hover{
    box-shadow: rgb( 0 0 0/80%) 0px 40px 58px -16px ,rgb(0 0 0 /72%) 0px 30px 22px -10px;
  
   @media  (max-width:768px) {
      
   }
   
    img{
        webkit-filter:grayscale(100%) blur(0px); 
        filter: blur(0px); 
        
        z-index:1;
       
    }

    p{
        font-
    transition:0.8s;
    opacity:1;
    z-index:2;

    }

}


`;



export default Projects