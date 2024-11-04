import Avatar from '../../components/Avatar'
import Paragraf from '../../components/Paragraf'
import Title from '../../components/Title'

import { ButtonTheme, Description, SidebarContainer } from './styles'

type Props = {
  changeTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Anderson V Santos</Title>
      <Paragraf category="secondary" fontSize={16}>
        andersonvsantos
      </Paragraf>
      <Description category="main" fontSize={12}>
        Full Stack Developer
      </Description>
      <ButtonTheme onClick={props.changeTheme}>Trocar tema</ButtonTheme>
    </SidebarContainer>
  </aside>
)

export default Sidebar
