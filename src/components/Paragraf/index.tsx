import { Paragraf as StyleParagraf } from './styles'

export type Props = {
  children: string
  category?: 'main' | 'secondary'
}

const Paragraf = ({ children, category = 'main' }: Props) => (
  <StyleParagraf category={category}>{children}</StyleParagraf>
)

export default Paragraf
