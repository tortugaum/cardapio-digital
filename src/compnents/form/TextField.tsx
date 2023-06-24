import React from 'react';

import Styles from '../../styles/TextField.module.css';
import IconLoader from '../IconLoader';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}
interface TextFieldProps {
  value: string;
  type: string;
  icon: IconProps;
}
function TextField({ value, type, icon }: TextFieldProps) {
  const { name, size = 32, color = 'black' } = icon || {};
  return (
    <div className={Styles.fieldContainer}>
      <IconLoader icon={name} size={size} color={color} />
      <input type={type} placeholder={value} />
    </div>
  );
}

export default TextField;
