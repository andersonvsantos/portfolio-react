import styled from 'styled-components'

import { Props } from '.'

export const Paragraf = styled.p<Props>`
  font-size: 14px;
  color: ${(props) => (props.category === 'main' ? '#282a35' : '#949494')}};
  line-heigth: 22px;
`
