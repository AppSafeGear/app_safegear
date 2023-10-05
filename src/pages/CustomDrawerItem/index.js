import React from 'react';
import { DrawerItem } from '@react-navigation/drawer';

const CustomDrawerItem = ({ label, onPress, ...rest }) => (
  <DrawerItem
    label={label}
    onPress={onPress}
    labelStyle={{ fontSize: 15}} 
    {...rest}
  />
);

export default CustomDrawerItem;
