import { Paragraf as StyleParagraf } from './styles'

export type Props = {
  children: string
  category?: 'main' | 'secondary'
  fontSize?: number
}

const Paragraf = ({ children, category = 'main', fontSize }: Props) => (
  <StyleParagraf category={category} fontSize={fontSize}>
    {children}
  </StyleParagraf>
)

export default Paragraf
