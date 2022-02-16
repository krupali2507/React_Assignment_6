import {
  HeaderContainer,
  ItemContainer,
  Choices,
  ScoreContainer,
} from './styledComponents'

const Header = () => (
  <HeaderContainer>
    <ItemContainer>
      <Choices>Rock</Choices>
      <Choices>Paper</Choices>
      <Choices>Scissor</Choices>
    </ItemContainer>
    <ScoreContainer>Score</ScoreContainer>
  </HeaderContainer>
)

export default Header
