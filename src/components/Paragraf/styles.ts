import styled from 'styled-components'

import { Props } from '.'

export const Paragraf = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) => (props.category === 'main' ? props.theme.mainColor : props.theme.secondaryColor)}};
  line-heigth: 22px;
`
