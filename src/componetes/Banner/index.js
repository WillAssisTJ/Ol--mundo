import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhafoto from 'assets/minha_foto.jpg';

export default function Banner() {
    return (
        <>
         <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Bem-vindo
                </h1>
                <p className={styles.paragrafo}> 
                    Este é o meu espaço! Sou William de Assis, estou aprendendo programação e me especializando em Front-End
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt='Circulo Colorido'
                />
                <img
                    className={styles.minhaFoto}
                    src={minhafoto}
                    alt='Minha foto'
                />
            </div>
        </div>
        <div className={styles.espacoEmBranco}></div>
        </>
       

    )
}