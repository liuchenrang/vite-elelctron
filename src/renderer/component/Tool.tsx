import React, { useState } from 'react';
import {Button} from "antd"
import { ToolData } from '../domain/domain';

export const Tool: React.FunctionComponent<{ data: ToolData,className:string }> = (props) => {
  let tl:ToolData = props.data;
  return  (
    <div className={props.className}>
      <div>{tl.title}</div>
      <div onClick={tl.action}>{tl.icon}</div>
    </div>

  )
}

