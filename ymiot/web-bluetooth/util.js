
// const $pidJSon = require('../../web-bluetooth/pid.js');
// const CryptoJS = require('./crypto-js');


// import PIDs from "./pid.js"
// import CryptoJS from "./crypto.js"

// 创建第一个<script>标签
var script1 = document.createElement('script');
script1.src = './pid.js';
document.head.appendChild(script1);

// 创建第二个<script>标签
var script2 = document.createElement('script');
script2.src = './crypto-js.js';
document.head.appendChild(script2);

function getSupport(cmd, msg) {
	let separator = cmd.replace('0', '4') // 分隔符
	try {
		let result = '00000000000000000000000000000000'
		msg = msg.replace(/[ ]|[\r]|[\n]|[\r\n]|[>]/g, "")
		if(!msg.includes(separator)){
			// console.log('不符合规范1', '00000000000000000000000000000000', separator, msg)
			return result
		}
		result = result.split('')
		
		let msgArray = msg.split(separator)
		msgArray.shift() // 删除头部无效数据
		
		// 非CAN模式06服务支持度有两位填充字节
		if(!localStorage.getItem('____ATDP')){
			localStorage.setItem('____ATDP', '')
		}
		if(!localStorage.getItem('____ATDP').includes("CAN") && cmd.substring(0, 2) === '06'){
			msgArray = msgArray.map(item => item.substring(2) )
		}
		msgArray = msgArray.filter(item=> item.length >= 8) // 过滤掉小于8的数据
		console.log(2, '数据情况', msgArray)
		for (let i = 0; i < msgArray.length; i++) {
			let data = msgArray[i]
			console.log(3, '有效数据', data.substring(0, 8))
			if(cmd === '0900' && data.substring(0, 2) === '01' && data.length === 12){
				data = data.substring(2, 10)
			}
			var a = parseInt(data.substring(0, 2), 16).toString(2)
			while (a.length < 8) {
				a = "0" + a
			}
			var b = parseInt(data.substring(2, 4), 16).toString(2)
			while (b.length < 8) {
				b = "0" + b
			}
			var c = parseInt(data.substring(4, 6), 16).toString(2)
			while (c.length < 8) {
				c = "0" + c
			}
			var d = parseInt(data.substring(6, 8), 16).toString(2)
			while (d.length < 8) {
				d =  "0" + d
			}
			let str = a + b + c + d
			console.log(4, '支持情况', str)
			for (let index = 0; index < result.length; index++) {
				if (result[index] === '0' && str[index] === '1') {
					result[index] = '1'
				}
			}
		}
		// console.log(4, '当前数据支持情况', result.join(''))
		return result.join('')
	} catch (e) {
		console.error('获取支持度错误：' + cmd + '\r\n' + e)
    // wx.showModal({
		// 	title: "$01 suppor error",
		// 	content: 'error：' + cmd + '\r\n' + e
		// })
		return null
	}
}

function getSupport$02(cmd, msg) {
	let separator = cmd.replace('0', '4') // 分隔符
	try {
		let result = '00000000000000000000000000000000'
		msg = msg.replace(/[ ]|[\r]|[\n]|[\r\n]|[>]/g, "")
		if(!msg.includes(separator) && !msg.includes(separator.substring(0, 4))){
			return result
		}
		result = result.split('')
		let msgArray = msg.split(separator)
		msgArray.shift() // 删除头部无效数据
		msgArray = msgArray.filter(item=> item.length >= 8) // 过滤掉小于8的数据
		for (let i = 0; i < msgArray.length; i++) {
			let data = msgArray[i]
			var a = parseInt(data.substring(0, 2), 16).toString(2)
			while (a.length < 8) {
				a = "0" + a
			}
			var b = parseInt(data.substring(2, 4), 16).toString(2)
			while (b.length < 8) {
				b = "0" + b
			}
			var c = parseInt(data.substring(4, 6), 16).toString(2)
			while (c.length < 8) {
				c = "0" + c
			}
			var d = parseInt(data.substring(6, 8), 16).toString(2)
			while (d.length < 8) {
				d =  "0" + d
			}
			let str = a + b + c + d
			for (let index = 0; index < result.length; index++) {
				if (result[index] === '0' && str[index] === '1') {
					result[index] = '1'
				}
			}
		}
		// console.log(4, '当前数据支持情况', result.join(''))
		return result.join('')
	} catch (e) {
		console.error('获取02支持错误：' + cmd + '\r\n' + e)
    // wx.showModal({
		// 	title: "$02 suppor error",
		// 	content: 'error：' + cmd + '\r\n' + e
		// })
		return null
	}
}

function get$01(cmd, msg) {
	const _data = msg
	let separator = cmd.replace('0', '4') // 分隔符
	try {
		msg = msg.replace(/[ ]|[\r]|[\n]|[\r\n]|[>]/g, '')
		if (msg.includes('NODATA') || !msg.includes(separator)) {
			// console.warn('getPidResult 1= 无数据', separator, msg)
			return null
		}
		let result = null // 最终结果
		let separatorLength = cmd.length
		let { min, max, effectiveLength, formula } = PIDs[cmd]
		// 2. 获取有效数据
		let effectiveData = ''
		if(localStorage.getItem('____ATDP').includes("CAN")){
			let msgArray = msg.split(separator)
			msgArray.shift() // 删除头部无效数据
			for (let item of msgArray) {
				let index = msg.indexOf(separator) // 分隔符开始的位置
				let length = Number(parseInt(msg.substring(index-2, index), 16)) 
				if(length === effectiveLength + (separatorLength / 2) || length === 7){
					effectiveData = msg.substring(index + separatorLength, index + separatorLength + effectiveLength * 2)
				}else{
					msg = msg.substring(index + separatorLength)// 截取无效数据，继续处理
				}
			}
		}else{
			// 非CAN直接拿第一个指令后边的数据
			let index = msg.indexOf(separator)
			effectiveData = msg.substring(index + separatorLength) // 有效数据
		}
		// 3 根据有效长度获取最终结果 16进制转10进制
		if(effectiveData && effectiveData.length >= effectiveLength*2){
			let A = parseInt(effectiveData.substring(0, 2), 16)
			let B
			let C
			let D
			if (effectiveLength > 1) {
				B = parseInt(effectiveData.substring(2, 4), 16)
			}
			if (effectiveLength > 2) {
				C = parseInt(effectiveData.substring(4, 6), 16)
			}
			if (effectiveLength > 3) {
				D = parseInt(effectiveData.substring(6, 8), 16)
			}
			result = formula(A, B, C, D) // 计算公式
			result = +result === 0 ? 0 : result // 如果0.00这种变成0
		}else{
			// console.error(`getPidResult3=有效数据不符合规范数据长度,数据=${effectiveData},规范长度=${effectiveLength*2}`)
		}
		// console.log(`getPidResult 2⬇= ${cmd} 的响应：${_data}，计算结果：${result}`)
		return result
	} catch (e) {
		console.error('获取pid结果错误：' + cmd + '\r\n' + e)
		// wx.showModal({
		// 	title: '$01 error',
		// 	content: 'error：' + cmd + '\r\n' + e
		// })
		return null
	}
}

function get$02(cmd, msg) {
	const _data = msg
	let separator = cmd.replace('0', '4') // 分隔符
	// 针对02冻结帧模式使用01的pid信息表
	try {
		msg = msg.replace(/[ ]|[\r]|[\n]|[\r\n]|[>]/g, '')
		if (msg.includes('NODATA') || !msg.includes(separator)) {
			// console.warn('getPidResult 1= 无数据', separator, msg)
			return null
		}
		let result = null // 最终结果
		let separatorLength = cmd.length
		const key = cmd.substring(0, 4).replace('02', '01')
		let { min, max, effectiveLength, formula } = PIDs[key]
		// 2. 获取有效数据
		let effectiveData = ''
		if(localStorage.getItem('____ATDP').includes("CAN")){
			let msgArray = msg.split(separator)
			msgArray.shift() // 删除头部无效数据
			for (let item of msgArray) {
				let index = msg.indexOf(separator) // 分隔符开始的位置
				let length = Number(parseInt(msg.substring(index-2, index), 16))
				if(length === effectiveLength + (separatorLength / 2) || length === 7){
					effectiveData = msg.substring(index + separatorLength, index + separatorLength + effectiveLength * 2)
				}else{
					msg = msg.substring(index + separatorLength)// 截取无效数据，继续处理
				}
			}
		}else{
			// 非CAN直接拿第一个指令后边的数据
			let index = msg.indexOf(separator)
			effectiveData = msg.substring(index + separatorLength) // 有效数据
		}
		if(effectiveData && effectiveData.length >= effectiveLength*2){
			let A = parseInt(effectiveData.substring(0, 2), 16)
			let B
			let C
			let D
			if (effectiveLength > 1) {
				B = parseInt(effectiveData.substring(2, 4), 16)
			}
			if (effectiveLength > 2) {
				C = parseInt(effectiveData.substring(4, 6), 16)
			}
			if (effectiveLength > 3) {
				D = parseInt(effectiveData.substring(6, 8), 16)
			}
			result = formula(A, B, C, D) // 计算公式
			result = +result === 0 ? 0 : result // 如果0.00这种变成0
		}else{
			console.error(`getPidResult3=有效数据不符合规范数据长度,数据=${effectiveData},规范长度=${effectiveLength*2}`)
		}
		// console.log(`getPidResult 2⬇= ${cmd} 的响应：${_data}，计算结果：${result}`)
		return result
	} catch (e) {
		console.error('获取pid结果错误：' + cmd + '\r\n' + e)
		// wx.showModal({
		// 	title: '$02 error',
		// 	content: 'error：' + cmd + '\r\n' + e
		// })
		return null
	}
}

function getDTC(cmd, msg){
	const separator = cmd.replace('0', '4') // 分隔符43 47 4A
	let result = []
	try {
		const separator = cmd.replace('0', '4')
		msg = msg.replace(/[ ]|[>]/g, '')
		if(!msg.includes(separator) || msg.includes('NODATA')){
			return []
		}
		var msgArray = msg.split("\r");
		msgArray = msgArray.filter(item=> item !== '')
		let canId_length = localStorage.getItem('____ATDP').includes('CAN') ?  (localStorage.getItem('____ATDP').includes('29/') ? 8 : 3) : 6
		let json = {}
		for (const item of msgArray) {
			let can = item.substring(0, canId_length)
			if (!json[can]) {
				json[can] = []
			}
			json[can].push(item)
		}
		// 校验第一帧和非CAN模式每一ECU都必须包含分隔符
		for (const key in json) {
			json[key].forEach((item, index) => {
				if ((index === 0 || (index !== 0 && canId_length === 6) ) && !item.includes(separator)) {
					json[key] = []
				}
			})
		}
		let effectiveData = {}
		for (const key in json) {
			json[key].forEach((item, index) => {
				if(canId_length === 6){
					item = item.substring(item.indexOf(separator) +  cmd.length, item.length-2)
				}else{
					if(index === 0){
						item =  item.substring(item.indexOf(separator) +  cmd.length + 2)
					}else{
						if( item.includes(separator) && item.substring(item.indexOf(separator) - 2, item.indexOf(separator)) === '07' ){
							// 模拟器
							item = item.substring(item.indexOf(separator) +  cmd.length + 2)
						}else{
							item = item.substring(canId_length + 2)
						}
					}
				}
				effectiveData[key] = effectiveData[key] ? effectiveData[key] + item : item
			})
		}
		for (let key in effectiveData) {
			let length = parseInt(effectiveData[key].length / 4)
			for (let i = 0; i < length; i++) {
				let code =  effectiveData[key].substring(i * 4, i * 4 + 4)
				if (code !== '0000' && !result.includes(code)) {
					result.push(code)
				}
			}
		}
		const hexDigitReplace = { "0": "P0", "1": "P1", "2": "P2", "3": "P3", "4": "C0", "5": "C1", "6": "C2", "7": "C3", "8": "B0", "9": "B1", "A": "B2", "B": "B3", "C": "U0", "D": "U1", "E": "U2", "F": "U3" }
		result.forEach((item, index) => {
			const _item = hexDigitReplace[item[0]] + item.substring(1)
			result.splice(index, 1, _item)
		})
		return result
	}catch (e) {
		console.error("获取故障码错误：" + cmd + '\r\n' + e)
		// wx.showModal({
		// 	title: 'DTC error',
		// 	content: 'error：' + cmd + '\r\n' + e
		// })
		return []
	}
}

// 只有非CAN模式才有
function get$05(cmd, msg){
	try{
		// msg = msg.replace(/[ ]|[\r]|[\n]|[\r\n]|[>]/g, "")
		msg = msg.replace(/[ ]|[>]/g, '')
		let separator = cmd.replace('0', '4')
		let result = ''
		// 非CAN模式解析
		if (msg.includes('NODATA') || !msg.includes(separator)) {
			return result
		}
		let msgArray = msg.split('\r')
		msgArray = msgArray.filter(item => item.includes(separator))
		
		for (const item of msgArray) {
			let index = item.indexOf(separator)
			if(index > -1){
				result = item.substring(index + 2)
			}
		}
		return result
	}catch(e){
		console.error('解析05返回数据错误', e)
		// wx.showModal({
		// 	title: '$05 error',
		// 	content: 'error：05' + cmd + '\r\n' + e
		// })
	}
}


function get$06(cmd, msg){
	console.log('参数', cmd, msg)
	const separator = cmd.replace('0', '4') // 分隔符
	let result = []
	try{
		msg = msg.replace(/[ ]|[>]/g, '')
		if(!msg.includes(separator) || msg.includes('NODATA')){
			return result
		}
		var msgArray = msg.split("\r");
		msgArray = msgArray.filter(item => item !== '')// 过滤空数组
		let frame_length = 0
		for (let s of msgArray) {
			frame_length = s.length > frame_length ? s.length : frame_length
		}
		let canId_length = frame_length - 16
		if(canId_length === 6){
			// 非CAN模式解析
			msgArray = msgArray.filter(item => item.includes(separator))
			for (const item of msgArray) {
				let index = item.indexOf(separator)
				if(index > -1){
					let effectiveData = item.substring(index + 2 , index + 14)
					if (effectiveData.length === 12) {
						result.push(effectiveData)
					}
				}
			}
		}else{
			let json = {}
			for (const item of msgArray) {
				let can = item.substring(0, canId_length)
				if (!json[can]) {
					json[can] = []
				}
				json[can].push(item)
			}
			console.log('按照CAN分组', json)
			let effectiveData = {}
			for (const key in json) {
				let subData = json[key]
				subData.forEach((item, index) => {
					if (index === 0) {
						item = item.substring(item.indexOf(separator) + 2) // 只去掉46
					} else {
						// 其他帧去掉前两位 每一帧开始标识
						item = item.substring(canId_length + 2)
					}
					effectiveData[key] = effectiveData[key] ? effectiveData[key] + item : item
				})
			}
			console.log('有效数据', effectiveData)
			for (const key in effectiveData) {
				let data = effectiveData[key]
				while(data.length > 18){
					// 过滤掉开头不包含MID的结果
					if(data.substring(0, 2) === cmd.substring(2, 4)){
						result.push(data.substring(0, 18))
					}
					data = data.substring(18)
				}
			}
		}
		// console.log('result', result)
		return result
	}catch(e){
		//TODO handle the exception
		console.error('解析06返回数据错误', e)
		// wx.showModal({
		// 	title: '$06 error',
		// 	content: 'error：06' + cmd + '\r\n' + e
		// })
	}
}

// 校验VIN基础格式
function checkVin_cn(vin){
	console.log('检验前vin=', vin)
	if(vin.length !== 17){
	  return false
	}
	if((/^\d{17}$/).test(vin)){
		return false
	}
	
	if((/^[A-Za-z]{17}$/).test(vin)){
		return false
	}
	let upperCaseVin = vin.toUpperCase()
	let pattern1 = /^[A-Z0-9]{17}$/ // 字母或数字
	let pattern2 = /^[^IOQ]{17}$/ // 不包含IOQ
	if(pattern1.test(upperCaseVin) && pattern2.test(upperCaseVin)){
		return true
	}
	return false
}

function get$09(cmd, msg){
  let result = null;
	try {
    const separator = cmd.replace('0', '4')
    msg = msg.replace(/[ ]|[>]/g, '')
    if(!msg.includes(separator) || msg.includes('NODATA')){
      return ''
    }
    var msgArray = msg.split("\r");
    msgArray = msgArray.filter(item=> item !== '')

    let canId_length = localStorage.getItem('____ATDP').includes('CAN') ?  (localStorage.getItem('____ATDP').includes('29/') ? 8 : 3) : 6

    let json = {}
    for (const item of msgArray) {
      let can = item.substring(0, canId_length)
      if (!json[can]) {
        json[can] = []
      }
      json[can].push(item)
    }
    // 校验第一帧和非CAN模式每一ECU都必须包含分隔符
    for (const key in json) {
      json[key].forEach((item, index) => {
        if ((index === 0 || (index !== 0 && canId_length === 6) ) && !item.includes(separator)) {
          json[key] = []
        }
      })
    }
    let effectiveData = {}
    for (const key in json) {
      json[key].forEach((item, index) => {
        if(canId_length === 6){
          item = item.substring(item.indexOf(separator) +  cmd.length + 2, item.length-2)
        }else{
          if(index === 0){
            item =  item.substring(item.indexOf(separator) +  cmd.length + 2)
          }else{
            if( item.includes(separator) && item.substring(item.indexOf(separator) - 2, item.indexOf(separator)) === '07' ){
              // 模拟器
              item = item.substring(item.indexOf(separator) +  cmd.length + 2)
            }else{
              item = item.substring(canId_length + 2)
            }
          }
        }
        effectiveData[key] = effectiveData[key] ? effectiveData[key] + item : item
      })
    }

		if(cmd === '0902' || cmd === '090D'){
			for (const key in effectiveData) {
				let item = effectiveData[key].replace(/00/g, "");
				if(effectiveData[key].length >= 34){
					let i = 0
					let VIN = ""
					while(i < 17){
						let hex = item.substring(i * 2 , i * 2 + 2)
						let str = String.fromCharCode(parseInt(hex, 16))// 格式转换
						VIN += str
						i++
					}
					if(cmd === '0902' && checkVin_cn(VIN)){
						result = VIN
					}
					if(cmd === '090D'){
						result = VIN
					}
				}
				
			}
		}else if(cmd === '0904'){
			let CALID = []
			for (let key in effectiveData) {
				// 需至少32字节
				if(effectiveData[key].length >= 32){
					let tem = ''
					let i = 0
					let maxLength = effectiveData[key].length / 2
					while(i < maxLength){
						let hex = effectiveData[key].substring(i * 2 , i * 2 + 2)
						let decimal = parseInt(hex, 16)
						// 合法字符 $20 到 $7E 32-126 过滤掉空格
						if(32 <= decimal && decimal <= 126){
							tem += String.fromCharCode(decimal);
						}else{
							// console.log('❌无效字符', hex, decimal, String.fromCharCode(decimal))
						}
						i ++ 
					}
					CALID.push(tem)
				}
			}
			result = CALID.join(' ')
		}else if(cmd === '0906'){
			let CVN = []
			for (let key in effectiveData) {
				let maxLength = parseInt(effectiveData[key].length / 8) // 最大8
				for (var i = 0; i < maxLength; i++) {
					let hex = effectiveData[key].substring(i * 8, i * 8 + 8)
					CVN.push(hex)
				}
			}
			result = CVN.join(' ')
		}else if(cmd === '0908' || cmd === '090B'){
			let IPT = []
			for (let key in effectiveData) {
				let maxLength = parseInt(effectiveData[key].length / 4)
				for (var i = 0; i < maxLength; i++) {
					let hex = effectiveData[key].substring(i * 4, i * 4 + 4)
					// 16或20计数
					if(i > 15 && hex === "0000" ){
						// 如果非20计数
					}else{
						IPT.push(parseInt(hex, 16))
					}
				}
			}
			result = IPT
		}else if(cmd === '090A'){
			let ECU = []
			for (let key in effectiveData) {
				if(effectiveData[key].length >= 40){
					let tem = ''
					// let length = effectiveData[key].length / 2 // 最大20
					let i = 0
					while(i < 20){
						let hex = effectiveData[key].substring(i * 2, i * 2 + 2)
						if(!['00', '20', 'FF'].includes(hex)){
							tem += String.fromCharCode(parseInt(hex, 16));
						}
						i ++ 
					}
					ECU.push(tem)
				}
			}
			result = ECU.join(' ')
		}else if(cmd === '090F'){
			for (const key in effectiveData) {
				if(effectiveData[key].length >= 34){
					let item = effectiveData[key].replace(/00/g, "");
					let i = 0
					let EROTAN = ""
					while(i < 17){
						let hex = item.substring(i * 2 , i * 2 + 2)
						// [ABCDEFGHJKLMNPRSTUVWXYZ] ($41 - $48, $4A - $4E, $50, $52 - $5A)
						// [0123456789] ($30 - $39)
						let str = String.fromCharCode(parseInt(hex, 16))// 格式转换
						EROTAN += str
						i++
					}
					result = EROTAN
				}
			}
		}else if(cmd === '0912'){
			let FEOCNTR = ''
			for (const key in effectiveData) {
				if(effectiveData[key].length > 4){
					FEOCNTR = parseInt(effectiveData[key].substring(0, 4), 16)
				}
			}
			result = FEOCNTR
		}
		// console.warn("解析"+ separator +'最终结果', result)
		return result;
	} catch (e) {
		//TODO handle the exception
		console.error('获取'+ cmd +'错误' + e)
		// wx.showModal({
		// 	title: '$09 error',
		// 	content: 'error：' + cmd + '\r\n' + e
		// })
		return null
	}
}

function getUDSDTC(cmd, msg){
	let result = []
	try{
		let separator = '5902'
		msg = msg.replace(/[ ]|[>]/g, '')
		if(!msg.includes(separator) || msg.includes('NODATA')){
			return []
		}
		let msgArray = msg.split("\r");
		const ecu_id_length = localStorage.getItem('____ATDP').includes('CAN') ? (localStorage.getItem('____ATDP').includes('29/') ? 8 : 3) : 6
		const ecu_id = msg.substring(0, ecu_id_length)
    // 过滤空和7F的数据
		msgArray = msgArray.filter((item, index)=>{
			if(index === 0){
				let _data = item.substring(ecu_id_length, ecu_id_length + 4)
				if(_data.includes('7F')){
					item = ''
				}
			}
			return item !== '' 
		}) 
		
		let effective_data_length = 0
		let effective_data = ""
		msgArray.forEach((item, index)=>{
			if(ecu_id_length === 6){
				effective_data += item.substring(10, item.length-2)
			}else{
				if(index === 0){
					let hex = msgArray.length === 1 ? item.substring(ecu_id_length, ecu_id_length + 2) : item.substring(ecu_id_length+2, ecu_id_length+4)
					effective_data_length = parseInt(hex, 16)
					effective_data += item.substring(item.indexOf(separator))
				}else{
					effective_data += item.substring(ecu_id_length + 2)
				}
			}
		})
		// 检查有效数据长度
		if(ecu_id_length !== 6){
			effective_data = effective_data.substring(6, effective_data_length*2) // // 取消5902+状态位
		}
		// effective_data = effective_data.substring(6) // 取消5902+状态位
		// 故障码分别是 DTCSAM + DTCHB + DTCMB + DTCLB + SODTC
		let length = parseInt(effective_data.length / 8)
		
		for (let i = 0; i < length; i++) {
			let code =  effective_data.substring(i * 8, i * 8 + 8)
			result.push(code)
		}
		return result
	}catch(e){
		//TODO handle the exception
		console.error("获取故障码错误：" + cmd + '\r\n' + e)
		// wx.showModal({
		// 	title: 'UDS error',
		// 	content: 'error：' + cmd + '\r\n' + e
		// })
		return []
	}
}


function encrypt(word){
	const key = CryptoJS.enc.Utf8.parse('UBDUXS5VPHKDKB284D7NKJFONCKWBUKA')
 const iv = CryptoJS.enc.Utf8.parse('UBDUXS5VPHKDKB28')
	console.warn('CryptoJS加密前', word);
	let srcs = CryptoJS.enc.Utf8.parse(word);
	let encrypted = CryptoJS.AES.encrypt(srcs, key, {
			iv: iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.ZeroPadding
	});
	console.warn('CryptoJS加密后', encrypted.ciphertext.toString().toUpperCase());
	return CryptoJS.enc.Hex.stringify(CryptoJS.enc.Base64.parse(encrypted.toString()))
}

function decrypt(word){
	const key = CryptoJS.enc.Utf8.parse('UBDUXS5VPHKDKB284D7NKJFONCKWBUKA')
  const iv = CryptoJS.enc.Utf8.parse('UBDUXS5VPHKDKB28')
	console.warn('CryptoJS解密前', word)
	let ciphertext = CryptoJS.enc.Hex.parse(word)
	let decrypt = CryptoJS.AES.decrypt({ciphertext: ciphertext}, key, { 
		iv: iv, 
		mode: CryptoJS.mode.CBC, 
		padding: CryptoJS.pad.ZeroPadding
	});
	let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
	console.warn('CryptoJS解密后', decryptedStr)
	return decryptedStr;
}
// console.log(encrypt('0100\r')) // 8A917618B85B54B4979B485D2BD2CC85
// console.log(encrypt('ATZ\r'))
// console.log(decrypt('284d5b707354a41bd6a4b15a570231ff')) // 012345678901

