/**
 * 
 * OBD故障码：5位和7位为PCBU格式的故障码，如P080081，故障内码为"P0800"，其中“P08”代表动力系统的传动系统控制故障，00”代表传感器。
 * non OBD：4位和6位为16进制故障码
 * 实例 P000A
 */
// DTC用来记录什么故障以及故障是否严重

// 5位标准码：
// 前两位用来区分故障来自的控制系统, 是系统代码，比如B0-B3 是用在车身控制系统，C0-C3 是用在底盘控制系统，P0-P3是用在发动机控制系统，U0-U3 是用在通讯故障；
// 第三位是数字，表示表示故障所属的子系统码；
// 最后两位数字提供故障的对象（Failure category）和类型（Failure Sub Type）。

// DTC严重程度采用1个字节来存储，它分为A、B、 C、D四个等级。比如说
// A类表示立即维修车辆，
// B类表示及时维修车辆，
// C类表示影响不大，有时间再维护，
// D类表示没影响。

// 
/**
 * 把PBCU标准码转换为non OBD故障码
 * 如从 P000A 转换为 000A 
 * @param {*} code 
 */
function format_DTC_hex(code) {
  if (code.length === 5 || code.length === 7) {
    const hexDigitReplace = {"P0":"0","P1":"1","P2":"2","P3":"3","C0":"4","C1":"5","C2":"6","C3":"7","B0":"8","B1":"9","B2":"A","B3":"B","U0":"C","U1":"D","U2":"E","U3":"F"}
    code = code.toUpperCase()
    let result = hexDigitReplace[code.substring(0, 2)] + code.substring(2)
    if(result.length === 4){
      result = result + '00'
    }
    // console.log('格式化结果', result)
    return result
  } else {
    console.log('发生错误不是预期的格式', code)
  }
}

/**
 * 把non OBD故障码转换为PBCU标准码
 * 如从 000C00 转换为 P000C 
 * @param {*} code 
 */
function format_DTC_Decimal(code){
  if (code.length === 4 || code.length === 6) {
    const hexDigitReplace = { "0": "P0", "1": "P1", "2": "P2", "3": "P3", "4": "C0", "5": "C1", "6": "C2", "7": "C3", "8": "B0", "9": "B1", "A": "B2", "B": "B3", "C": "U0", "D": "U1", "E": "U2", "F": "U3" }
    code = code.toUpperCase()
    let result = hexDigitReplace[code.charAt(0)] + code.substring(1)
    console.log('格式化结果', result)
    if(result.length === 7 && result.substring(5, 7) === '00'){
      result = result.substring(0, 5)
    }
    return result
  }else {
    console.log('发生错误不是预期的格式', code)
  }
}