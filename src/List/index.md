
## List

Demo:

```jsx
import React,{ useState,memo } from 'react';
import {List} from 'PART14'

export default ()=>{

const [state,setState] = useState(Array(10000).fill(1));

const ItemBox = memo(({data="",index = 0,style={}})=>{
    return(
        <div style={style}>
            {data}
        </div> 
    )
})

const onchange=(event)=>{
        console.log(event)
}

    return(
        <>
            <List list={state} ItemBox={ItemBox} containerHeight={300}>
            </List>
        </>
        )
    }

```
<API ></API>


More skills for writing demo: https://github.com/qiye0240125/Aesculus-ui.git/
