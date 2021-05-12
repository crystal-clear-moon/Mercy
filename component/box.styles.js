import styled from 'styled-components';
export const Box = styled.div.attrs({
    className: "m-1 sm:m-6 p-4 sm:p-12 my-auto text-xl bg-transparent rounded-3xl border-0 max-w-screen-xl sm:border-8"
})`
    margin-top: 4rem;
    margin-bottom: 4rem;
    border-color: orange !important;
    color: orange;
    .header {
        font-weight: 900;
        font-size: 6rem;
        line-height: 1.1;
        padding-bottom: 5rem;
        font-family: Roboto,sans-serif;
        img {
            height: fit-content;
            margin: auto 2rem auto 2rem;
        }
        @media only screen and (max-width: 425px) {
            padding-bottom: 2rem;
        }
    }
    div {
        p {
            color: #FFA500;
            padding-top: 1rem;
        }
    }
    .img-box {
        display: flex;
        width: 100%;
        justify-content: space-around;
        padding: 2rem 0rem;
        img {
            width: 45%;
            height: fit-content;
        }
    }
    @media only screen and (max-width: 425px) {
        margin-bottom: 1rem;
    }
`;
export const Strength = styled.span.attrs({
})`
    color: red;
`;

export const Img = styled.img.attrs({
    className: "w-10/12 sm:w-4/12 lg:w-4/12"
})`
    height: fit-content;
`;

export const RoadMap = styled.div.attrs({
    className:"text-xl text-yellow-500 text-center flex flex-wrap justify-around"
})`
    .phase {
        align-items: start;
        display: flex;
        flex-direction: column;
        width: 23%;
        margin: 2rem 0rem;
        .header {
            color: white;
            padding-bottom: 1rem;
        }
        .step {
            display: flex;
            text-align: start;
            svg {
                margin-right: 1rem;
            }
        }
        @media only screen and (max-width: 1024px) {
            width: 48vw;
        }
        @media only screen and (max-width: 425px) {
            width: 90vw;
        }
    }
`;

export const BgDiv = styled.div.attrs({
})`
    background: url("svg/back.svg");
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    background-size: contain;
    background-position: 50% 100%;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
}
`;