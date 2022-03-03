#### 问题
一个子应用为angularJs时，切换子应用会触发另一个react子应用的useEffect，导致重复监听(可能是angular改变useLocation的原因？)。如果两个子应用都是react的话则正常，只执行一次useEffect。

#### 仓库地址

基座：git@github.com:XueMeijing/micro-base.git

Angularjs子应用:  git@github.com:XueMeijing/test-angular.git

react子应用2:  git@github.com:XueMeijing/micro-sub-app2.git

##### 如果需要测试正常切换的话可以把angular换成

react子应用1：git@github.com:XueMeijing/micro-sub-app1.git

#### 复现

##### angular问题

启动基座micro-base， test-angular, micro-sub-app2。 micro-base -> pages -> microNg地址换成7105

##### react正常

启动基座micro-base， micro-sub-app1, micro-sub-app2。 micro-base -> pages -> microNg地址换成8886

