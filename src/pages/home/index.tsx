import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classnames from 'classnames'
import microApp from '@micro-zoe/micro-app'

import './index.less'

const tabArr = [
  {
    name: '子应用microNg',
    tab: 'home',
    hash: '/main/home',
    path: '/microNg',
    icon: 'fm-home',
    iconActive: 'fm-home2'
  },
  {
    name: '子应用microReact',
    tab: 'expenses',
    hash: '/main/expenses',
    path: '/microReact',
    icon: 'fm-feiyong',
    iconActive: 'fm-feiyong2'
  },
  // {
  //   name: '单据',
  //   tab: 'reimbursements',
  //   hash: '/main/reimbursements//',
  //   path: '/microNg',
  //   icon: 'fm-baoxiao',
  //   iconActive: 'fm-baoxiao2'
  // },
  // {
  //   name: '审批',
  //   tab: 'approvals',
  //   hash: '/main/approvals//',
  //   path: '/microNg',
  //   icon: 'fm-shenpi',
  //   iconActive: 'fm-shenpi2'
  // },
  // {
  //   name: '审核',
  //   tab: 'audits',
  //   hash: '/main/audits/',
  //   path: '/microNg',
  //   icon: 'fm-audit-outline',
  //   iconActive: 'fm-audit-inline'
  // },
  // {
  //   name: '我的',
  //   tab: 'me-setting',
  //   hash: '/main/me-setting',
  //   path: '/microNg',
  //   icon: 'fm-wode',
  //   iconActive: 'fm-wode2'
  // }
]

const Index = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<string>()

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
              navigate(`${item.path}`)
              microApp.setGlobalData({
                type: item.path === '/microNg' ? 'micro-app-ng' : 'micro-app-react',
                data: {
                  path: item.hash
                }
              })
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