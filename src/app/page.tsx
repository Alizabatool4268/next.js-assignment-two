import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer"

export default function Page() {
  return (
    <div>
      <Header />
      <div className={styles.herosection}>
        <div className={styles.blob}></div>
        <div className={styles.blob}></div>
        <div className={styles.herotext}>
          <h1>Ready to Headout</h1>
          book unique Experiences through headout
        </div>
        <Image
          className={styles.heroimage}
          width={450}
          height={400}
          src="/Faisal-mosque.jpg "
          alt="Hero Image"
        ></Image>
      </div>
          <Footer />
    </div>
  );
}
