'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styles from  './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'

import { FacebookLogo, InstagramLogo } from 'phosphor-react'

interface TituloPaginaProps {
  titulo: string;
}

export function Header({ titulo }: TituloPaginaProps) {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" style={{ padding: '0' }}>
      <Container>
        <Link href="/">
          <Image
            src="/assets/logo_fiat.png"
            width={80}
            height={80}
            alt="Picture of the author"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '15px' }}>
                <Link href="/" className={styles.nav_pagina}>
                  Home
                </Link>
                <Link href="https://ofertas.fiat.com.br/" className={styles.nav_pagina}>
                    Ofertas FIAT
                </Link>
                <Link href="/contato" className={styles.nav_pagina}>
                  Contato
                </Link>
            </Nav>
            <div className={styles.rede_social}>
                <Link href="https://www.facebook.com/rgveiculos">
                  <FacebookLogo size={20} color='blue' style={{ cursor: 'pointer' }} />
                </Link>
                <Link href="https://www.instagram.com/rgveiculosfiat/">
                  <InstagramLogo size={20} color='red' style={{ cursor: 'pointer' }} />
                </Link>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Navbar 
      expand="lg" 
      className="bg-body-tertiary" 
      bg="dark" 
      data-bs-theme="dark" 
      style={{ 
        borderTop: '1px solid red', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <span style={{ fontSize: '23px', fontWeight: 'bold' }}>{titulo}</span>
    </Navbar>
    </>
  );
}
