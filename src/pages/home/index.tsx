import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import classnames from 'classnames'
import microApp from '@micro-zoe/micro-app'

import './index.less'

const tabArr = [
  {
    name: '子应用1 page1',
    tab: 'home',
    hash: '/main/page1',
    path: '/microNg',
    icon: 'fm-home',
    iconActive: 'fm-home2'
  },
  {
    name: '子应用1 page2',
    tab: 'test',
    hash: '/main/page2',
    path: '/microNg',
    icon: 'fm-home',
    iconActive: 'fm-home2'
  },
  {
    name: '子应用2 expenses',
    tab: 'expenses',
    hash: '/main/expenses',
    path: '/microReact',
    icon: 'fm-feiyong',
    iconActive: 'fm-feiyong2'
  }
]

const Index = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<string>()

  const baseLocation = useLocation()
  console.log('baseLocation', baseLocation)

  return (
    <ul className='base-tabs'>
      {tabArr.map((item) => {
        return (
          <li
            key={item.tab}
            className={classnames({
              'tab-item': true,
              'tab-item-active': activeTab === item.tab,
            })}
            onClick={() => {
              setActiveTab(item.tab);
              if (window.location.hash.indexOf(item.path) === -1) {
                navigate(`${item.path}`)
              }
              microApp.setData(
                item.path === '/microNg' ? 'micro-app-ng' : 'micro-app-react',
                {
                  type: 'switchTab',
                  path: item.hash
                }
              )
            }}
          >
            <i
              className={classnames({
                'icon': true,
                [item.icon]: true,
                [item.iconActive]: activeTab === item.tab
              })}
            />
            <label className='tab-label'>{item.name}</label>
          </li>
        )
      })}
    </ul>
  )
}
export default Index