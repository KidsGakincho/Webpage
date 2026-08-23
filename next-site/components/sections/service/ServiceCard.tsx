import Image from "next/image";
import styles from "./ServiceCard.module.css";
import { Service } from "@/types/Service";

type ServiceCardProps = {
    service: Service;
};

export function ServiceCard({ service, }: ServiceCardProps) {
    return (
        <article className={styles.card}>
        <div className={styles.icon}>
        <Image
          src={service.icon}
          alt=""
          width={512}
          height={512}
        />
        </div>

        <h3 className={styles.title}>
            {service.title}
        </h3>

        <p className={styles.description}>
            {service.description}
        </p>
        </article>
    );
}