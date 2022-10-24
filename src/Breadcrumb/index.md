
## Breadcrumb

Demo:

```jsx
import React,{ useState } from 'react';
import {Breadcrumb} from 'PART14'


export default ()=>{

    const [state,setState] = useState(['one','two','three'])


    return(
        <>
            <Breadcrumb children={state} />
            <Breadcrumb children={state} separator='→'/>
        </>
        )
    }

```
<API ></API>


More skills for writing demo: https://github.com/qiye0240125/Aesculus-ui.git/
