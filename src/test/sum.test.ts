import os from "os"

import CryptoJS from 'crypto-js'
import {fileTypeFromFile} from 'file-type';

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
  var b = new Buffer('9w1o8me6ns0hiw9ud4id66e0');
var s = b.toString('base64');
// SmF2YVNjcmlwdA==
  console.log
})
test('decode',()=>{
  const key = CryptoJS.enc.Utf8.parse('9w1o8me6ns0hiw9ud4id66e0');
  let data: string = 'LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURQakNDQWlZQ0NRQzFPdENpSFdjSzh6QU5CZ2txaGtpRzl3MEJBUXNGQURCaE1Rc3dDUVlEVlFRR0V3SkQKVGpFTE1Ba0dBMVVFQ0F3Q1drb3hDekFKQmdOVkJBY01Ba2hhTVJNd0VRWURWUVFLREFwWlZFdEtMQ0JKYm1NdQpNUXN3Q1FZRFZRUUxEQUpKVkRFV01CUUdBMVVFQXd3TlkyOXRMbWx1ZEc5dFlXbG5ZekFlRncweU1qQTNNakF4Ck5EUXlNVGxhRncweU5UQTFNRGt4TkRReU1UbGFNR0V4Q3pBSkJnTlZCQVlUQWtOT01Rc3dDUVlEVlFRSURBSmEKU2pFTE1Ba0dBMVVFQnd3Q1NGb3hFekFSQmdOVkJBb01DbGxVUzBvc0lFbHVZeTR4Q3pBSkJnTlZCQXNNQWtsVQpNUll3RkFZRFZRUUREQTFqYjIwdWFXNTBiMjFoYVdkak1JSUJJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBUThBCk1JSUJDZ0tDQVFFQXRDTUVOOGJ5UzB6VThldTlLTHB3YjNncXNUZjBUWVRwcngzOGpqUHBXZGxyY0VFa1ovYlIKUHU2djI3VzlBK2Vsakw3RVF2MmpnNGdXN1pudWhJN1o2VXNONkpibVI5QWR1ci9adEJoVjY1eEhyT1NUZGFEVwovdG1ORG1uaVB0YXBNMUdUaTl4SnhNTWdPd2lUa04yL3hDZXpUblpFMjJGbnN3WExpemJxOEF2dERvYnZEMHJkCmRvRU9tY1FhUnA1ZzRSMlBUZ3NCNXRIMXNZczlFNXk0cDA3cjZ2bUVjVmpndTlDYW1tOTBnQUlTSlB5cDBQWGUKY3JxWU8wMVZuVFlzc29TeTZLZlBFaFl6QUl6WVQxQjRYMkZtZkd2TkY5T3lxcHVuQ2U5MVFXQVZqUnRNK1laaQp6UmNQOUVYRkZoMmZWcE5laEJRaG1iY2prLzdiakl2Q2RRSURBUUFCTUEwR0NTcUdTSWIzRFFFQkN3VUFBNElCCkFRQ3ZJcHFMRWNPRjhYZnNqKzc0RitCdDFkamVDWmdIUDV0NC9vdzUvZ0Z6eTEvL3NzSWRad1dQWUVUM0dId1gKeWQrUStoczNoSVpIMEJmeElVTkFuM0hrM0lhM1RuZEdySjlod2JnQVpiUjk0dHBxdXRrdHhucFM4Mk94b1M2RApIOTRLMUo2bW90eGduZHhNNCtvQjZZQUJ0ZnZ3TnI0MWhlcis3SGJLSGdIRXhIR3E0RjlubjQ2QzlQWUpYU1pUClpnRGlrWlNNeFJtSERIVm1UbWhEU3pBSjVvWW1yWmZkUEFacE1rOVZpbDFXT0xZTFcyNTh2RWdBNVhoM3UzRXoKcUliclQwSDFEWmdDSmg4QnZUS25RSEM2Q0tLdkFJTUR1MW5zYW04ckgreWhLakpUbDZ5QUFlVDR5aWZXNUpVaQpqUEcvUitXK2FSNDBFZTU0ZitaNFV6RHEKLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=';
  let bytes = CryptoJS.AES.decrypt(data, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
  });
  const arStr: string = bytes.toString(CryptoJS.enc.Utf8);
  expect("hello").toBe(arStr);
})
test('encode',()=>{
  let data: string = 'LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURQakNDQWlZQ0NRQzFPdENpSFdjSzh6QU5CZ2txaGtpRzl3MEJBUXNGQURCaE1Rc3dDUVlEVlFRR0V3SkQKVGpFTE1Ba0dBMVVFQ0F3Q1drb3hDekFKQmdOVkJBY01Ba2hhTVJNd0VRWURWUVFLREFwWlZFdEtMQ0JKYm1NdQpNUXN3Q1FZRFZRUUxEQUpKVkRFV01CUUdBMVVFQXd3TlkyOXRMbWx1ZEc5dFlXbG5ZekFlRncweU1qQTNNakF4Ck5EUXlNVGxhRncweU5UQTFNRGt4TkRReU1UbGFNR0V4Q3pBSkJnTlZCQVlUQWtOT01Rc3dDUVlEVlFRSURBSmEKU2pFTE1Ba0dBMVVFQnd3Q1NGb3hFekFSQmdOVkJBb01DbGxVUzBvc0lFbHVZeTR4Q3pBSkJnTlZCQXNNQWtsVQpNUll3RkFZRFZRUUREQTFqYjIwdWFXNTBiMjFoYVdkak1JSUJJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBUThBCk1JSUJDZ0tDQVFFQXRDTUVOOGJ5UzB6VThldTlLTHB3YjNncXNUZjBUWVRwcngzOGpqUHBXZGxyY0VFa1ovYlIKUHU2djI3VzlBK2Vsakw3RVF2MmpnNGdXN1pudWhJN1o2VXNONkpibVI5QWR1ci9adEJoVjY1eEhyT1NUZGFEVwovdG1ORG1uaVB0YXBNMUdUaTl4SnhNTWdPd2lUa04yL3hDZXpUblpFMjJGbnN3WExpemJxOEF2dERvYnZEMHJkCmRvRU9tY1FhUnA1ZzRSMlBUZ3NCNXRIMXNZczlFNXk0cDA3cjZ2bUVjVmpndTlDYW1tOTBnQUlTSlB5cDBQWGUKY3JxWU8wMVZuVFlzc29TeTZLZlBFaFl6QUl6WVQxQjRYMkZtZkd2TkY5T3lxcHVuQ2U5MVFXQVZqUnRNK1laaQp6UmNQOUVYRkZoMmZWcE5laEJRaG1iY2prLzdiakl2Q2RRSURBUUFCTUEwR0NTcUdTSWIzRFFFQkN3VUFBNElCCkFRQ3ZJcHFMRWNPRjhYZnNqKzc0RitCdDFkamVDWmdIUDV0NC9vdzUvZ0Z6eTEvL3NzSWRad1dQWUVUM0dId1gKeWQrUStoczNoSVpIMEJmeElVTkFuM0hrM0lhM1RuZEdySjlod2JnQVpiUjk0dHBxdXRrdHhucFM4Mk94b1M2RApIOTRLMUo2bW90eGduZHhNNCtvQjZZQUJ0ZnZ3TnI0MWhlcis3SGJLSGdIRXhIR3E0RjlubjQ2QzlQWUpYU1pUClpnRGlrWlNNeFJtSERIVm1UbWhEU3pBSjVvWW1yWmZkUEFacE1rOVZpbDFXT0xZTFcyNTh2RWdBNVhoM3UzRXoKcUliclQwSDFEWmdDSmg4QnZUS25RSEM2Q0tLdkFJTUR1MW5zYW04ckgreWhLakpUbDZ5QUFlVDR5aWZXNUpVaQpqUEcvUitXK2FSNDBFZTU0ZitaNFV6RHEKLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=';

  const key = CryptoJS.enc.Utf8.parse('9w1o8me6ns0hiw9ud4id66e0');
  let bytes = CryptoJS.AES.encrypt(data, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
  });
  const arStr: string = bytes.toString()
  console.log(arStr)

})
test("fileTypeDecect",async ()=>{
  console.log(await fileTypeFromFile('Unicorn.png'));
})
