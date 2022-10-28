import React, { FC, useEffect, useState, useRef, ReactNode, useMemo, Children } from 'react';
import styles from './style/index.less'
import SwiperItem from './SwiperItem';



export interface SwiperProps {

    children: any;
    /**
     * 可选，是否自动切换
     */
    autoplay?: boolean;
    /**
     * 可选，动画时长,单位s 默认为 0.5
     */
    duration?: number;
    /**
     * 可选，默认位置
     */
    // initialSwipe?: number;
    /**
     * 可选，是否循环播放
     */
    // loop?: boolean;
    /**
     * 可选，样式名称
     */
    className?: string;
    /**
     * 是否显示左右点击
     */
    aboutClick?: boolean;
    /**
     * 可选，切换索引的回调
     */
    // onSlideChange?: (event: any, index: number) => void
}

// const myContent = myContext(null)

const Swiper: FC<SwiperProps> = (
    {
        children,
        className = '',
        duration = 0.5,
    }
    // props
) => {
    // 点击防抖bug
    //底部按钮
    const [bottomIcon, setBottomIcon] = useState(0)
    //计算偏移量
    const [clientWidth, setClientWidth] = useState();
    const [letfWidth, setLeftWidth] = useState(0);
    // console.log(props.children)
    // console.log(props.children[0].type.name)

    const swiperWrapper = useRef<any>(null)

    // const {
    //     className = '',
    //     duration = 0.5,
    // } = props

    // 获取单个元素的宽度



    useEffect(() => {
        // let timer = setInterval(() => {
        //     next()
        // }, 2000)
        return (() => {
            // clearInterval(timer)
        })
    }, [])

    const handleClick = (index: number) => {
        const clientWidth = swiperWrapper?.current?.clientWidth
        setBottomIcon(index)
        setLeftWidth(index * clientWidth)
    }


    const next = () => {
        // console.log(a, children.length)
        if (bottomIcon > children.length)
            return handleClick(0)
        handleClick(bottomIcon + 1)
    }

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
                style={{ left: `-${letfWidth}px`, transition: `all ${duration}s` }}
                className={`${styles.swiperBox} ${styles[className]}`}>
                {!children
                    ? null
                    : children.map((item: any, index: number) => {
                        return (
                            <div
                                className={styles.siwperItem}
                                key={index}>{item}</div>
                        )
                    })}
            </div>

            <ul className={styles.ol}>
                {(() => {
                    let li = [];
                    for (let i = 0; i < children.length; i++) {
                        li.push(
                            <li
                                onClick={(e) => { handleClick(i) }}
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

