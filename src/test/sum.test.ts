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
test("二维数组", ()=>{
    let data = new Array()
    for (let i = 0; i < 7; i++) {
        data[i] = new Array()
        for (let j = 0; j < 24; j++) {
            let obj =  {
              fcCode: "123",
              productionNo: "9188222",
            }
          data[i][j]= obj

        }
    }
    console.log(data)
})

//62进制字符
const base = '0123456789abcdefghijklmnopqrstuvwxyz';
const ben = base.length;
function toBase(num: number) {
    let arr = [];
    while (num > 0) {
        arr.push(base[num % ben]);
        num = Math.floor(num / ben);
    }
    //数组反转，因为个位在索引0的位置，应反过来显示
    return arr.reverse().join('');

}

function to10(baseNum: string) {
    baseNum = baseNum.split('').reverse().join('');
    let val = 0;
    for (let i = 0; i < baseNum.length; i++) {
        let c = baseNum[i];
        val += (base.indexOf(c) * Math.pow(ben, i));
    }
    return val;
}
test("进制转换",()=>{
    console.log( toBase(12312313))
    expect(12312313).toBe(to10("7bw8p"))

})
