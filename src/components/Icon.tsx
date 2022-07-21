import React from 'react';
import { View } from 'react-native';
import { createIconSet } from '@expo/vector-icons';

interface IconProps{
    family: 'brands' | 'default' | 'fill';
    name: string;
    size: number;
    color: string;
}

const glyphMap = { 'add': 0xe900};
const CustomIcon = createIconSet(glyphMap, 'Interfocus-Default', require('../../assets/fonts/interfocus-default.ttf'));

const configuration = {
    brands: {
        fontName: "Interfocus-Brand",
        fontPath: require('../../assets/fonts/interfocus-brands.ttf'),
        glyphMap: ""
    },
    default: {
        fontName: "Interfocus-Default",
        fontPath: require('../../assets/fonts/interfocus-default.ttf'),
        glyphMap: ""
    },
    fill:{
        fontName: "Interfocus-Fill",
        fontPath: require('../../assets/fonts/interfocus-fill.ttf'),
        glyphMap: ""
    }
}

export function Icon({...rest}: IconProps) {
  return (
    <CustomIcon {...rest}/> 
  );
}