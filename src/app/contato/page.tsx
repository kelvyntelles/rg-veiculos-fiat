'use client'

import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { Titulo } from "../components/Titulo";

import styles from  './styles.module.css'

import { Phone, House, CalendarBlank } from "phosphor-react"
import { BotaoWhatsApp } from "../components/BotaoWhatsApp";

export default function Contato() {
    return (
        <>
            <Header titulo="Contato" />
            <img src="/assets/banner-oferta-02.jpg" className={styles.banner} />
            <Container>
                <main className={styles.area_contato}>
                    <div>
                        <Titulo titulo="Matriz - Vassouras" />
                        <div style={{ marginTop: '10px' }}>
                            <img src="/assets/rg_veiculos.jpg" className="img-fluid float-md-start me-3" style={{width: '400px', borderRadius: '5px'}} />
                            <p style={{ fontSize: '16px', color: '#d1d5db' }}>
                                Envie-nos suas dúvidas, comentários, sugestões, reclamações ou outras informações. Será um prazer atendê-lo.
                            </p>
                        </div>
                    </div>
                    <div>
                        <Titulo titulo="Informações" />
                        <div className={styles.area_dados}>
                            <span><House size={16} />{' '}Av. Sebastião Manoel Furtado, 850, Santa Amélia</span>
                            <span><House size={16} />{' '}CEP: 27700-000 - Vassouras - RJ</span>
                            <span><Phone size={16} />{' '}(24) 2471-1774</span>
                            <br />
                            <span><CalendarBlank size={16} />{' '}Horário de Atendimento:</span>
                            <span><CalendarBlank size={16} />{' '}Segunda a Sexta, das 8h às 17h30min</span>
                            <span><CalendarBlank size={16} />{' '}Sábado, das 9h às 14h.</span>
                            <span><CalendarBlank size={16} />{' '}Oficina - Segunda a Sexta, das 8h às 18h.</span>
                        </div>
                    </div>
                </main> 
            </Container>
            <Footer />
            <BotaoWhatsApp />
        </>
    )
}