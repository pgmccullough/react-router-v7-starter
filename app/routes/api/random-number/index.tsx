import { randomNumber } from '~/util/helper/randomNumber'

export const action = async ({ request }: { request: Request }) => {
  const body = await request.json()
  const { numberLength } = body

  if (!numberLength) {
    throw new Response('Missing numberLength', {
      status: 400,
      statusText: 'Bad Request',
    })
  }

  const response = {
    number: randomNumber(numberLength),
  }

  return new Response(JSON.stringify(response), {
    headers: { 'Content-Type': 'application/json' },
  })
}

export const loader = async () => {
  const response = { number: randomNumber() }

  return new Response(JSON.stringify(response), {
    headers: { 'Content-Type': 'application/json' },
  })
}
