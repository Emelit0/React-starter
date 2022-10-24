import { Counter } from './Counter'
import './assets/styles/style.scss'
import IMAGE from './assets/images/icon.png'

export const App = () => {
  return (
    <>
      <h1>React TypeScript Webpack Starter Template</h1>
      <img
        src={IMAGE}
        alt="react icon"
        style={{ width: '180px', height: '100px' }}
      />
      <Counter />
    </>
  )
}
