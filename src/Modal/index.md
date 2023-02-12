
## Modal

Demo:

```jsx
import React,{ useState } from 'react';
import {Modal ,Button} from 'PART14'


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
    const onOK = () => {
        // console.log()
        setOpent(false)
    }

    return(
        <>
        <Button type='primary' onClick={() => onClick()}>Open</Button>
        <Modal open={open} onClose={onClose} onOK={onOK}>
            <div>Some contents...</div>
            <div>Some contents...</div>
            <div>Some contents...</div>
        </Modal>
        </>
        )
    }

```
<API ></API>


More skills for writing demo: https://github.com/qiye0240125/Aesculus-ui.git/
