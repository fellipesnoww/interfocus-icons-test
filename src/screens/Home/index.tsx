import React from 'react';
import {Text} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';


import { Container, Label } from './styles';
import { BrandIcon, DefaultIcon, FillIcon, Icon } from '../../components/Icon';

export function Home() {

  return (
    <Container>
      <Label>TESTE</Label>
      
      {/* Componente da própria lib de icones */}
      <Ionicons name="md-checkmark-circle" size={68} color="green" />    
      
      {/* Componentes criados de acordo com as fontes    */}
      <DefaultIcon name='bookmark' size={68} color="#FFFFFF"/>
      <BrandIcon name='facebook-fill' size={68} color="#FFFFFF"/>
      <FillIcon name='financial' size={68} color="#FFFFFF"/>

      {/* Componente default de icones possibilitando informar a familia */}
      {/* Caso o nome de icone nao pertença a familia, será renderizado um icone de interrogação 
      e um warning será lançado na logbox (a aplicação não será quebrada)
      */}      
      <Icon family="brands" name='box' size={68} color="#FFFFFF"/>

    </Container>
  );
}