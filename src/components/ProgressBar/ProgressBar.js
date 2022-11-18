import React, { useState } from 'react'
import {ProgressBar, ProgressDone} from './styles'

export const Progress = ({done}) => {
    const [style, setStyle] = useState({})

    setTimeout(() => {
        const newStyle = {
            opacity: 1, 
            width: `${done}%`
            
        }
        setStyle(newStyle)
    }, 500)



    return (
        <ProgressBar style={style}>
            <ProgressDone style={style}>
            {done}
            </ProgressDone>
        </ProgressBar>
    )
}

export default Progress