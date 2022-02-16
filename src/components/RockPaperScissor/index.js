import {Component} from 'react'
import ModalPopup from './modal_popup'
import Header from '../Header'
import {BgContainer, RulesBtn, RuleBtnContainer} from './styledComponents'

class RockPaperScissor extends Component {
  status = {
    showRule: false,
  }

  isShowPopup = () => {
    this.setState(prevState => {
      showRule: !prevState.showRule
    })
  }

  render() {
    const {showRule} = this.state
    return (
      <BgContainer>
        <Header />
        <RuleBtnContainer>
          <RulesBtn onClick={this.isShowPopup}>RULES</RulesBtn>
          <ModalPopup
            showModalPopup={showRule}
            onPopupClose={this.isShowPopup}
          ></ModalPopup>
        </RuleBtnContainer>
      </BgContainer>
    )
  }
}

export default RockPaperScissor
