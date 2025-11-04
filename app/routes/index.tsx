import type { Route } from './+types/index'
import { Welcome } from '../components/Welcome/Welcome'

export const meta = ({}: Route.MetaArgs) => {
  return [{ title: 'Home' }, { name: 'description', content: 'Landing page' }]
}

export const Home = () => {
  return <Welcome />
}

export default Home
