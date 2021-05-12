import styled from 'styled-components';


export const Header = styled.a.attrs({
    className: "px-2 py-1 text-xl text-center"
})`
    color: #fff4ce;
    &:hover {
        cursor: pointer;
        color: #e29b6d;
    }
`;