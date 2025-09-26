import { ReactNode } from "react";
import styles from "./ContactItem.module.css";

interface ContactItemProps {
    title: string;
    icon: ReactNode;
    value: string;
    href?: string;
}

export const ContactItem = ({ title, icon, value, href }: ContactItemProps) => {
    const content = (
        <>
            <span className={styles.icon}>{icon}</span>
            <div className={styles.info}>
                <span className={styles.title}>{title}</span>
                <span className={styles.value}>{value}</span>
            </div>
        </>
    );

    return href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={styles.item}>
            {content}
        </a>
    ) : (
        <div className={styles.item}>{content}</div>
    );
};
