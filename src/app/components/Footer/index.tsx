import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Image from 'next/image'

import styles from './styles.module.css'

export default function Footer() {
    return (
        <Navbar className={styles.area_footer} bg="dark" data-bs-theme="dark">
            <Container>
                <div className={styles.area_dados_footer}>
                    <div className={styles.area_dados}>
                        <span>Av. Sebastião Manoel Furtado, 850, Santa Amélia</span>
                        <span>CEP: 27700-000 - Vassouras - RJ</span>
                        <span>(24) 2471-1774</span>
                    </div>
                    <div className={styles.area_dados_logo}>
                        <Image
                            src="/assets/logo_fiat.png"
                            width={150}
                            height={150}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className={styles.area_dados}>
                        <span>Horário de Atendimento:</span>
                        <span>Segunda a Sexta, das 8h às 17h30min</span>
                        <span>Sábado, das 9h às 14h.</span>
                        <span>Oficina - Segunda a Sexta, das 8h às 18h.</span>
                    </div>
                </div>
            </Container>
            <div className={styles.area_desenvolvedores}>
                <span>Desenvolvido por Kelvyn Telles e Igor Fontes, todos os direitos reservados.</span>
            </div>
        </Navbar>
    )
}
