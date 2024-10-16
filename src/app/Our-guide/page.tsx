import React from 'react'
import Header from "@/app/components/Header/header";
import Footer from "@/app/components/Footer/footer";
import Herosection from '../components/Hero-section/Herosection';
import styles from "@/app/page.module.css";

function OurGuide() {
  return (
    <>
    <Header />
    <Herosection />
    <div className={styles.ourguide}>
    <h1>Our guide</h1>
    <p> To book unique experiences from Headout, you fist need to sign in and select the place you want 
        to visit. You can get amazing deals from our website book the best place and feel the best user
        Experience
    </p>
    </div>
    <Footer />
    </>
  )
}

export default OurGuide;