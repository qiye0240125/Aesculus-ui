
## Button

Demo:

```jsx
import React from 'react';
import { Button } from 'PART14'


export default ()=>{

    const onClick = (e) => {
        console.log(e)
    }

    return(
        <>
        <Button onClick={(e) => onClick(e)}>Click Button</Button>
        <Button danger>danger Button</Button>
        <Button disabled>disabled Button</Button>
        <Button block>default Button</Button>
        </>
        )
    }

```
<API ></API>


More skills for writing demo: https://github.com/qiye0240125/Aesculus-ui.git/
