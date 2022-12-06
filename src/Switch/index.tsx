import React, { FC, useEffect, useState, useRef, ReactNode, useMemo, Children } from 'react';
import styles from './index.less'




export interface SwitchProps {
    /**
     * 点击变化后的回调
     */
    onChange?: (event: boolean) => void
}


const Switch: FC<SwitchProps> = (
    {
        onChange
    }
    // props
) => {
    // 点击防抖bug
    //底部按钮
    const [flag, setFlag] = useState<boolean>(false)


    const switchChange = () => {
        setFlag(!flag)
    }



    return (
        // <div className={`${styles.switchWrapper}`} onClick={() => switchChange() }>
        //     <input className={`${styles.input}`} type="checkbox" value={`${flag}`} />
        //     <span className={`${styles.core} ${flag?styles.on:styles.off}`}></span>
        // </div>
        <input type="checkbox" className={styles.switch} value={`${flag}`} onClick={() => { switchChange(); onChange ? onChange(flag) : null }} />
    )
}

export default Switch

