import {
  GameViewContainer,
  GameButton,
  GameImage,
  ResultImageContainer,
  ResultName,
  ResultText,
  PlayAgainButton,
} from './styledComponents'

const GameResultView = props => {
  const {
    isResult,
    newArray,
    resultText,
    choicesList,
    restartGame,
    checkResult,
  } = props

  const showGame = () => (
    <GameViewContainer>
      {isResult ? (
        <>
          <GameButton
            type="button"
            data-testid="rockButton"
            onClick={() => checkResult(choicesList[0].id)}
          >
            <GameImage src={choicesList[0].imageUrl} alt={choicesList[0].id} />
          </GameButton>

          <GameButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => checkResult(choicesList[1].id)}
          >
            <GameImage src={choicesList[1].imageUrl} alt={choicesList[1].id} />
          </GameButton>

          <GameButton
            type="button"
            data-testid="paperButton"
            onClick={() => checkResult(choicesList[2].id)}
          >
            <GameImage src={choicesList[2].imageUrl} alt={choicesList[2].id} />
          </GameButton>
        </>
      ) : (
        <>
          <ResultImageContainer>
            <ResultName>YOU</ResultName>
            <GameImage src={newArray[0].imageUrl} alt="your choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ResultName>OPPONENT</ResultName>
            <GameImage src={newArray[1].imageUrl} alt="opponent choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ResultText>{resultText}</ResultText>
            <PlayAgainButton type="button" onClick={restartGame}>
              PLAY AGAIN
            </PlayAgainButton>
          </ResultImageContainer>
        </>
      )}
    </GameViewContainer>
  )
  return showGame()
}
export default GameResultView
