import React, { FC, useEffect, useState, useRef, ReactNode, useMemo, Children } from 'react';
import styles from './style/index.less'


export interface SwiperProps {

    children: any;
    /**
     * 可选，是否自动切换
     */
    autoplay?: boolean;
    /**
     * 可选，切换时长,单位s 默认为 3000ms
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

const Swiper: FC<SwiperProps> = (
    {
        children,
        className = '',
        duration = 3000,
        autoplay = false,
        onSlideChange,
    }
) => {
    const [currentCarousel, setCurrentCarousel] = useState(0);
    const [animationStep, setAnimationStep] = useState(1);
    // 开始轮播
    let timerID: any;



    const handlerTransitionEnd = () => {
        if (currentCarousel % (children.length + 1) === children.length) {
            setAnimationStep(0);
            setCurrentCarousel(0);
        } else if (currentCarousel < 0) {
            setAnimationStep(0);
            setCurrentCarousel(children.length - 1);
        }
    }

    const handlerNext = () => {
        handlerCarousel('right');
    }

    const handlerPre = () => {
        handlerCarousel('left');
    }

    const getIndicatorsActive = (index: number) => {
        if (currentCarousel === index || currentCarousel === index + children.length || (currentCarousel < 0 && index === children.length - 1)) {
            return 'styles.isOpen';
        }
        return 'styles.isClose';
    }


    const handleCarouselFooterMouseOver = (currentIndex: number) => {
        setAnimationStep(animationStep);
        setCurrentCarousel(currentIndex);
    }

    const handlerCarousel = (type: any) => {
        let direction = 1;
        if (type === 'left') {
            direction = -1;
        }
        if (currentCarousel % (children.length + 1) !== children.length && currentCarousel >= 0) {
            setCurrentCarousel(currentCarousel => (currentCarousel + direction) % (children.length + 1));
            setAnimationStep(animationStep);
        }
    }

    {
        autoplay ?
            useEffect(() => {
                // startCarousel();
                stopCarousel()
                timerID = setInterval(() => {
                    handlerCarousel('right');
                },duration);
                return () => {
                    clearInterval(timerID);
                }
            }, []) : null
    }


    // 停止轮播
    const stopCarousel = () => {
        clearInterval(timerID);
    }

    return (
        <div className={`${styles.carouselContainer}`}>
            <div className={`${styles.carouselBody}`}
                onTransitionEnd={handlerTransitionEnd}
                style={{
                    transition: `transform ${animationStep}s`,
                    width: `${(children.length + 2) * 100}%`,
                    transform: `translateX(${-100 / (children.length + 2) * (currentCarousel + 1)}%)`
                }}>
                <div className={`${styles.carouselItem}`}
                    style={{ width: `${100 / (children.length + 2)}%` }}
                    key={'start'} >{children[children.length - 1]}
                </div>
                {children.map((item: any, index: number) => {
                    return <div className={`${styles.carouselItem}`}
                        style={{ width: `${100 / (children.length + 2)}%` }}
                        key={index} >{item}
                    </div>
                })}
                <div className={`${styles.carouselItem}`}
                    style={{ width: `${100 / (children.length + 2)}%` }}
                    key={'end'} >
                    {children[0]}
                </div>
            </div>
            <div className={`${styles.carouselFooter}`}>
                <ul className={`${styles.indicatorsContainer}`}>
                    {children.map((item: any, index: number) => {
                        return (
                            <li onClick={() => handleCarouselFooterMouseOver(index)}
                                className={`${styles.indicatorsItem} ${currentCarousel === index || currentCarousel === index + children.length || (currentCarousel < 0 && index === children.length - 1) ? styles.isOpen : styles.isClose
                                    }`}
                                key={index}></li>
                        );
                    })}
                </ul>
            </div>

        </div>
    );
}



export default Swiper;
