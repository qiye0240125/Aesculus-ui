
## Button

Demo:

```tsx
import React from 'react';
import { Button } from 'PART14';

const handleClick = () =>{
    console.log('111')
}

export default () => {
    return (
        <Button type="default" onClick={() => handleClick()}>Primary Button</Button>
        )
    };
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
