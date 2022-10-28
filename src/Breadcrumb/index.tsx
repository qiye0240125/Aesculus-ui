import React, { FC, useEffect, useState, ReactNode } from 'react';
import styles from './style/index.less'
import BreadcrumbItem from './BreadcrumbItem';


export interface BreadcrumbProps {

    children: any;
    /**
     * 分隔符自定义 默认为 /
     */
    separator?: string;
    /**
     * 
     */
    className?: string;
}

// const myContent = myContext(null)

const Breadcrumb: FC<BreadcrumbProps> = (
    {
        children,
        // showDrawer,
        separator = '/',
        className = '',
    }
) => {
    return (
        <div
            className={`${styles.breadcrumbBox}`}>
            {children?.map((item: any, i: number) => {
                return (
                    <div className={styles.breadcrumb} key={i}>
                        <div className={styles.separator}>
                            {separator}
                        </div>
                        <div className={`${styles.breadcrumbText} ${styles[className]}`}>
                            {item}
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default Breadcrumb

