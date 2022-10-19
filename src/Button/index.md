
## Button

Demo:

```tsx
import React from 'react';
import { Button } from 'PART14'

export default ()=>{

    const onClick = (e) => {
        console.log(e)
    }

    return(
        <>
        <Button onClick={(e) => onClick(e)}>我是测试</Button>
        <Button danger>我是测试</Button>
        <Button type='dashed'>我是测试</Button>
        </>
        )
    }

```
<API ></API>


More skills for writing demo: https://github.com/qiye0240125/Aesculus-ui.git/
