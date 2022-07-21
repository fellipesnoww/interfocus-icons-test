import React from 'react';
import {Text} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';


import { Container, IconLabel } from './styles';
import { Icon } from '../../components/Icon';

export function Home() {

  return (
    <Container>
      <IconLabel >TESTE</IconLabel>
      
      <Ionicons name="md-checkmark-circle" size={32} color="green" /> 
      <Icon name='add'/> 
            
    </Container>
  );
}