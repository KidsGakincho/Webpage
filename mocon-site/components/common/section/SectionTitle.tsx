import style from "./SectionTitle.module.css";

type SectionTitleProps = {
    label: string;
    title?: string;
    color?: "pink" | "green" | "yellow" | "blue";
};

export function SectionTitle({
    label,
    title,
    color = "blue",
}: SectionTitleProps) {
    return (
        <div className="style.sectionTitle">
            <span className={`${style.label} ${style[color]}`}>
                {label}
            </span>

            {title && (
            <h2 className={style.heading}>
                {title}
            </h2>
            )}
        </div>
    );
}