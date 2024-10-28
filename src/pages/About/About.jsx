import React from 'react';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>Apie mus</h1>
      <p>
        <strong>Junior dizainerių ir kūrėjų bendruomenė</strong> yra erdvė, kurioje talentingi
        jauni profesionalai susitinka, kad dalintųsi idėjomis, patirtimi ir mokytųsi vieni iš kitų. 
        Mes siekiame kurti bendruomenę, kurioje kiekvienas narys jaustųsi vertinamas ir turėtų galimybių 
        tobulėti savo srityje.
      </p>
      <h2>Kas mes esame</h2>
      <p>
        Mūsų bendruomenę sudaro įvairių sričių dizaineriai, programuotojai, rašytojai ir kiti kūrėjai, 
        kurie domisi skaitmeniniu dizainu, UX/UI, web kūrimu ir inovatyviais sprendimais. 
        Mes organizuojame dirbtuves, seminarus ir tinklų kūrimo renginius, kad skatintume 
        bendradarbiavimą ir kūrybingumą.
      </p>
      <h2>Mūsų misija</h2>
      <p>
        Mūsų misija yra skatinti jaunus talentus, suteikti jiems priemones ir resursus, 
        reikalingus sėkmei, ir padėti jiems augti profesionaliai. Mes taip pat siekiame
        padėti visuomenei geriau suprasti dizaino ir kūrimo reikšmę šiuolaikiniame pasaulyje.
      </p>
      <h2>Kaip prisijungti</h2>
      <p>
        Norint prisijungti prie mūsų bendruomenės, užpildykite registracijos formą mūsų svetainėje.
        Susisiekite su mumis el. paštu: <a href="mailto:info@iamjunior.lt">info@iamjunior.lt</a>.
        Mes nuolat ieškome naujų narių, kurie būtų pasirengę dalintis savo žiniomis ir prisidėti
        prie bendruomenės augimo.
      </p>
      <h2>Susisiekite su mumis</h2>
      <p>
        Jei turite klausimų arba norite sužinoti daugiau apie mūsų renginius ir veiklą, 
        nedvejodami kreipkitės į mus. Mes visada pasiruošę padėti ir suteikti reikiamą informaciją.
      </p>
    </div>
  );
};

export default About
