
## Tree

Demo:

```jsx
import React,{ useState } from 'react';
import {Tree} from 'PART14'


export default ()=>{

    const treeData = [
    {
        title: 'parent 1',
        key: '0-0',
        children: [
        {
            title: 'parent 1-0',
            key: '0-0-0',
            disabled: true,
            children: [
            {
                title: 'leaf',
                key: '0-0-0-0',
                disableCheckbox: true,
            },
            {
                title: 'leaf',
                key: '0-0-0-1',
            },
            ],
        },
        {
            title: 'parent 1-1',
            key: '0-0-1',
            children: [
            {
                title: (
                <span
                    style={{
                    color: '#1890ff',
                    }}
                >
                    sss
                </span>
                ),
                key: '0-0-1-0',
            },
            ],
        },
        ],
    },
    ];

    const onSelect = (info) => {
        console.log('selected', info);
    };
    const onCheck = (info) => {
        console.log('onCheck',  info);
    };

    return(
        <>
        <Tree
            checkable
            onSelect={onSelect}
            onCheck={onCheck}
            treeData={treeData}
        ></Tree>
        </>
        )
    }

```
<API ></API>


More skills for writing demo: https://github.com/qiye0240125/Aesculus-ui.git/
