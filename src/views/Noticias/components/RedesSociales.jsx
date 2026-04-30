import { useParams } from 'react-router-dom';
import facebookShare from "../../../assets/icons/shareIcons/facebookShare.svg";
import twitterShare from "../../../assets/icons/shareIcons/twitterShare.svg";
import whatsappShare from "../../../assets/icons/shareIcons/whatsappShare.svg";
import styles from "../styles/noticias.module.scss";

export const RedesSociales = () => {
  const { url } = useParams();
  const shareUrl = `https://oypsanlorencista.com/#/noticias/${url}`;
  
  return (
    <div className={styles.socialMediaContainer}>
      <span className={styles.shareText}>| Compartí</span>
      <div className={styles.socialMediaIconsContainer}>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noreferrer"
          className={styles.iconsMedia}
        >
          <img
            src={facebookShare}
            alt="icono compartir facebook"
            className={styles.shareIconsNews}
          />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noreferrer"
          className={styles.iconsMedia}
        >
          <img
            src={twitterShare}
            alt="icono compartir twitter"
            className={styles.shareIconsNews}
          />
        </a>
        <a
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noreferrer"
          className={styles.iconsMedia}
        >
          <img
            src={whatsappShare}
            alt="icono compartir whatsapp"
            className={styles.shareIconsNews}
          />
        </a>
      </div>
    </div>
  );
};
