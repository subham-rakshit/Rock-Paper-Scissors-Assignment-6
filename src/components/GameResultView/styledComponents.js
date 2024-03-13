import styled from 'styled-components'

export const GameViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  //   border: 1px solid red;
  width: 400px;
  flex-wrap: wrap;
  margin-top: 60px;
  @media screen and (max-width: 576px) {
    width: 250px;
    height: 250px;
    margin-left: 15px;
  }
`
export const GameButton = styled.button`
  width: 150px;
  height: 150px;
  background-color: transparent;
  border: none;
  outline: none;
  @media screen and (max-width: 576px) {
    width: 100px;
    height: 100px;
    margin-top: 0;
    margin-right: 20px;
  }
`
export const GameImage = styled.img`
  width: 150px;
  height: 150px;
  @media screen and (max-width: 576px) {
    width: 100px;
    height: 100px;
  }
`
export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  @media screen and (max-width: 576px) {
    width: 30%;
  }
`
export const ResultName = styled.p`
  color: #ffffff;
  font-size: 20px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`
export const ResultText = styled(ResultName)`
  font-size: 25px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`
export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Bree Serif';
  border: none;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 10px 10px;
  width: 150px;
  @media screen and (max-width: 767px) {
    width: 120px;
    font-size: 12px;
  }
`
