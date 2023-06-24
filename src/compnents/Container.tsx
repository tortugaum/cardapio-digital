import React, { ReactNode } from 'react';

import Styles from '../styles/Container.module.css';

interface MyProps {
  children?: ReactNode;
}
function Container({ children }: MyProps) {
  return <div className={Styles.container}>{children}</div>;
}

export default Container;
