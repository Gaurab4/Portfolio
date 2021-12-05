import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
      <NavBar>
      <Logo href="/" >
        <img src="/images/avatar.svg" alt=""  ></img>
      </Logo>
<NavMenu  >
<a href="/" style={{ textDecoration: 'none' }}>
  <span>HOME</span>
</a>
<a href="/aboutus" style={{ textDecoration: 'none' }}>
  <span>ABOUT ME</span>
</a>
<a href="/projects" style={{ textDecoration: 'none' }}>
  <span>Projects</span>
</a>
<a href="/contact" style={{ textDecoration: 'none' }}>
  <span>CONTACT</span>
</a>

</NavMenu>
      </NavBar>
    )
}

const NavBar = styled.nav`
position:fixed;
top:0;
left:10%;
right:0;
height:80px;
background:transparent;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 30px;
z-index:3;
display: flex;
  flex-direction: row;

`;


const Logo = styled.a`
padding:0;
width:120px;
margin-top:8px;
max-height:80px;
display:inline-block;
img{
  display:block;
  width:100%;
  
}


&:hover{
  
   transform:scale(1.1,1.1);
}
@media (max-width: 768px) {
        width:100px;
        margin-left:-60px;
  }
   
`;
const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  color: inherit;
  text-decoration: inherit;
  text-transform: uppercase;
  outline: none;


a{

  display:flex;
  align-items:center;
  padding:0 15px;
  
  
  img{
    z-index:auto;
    curser:pointer;

  }
  span{
    color:rgb(249,249,249);
    font-size:13px;
    letter-spacing:1.0px;
    position:relative;
    white-space:nowrap;
    padding:2px 0;
    text-align:right;
    textDecoration:none;
    
  }
}

@media(max-width:768px){
    
}


`;
export default Header
