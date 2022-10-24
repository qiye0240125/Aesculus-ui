import React, { FC, useEffect, useState, useRef, ReactNode, useMemo, Children } from 'react';
import styles from './style/index.less'
import SwiperItem from './SwiperItem';


export interface SwiperProps {

    children: any;
    /**
     * 可选，自动轮播间隔，单位ms
     */
    autoplay?: number;
    /**
     * 可选，动画时长,单位ms
     */
    duration?: number;
    /**
     * 可选，默认位置
     */
    initialSwipe?: number;
    /**
     * 可选，是否循环播放
     */
    loop?: boolean;
    /**
     * 可选，样式名称
     */
    className?: string;
    /**
     * 可选，切换索引的回调
     */
    onSlideChange?: () => void;
    /**
     * 可选，切换索引的回调
     */
     next?: () => void;
    /**
     * 可选，切换索引的回调
     */
     prev?: () => void;
}

// const myContent = myContext(null)

const Swiper: FC<SwiperProps> = (
    props
) => {
    //底部按钮
    const [bottomIcon, setBottomIcon] = useState(0)
    //计算偏移量
    const [clientWidth, setClientWidth] = useState();
    const [letfWidth, setLeftWidth] = useState(0);
    // console.log(props.children)
    // console.log(props.children[0].type.name)

    const swiperWrapper = useRef<any>(null)

    const { className = '', next,} = props

    // 获取单个元素的宽度
    useEffect(() => {
        // console.log(swiperWrapper.current.clientWidth)
        // setClientWidth(swiperWrapper.current)
        console.log(letfWidth)
    }, [letfWidth])
    // console.log(children)

    const handleClick = (index: number) => {
        const clientWidth = swiperWrapper.current.clientWidth
        setBottomIcon(index)
        setLeftWidth(index * clientWidth)
    }

    // const next = () => {
    //     if (bottomIcon >= props.children.length)
    //         return
    //     handleClick(bottomIcon + 1)
    // }
    const prev = () => {
        if (bottomIcon <= 0)
            return
        handleClick(bottomIcon - 1)
    }

    return (
        <div
            ref={swiperWrapper}
            className={`${styles.swiperWrapper}`}>
            <div
                style={{ left: `-${letfWidth}px` }}
                className={`${styles.swiperBox} ${styles[className]}`}>
                {!props.children
                    ? props.children.length.map((item: any, index: number) => {
                        return (
                            <div className={styles.siwperItem} key={index}>
                                {item}
                            </div>
                        );
                    })
                    : props.children.map((child: any, index: number) => <div className={styles.siwperItem} key={index}>{child}</div>)}
            </div>

            <ul className={styles.ol}>
                {(() => {
                    let li = [];
                    for (let i = 0; i < props.children.length; i++) {
                        li.push(
                            <li
                                onClick={() => handleClick(i)}
                                className={`${styles.li} ${bottomIcon === i ? styles.isOpen : styles.isClose}`}
                                key={i} />
                        )
                    }
                    return li
                })()}
            </ul>

        </div >
    )
}

export default Swiper

