'use client'

import { Container } from "react-bootstrap";
import { CarouselHome } from "./components/Carousel";
import { Header } from "./components/Header";

import styles from './page.module.css'
import { Titulo } from "./components/Titulo";
import { CardCarro } from "./components/CardCarro";
import { CardNotaReconhecimentoFiat } from "./components/CardNotaReconhecimentoFiat";
import Accordion from 'react-bootstrap/Accordion';
import Footer from "./components/Footer";
import Link from "next/link";
import { BotaoWhatsApp } from "./components/BotaoWhatsApp";

export default function Home() {
  return (
    <>
      <Header titulo="Home" />
      <CarouselHome />
      <Container>
        <main className={styles.area_home}>
          <Titulo titulo="Nossos carros" />
          <div className={styles.area_carros}>
            <CardCarro src="/assets/cronos.jpg" nome="Cronos" />
            <CardCarro src="/assets/novo_toro.jpg" nome="Fiat Toro" />
            <CardCarro src="/assets/pulse.jpg" nome="Pulse" />
            <CardCarro src="/assets/argo.jpg" nome="argo" />
          </div>
          <div className={styles.link_redirecionamento}>
            <Link href="/carros">
              <span style={{ textDecoration: 'underline', textDecorationColor: 'red' }}>Visualizar todos os carros</span>
            </Link>
          </div>

          <Titulo titulo="Quem somos" />
          <div style={{ marginTop: '10px' }}>
            <img src="/assets/rg_veiculos.jpg" className="img-fluid float-md-start me-3" style={{width: '400px', borderRadius: '5px'}} />
            <p style={{ fontSize: '14px', color: '#d1d5db' }}>
              Inaugurada no dia 27 de outubro de 2005, a RG Veículos possui uma história 
              traçada no objetivo de satisfazer seus clientes e ter excelência em todos os 
              serviços prestados. Uma das características da filosofia de negócio da RG 
              Veículos é a valorização do Pós-Vendas, pois uma assistência técnica 
              qualificada, assim como a rapidez e pontualidade na execução dos serviços 
              demonstram o quanto o cliente é importante para nós.
            </p>
            <p style={{ fontSize: '14px', color: '#d1d5db' }}>
              Referência de qualidade Fiat, a RG Veículos oferece assistência técnica 
              especializada, funilaria e pintura, departamento de autopeças e acessórios 
              originais. Em 2011, a RG Veículos foi certificada pelo IQA como Padrões de Atendimento Fiat.
            </p>
            <CardNotaReconhecimentoFiat />
          </div>

          <div style={{ marginTop: '20px' }}>
            <Titulo titulo="Nossos serviços" />
            <div style={{ marginTop: '10px' }}>
              <Accordion defaultActiveKey="0" data-bs-theme="dark" style={{ height: '100%' }}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Oficina</Accordion.Header>
                  <Accordion.Body>
                      <p>
                        A Oficina da RG Veículos se caracteriza pela qualificação de seus profissionais e pela qualidade de sua estrutura. Todos os nossos profissionais fazem parte de um programa de treinamento técnico e teórico realizado pela fábrica da Fiat.
                      </p>
                      <p>
                        Nossos consultores técnicos são capacitados através dos Padrões de Atendimento Fiat, realizando um atendimento completo, desde o exame, diagnóstico, orçamento, acompanhamento na execução dos serviços até a explicação final ao cliente.
                      </p>
                      <p>
                        A RG Veículos tem capacidade de atender mais de 300 veículos por mês. Para isso, dispomos de facilidades para o cliente: Serviço de Leva e Traz, agendamento de serviços, descontos especiais e condições facilitadas de pagamento.
                      </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Funilaria</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Nossa filosofia é fazer os serviços de funilaria e pintura com alta qualidade, no menor tempo e com preço justo, satisfazendo as expectativas de nossos clientes.
                    </p>
                    <p>
                      Nosso Departamento de Funilaria e Pintura possui sete profissionais altamente qualificados prestando os serviços de: Chapeação, Pintura, Serviços Elétricos, Serviços Mecânicos, Solda em Geral, Espelhamento, Polimento, Montagem e Desmontagem de Carroceria, Laboratório de Tintas, Alinhamento de Carrocerias e Monoblocos e Pequenos Reparos.
                    </p>
                    <p>
                      Quando precisar de serviços em Funilaria e Pintura, pode contar com a nossa estrutura e a excelência de nossos serviços.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Peças e Acessórios</Accordion.Header>
                  <Accordion.Body>
                    <p>
                    Na RG Veículos você encontra grande estoque de peças e acessórios originais Fiat, com a qualidade do serviço de instalação, com nossa equipe especialmente treinada e habilitada a lidar exclusivamente com veículos da linha Fiat.
                    </p>
                    <p>
                      Precisou de alguma peça?
                      Entre em contato com a RG Veículos. Um dos maiores estoques do sul do estado do Rio, com mais de seis mil itens, disponibilizando toda a peça genuína Fiat que você procura.
                    </p>
                    <p>
                      Entre em contato conosco e conheça nossos descontos e condições facilitadas de pagamento.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </main>
      </Container>
      <Footer />
      <BotaoWhatsApp />
    </>
  );
}
