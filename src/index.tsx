import { h, render } from 'preact'

interface AppProps {
  name: string
}

const App = ({ name }: AppProps) => <h1>Hello from {name}!</h1>

render(<App name={"Jeff's typescript preact starter"} />, document.getElementById('root'))
