import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <div className={styles.all}>

            <div className={styles.left}>
                <p className={styles.contact}>Contact:<br/>
                    abdullahizzldin1@gmail.com</p>
            </div>

            <div className={styles.right}>
                <div className={styles.images}>
                    <img className={styles.insta} src={"insta.png"}/>
                    <img className={styles.whatsapp} src={"Whatsapp.png"}/>
                    <img className={styles.tiktok} src={"tiktok.png"}/>
                </div>
                <p className={styles.BottomText}>
                    Follow us!
                </p>
            </div>

        </div>
    )
}
