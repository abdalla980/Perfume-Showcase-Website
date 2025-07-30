import styles from "./Background.module.css"

export const Background = () => {
    return (
        <div className={styles.Container}>
            <video
                src={"Walking.mp4"}
                className={styles.Video}
                autoPlay
                muted
                loop
                playsInline
            />
            <div className={styles.text1}>
                <p>من الامارات </p>
            </div>
            <div className={styles.text2}>
                <p>للسكندرية</p>
            </div>

            <div className={styles.features}>
                <p>Cash on delivery</p>
                <p>Original Perfumes from the UAE</p>
                <p>Fast delivery all over Egypt</p>
            </div>
        </div>
    )
}
