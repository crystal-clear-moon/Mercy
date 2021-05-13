import styled from 'styled-components';

export const Box = styled.div.attrs({
    className: "m-1 sm:m-6 p-4 sm:p-12 my-auto text-xl bg-transparent rounded-3xl max-w-screen-xl"
})`
    margin-top: 1rem;
    margin-bottom: 4rem;
    border-color: #5f543e !important;
    .header {
        font-weight: 900;
        font-size: 6rem;
        line-height: 1.1;
        padding-bottom: 3rem;
        font-family: Roboto,sans-serif;
        img {
            height: fit-content;
            margin: auto 2rem auto 2rem;
        }
        @media only screen and (max-width: 425px) {
            padding-bottom: 2rem;
        }
        .header-desc {
            margin-top: 0.5rem;
            font-size: 1.7rem;
        }
        .div {
            color: black;
        }
    }
    div {
        p {
            color: #5f543e;
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
    color: #ffc3bd;
`;

export const Img = styled.img.attrs({
    className: ""
})`
    height: fit-content;
    width: 445px;
`;

export const RoadMap = styled.div.attrs({
    className:"text-xl text-center flex flex-wrap justify-around"
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
            color: #5f543e;
            svg {
                color: #ffc3bd;
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

export const BoxContainer = styled.div.attrs({
    className: "flex flex-wrap js-show-on-scroll"
})`
}
`;

export const SubBox = styled.div.attrs({
    className: "flex rounded-lg flex-col items-center shadow-lg hover:shadow-2xl"
})`
    width: 30%;
    margin: 1rem;
    padding: 2rem;
    @media only screen and (max-width: 1024px) {
        width: 100%;
        margin: 2rem 2rem;
    }
    @media only screen and (max-width: 425px) {
        width: 100%;
        margin: 1rem 0rem;
        padding: 1rem;
    }
    .box-header {
        font-family: 'Montserrat', sans-serif;
        font-size: 1.375rem;
        color: black;
        margin-bottom: 0.25rem;
        font-weight: 800;
    }
    .box-body {
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        text-align: center;
        color: #415076;
        padding-top: 0px;
    }
    .box-img {
        width: 25%;
        margin: 2rem 0rem;
    }
    &:hover {
        cursor: pointer;
        background-color: #f9f9f9;
    }
}
`;

export const StepContainer = styled.div.attrs({
    className: " flex justify-around"
})`
    margin-top: 100px !important;
    max-width: 1440px;
    .header {
        
    }
}
`;

export const SubStep = styled.div.attrs({
    className: "js-show-on-scroll flex flex-col items-center"
})`
    width: 15rem;
    .step-head {
        padding: 1rem 0rem;
        color: #ffc3bd;
        font-size: 2rem;
        .step-num {
            padding: 0.2rem 0.7rem;
            margin-right: 0.4rem;
            border-radius: 50%;
            background-color: #c73000;
            color: white;
        }
    }
    .step-body {
        margin: 1rem 0rem rem 0rem;
        display: flex;
        align-items: center;
        svg {
            color: #ffc3bd;
            margin-right: 4px;
        }
    }
    .step-bar {
        width: 100%;
        height: 0.5rem;
        background-color: #ddd;
        margin-top: 2rem;
        border-radius: 0.25rem;
    }
}
`;

export const HowTo = styled.div.attrs({
    className: "flex flex-col w-10/12 py-18"
})`
    max-width: 1024px;
    font-family: 'Montserrat',sans-serif;
    font-weight: bold;
    .header {
        text-align: center;
        .currency {
            font-size: 1.25rem;
        }
        div {
            margin: 1.5rem 0rem;
        }
    }
`;