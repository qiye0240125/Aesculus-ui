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
    // aboutClick?: boolean;
    /**
     * 可选，切换索引的回调
     */
    onSlideChange?: (event: any, index: number) => void
}

// const myContent = myContext(null)

// 提供基于时间间隔重复调用callback的hooks
const useInterval = (callback: any, interval: number) => {

}

const Swiper: FC<SwiperProps> = (
    {
        children,
        className = '',
        duration = 0.5,
        autoplay = false,
        onSlideChange,
    }
    // props
) => {
    // 点击防抖bug
    //底部按钮
    const [bottomIcon, setBottomIcon] = useState(0)
    //计算偏移量
    // const [clientWidth, setClientWidth] = useState();
    const [letfWidth, setLeftWidth] = useState(0);
    const [callbackTime, setCallbackTime] = useState(0);
    // console.log(props.children)
    // console.log(props.children[0].type.name)

    const swiperWrapper = useRef<any>(null)
    const clientWidth = swiperWrapper?.current?.clientWidth


    // const slider = useSlider(clientWidth)

    useEffect(() => {
        // autoplay ? useSlider() : null
    }, [])




    autoplay ? useEffect(() => {
        const start = new Date().getTime()
        const I = setInterval(() => {
            let newtime = new Date().getTime() - start
            // setCallbackTime(newtime)
            // console.log(newtime)
            const lenth = children.length
            handleClick(Math.floor(newtime / 3000) % lenth)
        }, 500)
        return () => clearInterval(I)
    }, []) : null



    useEffect(() => {
        setLeftWidth(bottomIcon * clientWidth)
        // console.log(bottomIcon)
    }, [bottomIcon])



    //点击后偏移位置
    const handleClick = (index: number) => {
        setBottomIcon(index)
        // console.log('我执行了')
    }



    return (
        <div
            ref={swiperWrapper}
            className={`${styles.swiperWrapper}`}>
            <div
                style={{
                    // left: `-${letfWidth}px`,
                    transition: `all ${duration}s`,
                    transform: `translateX(-${letfWidth}px)`
                }}
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
                                onClick={(e) => { handleClick(i); onSlideChange ? onSlideChange(e, i) : null }}
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

