import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Image from "../components/image";
import styles from "./chiSono-css-modules.module.css";

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
        <h2 className={styles.postTitle}>Chi sono</h2>
        <div className={styles.textWrap}>
            <p>Mi presento sono Eleonora, ho vissuto in diverse parti di Europa ed ora vivo a Berlino da un bel po’.</p>
            <p>La mia professione è tutt’altra ma adoro cucinare, soprattutto sperimentare piatti nuovi e legati a diverse nazionalità. I viaggi mi hanno aperto un mondo differente di sapori e profumi che cerco di inserire nei miei piatti, anche nelle ricette della tradizione italiana apportandone una sfumatura differente.</p>
            <p>Adoro la cucina del Sud est asiatico ed il mio ultimo viaggio in Thailandia mi ha permesso di assaporarne i sapori in loco e di riprodurli anche qui nella fredda città di Berlino.</p>
            <p>Un’altra parte importante della mia cucina è l’influenza spagnola data dai mille viaggi nella penisola iberica ma soprattutto da mio marito, originario della Comunità Valenciana, che mi ha trasmesso le ricette delle più comuni tapas dei bar spagnoli ed i segreti per realizzare un’originale e buonissima paella.</p>
             <p>Terza ed ultima parte, non meno importante, rappresenta un tocco tradizionale dato da molti anni di esperienza in cucina, grazie alla mia mamma. Troverete quindi ricette casalinghe, dai sapori tradizionali e vivaci, caratterizzati da prodotti di stagione dell’orto, qualità nelle materie prime e ricercatezza nei profumi delle erbe aromatiche.</p>
            <Image alt="profile Image" filename="profile.jpg" />
            <p>Sapori, colori e profumi di un piatto rievocano momenti, ricordi, pensieri.</p>
        </div>
    </Layout>
  )
}