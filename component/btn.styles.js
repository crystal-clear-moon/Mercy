import styled from 'styled-components';


export const Header = styled.a.attrs({
    className: "px-2 py-1 text-xl text-center"
})`
    color: white;
    &:hover {
        cursor: pointer;
        color: #e29b6d;
    }
`;

export const Mainbox = styled.div.attrs({
    className: "flex justify-center flex-col sm:flex-row bg-black min-h-screen max-h-screen h-screen"
})`
    minWidth: 1024px;
    @media only screen and (max-width: 425px) {
        minWidth: 425px;
    }
`;

export const MediaIcon = styled.a.attrs({
})`
    padding: 0.5rem;
    margin-right: 0.2rem;
    margin-left: 0.2rem;
    background-color: #ffffff44;
    border-radius: 100%;
    svg {
        color: black;
        width: 24px;
        height: 24px;
        z-index: 100;
        background-color: white;
        &:hover {
            cursor: pointer;
            color: white;
        }
    }
    @media only screen and (max-width: 1024px) {
        padding: 0rem 0.4rem;
    }
`;