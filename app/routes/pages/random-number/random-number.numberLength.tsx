import { useLoaderData, type LoaderFunctionArgs } from 'react-router'
import type { Route } from './+types/random-number.numberLength.tsx'

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: 'Random number' },
    { name: 'description', content: 'Landing page' },
  ]
}

export const RandomNumber = () => {
  const { number, numberfied: numberLength } = useLoaderData<{
    number: string
    numberfied: number
  }>()
  return (
    <main>
      This is your random number (using selected length of {numberLength}):{' '}
      {number}
    </main>
  )
}

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const { numberLength } = params
  const numberfied = Number(numberLength)
  if (Number.isNaN(numberfied)) {
    throw new Response('numberLength must be a number', {
      status: 400,
      statusText: 'numberLength must be a number',
    })
  }
  const url = new URL('/api/random-number', request.url)
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ numberLength: numberfied }),
  })
  const { number } = await res.json()
  return { number, numberfied }
}

export default RandomNumber
