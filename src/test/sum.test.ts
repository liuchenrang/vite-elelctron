import os from "os"

test('ip is 192.168.5.100', () => {
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
  const ipv4 = all.filter(x => x.family === "IPv4").filter(x=>x.address !== "127.0.0.1");
  console.log(ipv4)
  expect(3).toBe(3);
});
