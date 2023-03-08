import styled from "styled-components";

export const CardStyle = styled.div`
width: 400px;
height: 466px;
background: #2C3539;

.logo{
    display:flex;
    width:80%;
    margin: 30px 0 0 35px;
    border-radius: 5px;
}
.card-title{
    margin: 0;
    font-style: normal;
  font-weight: 800;
  font-size: 20px;
    display: flex;
    justify-content: center;
    color: #FFFFFF;
}
.card-description{
    margin: 0;
    font-style: normal;
  font-weight: 500;
  font-size: 15px;
    display: flex;
    justify-content: center;
    color: #FFFFFF;
}
.card-price{
    margin: 0;
    font-style: normal;
  font-weight: 400;
  font-size: 15px;
    display: flex;
    justify-content: center;
    color: #FFFFFF;
}

.more{
  display: flex;
  justify-content: center;
  color: #94e5ff;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  margin-top: 20px;
  text-decoration: none;
  cursor: pointer;
}
.more:hover{
    color: #8A2BE2;
}
`;