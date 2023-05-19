import Head from 'next/head'
import Image from 'next/legacy/image'
import styles from '@/styles/Home.module.css'
import Featured from '@/components/featured';
import PizzaList from '@/components/PizzaList';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from "react";
import { RxEnter } from 'react-icons/rx';


const pizzas = [
  {
    id: 1,
    title: 'The Spot',
    img: '/img/spot.webp',
    desc: 'A customizable and spicy dish with rice, meat, sauce, salad, and drink. Choose your favorites and enjoy a satisfying meal.',
    price: '$16.99',
    shref: "/Products/6428772c1f3cd6526fd276d6"

  },
  {
    id: 1,
    title: '5 Pc Tenders w/ Fries',
    img: '/img/fries&chicken.webp',
    desc: 'A crispy and juicy combo of chicken tenders and fries. Choose your sauce and enjoy a filling meal.',
    price: '$14.25',
    shref: "/Products/64286e131f3cd6526fd27587"

  },
  {
    id: 1,
    title: 'Beef Patty',
    img: '/img/beefP.webp',
    desc: 'Jamaican beef patties are made with a flaky pastry and filled with a fragrant seasoned beef filling.',
    price: '$3.99',
    shref: "/Products/642878f71f3cd6526fd2777c"

  },
  {
    id: 3,
    title: '5 Pc Chicken',
    img: '/img/chicken.webp',
    desc: 'The 5-piece chicken meal includes chicken, 2 sides, and 2 biscuits, offering a satisfying and filling option.',
    price: '$15.50' ,
    shref: "/Products/6428b53f1f3cd6526fd27b93"

  },
  {
    id: 5,
    title: '6 Pc Wings',
    img: '/img/chickenWings.jpeg',
    desc: 'Enjoy a 6-piece wings meal with your choice of sauce, including options like BBQ, Buffalo, and Bone in Spice.',
    price: '$8.99',
    shref: "/Products/6429b2146e949cdbabc23843"

  },
  {
    id: 6,
    title: 'Tres Leches Cake',
    img: '/img/tres.webp',
    desc: 'A cake soaked in a sweet mixture of three different milks, topped with a fluffy whipped cream frosting.',
    price: '$5.00' ,
    shref: "/Products/6428b85e1f3cd6526fd27c76"

  }
];




export default function Home({ pizzaList }) {

  return (

    <div className={styles.container}>
      <Head>
        <title>USA Chicken and Biscuits</title>
        <meta name="description" content="Best Chicken Restraunt in New Hampshire" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img className={styles.banner} src={"/img/banner.jpg"} alt="banner"/>

      <div className={styles.buttons}>
      <button className={styles.button}>Order Now from Manchester            <RxEnter className={styles.icon} />

</button>
     <button className={styles.button1} disabled>Order Now from Nashua       <RxEnter className={styles.icon} />
</button>

      </div>
      <div className={styles.content}>
        <div className={styles.words}>
          <div className={styles.paragraph1}>
        </div>
        </div>  
      </div>
      <h2 className={styles.top}>Popular Dishes       <span className={styles.scroller}>Scroll &gt;</span>     </h2>
       <div className={styles.pizzaListContainer}>
      <ul className={styles.pizzaList}>
    
      {pizzas.map(pizza => (
  <li key={pizza.id} className={styles.pizzaItem}>
    <Link href={pizza.shref}>
      <div>
        <div className={styles.imageWrapper}>
          <Image src={pizza.img} alt={pizza.title} width={300} height={200}/>
        </div>
        <h3 className={styles.pizzaTitle}>{pizza.title}</h3>
        <p className={styles.pizzaDesc}>{pizza.desc}</p>
        <span className={styles.pizzaPrice}>{pizza.price}</span> {/* Added className here */}
      </div>         
    </Link> 
  </li>
))}




      </ul>
      </div>

      <div className={styles.menuParent}>
      <Link href="/menu">
      <button className={styles.menuButton}>View Full Menu</button>
      </Link>
      </div>

</div>

); 
}