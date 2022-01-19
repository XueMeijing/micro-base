
/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'
import { observer } from "mobx-react"

const Index = () => {
  function getUrl() {
    if (window.location.origin === 'http://localhost:9999') {
      // return 'http://localhost:9999/main'
      return 'http://localhost:3007'
    } else {
      return window.location.origin + '/main'
    }
  }
  return (
    <micro-app
      name='micro-app-ng'
      url={getUrl()}
      baseroute='/microNg'
      onCreated={() => console.log('angular元素被创建')}
      onBeforemount={() => console.log('angular即将被渲染')}
      onMounted={() => {
        console.log('angular已经渲染完成')
      }}
      onUnmount={() => console.log('angular被卸载')}
      onError={() => console.log('angular渲染出错')}
    />
  )
}

export default observer(Index)