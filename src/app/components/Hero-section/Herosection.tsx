import styles from "@/app/page.module.css";
import React from 'react';
import Image from "next/image";

function Herosection() {
  return (
    <div className={styles.herosection}>
    <div className={styles.herotext}>
       <h1>Ready to Headout</h1>
        book unique Experiences through headout
    </div>
      <Image
      className={styles.heroimage}
      width={400}
      height={350}
      src="/Faisal-mosque.jpg "
      alt="Hero Image"
      ></Image>
  </div>
  )
}

export default Herosection;