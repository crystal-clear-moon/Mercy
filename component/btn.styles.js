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
    padding: 0rem 0.7rem;
    svg {
        color: black;
        &:hover {
            cursor: pointer;
            color: blue;
        }
    }
    @media only screen and (max-width: 1024px) {
        padding: 0rem 0.4rem;
    }
`;