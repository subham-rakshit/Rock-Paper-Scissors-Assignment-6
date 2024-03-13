import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 20px;
`

export const ButtonContainer = styled.div`
  align-self: flex-end;
  margin-top: auto;
  @media screen and (max-width: 576px) {
    margin-bottom: 40px;
  }
`
export const RulesButton = styled.button`
  background-color: #ebe6e6;
  color: #223a5f;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Bree Serif';
  border: none;
  outline: none;
  padding: 8px 15px;
  border-radius: 8px;
  margin-right: 20px;
  cursor: pointer;
  margin-bottom: 20px;
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 40vw;
  padding: 10px;
  @media screen and (max-width: 576px) {
    height: 260px;
    width: 100%;
  }
`
export const CloseButton = styled.button`
  background-color: #def7ff;
  padding: 5px 5px;
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
`
export const RuleImg = styled.img`
  width: 90%;
  height: 90%;
  //   border: 1px solid red;
`
