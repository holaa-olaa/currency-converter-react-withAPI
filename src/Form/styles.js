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