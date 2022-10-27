import styles from './Game.module.css'
import GameOption from '../gameoption/GameOption'
function Game() {
    return(
        <>
        <div className={styles.game}>
        <GameOption/>
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