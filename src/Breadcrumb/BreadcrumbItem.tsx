import React, { FC, useEffect, useState, useRef, ReactNode} from 'react';
import styles from './style/index.less'


export interface BreadcrumbItemProps {

    children?: ReactNode;

}


const BreadcrumbItem: FC<BreadcrumbItemProps> = (
    {
        children,
        // showDrawer,
    }
) => {
   
    console.log('11')

    return (
        <div
            className={`${styles.BreadcrumbItem}`}>
            <span>{children}</span>
            {/* <span>{separator}</span> */}
        </div >
    )
}

export default BreadcrumbItem


