import React, { FC, ReactNode, useEffect, useState } from 'react'
import style from './style/index.module.less'
import TreeItem from './indexItem'

export interface TreeProps {
    // children?: ReactNode;
    /**
    * treeNodes 数据
    */
    treeData: any[];

    /**
    * 可用于设置是否Checkbox复选框
    */
    checkable?: boolean;
    /**
        * 点击树节点触发
        */
    onSelect: React.MouseEventHandler<HTMLElement>;
    /**
    * 自定义节点 title、key、children 的字段
    */
    fieldNames?: { title: string, key: string, children: string }
}


const Tree: FC<TreeProps> = ({
    // children
    treeData,
    checkable,
    onSelect,
    fieldNames = { title: 'title', key: 'key', children: 'children' }
}) => {

    const [treeDatas, setTreeDatas] = useState<any>([])


    useEffect(() => {
        const newArr = [treeData.map(item => handleTreeData(item, 0, fieldNames))]
        setTreeDatas(newArr)
    }, [treeData])

    const handleClick = (item: any) => {
        // console.log(item)
        // if (item.disabled) return
        // if (item.children.length && item.checkbox) {
        //     setTreeDatas([...treeDatas, item.checkbox = !item.checkbox])
        // }
        setTreeDatas([...treeDatas, item.expand = !item.expand])
    }



    const handleTreeData = (item: any, indent = 0, fieldNames: any) => {
        const itemChildren = item[`${fieldNames.children}`]?item[`${fieldNames.children}`]: [] 
        const itemKey = item[`${fieldNames.key}`]?item[`${fieldNames.key}`]: `` 
        const itemTitle = item[`${fieldNames.title}`]?item[`${fieldNames.title}`]:`` 
        delete(item[`${fieldNames.children}`])
        delete(item[`${fieldNames.key}`])
        delete(item[`${fieldNames.title}`])
        return {
            ...item,
            key:itemKey,
            title:itemTitle,
            indent: indent,
            expand: true,
            checked: false,
            // disabled: false,
            children: (itemChildren || []).map((item: any[]) =>
                handleTreeData(item, indent + 1, fieldNames)),
            
        }
       
    }




    return (
        <div className={style.treeWarpper}>
            {
                treeDatas.map((item: any, index: number) => {
                    return (
                        <TreeItem
                            onSelect={onSelect}
                            handleClick={handleClick}
                            key={item.key || index}
                            itemData={item}
                        ></TreeItem>
                    )
                })
            }
        </div>
    )
}


export default Tree