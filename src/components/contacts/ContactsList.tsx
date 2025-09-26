import { PhoneOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { ContactItem } from "./ContactItem";
import styles from "./ContactsList.module.css";
import { TelegramIcon } from "../../icons";

export const ContactsList = () => {
    const contacts = [
        {
            title: "WhatsApp",
            icon: <WhatsAppOutlined />,
            value: "+7 (916) 503-93-06",
            href: "https://wa.me/79165039306",
        },
        {
            title: "Telegram",
            icon: <TelegramIcon />,
            value: "@omelinamv",
            href: "https://t.me/omelinamv",
        },
        {
            title: "Телефон",
            icon: <PhoneOutlined />,
            value: "+7 (999) 195-18-17",
            href: "tel:+79991234567",
        },
    ];

    return (
        <div className={styles.list}>
            {contacts.map((c) => (
                <ContactItem
                    key={c.title}
                    title={c.title}
                    icon={c.icon}
                    value={c.value}
                    href={c.href}
                />
            ))}
        </div>
    );
};
