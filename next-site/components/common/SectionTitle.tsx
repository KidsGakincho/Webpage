import style from "./SectionTitle.module.css";

type SectionTitleProps = {
    label: string;
    title: string;
};

export function SectionTitle({
    label,
    title,
}: SectionTitleProps) {
    return (
        <div className="section-title">
        <span className={style.label}>
            {label}
        </span>

        <h2 className={style.heading}>
            {title}
        </h2>
        </div>
    );
}