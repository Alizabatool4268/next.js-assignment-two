import styles from "@/app/page.module.css";


export default function Footer(){
    return(
        <footer className={styles.footer}>
            <section className={styles.footer}>
                <ul>
                    <li>Blog</li>
                    <li>Know More</li>
                    <li>Best Experiences</li>
                </ul>
            </section>
            <section className={styles.footer}>
                <ul>
                    <li>Get in touch</li>
                    <li>Book now</li>
                    <li>Reviews</li>
                </ul>
            </section>
        </footer>

    )

    
}