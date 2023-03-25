import React, { FC, useEffect, useState, useRef, ReactNode, useMemo, Children, memo, useCallback } from 'react';

import styles from './style/index.less'


export interface ListProps {

    list: any;
    /**
     * 可选，默认位置
     */
    ItemBox?: any;
    /**
     * 内容高度 默认800
     */
    containerHeight?: number;
    /**
     * 子项高度 默认50
     */
    itemHeight?: number;
    /**
     * 可选，切换索引的回调
     */
    onListChange?: (event: any, index: number) => void,

}



const List: FC<ListProps> = ({
    list = [],
    onListChange,
    containerHeight = 800,
    ItemBox = <></>,
    itemHeight = 50
}) => {
    //最外层div
    const ContainerRef = useRef<any>(null);
    //定义一个开始
    const [startIndex, setStartIndex] = useState(0);
    // 用于撑开Container的盒子，计算其高度
    const wraperHeight = useMemo(() => {
        return list.length * itemHeight;
    }, [list, itemHeight])
    // 可视区域最多显示的条数
    const limit = useMemo(() => {
        return Math.ceil(containerHeight / itemHeight);
    }, [startIndex]);
    // 当前可视区域显示的列表的结束索引
    const endIndex = useMemo(() => {
        return Math.min(startIndex + limit, list.length - 1);
    }, [startIndex, limit]);

    const handleSrcoll = useCallback((e: any) => {
        if (e.target !== ContainerRef.current) return;
        const scrollTop = e.target.scrollTop;
        let currentIndex = Math.floor(scrollTop / itemHeight);
        if (currentIndex !== startIndex) {
            setStartIndex(currentIndex);
        }
    }, [ContainerRef, itemHeight, startIndex])

    const renderList = useCallback(() => {
        const rows = [];
        for (let i = startIndex; i <= endIndex; i++) {
            // 渲染每个列表项
            rows.push(
                <ItemBox
                    // className={styles.itemBox}
                    data={i}
                    key={i}
                    style={{
                        width: "100%",
                        borderBottom: "1px solid #aaa",
                        position: "absolute",
                        height: `${itemHeight - 1}px`,
                        top: `${i * itemHeight}px`,
                        left: 0,
                        right: 0,
                    }}>
                </ItemBox>
            )
        }
        console.log(rows)
        return rows;
    }, [startIndex, endIndex, ItemBox])

    // const renderList = useCallback(() => {
    //     const rows = [];
    //     for (let i = startIndex; i <= endIndex; i++) {
    //         // 渲染每个列表项
    //         rows.push(
    //             <div
    //                 className={styles.itemBox}
    //                 key={i}
    //                 style={{
    //                     width: "100%",
    //                     borderBottom: "1px solid #aaa",
    //                     position: "absolute",
    //                     height: `${itemHeight - 1}px`,
    //                     top: `${i * itemHeight}px`,
    //                     left: 0,
    //                     right: 0,
    //                 }}>{i}
    //             </div>
    //         )
    //     }
    //     return rows;
    // }, [startIndex, endIndex, ItemBox])



    return (
        <div
            className={styles.contarner}
            style={{ height: containerHeight + "px" }}
            ref={ContainerRef}
            onScroll={handleSrcoll}>
            <div className={styles.listBox}
                style={{ height: wraperHeight + "px" }}>
                {renderList()}
            </div>
        </div>
    )
}

export default List