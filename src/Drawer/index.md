
## Drawer

Demo:

```jsx
import React,{ useState } from 'react';
import {Drawer ,Button} from 'PART14'


export default ()=>{

    const [open,setOpent] = useState(false)

    const onClick = () => {
        // console.log()
        setOpent(true)
    }
    const onClose = () => {
        // console.log()
        setOpent(false)
    }

    return(
        <>
        <Button type='primary' onClick={() => onClick()}>Open</Button>
        <Drawer open={open} onClose={onClose}>
            <div>11</div>
        </Drawer>
        </>
        )
    }

```
<API ></API>


More skills for writing demo: https://github.com/qiye0240125/Aesculus-ui.git/
