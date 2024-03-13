import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'

import ScoreView from '../ScoreView'
import GameResultView from '../GameResultView'

import {
  MainContainer,
  ButtonContainer,
  PopupContainer,
  CloseButton,
  RuleImg,
  RulesButton,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Home extends Component {
  state = {
    score: 0,
    isResult: true,
    newArray: [choicesList[0], choicesList[1]],
    resultText: 'YOU WON',
  }

  getResult = (item1, item2) => {
    if (item1.id === 'ROCK') {
      switch (item2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (item1.id === 'PAPER') {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  restartGame = () => {
    this.setState({isResult: true})
  }

  checkResult = id => {
    const {score} = this.state
    const choice2 = choicesList[Math.floor(Math.random() * choicesList.length)]

    const choice1 = choicesList.find(item => item.id === id)

    const result = this.getResult(choice1, choice2)

    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      isResult: false,
      newArray: [choice1, choice2],
      resultText: result,
      score: newScore,
    })
  }

  render() {
    const {score, isResult, newArray, resultText} = this.state
    // console.log(Math.floor(Math.random() * choicesList.length))

    return (
      <MainContainer>
        <ScoreView score={score} />
        <GameResultView
          choicesList={choicesList}
          resultText={resultText}
          isResult={isResult}
          newArray={newArray}
          checkResult={this.checkResult}
          restartGame={this.restartGame}
        />

        {/* Rules Button ---> */}
        <ButtonContainer>
          <Popup modal trigger={<RulesButton type="button">RULES</RulesButton>}>
            {close => (
              <PopupContainer>
                <CloseButton
                  type="button"
                  aria-label="button"
                  onClick={() => close()}
                >
                  <RiCloseLine size="20" />
                </CloseButton>
                <RuleImg
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopupContainer>
            )}
          </Popup>
        </ButtonContainer>
      </MainContainer>
    )
  }
}

export default Home
