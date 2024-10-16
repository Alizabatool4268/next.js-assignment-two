import styles from "@/app/page.module.css";

export default function Footer(){
    return(
    <footer className={styles.footer}>
        <div>Headout, the best Experiences</div>
        <ul>
            <li  className={styles.li}>Blog</li>
            <li  className={styles.li}>Reviews</li>
            <li  className={styles.li}>About us</li>
        </ul>
        <ul>
            <li  className={styles.li}>Deals</li>
            <li  className={styles.li}>Best Spots</li>
            <li  className={styles.li}>VIP Experiences</li>
        </ul>
    </footer>
    )
}