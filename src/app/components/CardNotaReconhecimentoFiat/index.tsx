'use client'

import Card from 'react-bootstrap/Card';

export function CardNotaReconhecimentoFiat() {
  return (
    <Card bg="dark" data-bs-theme="dark">
      <Card.Header>Nota</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <footer className="blockquote-footer">
          O IQA, órgão de certificação acreditado pelo Inmetro e criado pela ANFAVEA, Sindipeças, Sindirepa e outras entidades do setor, atesta a conformidade dos Padrões de Atendimento Fiat nos processos de vendas e pós-vendas, levando em consideração a excelência no atendimento, com foco na satisfação do cliente, a entrega de produtos e reparos dentro do prazo, instalações e limpeza.
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}