import { useLoaderData, type LoaderFunctionArgs } from 'react-router'
import type { Route } from './+types/random-number'

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: 'Random number' },
    { name: 'description', content: 'Landing page' },
  ]
}

export const RandomNumber = () => {
  const { number } = useLoaderData<{
    number: string
  }>()
  return <main>This is your random number: {number}</main>
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL('/api/random-number', request.url)
  const res = await fetch(url)
  const { number } = await res.json()
  return { number }
}

export default RandomNumber
