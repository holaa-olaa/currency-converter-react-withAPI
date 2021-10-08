import styled from 'styled-components';

export const FormWrapper = styled.form`
    margin: auto 10px;
    padding: 30px 30px;
    background-color: ${({ theme }) => theme.colors.botticelli};
    border-radius: 10px;

    @media(max-width:767px) {
        overflow-x: auto;
    }
`;

export const FormLegend = styled.legend`
    font-size: 34px;
    padding: 2px;
    text-transform: uppercase;
`;

export const FormFieldset = styled.fieldset`
    border-radius: 5px;
    padding: 10px;
`;

export const Loading = styled.p`
    color: ${({theme}) => theme.colors.darkBlue};
`;

export const Failure = styled.p`
    color: ${({theme}) => theme.colors.crimson};
`;

export const StyledInput = styled.input`
    width: 100%;
    max-width: 300px;
    padding: 10px;
    border: solid 2px ${({ theme }) => theme.colors.grey};
    border-radius: 5px;
`;