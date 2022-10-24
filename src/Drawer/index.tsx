import React, { FC, useEffect, useState, useRef, ReactNode } from 'react';
import styles from './style/index.less'
import Button from '../Button';

export interface DrawerProps {

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
     * Drawer 是否可见
     */
    open?: boolean;
    /**
     * 可用于设置 Drawer 内容部分的样式
     */
    bodyStyle?: string;
}

const Drawer: FC<DrawerProps> = (
    {
        children,
        // showDrawer,
        onClose,
        open,
        bodyStyle = 'contentBody',
    }
) => {
    const [opens, setOpens] = useState<boolean>()
    const divRef = useRef(null)


    useEffect(() => {
        open ? setOpens(true) : setOpens(false)
    }, [opens])



    const closeMaskHndle = (e: any) => {
        e.persist()
        // console.log(e)
        if (e.target !== divRef.current)
            return
        // showDrawer()
        onClose()
    }


    return (
        <div
            ref={divRef}
            className={`${styles.drawerBox}  ${open ? styles.isOpen : styles.isClose}`}
            onClick={closeMaskHndle}>
            <div className={styles.drawerBoxRight}>
                <div className={styles.drawerTop}>
                    <span role="img" aria-label="close" >
                        <svg viewBox="64 64 896 896" focusable="false"
                            className={styles.drawerClose}
                            onClick={() => onClose()}
                            data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                        </svg>
                    </span>
                    <div>
                        <Button onClick={() => onClose()}>Cancal</Button>
                        <Button type='primary' onClick={() => onClose()}>OK</Button>
                    </div>
                </div>
                <div className={styles[bodyStyle]}>
                    {children}
                </div>
            </div>
        </div >
    )
}

export default Drawer
