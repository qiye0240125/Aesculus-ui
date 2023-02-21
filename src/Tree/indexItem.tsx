import React, { FC, ReactNode, useEffect, useState } from 'react'
import style from './style/indexItem.module.less'



export interface TreeProps {

    itemData: any;
    /**
     * treeNodes 数据
     */
    handleClick: React.MouseEventHandler<HTMLElement>
    // checkable?: boolean;
    /**
     * 可用于设置是否Checkbox复选框
     */
    onSelect: React.MouseEventHandler<HTMLElement>

    // fieldName?: any 
}


const TreeItem: FC<TreeProps> = ({
    // children,
    itemData,
    handleClick,
    onSelect,
    // fieldName
}) => {

    const down = <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2987" width="10" height="10"><path d="M65.582671 288.791335l446.417329 446.41733 446.417329-446.41733z" p-id="2988"></path></svg>
    const right = <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3142" width="10" height="10"><path d="M288.791335 65.582671l446.41733 446.417329-446.41733 446.417329z" p-id="3143"></path></svg>


    return (
        <>
            {
                Object.keys(itemData).map((item: any, index: number) => {

                    const treeData = itemData[item]
                    // console.log(itemData)
                    return (
                        <div key={treeData.key || index}>
                            <div className={style.treeDataBoX}

                                style={{ paddingLeft: `${treeData.indent * 10}px` }}
                            >
                                <div className={style.svgstyle}
                                    onClick={() => handleClick(treeData)}
                                >
                                    {treeData.expand && treeData.children.length ? down : (treeData.children.length ? right : null)}
                                </div>
                                <div
                                    className={`${treeData.disabled ?
                                        style.disabled : style.treeDatatitle}`}
                                    onClick={(e) => treeData.disabled?null:onSelect(treeData)}
                                >{treeData.title}</div>
                            </div>
                            <div>
                                {treeData.expand && treeData.children.length ?
                                    <TreeItem
                                        onSelect={onSelect}
                                        handleClick={handleClick}
                                        itemData={treeData.children}
                                    ></TreeItem>
                                    : null}
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}


export default TreeItem