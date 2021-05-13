import styled from 'styled-components';
export const MainContainer = styled.div.attrs({
    className: "flex flex-col items-center"
})`
    min-height: 100vh;
    overflow: hidden;
    background-image: linear-gradient(to bottom, #151a2a 0%, #56334a 98%, #a6839a 99%, white 100%);
    background-repeat:no-repeat;
    background-position: center center;
    position: relative;
    .middle-img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        margin-top: 20rem;
        img {
            width: 60px;
            margin-right: auto;
            margin-left: auto;
        }
    }
    .star-img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        img {
            width: 100%;
        }
    }
    .moon-img {
        width: 100%;
        position: absolute;
        left: 0;
        img {
            width: 80vh;
            margin-right: auto;
            margin-left: auto;
        }
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
    margin-top: 15rem;
    width: 60vh;
    z-index: 100;
    .moon-title {
        font-family: akira_expanded;
        color: #2f2e45;
        font-size: 1.8rem;
        margin-bottom: 2rem;
    }
    .moon-desc {
        font-size: 1.3rem;
    }
    .btn-tele {
        background-color: #5d7a9e;
    }
    .btn-buy {
        background-color: #137dbb;
    }
`;

export const EleContainer = styled.div.attrs({
    className: "max-w-screen-xl z-50 flex mt-48 mb-36 justify-around w-full"
})`
    .ele-title {
        font-family: akira_expanded;
        font-size: 2rem;
        color: #f38ab8;
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
        padding: 1rem 2rem;
        background-color: #74d0ef;
        text-align: center;
        font-size: 1.3rem;
        float: right;
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