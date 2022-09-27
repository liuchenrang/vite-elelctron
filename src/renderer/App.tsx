import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Space } from 'antd';
import { Tool } from './component/Tool';
import os from "os"
import {
  BugOutlined,
  DashOutlined,
  RestOutlined,
  RightCircleOutlined,
  StarOutlined,
  StopOutlined,
} from '@ant-design/icons';
import { ToolData } from './domain/domain';

function App() {
  const [count, setCount] = useState(0);
  const ipAction = () => {
    alert(1)
  }
  const ipTool:ToolData = { title: '查IP', icon: <BugOutlined /> ,action:ipAction}
  return (
    <div>
      <div style={{height:'20vh'}}>


      </div>
      <div className="App">
        <Tool
          className="Item"
          data={ipTool}
        />
        <Tool
          className="Item"
          data={{ title: '开启打印服务', icon: <RightCircleOutlined /> }}
        />
        <Tool
          className="Item"
          data={{ title: '停止打印服务', icon: <StopOutlined /> }}
        />

      </div>
    </div>
  );
}

export default App;
