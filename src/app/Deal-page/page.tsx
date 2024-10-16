import React from 'react';
import Header from '@/app/components/Header/header';
import Footer from '@/app/components/Footer/footer';
import Herosection from '../components/Hero-section/Herosection';
import styles from '@/app/page.module.css';
import Image from 'next/image';

function Deals() {
  return (
    <>
    <Header />
    <h1 className={styles.dealpageHeading}>Deals are valid only witin 48hours</h1>
    <Herosection />
    <section className={styles.placelist}>
     <div className={styles.placeone}>
      <div><Image
       width={200}
       height={240}
       src="/Beachside-view.jpg"
       alt="image of product one"></Image></div>
       <p className={styles.p}> 25% off latest offer</p>
       <button>Book Now</button>
     </div>

     <div className={styles.placeTwo}>
     <div><Image
       width={200}
       height={240}
      src="/Faisal-mosque.jpg"
       alt="image of product one"></Image></div>
       <p className={styles.p}>Get 20% off</p>
      <button>Book Now</button>
     </div>
    

     <div className={styles.placeThree}>
     <div><Image
       width={200}
       height={240}
       src="/Beachside.png"
       alt="image of product one"></Image></div>
       <p className={styles.p}>50% off Now</p>
      <button>Book Now</button>
     </div>

     <div className={styles.placeFour}>
     <div><Image
       width={200}
       height={240}
       src="/scenery.png"
       alt="image of product one"></Image></div>
       <p className={styles.p}>Get 20% off</p>
      <button>Book Now</button>
     </div>
   </section>
    <Footer />
    </>
  )
}

export default Deals;