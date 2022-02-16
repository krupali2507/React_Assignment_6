import styled from 'styled-components'

export const HeaderContainer = styled.div`
  border: 1px solid white;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const ItemContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`

export const Choices = styled.li`
  list-style-type: none;
  color: white;
`

export const ScoreContainer = styled.div`
  background-color: white;
  color: #223a5f;
  min-width: 80px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`
