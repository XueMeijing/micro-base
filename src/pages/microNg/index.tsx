
/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'
import { observer } from "mobx-react"

const Index = () => {

  return (
    <micro-app
      name='micro-app-ng'
      // url={'http://localhost:8886'}
      url={'http://localhost:7105'}
      baseroute='/microNg'
      keep-alive
    />
  )
}

export default observer(Index)