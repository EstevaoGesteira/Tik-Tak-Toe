import styles from './GameInfo.module.css'
import Icon from '../icon/Icon'
import Button from '../button/Button'


function GameInfo({playerAtual, ganhador, onReset}) {

    const botaoDeveEstarAtivo = () =>{
        if (ganhador !== 0 ) return true
    }
    return(
        <div className={styles.gameInfo}>
            {
            ganhador === 0 &&
            <>
                <h4>Próximo a jogar:</h4>
                    {
                        playerAtual === 1 && <Icon  iconName='circle'/>
                    
                    }
                    {
                        playerAtual === -1 && <Icon  iconName='x'/>
                    
                    }
                </>
            }
            {
                ganhador !== 0 &&
                <>
                <h4>Fim de jogo! <br/> Campeão:</h4>
                {
                    ganhador === 1 && <Icon iconName="circle"/>
                }
                {
                    ganhador === -1 && <Icon iconName="x"/>
                }

                </>
            }
            <Button 
            onClick={onReset}
            disabled={!botaoDeveEstarAtivo()}
            >
                Reiniciar
            </Button>
            
            </div>
    )
}

export default GameInfo