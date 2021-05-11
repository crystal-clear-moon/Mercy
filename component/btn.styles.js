import styled from 'styled-components';


export const Header = styled.a.attrs({
    className: "px-2 py-1 text-xl  text-white text-center"
})`
    &:hover {
        cursor: pointer;
        color: green;
    }
`;