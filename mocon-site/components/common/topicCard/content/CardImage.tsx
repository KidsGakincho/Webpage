import Image from "next/image";

type CardImageProps = {
  src: string;
  alt: string;
}

export function CardImage({
  src,
  alt="",
}: CardImageProps) {
  return(
    <Image
      src={src}
      alt={alt}
      fill
    />
  );
}