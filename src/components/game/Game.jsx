import { useState } from 'react'
import styles from './Game.module.css'
import GameOption from '../gameoption/GameOption'


function Game() {
    const [gameState, setGameState] = useState(Array(9).fill(0))
    return(
        <>
        { //Usa-se chaves para usar JavaScript no html
        gameState.map((valor,pos) =>
         <GameOption
            key={`game-option-pos-${pos}`}    
            status={valor}
        />
         )
        }
        <div className={styles.game}>
        <GameOption />
        <GameOption/>
        <GameOption/>
        <GameOption/>
        <GameOption/>
        <GameOption/>
        <GameOption/>
        <GameOption/>
        <GameOption/>
        </div>
        </>
    )
}

export default Game