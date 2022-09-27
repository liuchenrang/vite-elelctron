import React, { useState } from 'react';
import {Button} from "antd"
import { ToolData } from '../domain/domain';

export const Tool: React.FunctionComponent<{ data: ToolData,className:string }> = (props) => {
  let tl:ToolData = props.data;
  return  (
    <div className={props.className} onClick={tl.action}>
      <div>{tl.title}</div>
      <div >{tl.icon}</div>
    </div>

  )
}

