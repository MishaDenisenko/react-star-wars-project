import styles from "./ErrorMessage.module.css";
import UiVideo from '../UI/UiVideo';

import src from './video/han-solo.mp4';


const ErrorMessage = () => {
    return (
        <>
            <p className={styles.text}>
                The dark side of the force has won. <br />
                We cannot display data.<br />
                Come back when we fix everything
            </p>
            
            <UiVideo classes={styles.video} src={src}/>
        </>

    )
}

export default ErrorMessage;