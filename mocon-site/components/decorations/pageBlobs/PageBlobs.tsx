/* blobs for web-page */
import Image from "next/image";
import styles from "./PageBlobs.module.css";

export function PageBlobs() {
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
          src={"/images/blob/blob-blue2.svg"}
          alt=""
          fill style={{ objectFit: 'contain' }}
        />
      </div>

      <div className={`${styles.blobs} ${styles.blobBottomRight}`}>
        <Image 
          src={"/images/blob/blob-green2.svg"}
          alt=""
          fill style={{ objectFit: 'contain' }}
        />
      </div>

      <div className={`${styles.blobs} ${styles.blobMiddle}`}>
        <Image   
          src="/images/blob/blob-leaf.svg"
          alt=""
          fill style={{ objectFit: 'contain' }}
        />
      </div>

      <div className={`${styles.blobs} ${styles.blobCenter}`}>
        <Image   
          src="/images/blob/blob-sky.svg"
          alt=""
          fill style={{ objectFit: 'contain' }}
        />
      </div>
    </>
  );
}