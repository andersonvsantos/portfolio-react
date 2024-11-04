import styled from 'styled-components'
import { Paragraf } from '../../components/Paragraf/styles'

export const ButtonTheme = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.backgroundColor};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.mainColor};
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

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
