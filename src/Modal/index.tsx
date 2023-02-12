import React, { FC, useEffect, useState, useRef, ReactNode } from 'react';
import styles from './style/index.less'
import Button from '../Button';

export interface ModalProps {

    children?: ReactNode;
    /**
     * 点击按钮时的回调
     */
    // showDrawer: React.MouseEventHandler<HTMLElement>
    /**
     * 点击取消时的回调
     */
    onClose(): React.MouseEventHandler<HTMLElement>
    /**
     * 点击确定时的回调
     */
    onOK(): React.MouseEventHandler<HTMLElement>
    /**
     * Modal 是否可见
     */
    open?: boolean;
    /**
     * 可用于设置 Drawer 内容部分的样式
     */
    // bodyStyle?: string;
}

const Modal: FC<ModalProps> = (
    {
        children,
        // showDrawer,
        onClose,
        onOK,
        open,
        // bodyStyle = 'contentBody',
    }

) => {
    const [opens, setOpens] = useState<boolean>()
    const divRef = useRef(null)


    return (
        <div
            ref={divRef}
            className={`${styles.ModalWarpper} ${open ? styles.isOpen : styles.isClose}`}
        >
            <div
                className={`${styles.ModalBox}`}
            >
                <div>
                    {children}
                </div>
                <div>
                    <Button onClick={() => onClose()}>Cancal</Button>
                    <Button type='primary' onClick={() => onOK()}>OK</Button>
                </div>
            </div>
        </div >
    )
}

export default Modal