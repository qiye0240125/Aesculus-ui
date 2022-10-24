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
}

// const myContent = myContext(null)

const Swiper: FC<SwiperProps> = (
    props
) => {
    const { children=[] } = props
    //底部按钮
    const [bottomIcon, setBottomIcon] = useState(1)
    //计算偏移量
    const [clientWidth, setClientWidth] = useState(0);
    // console.log(props.children.$$typeof == SwiperItem)
    // console.log(props.children)
    // console.log(props.children[0].type.name)

    const swiperWrapper = useRef(null)

    // 获取单个元素的宽度
    useEffect(() => {
        // console.log(swiperWrapper.current.clientWidth)
        setClientWidth(swiperWrapper.current.clientWidth)
    }, [])
    console.log(children)

    return (
        <div
            ref={swiperWrapper}
            className={`${styles.swiperWrapper}`}>
            {/* {props.children} */}
            <div className={`${styles.swiperBox}`}>
                {React.Children.map(props.children, (item, i) => {
                    // console.log(props.children)
                    return (
                        <SwiperItem>
                           {item}
                        </SwiperItem>
                    )
                })}
            </div>

            <ul className={styles.ol}>
                {(() => {
                    let li = [];
                    for (let i = 1; i <= children.length; i++) {
                        li.push(
                            <li
                                onClick={() => setBottomIcon(i)}
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

