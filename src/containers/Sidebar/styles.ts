import styled from 'styled-components'
import { Paragraf } from '../../components/Paragraf/styles'

export const ButtonTheme = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  font-size: 10px;
  font-weight: bold;
  background-color: #282a35;
  cursor: pointer;
  border: none;
`

export const Description = styled(Paragraf)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
