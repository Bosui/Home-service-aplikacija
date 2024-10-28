import React from 'react';
import styles from './CardContainer.module.scss';

const CardContainer = () => {
  return (
    <div className={styles.cardContainer}>
      <div>
        <h3>Išsivalyk pats</h3>
        <img className={styles.cardImage} src="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg" alt="Išsivalyk pats" />
      </div>    
      <div>
        <h3>UAB Valymas</h3>
        <img className={styles.cardImage} src="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners.jpg" alt="UAB Valymas" />
      </div>
      <div>
        <h3>Moki veži</h3>
        <img className={styles.cardImage} src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/08/featured_image_what_size_moving_truck_do_you_need.jpeg.jpg" alt="Moki veži" />
      </div>
      <div>
        <h3>Elektrikas į namus</h3>
        <img className={styles.cardImage} src="https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/know-how/hero/kh-qualified-vs-unqualified-electrical-workers_feat.jpg" alt="Elektrikas į namus" />
      </div>
    </div>
  );
};

export default CardContainer;
