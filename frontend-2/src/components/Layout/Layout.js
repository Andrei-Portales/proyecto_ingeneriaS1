import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import styles from './Layout.module.scss';

const Layout = (props) => {
  const theme = useSelector((state) => state.theme.theme);


  const isLightMode = theme !== 'LIGHT';
  const mainClases = `${styles.main} ${isLightMode ? styles['main-dark'] : ''}`;

  return (
    <Fragment>
      <Navigation />
      <div className={mainClases}>{props.children}</div>
    </Fragment>
  );
};

export default Layout;
