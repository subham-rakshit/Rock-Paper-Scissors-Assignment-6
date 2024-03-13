import styled from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 80%;
  border: 2px solid #ffffff;
  border-radius: 10px;
  background-color: transparent;
  margin-top: 2px;
`
export const ScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ScoreName = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Bree Serif';
  margin-top: 0;
  margin-bottom: 0;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`
export const ScoreBoard = styled(ScoreNameContainer)`
  background-color: #ffffff;
  width: 15%;
  height: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    width: 25%;
  }
`
export const ScoreHeading = styled.p`
  color: #223a5f;
  font-size: 20px;
  margin-bottom: 0;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`
export const ScoreResult = styled(ScoreHeading)`
  font-size: 42px;
  margin-top: 0;
  margin-bottom: 10px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 24px;
    // margin-bottom: 0;
    margin-top: 10px;
  }
`
