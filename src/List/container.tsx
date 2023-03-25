import React from "react"
import styles from './style/index.less'


const Container = (props:any) => {
    return (
        <div
            className={styles.contarner}
            style={{ height: props.height }}>

        </div>
    )
}

export default Container