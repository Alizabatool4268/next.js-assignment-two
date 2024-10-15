import styles from '@/app/page.module.css'
import Link from 'next/link';

export default function Header (){
    return(
        <header>
            <nav>
                <ul className = {styles.navbar}>
                    <div className={styles.logo}>Headout</div>
                    <li className={styles.li}>Pakages</li>
                    <li className={styles.li}>Deals</li>
                    <li className={styles.li}>Our Guide</li>
                </ul>
            </nav>
        </header>
        
       
    )
}