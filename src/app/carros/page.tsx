'use client'

import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { Titulo } from "../components/Titulo";

import styles from  './styles.module.css'
import { CardCarro } from "../components/CardCarro";
import { BotaoWhatsApp } from "../components/BotaoWhatsApp";

export default function Carros() {
    return (
        <>
            <Header titulo="Carros" />
            <img src="/assets/banner-oferta-02.jpg" className={styles.banner} />
            <Container style={{ marginTop: '30px' }}>
                <Titulo titulo="Nossos carros" />
                <main className={styles.area_carros}>
                    <CardCarro src="/assets/cronos.jpg" nome="Cronos" />
                    <CardCarro src="/assets/novo_toro.jpg" nome="Fiat Toro" />
                    <CardCarro src="/assets/pulse.jpg" nome="Pulse" />
                    <CardCarro src="/assets/argo.jpg" nome="Argo" />

                    <CardCarro src="/assets/500e.jpg" nome="500e" />
                    <CardCarro src="/assets/novo_fiorino.png" nome="Fiorino" />
                    <CardCarro src="/assets/mobi.jpg" nome="Mobi" />
                    <CardCarro src="/assets/nova_strada.jpg" nome="Strada" />
                </main>
            </Container>
            <Footer />
            <BotaoWhatsApp />
        </>
    )
}