import styles from '@/app/page.module.css';
import Link from 'next/link';

export default function Header (){
    return(
        <header>
            <nav>
                <ul className = {styles.navbar}>
                    <div className={styles.logo}>Headout</div>
                    <li className={styles.li}>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li className={styles.li}>
                        <Link href={'/Deal-page'}>Deals</Link>
                    </li>
                    <li className={styles.li}>
                        <Link href={'/Our-guide'}>Our guide</Link>

                    </li>
                </ul>
            </nav>
        </header>
        
       
    )
}