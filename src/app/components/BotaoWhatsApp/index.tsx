import Link from "next/link";
import styles from "./styles.module.css"
import { WhatsappLogo } from 'phosphor-react'

export function BotaoWhatsApp() {
  return (
    <Link href="https://whatsa.me/5524992794349">
      <div className={styles.area_botao_whatsapp}>
          <WhatsappLogo size={40} />
          <div className={styles.texto_botao}>Conversar no whatsapp</div>
      </div>
    </Link>
  );
};





