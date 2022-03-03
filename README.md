#### 问题
一个子应用为angularJs时，切换子应用会触发另一个react子应用的useEffect，导致重复监听。如果两个子应用都是react的话则正常，只执行一次useEffect。

#### 复现

##### angular问题

启动基座micro-base， test-angular, micro-sub-app2。 micro-base -> pages -> microNg地址换成7105

##### react正常

启动基座micro-base， micro-sub-app1, micro-sub-app2。 micro-base -> pages -> microNg地址换成8886

##### 

