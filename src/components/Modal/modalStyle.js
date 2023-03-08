import styled from "styled-components";


export const ModalStyle = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  
  .heading{
    font-size: 30px;
    font-weight: 700;
    margin: 20px 0 0 0;
    color: #FFFFFF;

  }
  .text{
    font-style: normal;
    font-size: 15px;
    font-weight: 400;
    color: #FFFFFF;
  }

  .mymodal{
    width: 30%;
    height: 610px;
    padding: 20px 20px 20px 20px;
    background-color:#2C3539;
    margin: 120px auto;
    display: flex;
    flex-direction: column;
  }
.container{
    margin-top: px;
}
.close{
    width: 100%;
    margin: 0 0 0 45%;
    font-size: 20px;
    cursor: pointer;
}
.bid{
width: 100%;
border-radius: 8px;
 border:none;
background-image: linear-gradient(to right,#5D3FD3 40% ,#F660AB );
color: black;
width: 100%;
height: 48px;
margin: 10% 0;
box-sizing: border-box;
font-weight:600;
cursor: pointer;
}
`;