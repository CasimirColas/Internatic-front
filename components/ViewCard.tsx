import Image from "next/image";
import styles from "../styles/Card.module.css";
import Fab from "@mui/material/Fab";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
interface Props {
  title: string;
  img: string;
  tags: string[];
  desc: string;
  loc: string;
}

function ViewCard({ title, img, tags, desc, loc }: Props) {
  return (
    <div className={styles.viewcard}>
      <Fab className={styles.favButton}>
        <FavoriteBorderIcon />
      </Fab>
      <div className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.viewContent}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.prevImg}
              loader={() => img}
              src={img}
              alt="front image"
              width={640}
              height={480}
              unoptimized={true}
            />
          </div>
          <ul className={styles.tagsList}>
            {tags.map((e, index) => (
              <li key={index} className={styles.tag}>
                {e}
              </li>
            ))}
          </ul>
          <p className={styles.description}>{desc}</p>
          <address className={styles.loc}>{loc}</address>
        </div>
      </div>
    </div>
  );
}

export default ViewCard;
