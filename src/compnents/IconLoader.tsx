/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconType } from 'react-icons';
import * as aiIcons from 'react-icons/ai';
import * as biIcons from 'react-icons/bi';
import * as bsIcons from 'react-icons/bs';
import * as faIcons from 'react-icons/fa';
import * as fiIcons from 'react-icons/fi';
import * as giIcons from 'react-icons/gi';
import * as tbIcons from 'react-icons/tb';

interface IconProps {
  icon: string;
  size: number;
  color: string;
}

const IconLoader = ({ icon, size, color }: IconProps) => {
  const getIcon = (iconName: string) => {
    console.log('geticon', iconName);
    const iconsMap = new Map();
    iconsMap.set('Bs', bsIcons);
    iconsMap.set('Ai', aiIcons);
    iconsMap.set('Bi', biIcons);
    iconsMap.set('Gi', giIcons);
    iconsMap.set('Fa', faIcons);
    iconsMap.set('Tb', tbIcons);
    iconsMap.set('Fi', fiIcons);

    return iconsMap.get(iconName.substring(0, 2));
  };

  const icons: any = getIcon(icon);
  const TheIcon: IconType = icons[icon];
  console.log(TheIcon, size, color);
  return <TheIcon size={size} color={color} />;
};

export default IconLoader;
