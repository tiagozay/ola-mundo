import React from 'react';
import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Olá, Mundo!
        </h1>

        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis nesciunt alias beatae debitis corrupti doloremque mollitia exercitationem est minus vero sunt, quidem perferendis accusamus nemo quos amet hic nobis rerum?
        </p>

        <div className={styles.imagens}>
          <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true}/>
          <img className={styles.minhaFoto} src={minhaFoto} alt="Foto do Antônio Evaldo sorrindo"/>
        </div>
      </div>
    </div>
  )
}
