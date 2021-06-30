import styled from 'styled-components';

export const StyledInput = styled.input`
    width: 100%;
    max-width: 300px;
    padding: 10px;
    border: solid 2px ${({ theme }) => theme.colors.grey};
    border-radius: 5px;
`;