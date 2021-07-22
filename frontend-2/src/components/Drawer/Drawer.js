import ReactDOM from 'react-dom';
import styles from './Drawer.module.scss';


const Drawer = (props) => {

    const content = <div>Drawer</div>;

    return ReactDOM.createPortal(content, document.getElementById('portals'));
};

export default Drawer;