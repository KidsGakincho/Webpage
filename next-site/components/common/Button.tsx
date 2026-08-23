import Link from "next/link";

type ButtonProps = {
    href: string;
    children: React.ReactNode;
};

export function Button({ href, children }: ButtonProps) {
    return (
        <Link href={href} className="button">
            {children}
        </Link>
    );
}