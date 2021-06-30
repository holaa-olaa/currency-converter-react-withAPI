import styled from 'styled-components';

export const StyledResult = styled.p`
    text-align: center;
    text-decoration: solid;
    letter-spacing: 1.7px;
    padding: 10px;
    margin: 5px;
    background-color: ${({ theme }) => theme.colors.lightBlue};
    color: ${({ theme }) => theme.colors.white};
    max-width: 100%;
    border-radius: 15px;
`;