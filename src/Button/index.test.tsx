// import Button from '../Button';

// export default Button


import React from 'react';
import Button from '../Button/index'
export default () => {
    const onClick = (e: any) => {
        console.log(e)
    }

    return (
        <>
            <Button onClick={(e) => onClick(e)}>我是测试</Button>
            <Button danger>我是测试</Button>
            <Button type='dashed'>我是测试</Button>
        </>
    )
}
