import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #404040;
    flex: 1;
    align-items: center;
    justify-content: space-between;
`;


export const Label = styled.Text`
    
    color: ${({theme}) => theme.colors.text};
    font-size: 48px;
`;