/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'
import { observer } from "mobx-react"

const Index = () =>  {

  return (
    <micro-app
      name='micro-app-react'
      url={'http://localhost:8887'}
      baseroute='/microReact'
      keep-alive
    />
  )
}

export default observer(Index)