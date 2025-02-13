import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer"
import Herosection from "./components/Hero-section/Herosection"

export default function Page() {
  return (
    <>
      <Header />
      <Herosection />
      <section className={styles.placelist}>
     <div className={styles.placeone}>
      <div><Image
       width={200}
       height={240}
       src="/Beachside-View.jpg"
       alt="image of product one"></Image></div>
      <button>Book Now</button>
     </div>

     <div className={styles.placeTwo}>
     <div><Image
       width={200}
       height={240}
       src="/Faisal-mosque.jpg"
       alt="image of product one"></Image></div>
       <button>Book Now</button>
     </div>
    

     <div className={styles.placeThree}>
     <div><Image
       width={200}
       height={240}
       src="/Beachside.png"
       alt="image of product one"></Image></div>
      <button>Book Now</button>
     </div>

     <div className={styles.placeFour}>
     <div><Image
       width={200}
       height={240}
       src="/scenery.png"
       alt="image of product one"></Image></div>
       <button>Book Now</button>
     </div>
   </section>
      <Footer />
    </>
  );
}
