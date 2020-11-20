import React from 'react';
import Layout from '../components/Layout';
import styles from '../assets/products.module.css';

const products = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>this is my products post</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae necessitatibus, est illum, nesciunt hic modi delectus reprehenderit, eveniet voluptatibus corrupti enim nihil placeat! Eaque earum nesciunt dolorem impedit vero placeat.
          </p>
      </div>
    </Layout>
  )
};

export default products;
