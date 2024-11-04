import Paragraf from '../../components/Paragraf'
import Title from '../../components/Title'
import { GithubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Paragraf category="main">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
      labore! Ullam sunt ipsa distinctio quo architecto earum, molestias
      recusandae, minus voluptatibus eaque adipisci, dolorem praesentium
      temporibus laudantium nobis at maiores.
    </Paragraf>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=andersonvsantos&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=andersonvsantos&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default About
