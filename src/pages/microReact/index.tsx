/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'
import { observer } from "mobx-react"

const Index = () =>  {
  function getUrl() {
    if (window.location.origin === 'http://localhost:9999') {
      return 'http://localhost:3006/'
    } else {
      return window.location.origin + '/intl'
    }
  }
  return (
    <micro-app
      name='micro-app-react'
      url={getUrl()}
      baseroute='/microReact'
      onCreated={() => console.log('react元素被创建')}
      onBeforemount={() => console.log('react即将被渲染')}
      onMounted={() => {
        console.log('react已经渲染完成')
      }}
      onUnmount={() => console.log('react被卸载')}
      onError={() => console.log('react渲染出错')}
      onDataChange={(e: any) => console.log(e.detail.data)}
    />
  )
}

export default observer(Index)