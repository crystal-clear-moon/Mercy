import styled from 'styled-components';
export const MainContainer = styled.div.attrs({
    className: "flex flex-col items-center"
})`
    min-height: 100vh;
    overflow: hidden;
    background-image: linear-gradient(to bottom, #151a2a, #56334a);
    background-repeat:no-repeat;
    background-position: center center;
    position: relative;
    .fade-back {
        width: 100%;
        height: 150px;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 100;
        background-image: linear-gradient(to bottom, #ffffff00 0%, #ffffffff 100%);
    }
    .rocket {
        width: 200px;
        height: 200px;
        position: absolute;
        top: calc( 100vh - 200px );
        left: 200px;
        z-index: 100;
        opacity: 70%;
    }
    .middle-img {
        width: 100%;
        position: absolute;
        top: 400px;
        left: 0;
        margin-top: 430px;
        img {
            width: 60px;
            margin-right: auto;
            margin-left: auto;
        }
    }
    .star-img {
        width: 100%;
        position: absolute;
        top: 0px;
        left: 0;
        z-index: 10;
        img {
            width: 100%;
        }
    }
    .moon-img {
        width: 100%;
        margin-top: 3rem;
        z-index: 20;
        display: flex;
        justify-content: center;
        .img {
            width: 609px;
            height: 609px;
            margin-right: auto;
            margin-left: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4rem 7rem 6rem 5rem;
        }
    }
    .moon-img::before {  
        content: "";
        background-image: url("/Moon.png");
        position: absolute;
        opacity: 0.5;
        width: 609px;
        height: 609px;
    }
    .header-title {
        font-family: akira_expanded;
        color: #fff4ce;
        font-size: 3.5rem;
    }
    .logo-img {
        width: 8rem;
        height: fit-content;
        margin-top: 2rem;
    }
    .btn-container {
        font-family: akira_expanded;
        display: flex;
        .btn {
            color: #c3e9fc;
            padding: 0rem 1rem;
            &:hover {
                cursor: pointer;
                color: #fff4ce;
            }
        }
    }
`;

export const MoonContainer = styled.div.attrs({
})`
    z-index: 100;
    text-align: center;
    .moon-title {
        font-family: akira_expanded;
        color: #2f2e45;
        font-size: 1.4rem;
        margin-bottom: 0.75rem;
    }
    .moon-desc {
        font-size: 1rem;
    }
    .btn-tele {
        background-color: #5d7a9e;
        &:hover {
            background-color: #945b82;
            cursor: pointer;
        }
    }
    .btn-buy {
        background-color: #945b82;
        &:hover {
            background-color: #5d7a9e;
            cursor: pointer;
        }
    }
`;

export const EleContainer = styled.div.attrs({
    className: "max-w-screen-xl z-50 flex mb-36 justify-around w-full"
})`
    .ele-title {
        font-family: akira_expanded;
        font-size: 2rem;
        color: #ffc3bd;
    }
    .container {
        margin: 12rem 0rem;
    }
    .ele-desc {
        color: #74d0ef;
        font-size: 1.3rem;
    }
    .btn {
        border-radius: 5rem;
        padding: 0.5rem 2rem;
        margin-top: 0.75rem;
        background-color: #74d0ef;
        text-align: center;
        font-size: 1.3rem;
        float: right;
        &:hover {
            background-color: #ffc3bd;
            cursor: pointer;
        }
    }
`;

export const LeftContainer = styled.div.attrs({
    className: "mt-48 mx-8 w-6/12"
})`
    text-align: right;
`;

export const RightContainer = styled.div.attrs({
    className: "mx-8 w-6/12"
})`

`;
export const SectionTitle = styled.div.attrs({
    className: "text-xl sm:text-4xl lg:text-6xl mx-auto"
})`
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    color: black;
`;
