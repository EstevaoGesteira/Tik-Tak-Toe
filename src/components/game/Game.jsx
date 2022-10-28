import { useState } from 'react'
import styles from './Game.module.css'
import GameOption from '../gameoption/GameOption'
import Icon from '../icon/Icon'


function Game() {
    //    exemplo useState abaixo
    const [gameState, setGameState] = useState(Array(9).fill(0))
    const [playerAtual, setPlayerAtual]= useState(1)

    const handleClick = (pos ) => {
        if (gameState[pos] ===0){
            let newGameState = [...gameState]
            newGameState[pos] = playerAtual
            setPlayerAtual(playerAtual * -1)
            setGameState(newGameState)
        }

    }
    return(
        <>
        <div className={styles.gameContent}>
            <div>
                <div className={styles.game}>
                { //Usa-se chaves para usar JavaScript no html
                gameState.map((valor,pos) =>
                <GameOption key={`game-option-pos-${pos}`} status={valor} onClick={() => handleClick(pos)} />
                ) 
                }
        
                </div>
                </div>
            <div className={styles.gameInfo}>
                <h4>Próximo a jogar:</h4>
                {
                    playerAtual === 1 && <Icon  iconName='circle'/>
                
                }
                        {
                    playerAtual === -1 && <Icon  iconName='x'/>
                
                }
            </div>
        </div>
        </>
    )
        }
export default Game