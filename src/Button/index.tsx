import React, { FC } from 'react';
import styles from './style/index.less'

interface ButtonProps {
    children?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
    type?: 'default' | 'primary';
    danger?: boolean;
    disabled?: boolean;
}

const Button: FC<ButtonProps> = (
    { children,
        onClick,
        type = 'default',
        danger = false,
        disabled = false }
) => {
    return (
        <button
            className={`${styles.buttonBox} ${danger ? styles.danger : ''} ${styles[type]}`}
            disabled={disabled}
            onClick={onClick}>{children}</button>
    )
}

// export default ({ title }: { title: string }) => <h1>{title}41111</h1>;
export default Button
