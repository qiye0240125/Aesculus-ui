
## Tree

Demo:

```jsx
import React,{ useState } from 'react';
import {Tree} from 'PART14'


export default ()=>{

    const treeData = [
    {
        titles: 'parent 1',
        keys: '0-0',
        childrens: [
        {
            titles: 'parent 1-0',
            keys: '0-0-0',
            disabled: true,
            childrens: [
            {
                titles: 'leaf',
                keys: '0-0-0-0',
                disableCheckbox: true,
            },
            {
                titles: 'leaf',
                keys: '0-0-0-1',
            },
            ],
        },
        {
            titles: 'parent 1-1',
            keys: '0-0-1',
            childrens: [
            {
                titles: (
                <span
                    style={{
                    color: '#1890ff',
                    }}
                >
                    sss
                </span>
                ),
                keys: '0-0-1-0',
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
            fieldNames={{title:'titles',key:'keys',children:'childrens'}}
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
