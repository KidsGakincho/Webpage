import styles from "./Blob.module.css";
import { generateBlobPath } from "../../../lib/blobGenerator";

/*
 seed: variation of shapes
 points: dencity a roughness of blob
 variation: vatiation of roundness
 size: size of SVG
 color: color of mocon
*/
type BlobProps = {
  size?: number;
  color?: string;
  opacity?: number;
  seed?: number;
  points?: number;
  variation?: number;
  className?: string;
};

export function Blob({ // common compornent 
  size = 300,
  color = "#f45b8a",
  opacity = 1.0,
  seed = 1,
  points = 10,
  variation = 0.25,
  className,
}: BlobProps) {
  const path = generateBlobPath(
    seed,
    points,
    size,
    variation
  );

  return (
    <svg
      className={`${styles.blob} ${className ?? ""}`}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
      opacity={opacity}
    >
      <path d={path} fill={color} />
    </svg>
  );
}