import os from "os"
// const os = require( "os")

test('adds 1 + 2 to equal 3', () => {
  let nets = os.networkInterfaces();
  let all = []
  for (const key in os.networkInterfaces()) {
    if (Object.prototype.hasOwnProperty.call(os.networkInterfaces(), key)) {
      const element:Array<os.NetworkInterfaceInfo>|undefined = os.networkInterfaces()[key];
      if(element){
        all.push(...element)
      }
    }
  }
  console.log(os.networkInterfaces())
  expect(3).toBe(3);
});
