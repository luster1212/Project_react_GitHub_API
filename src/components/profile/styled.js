import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    align-items: flex-start;
    font-family: 'Roboto', sans-serif;
`;

export const WrapperInfoUser = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 10vh;
    margin-left: 8px;
    h1{
        font-size: 30px;
        font-weight: bold;
    }
    h2{
        font-size: 24px;
        font-weight: bold;
    }
    h3{
        font-size: 18px;
        font-weight: bold;
    }
    h4{
        font-size: 16px;
        font-weight: bold;
    }
`;

export const WrapperStatus = styled.div `
    display: flex;
    align-items: center;
    div {
        text-align: center;
        margin: 8px;
    }

`;

export const WrapperUserGeneric = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;

    h3{
        margin-right: 8px;
    }
    a{
        font-size: 16px;
        color: blue;
        font-weight: bold;
    }

`;

export const WrapperImg = styled.img`
    border-radius: 50%;
    width: 200px;
    margin: 8px;
`