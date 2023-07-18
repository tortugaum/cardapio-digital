import React from 'react';

import Styles from '../styles/HamburgerMenu.module.css';

interface Props {
  showMenu: boolean;
}

export default function HamburgerMenu({ showMenu }: Props) {
  return (
    showMenu && (
      <div className={Styles.container}>
        <ul>
          <li>11111111111111</li>
          <li>22222222222</li>
          <li>3333333333333</li>
          <li>4444444444444</li>
          <li>555555555555</li>
        </ul>
      </div>
    )
  );
}
