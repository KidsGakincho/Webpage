/* blob for section */
import Image from "next/image";
import styles from "./Blobs.module.css";

export function Blobs() {
  return (
    <>
      <div className={`${styles.blobs} ${styles.blobTopLeft}`}>
        <Image 
          src={"/images/blob/blob-yellow.svg"}
          alt=""
          fill style={{ objectFit: 'contain' }}
        />
      </div>

      <div className={`${styles.blobs} ${styles.blobTopRight}`}>
        <Image 
          src={"/images/blob/blob-pink.svg"}
          alt=""
          fill style={{ objectFit: 'contain' }}
        />
      </div>

      <div className={`${styles.blobs} ${styles.blobBottomLeft}`}>
        <Image 
          src={"/images/blob/blob-blue.svg"}
          alt=""
          fill style={{ objectFit: 'contain' }}
        />
      </div>

      <div className={`${styles.blobs} ${styles.blobBottomRight}`}>
        <Image 
          src={"/images/blob/blob-green.svg"}
          alt=""
          fill style={{ objectFit: 'contain' }}
        />
      </div>
    </>
  );
}