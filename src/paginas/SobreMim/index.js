import styles from "./SobreMim.module.css"

import PostModelo from "componetes/PostModelo/inde";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.jpg"



export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o William
            </h3>
            <img
                src={fotoSobreMim}
                alt="Foto pessoal"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                "Olá! Meu nome é William de Assis. Sou uma pessoa apaixonada por tecnologia e estou sempre em busca de conhecimento na área.  Acredito que a tecnologia tem o poder de transformar o mundo e estou animado para fazer parte dessa transformação. Além disso, sou uma pessoa determinada, criativa e gosto de desafios. Estou sempre disposto a aprender coisas novas e enfrentar novos projetos. Estou ansioso para colocar em prática tudo o que estou aprendendo e contribuir para o desenvolvimento de soluções inovadoras. Vamos juntos nessa jornada de aprendizado e crescimento!"
            </p>
            <p className={styles.paragrafo}>
                Com uma formação sólida em Desenvolvimento Web pela GranFaculdade e uma constante busca por conhecimento, estou sempre atualizado com as melhores práticas e tecnologias do mercado.
            </p>

            <p className={styles.paragrafo}>
                Ao longo da minha jornada de estudos, tenho me dedicado a aprimorar minhas habilidades em HTML, CSS e JavaScript, além do framework React. Com isso, sou capaz de criar interfaces modernas, responsivas e intuitivas, proporcionando uma experiência de usuário excepcional.
            </p>

            <p className={styles.paragrafo}>
                Além das habilidades técnicas, possuo uma visão estratégica e criativa, capaz de transformar ideias em soluções inovadoras. Sou um profissional comprometido, organizado e sempre em busca de desafios que me permitam crescer e evoluir.
            </p>

            <p className={styles.paragrafo}>
                Estou pronto para contribuir em projetos que exijam um alto padrão de qualidade, trabalhando em equipe de forma colaborativa e eficiente. Tenho facilidade em aprender novas tecnologias e estou sempre aberto a novas oportunidades de aprendizado.
            </p>

            <p className={styles.paragrafo}>
                Se você está em busca de um profissional dedicado, apaixonado por tecnologia e com habilidades em desenvolvimento web e front-end, estou à disposição para fazer parte do seu time. Vamos juntos criar soluções incríveis e impactar positivamente o mundo digital!
            </p>

            <p className={styles.paragrafo}>
                Entre em contato comigo para discutirmos como posso contribuir para o sucesso do seu projeto. Estou ansioso para trabalhar com você e enfrentar novos desafios juntos!"
            </p>
        </PostModelo>
    )
}