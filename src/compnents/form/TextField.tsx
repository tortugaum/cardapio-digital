import React from 'react';

import Styles from '../../styles/TextField.module.css';
import IconLoader from '../IconLoader';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}
interface TextFieldProps {
  name: string;
  value: string;
  type: string;
  icon: IconProps;
  onChange: (...args: any[]) => void;
}
function TextField({ name, value, type, onChange, icon }: TextFieldProps) {
  const { name: iconName, size = 32, color = 'black' } = icon || {};
  return (
    <div className={Styles.fieldContainer}>
      <IconLoader icon={iconName} size={size} color={color} />
      <input name={name} type={type} onChange={onChange} placeholder={value} />
    </div>
  );
}

export default TextField;
