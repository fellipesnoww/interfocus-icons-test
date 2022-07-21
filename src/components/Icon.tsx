import React from 'react';
import { View } from 'react-native';
import { createIconSet } from '@expo/vector-icons';
import configuration, { BrandNames, Configuration, DefaultNames, FillNames } from '../constants/FontConfigurations';

interface IconProps{        
    size: number;
    color: string;
}
interface DefaultFamily extends IconProps{
  family?: 'default';    
  name: DefaultNames; 
}
interface BrandFamily extends IconProps{
  family?: 'brands';    
  name: BrandNames;   
}
interface FillFamily extends IconProps{
  family?: 'fill';    
  name: FillNames;
}

interface InterfocusIcon extends IconProps{
  family: 'default' | 'brands' |'fill'; 
  name: DefaultNames | BrandNames | FillNames
}

//Cria o component que determina a lógica de seleção de fonte e glyph
export function Icon({family, ...rest}: InterfocusIcon) {

    //Retona a configuração de acordo com a fonte selecionada
    function getConfiguration(familyName: string): Configuration {        
        return configuration[familyName];        
    }

    const {glyphMap, fontName, fontPath} = getConfiguration(family); //Obtem as configurações com base na familia de icones

    //Cria um componente utilizando a vector icons de acordo com a familia e nome de icone
    const InterfocusIcon = createIconSet(glyphMap, fontName, fontPath);

  return (
    <InterfocusIcon {...rest}/> 
  );
}

//Exporta novos componentes que setam por padrão a familia 
export function DefaultIcon({...rest}: DefaultFamily) { return Icon({ family: "default", ...rest}) }
export function BrandIcon({...rest}: BrandFamily) { return Icon({ family: "brands", ...rest}) }
export function FillIcon({...rest}: FillFamily) { return Icon({ family: "fill", ...rest}) }