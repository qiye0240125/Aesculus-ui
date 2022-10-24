import React, { FC, useEffect, useState, useRef, ReactNode } from 'react';
import styles from './style/indexItem.less'


export interface SwiperItemProps {
    props?: any;
    children?: any;
    cssstyle?: any;
}


const SwiperItem: FC<SwiperItemProps> = (props) => {
    // console.log('SwiperItem')
    // console.log(props)
    const { children, cssstyle } = props;
    return (
        <div
            className={`${styles.swiperItem}`}>
            {children}
        </div >
    )
}

export default SwiperItem


