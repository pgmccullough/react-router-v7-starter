import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  index('routes/index.tsx'),
  route('api/random-number', 'routes/api/random-number/index.tsx'),
  route('random-number', 'routes/pages/random-number/random-number.tsx'),
  route(
    'random-number/:numberLength',
    'routes/pages/random-number/random-number.numberLength.tsx',
  ),
] satisfies RouteConfig
