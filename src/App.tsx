import { useEffect } from 'react'
import Home from './pages/home'
import Routes from './router/router'

function App(props: any) {

  useEffect(() => {
    // 测试环境删除热更新的iframe白屏弹窗
    if (process.env.NODE_ENV === 'development') {
      const targetNode: any = document.querySelector('body')
      const config = { attributes: true, childList: true, subtree: true };
      const callback = function(mutationsList: any) {
        for(let mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.addedNodes.length && mutation.addedNodes[0].nodeName === 'IFRAME') {
              if (document.querySelector('iframe')) {
                document.body.removeChild(document.querySelector('iframe') as any)
              }
            }
        }
      };
      const observer = new MutationObserver(callback);
      observer.observe(targetNode, config);
    }   
  }, [])

  return ( 
    <div className='app-wrap'>
      <Routes />
      <Home />
    </div>
  )
}

export default App
