import styled, { keyframes ,css } from "styled-components"; // Make sure to install styled-components


export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


export const StyledContextTyeHotel = styled.div`
top: 330px;
position: absolute;
left: 0%;
width: 330px;
height: 170px;
right:-567px;
margin: auto;
z-index: 1000;
padding: 8px;
box-shadow: 17px 20px 40px rgba(0, 0, 0, .21);
background: #fff;
opacity: 0;
border-radius:  1.25rem;;
  animation: ${fadeIn} 0.8s ease forwards; // Apply the fadeIn animation
  &.fade-in {
    animation: ${fadeIn} 0.3s ease forwards; // Apply the fadeIn animation
  }
`;


export const StyledMenuItem = styled.div`
  padding:0px;
  transition: background 0.3s;
  display: flex;
  align-items: center;
`;


export const StyledMenuItemNumber = styled.div`
  padding:0px;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;


export const StyledMenuItemButton = styled.div`
bottom: 0;
position: fixed;
align-items: center;
display: flex;
right: 6px;
left: 2px;
justify-content: center;
height: 50px;
border-top: 1px solid rgb(224, 224, 224);
`;

export const StyleTitleHotel = styled.span`
font-weight: 500;
`
export const StyleSpan = styled.span`
display: flex;
align-items: center;
font-weight: 300;

`
export const StyleNumberPeople = styled.input`
width: 18%;
text-align: center;
border: solid 1px #dbdde1;
height: 39px;
border-radius: 5px;

`


export const StyleSpanIcons = styled.span`
display: flex;
align-items: center
margin-right: 10px;
`

export const StyleGroup= styled.div`
`


export const MainProduct = styled.span`
width: 100%;
display: flex;
box-shadow: 17px 20px 40px rgba(0, 0, 0, .21) ;
justify-content: space-between;
align-items: center;
border-radius:25px;
`


export const ImginProduct = styled.img`
width: 28%;
object-fit: cover;
height:12rem;
border-bottom-left-radius:8%;
border-top-left-radius: 8%;
`
export const SectionSearch = styled.section`
border-bottom: 1px solid rgb(224, 224, 224);
height: 13rem;
`


export const ContainerIcons = styled.div`
display: flex;
justify-content: space-between;
`


export const ContaineButton = styled.div`
width:17%;
`

export const ContainerHeader = styled.header`
border-bottom: 1px solid rgb(224, 224, 224);
`

export const  TextWidth = styled.div`
font-weight: 400;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
width: 470px
`