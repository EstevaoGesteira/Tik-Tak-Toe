import { useState, useEffect } from 'react'
import styles from './Game.module.css'
import GameOption from '../gameoption/GameOption'
import GameInfo from '../gameinfo/GameInfo'

const gabarito = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function Game() {
    const [gameState, setGameState] = useState(Array(9).fill(0))
    const [playerAtual, setPlayerAtual]= useState(-1)
    const [ganhador,setGanhador]= useState(0)

    const handleClick = (pos) => {
        if (gameState[pos] === 0 && ganhador === 0) {
            let newGameState = [...gameState]
            newGameState[pos] = playerAtual
            setGameState(newGameState)
        }
     }

        const verifyGame = () => {
            gabarito.forEach((line) => {
                const values = line.map((pos) => gameState[pos])
                const sum = values.reduce((sum, value) => sum + value)
                if (sum === 3 || sum === -3) setGanhador(sum / 3)
            })
        }

        const handleReset = ()=> {
            setGameState((Array(9).fill(0)))
            setGanhador(0)
            setPlayerAtual(1) 
        }

            useEffect(() =>{                        
                setPlayerAtual(playerAtual * -1)
                verifyGame()
        }, [gameState]) 
    return(
        <>
        <div className={styles.gameContent}>
            <div>
                <div className={styles.game}>
                { 
                gameState.map((valor,pos) =>
                <GameOption key={`game-option-pos-${pos}`} status={valor} onClick={() => handleClick(pos)} />
                ) 
                }
        
                </div>
                </div>
                <GameInfo
                playerAtual={playerAtual}
                ganhador={ganhador}
                onReset={handleReset}
                />
                
        </div>
        </>
    )
}

export default Game