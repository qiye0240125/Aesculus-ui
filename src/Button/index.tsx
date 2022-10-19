import React, { CSSProperties, FC } from 'react';
import styles from './style/index.less'

export interface ButtonProps {

    children?: string;
    /**
     * 点击按钮时的回调
     */
    onClick?: React.MouseEventHandler<HTMLElement>;
    /**
     * 设置按钮类型
     */
    type?: 'default' | 'primary' | 'dashed';
    /**
    * 	设置危险按钮
    */
    danger?: boolean;
    /**
   * 	按钮失效状态
   */
    disabled?: boolean;
    /**
   * 	将按钮宽度调整为其父宽度的选项
   */
    block?: boolean;
    /**
  * 	设置按钮的图标组件 仅支持图片链接
  */
    icon?: string;
    /**
  * 	设置类名
  */
    className?: any;
    /**
  * 	设置style
  */
    style?: CSSProperties;
}

const Button: FC<ButtonProps> = (
    {
        children,
        onClick,
        type = 'default',
        block = false,
        danger = false,
        icon = '',
        className,
        disabled = false,
        style,
    }
) => {
    return (
        <button
            className={`${styles.button} ${danger ? styles.danger : ''} ${block ? styles.block : ''} ${styles[type]} ${className}`}
            disabled={disabled}
            onClick={onClick}
            style={style}
        >
            {icon ?
                <img
                    className={styles.icon}
                    src={icon} alt="" />
                : null
            }
            {children}</button>
    )
}

// export default ({ title }: { title: string }) => <h1>{title}41111</h1>;
export default Button
