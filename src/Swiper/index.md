
## Swiper

Demo:

```jsx
import React,{ useState } from 'react';
import {Swiper} from 'PART14'

export default ()=>{

const [state,setState] = useState([{
        name:'1',path:'/1',key:'1'
    },{
        name:'2',path:'/2',key:'2'
    },{
        name:'3',path:'/3',key:'3'
    }])

const onchange=(event)=>{
        console.log(event)
}

    return(
        <>
            <Swiper>
                {state.map((item)=>{
                    return(
                        <div 
                        onClick={()=> onchange(item)}
                        key={item.key}>
                            {item.name}
                        </div>
                    )
                })}
            </Swiper>
            <div>-</div>
            <Swiper 
            autoplay
            >
                {state.map((item)=>{
                    return(
                        <div 
                        style={{width:'100%',height:'100%'}}
                        onClick={()=> onchange(item)}
                        key={item.key}>
                            {item.name}
                        </div>
                    )
                })}
            </Swiper>
        </>
        )
    }

```
<API ></API>


More skills for writing demo: https://github.com/qiye0240125/Aesculus-ui.git/
