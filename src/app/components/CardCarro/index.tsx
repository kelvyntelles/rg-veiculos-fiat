'use client'

import Card from 'react-bootstrap/Card';
import styles from './styles.module.css'

interface Props {
  src: string;
  nome: string;
}

export function CardCarro({ src, nome }: Props) {
  return (
    <Card style={{ width: '100%', padding: '2px' }} bg="dark" data-bs-theme="dark">
        <img
            src={src}
            alt="Carro FIAT"
            className={styles.imagem}
        />  
        <Card.Body>
            <Card.Title>{nome}</Card.Title>
        </Card.Body>
    </Card>
  );
}
