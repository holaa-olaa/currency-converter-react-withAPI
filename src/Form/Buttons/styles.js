import styled from 'styled-components';

export const Wrapper = styled.span`
    display: block;
    margin: 40px 5px;
`;

export const Button = styled.button`
    display: block;
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
    border: none;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: 1.6px;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;