import styled from 'styled-components';

export const NavStyle = styled.nav`
     width: 100%;
    height: fit-content;
    display: flex;
    position: fixed;
    background-color: purple;
    z-index: 50;
    top: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
.navbar{
    display: flex;
    justify-content: space-between;
    gap:10px;
}
.navbar__links{
    display: flex;
    gap: 30px;
    align-items: center;
    list-style: none;
    font-size: 1.2rem;
    font-weight: 500;
    margin-right: 200px;
}
   .logo{
    width:8%;
    margin: 10px 0 10px 100px;
   }
.link{
    text-decoration: none;
    color: #ffff;
}
.link:hover{
    color: #94e5ff;
}
`;