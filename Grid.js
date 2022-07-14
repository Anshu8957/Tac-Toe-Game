import React from 'react'
import Circle from './svgs/circle'
import Cross from './svgs/Cross'
import style from './grid.module.css'


const renderSVG = (svg) =>{
    if (svg === 'cross'){
        return < Cross size = {40} />
    }
    else if (svg === 'circle'){
        return < Circle  size = {40} />
    }
    else {
        return null
    }
}

export default function Grid(props){
    const divisions = props.positions.map((value, index) => {
        const iswinningIndex = props.winningIndex.includes(index) 
        return (
            <div
            className= {iswinningIndex ? style.winner : null}
            key = {index}
            onClick ={() => {
                props.setPositions(index)
            }}>
                {renderSVG(value)}
            </div>
        )
    })
    return(
        <div className= {style.container}>
        {divisions}
        </div>
    )
}