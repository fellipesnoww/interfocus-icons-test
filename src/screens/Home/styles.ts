import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #404040;
    flex: 1;
    align-items: center;
    justify-content: center;
`;


export const IconLabel = styled.Text`
    font-family: ${({theme}) => theme.fonts.brand};    
    color: ${({theme}) => theme.colors.text};

`;