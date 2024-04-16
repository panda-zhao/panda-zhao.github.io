const PIDs =  {
	"0100": {
		"id": 0,
		"pid": "0100",
		'dataFlow': false,
		"displayDial": false,
		"name": "PID 支持情况（01-20）",
		"resId": "",
		"unit": "",
		"remark": "PID 支持情况（01-20），位编码",
		"min": "",
		"max": "",
		"effectiveLength": 4,
		'imperialUnit': "",
		'metricMin': "",
		'metricMax': "",
		'imperialMin': "",
		'imperialMax':  "",
		"formula": function(A, B, C, D) {
			// return A + B + C + D
			return null
		}
	},
	"0101": {
		"id": 1,
		"pid": "0101",
		'dataFlow': false,
		"displayDial": false,
		"name": "监控清除故障码后的状态",
		"resId": "",
		"unit": "",
		"remark": "位编码",
		"min": "",
		"max": "",
		"effectiveLength": 4,
		'imperialUnit': "",
	  'metricMin': "",
		'metricMax': "",
		'imperialMin': "",
		'imperialMax':  "",
		"formula": function(A, B, C, D) {
			// 0 104 35 70 // 16进制
			/**
			【1-7】# of DTCs stored in this ECU 此ECU中的DTC存储的数量
			【0】Malfunction Indicator Lamp (MIL) Status 故障指示灯(MIL)状态
			 // 监测从DTC清除后状态
			【15】Misfire monitoring supported 支持失火系统监控
			【14】Fuel system monitoring supported 支持燃料系统监控
			【13】Comprehensive component monitoring  supported  支持综合组件监控
			【12】ISO/SAE reserved ISO/SAE 保留
			
			【11】Misfire monitoring ready 失火监控准备就绪
			【10】Fuel system monitoring ready 燃料系统监控就绪
			【9】Comprehensive component monitoring ready 综合组件监控就绪
			【8】ISO/SAE reserved ISO/SAE 保留
			
			// 至少运行一次才支持测试
			【23】Catalyst monitoring supported 支持催化剂监控
			【22】Heated catalyst monitoring supported 支持加热催化剂监控
			【21】Evaporative system monitoring supported 支持蒸发系统监控
			【20】Secondary air system monitoring supported 支持二次空气系统监控
			【19】A/C system refrigerant monitoring supported 支持空调系统制冷剂监控
			【18】Oxygen sensor heater monitoring supported 支持氧传感器加热器监控
			【17】Oxygen sensor monitoring supported 支持氧传感器监控
			【16】EGR system monitoring supported 支持EGR系统监控
			
			// 至少运行一次才支持测试
			【31】Catalyst monitoring ready 催化剂监控准备就绪
			【30】Heated catalyst monitoring ready 加热催化剂监控准备就绪
			【29】Evaporative system monitoring ready 蒸发系统监控准备就绪
			【28】Secondary air system monitoring ready 二次空气系统监控准备就绪 
			【27】A/C system refrigerant monitoring ready 空调系统制冷剂监控准备就绪
			【26】Oxygen sensor heater monitoring ready  氧传感器加热器监控就绪
			【25】Oxygen sensor monitoring ready  氧传感器监控准备就绪
			【24】EGR system monitoring ready  EGR系统监控准备就绪
		
		 */
		
			return null
		}
	},
	"0102": {
		"id": 2,
		"pid": "0102",
		'dataFlow': true,
		"displayDial": false,
		"name": "冻结帧故障码",
		"resId": "DTCFRZF",
		"unit": "",
		"remark": "",
		"min": "",
		"max": "",
		"effectiveLength": 2,
		'imperialUnit': "",
		'metricMin': "",
		'metricMax': "",
		'imperialMin': "",
		'imperialMax':  "",
		"formula": function(A, B) {
			let x = A.toString(16).length === 2 ? A.toString(16) : ('0' + A.toString(16))
			let y = B.toString(16).length === 2 ? B.toString(16) : ('0' + B.toString(16))
			let result = (x + y).toUpperCase()
			// console.log("result====", result)
			if(result!== '0000'){
				const hexDigitReplace = {
					'0': 'P0',
					'1': 'P1',
					'2': 'P2',
					'3': 'P3',
					'4': 'C0',
					'5': 'C1',
					'6': 'C2',
					'7': 'C3',
					'8': 'B0',
					'9': 'B1',
					'A': 'B2',
					'B': 'B3',
					'C': 'U0',
					'D': 'U1',
					'E': 'U2',
					'F': 'U3'
				}
				return hexDigitReplace[result[0]] + result.substring(1)
			}
			return '---'
		}
	},

	"0103": {
		"id": 3,
		"pid": "0103",
		'dataFlow': true,
		"displayDial": false,
		"name": "燃油系统状态",
		"resId": "FUELSYS2",
		"unit": "",
		"remark": "位编码",
		"min": "",
		"max": "",
		"effectiveLength": 2,
		'imperialUnit': "",
		'metricMin': "",
		'metricMax': "",
		'imperialMin': "",
		'imperialMax':  "",
		"formula": function(A, B) {
			// console.log("0103 result====", A, B)
			// let A = 40 B = 02
			let x = A.toString(2)
			while (x.length < 8) {
				x = "0" + x
			}
			let y = B.toString(2)
			while (y.length < 8) {
				y = "0" + y
			}
			// console.log("0103 result====", x, y)
			let fuelSystem1 = '---'
			// Number(x) & 0x01 === 0x01
			if(x[7] === "1"){
				fuelSystem1 =  'OL'
			}else if(x[6] === "1"){
				fuelSystem1 =  'CL'
			}else if(x[5] === "1"){
				fuelSystem1 =  'OL-Drive'
			}else if(x[4] === "1"){
				fuelSystem1 =  'OL-Fault '
			}else if(x[3] === "1"){
				fuelSystem1 =  'CL-Fault'
			}
			
			let fuelSystem2 = '---'
			if(y[7] === "1"){
				fuelSystem2 =  'OL'
			}else if(y[6] === "1"){
				fuelSystem2 =  'CL'
			}else if(y[5] === "1"){
				fuelSystem2 =  'OL-Drive'
			}else if(y[4] === "1"){
				fuelSystem2 =  'OL-Fault '
			}else if(y[3] === "1"){
				fuelSystem2 =  'CL-Fault'
			}
			let result = []
			if(fuelSystem1 !== '---'){
				result.push(fuelSystem1)
			}
			if(fuelSystem2 !== '---'){
				result.push(fuelSystem2)
			}
			return result.join(',')
		}
	},
	"0104": {
		"id": 4,
		"pid": "0104",
		'dataFlow': true,
		"displayDial": true,
		"name": "发动机负荷",
		"resId": "LOAD_PCT",
		"unit": "%",
		"remark": "引擎计算负载 保留1位小数",
		"min": 0,
		"max": 100,
		"effectiveLength": 1,
		'imperialUnit': "%",
		'metricMin': 0,
		'metricMax': 100,
		'imperialMin': 0,
		'imperialMax':  100,
		"formula": function(A) {
			let result = A * 100 / 255
			return Number(result.toFixed(1))
		}
	},
	"0105": {
		"id": 5,
		"pid": "0105",
		'dataFlow': true,
		"displayDial": true,
		"name": "冷却液温度",
		"resId": "ECT",
		"unit": "℃",
		"remark": "取整数,℉ = ( 9 / 5 ) * ℃ + 32",
		"min": -40,
		"max": 215,
		"effectiveLength": 1,
		'imperialUnit': "℉",
		'metricMin': -40,
		'metricMax': 200,
		'imperialMin': -40,
		'imperialMax': 400,
		"formula": function(A) {
			let result = A - 40
			return Number(result.toFixed(0))
		}
	},
	
	"0106": {
		"id": 6,
		"pid": "0106",
		'dataFlow': true,
		"displayDial": true,
		"name": "短期燃油修正（Bank 1）",
		"resId": "SHRTFT1",
		"unit": "%",
		"remark": "保留1位小数，根据0113和011D判断是缸组1还是缸组3",
		"min": -100,
		"max": 99.2,
		"effectiveLength": 1,
		'imperialUnit': "%",
		'metricMin': -100,
		'metricMax': 100,
		'imperialMin': -100,
		'imperialMax':  100,
		"formula": function(A) {
			let result = (A - 128) * 100 / 128
			return Number(result.toFixed(1))
		}
	},
	"0107": {
		"id": 7,
		"pid": "0107",
		'dataFlow': true,
		"displayDial": true,
		"name": "长期燃油修正（Bank 1）",
		"resId": "LONGFT1",
		"unit": "%",
		"remark": "保留1位小数",
		"min": -100,
		"max": 99.2,
		"effectiveLength": 1,
		'imperialUnit': "%",
		'metricMin': -100,
		'metricMax': 100,
		'imperialMin': -100,
		'imperialMax':  100,
		"formula": function(A) {
			let result = (A - 128) * 100 / 128
			return Number(result.toFixed(1))
		}
	},
	"0108": {
		"id": 8,
		"pid": "0108",
		'dataFlow': true,
		"displayDial": true,
		"name": "短期燃油修正（Bank 2）",
		"resId": "SHRTFT2",
		"unit": "%",
		"remark": "保留1位小数",
		"min": -100,
		"max": 99.2,
		"effectiveLength": 1,
		'imperialUnit': "%",
		'metricMin': -100,
		'metricMax': 100,
		'imperialMin': -100,
		'imperialMax':  100,
		"formula": function(A) {
			let result = (A - 128) * 100 / 128
			return Number(result.toFixed(1))
		}
	},
	"0109": {
		"id": 9,
		"pid": "0109",
		'dataFlow': true,
		"displayDial": true,
		"name": "长期燃油修正（Bank 2）",
		"resId": "LONGFT2",
		"unit": "%",
		"remark": "保留1位小数",
		"min": -100,
		"max": 99.2,
		"effectiveLength": 1,
		'imperialUnit': "%",
		'metricMin': -100,
		'metricMax': 100,
		'imperialMin': -100,
		'imperialMax':  100,
		"formula": function(A) {
			let result = (A - 128) * 100 / 128
			return Number(result.toFixed(1))
		}
	},
	"010A": {
		"id": 10,
		"pid": "010A",
		'dataFlow': true,
		"displayDial": true,
		"name": "燃油压力",
		"resId": "FRP",
		"unit": "kPa",
		"remark": "PSI保留1位小数,1kPa约等于0.145032PSI",
		"min": 0,
		"max": 765,
		"effectiveLength": 1,
		'imperialUnit': "PSI",
		'metricMin': 0,
		'metricMax': 800,
		'imperialMin': 0,
		'imperialMax': 100,// 110.9
		"formula": function(A) {
			let result = A * 3
			return Number(result.toFixed(1))
		}
	},
	"010B": {
		"id": 11,
		"pid": "010B",
		'dataFlow': true,
		"displayDial": true,
		"name": "进气歧管压力",
		"resId": "MAP",
		"unit": "kPa",
		"remark": "油箱压力绝对值 1kPa约等于0.2953inHg",
		"min": 0,
		"max": 255,
		"effectiveLength": 1,
		'imperialUnit': "inHg",
		'metricMin': 0,
		'metricMax': 200,
		'imperialMin': 0,
		'imperialMax': 100, // 75
		"formula": function(A) {
			let result = A
			return Number(result.toFixed(1))
		}
	},
	"010C": {
		"id": 12,
		"pid": "010C",
		'dataFlow': true,
		"displayDial": true,
		"name": "发动机转速",
		"resId": "RPM",
		"unit": "rpm",
		"remark": "发动机曲轴每分钟的转数。取整数",
		"min": 0,
		"max": 16383.75,
		"effectiveLength": 2,
		'imperialUnit': "rpm",
		'metricMin': 0,
		'metricMax': 8000,
		'imperialMin': 0,
		'imperialMax': 8000,
		"formula": function(A, B) {
			let result = (A * 256 + B) / 4
			return Number(result.toFixed(0))
		}
	},
	"010D": {
		"id": 13,
		"pid": "010D",
		'dataFlow': true,
		"displayDial": true,
		"name": "车辆速度",
		"resId": "VSS",
		"unit": "km/h",
		"remark": "英制 0 - 158mph 取整数,1km/h=0.62mph",
		"min": 0,
		"max": 255,
		"effectiveLength": 1,
		'imperialUnit': "mph",
		'metricMin': 0,
		'metricMax': 200,
		'imperialMin': 0,
		'imperialMax': 100, // 158
		"formula": function(A) {
			return Number(A.toFixed(0))
		}
	},
	"010E": {
		"id": 14,
		"pid": "010E",
		'dataFlow': true,
		"displayDial": true,
		"name": "点火提前角",
		"resId": "SPARKADV",
		"unit": "°",
		"remark": "保留1位小数",
		"min": -64,
		"max": 63.5, // 
		"effectiveLength": 1,
		'imperialUnit': "°",
		'metricMin': -50,
		'metricMax': 50,
		'imperialMin': -50,
		'imperialMax': 50,
		"formula": function(A) {
			let result = (A - 128) / 2
			return Number(result.toFixed(1))
		}
	},
	"010F": {
		"id": 15,
		"pid": "010F",
		'dataFlow': true,
		"displayDial": true,
		"name": "进气温度",
		"resId": "IAT",
		"unit": "℃",
		"remark": "油箱空气温度，取整数,℉ = ( 9 / 5 ) * ℃ + 32",
		"min": -40,
		"max": 215,
		"effectiveLength": 1,
		'imperialUnit': "℉",
		'metricMin': -40,
		'metricMax': 200,
		'imperialMin': -40,
		'imperialMax': 400,
		"formula": function(A) {
			let result = A - 40
			return Number(result.toFixed(0))
		}
	},
	"0110": {
		"id": 16,
		"pid": "0110",
		'dataFlow': true,
		"displayDial": true,
		"name": "空气流量速率",
		"resId": "MAF",
		"unit": "g/s",
		"remark": "保留2位小数,1g/s=0.132277lb/min",
		"min": 0,
		"max": 655.35,
		"effectiveLength": 2,
		'imperialUnit': "lb/min",
		'metricMin': 0,
		'metricMax': 600,
		'imperialMin': 0,
		'imperialMax': 100,
		"formula": function(A, B) {
			let result = ((A * 256) + B) / 100
			return Number(result.toFixed(2))
		}
	},
	"0111": {
		"id": 17,
		"pid": "0111",
		'dataFlow': true,
		"displayDial": true,
		"name": "节气门位置", // 绝对值(%)
		"resId": "TP",
		"unit": "%",
		"remark": "保留1位小数",
		"min": 0,
		"max": 100,
		"effectiveLength": 1,
		'imperialUnit': "%",
		'metricMin': 0,
		'metricMax': 100,
		'imperialMin': 0,
		'imperialMax':  100,
		"formula": function(A) {
			let result = A * 100 / 255
			return Number(result.toFixed(1))
		}
	},
	"0112": {
		"id": 18,
		"pid": "0112",
		'dataFlow': true,
		"displayDial": false,
		"name": "空气状态",
		"resId": "AIR_STAT",
		"unit": "",
		"remark": "位编码,如支持，同一时间有且仅有一个比特位能被设置为 1",
		"min": "",
		"max": "",
		"effectiveLength": 1,
		'imperialUnit': "",
		'metricMin': "",
		'metricMax': "",
		'imperialMin': "",
		'imperialMax':  "",
		"formula": function(A) {
			// console.log("0112 result====", A)
			let x = A.toString(2)
			while (x.length < 8) {
				x = "0" + x
			}
			// console.log("0112 esult====", x)
			let result = '---'
			// Number(x) & 0x01 === 0x01
			if(x[7] === "1"){
				result =  'UPS'
			}else if(x[6] === "1"){
				result =  'DNS'
			}else if(x[5] === "1"){
				result =  'OFF'
			}else if(x[4] === "1"){
				result =  'DIAG'
			}
			return result
		}
	},
	"0113": {
		"id": 19,
		"pid": "0113",
		'dataFlow': true,
		"displayDial": false,
		"name": "氧传感器位置",
		"resId": "O2SLOC",
		"unit": "",
		"remark": "0113和011D同时只能支持一个，bank2",
		"min": "",
		"max": "",
		"effectiveLength": 1,
		'imperialUnit': "",
		'metricMin': "",
		'metricMax': "",
		'imperialMin': "",
		'imperialMax':  "",
		"formula": function(A) {
			console.log("0113 result====", A)
			let x = A.toString(2)
			while (x.length < 8) {
				x = "0" + x
			}
			console.log("0113 esult====", x)
			let result = []
			if(x[7]=== '1'){
				result.push('O2S11')
			}
			if(x[6]=== '1'){
				result.push('O2S12')
			}
			if(x[5]=== '1'){
				result.push('O2S13')
			}
			if(x[4]=== '1'){
				result.push('O2S14')
			}
			if(x[3]=== '1'){
				result.push('O2S21')
			}
			if(x[2]=== '1'){
				result.push('O2S22')
			}
			if(x[1]=== '1'){
				result.push('O2S23')
			}
			if(x[0]=== '1'){
				result.push('O2S24')
			}
			return result.join(',')
		}
	},
	// 多配置, 修正
	"0114": {
		"id": 20,
		"pid": "0114",
		'dataFlow': true,
		"displayDial": true,
		"name": "氧传感器1",
		"resId": "O2B1S1",
		"unit": "V",
		"remark": "第一个参数表示电压(V) 0~1.275，第二个参数表示短期燃油修正(%) -100~99.2",
		"min": 0,
		"max": 1.275,
		"effectiveLength": 2,
		'imperialUnit': "V",
		'metricMin': 0,
		'metricMax': 1,
		'imperialMin': 0,
		'imperialMax': 1,
		"formula": function(A, B) {
			let result1 = Number((A / 200).toFixed(3))
			let result2 = Number(((B-128)*100/128).toFixed(1))
			return [result1, result2].join(',')
		}
	},
	// 多配置, 修正
	"0115": {
		"id": 21,
		"pid": "0115",
		'dataFlow': true,
		"displayDial": true,
		"name": "氧传感器2",
		"resId": "O2B1S2",
		"unit": "V",
		"remark": "第一个参数表示电压(V) 0~1.275，第二个参数表示短期燃油修正(%) -100~99.2",
		"min": 0,
		"max": 1.275,
		"effectiveLength": 2,
		'imperialUnit': "V",
		'metricMin': 0,
		'metricMax': 1,
		'imperialMin': 0,
		'imperialMax': 1,
		"formula": function(A, B) {
			let result1 = Number((A / 200).toFixed(3))
			let result2 = Number(((B-128)*100/128).toFixed(1))
			return [result1, result2].join(',')
		}
	},
	// 多配置, 修正
	"0116": {
		"id": 22,
		"pid": "0116",
		'dataFlow': true,
		"displayDial": true,
		"isCalculated": true,
		"name": "氧传感器3",
		"resId": "O2B1S3",
		"unit": "V",
		"remark": "第一个参数表示电压(V) 0~1.275，第二个参数表示短期燃油修正(%) -100~99.2",
		"min": 0,
		"max": 1.275,
		"effectiveLength": 2,
		'imperialUnit': "V",
		'metricMin': 0,
		'metricMax': 1,
		'imperialMin': 0,
		'imperialMax': 1,
		"formula": function(A, B) {
			let result1 = Number((A / 200).toFixed(3))
			let result2 = Number(((B-128)*100/128).toFixed(1))
			return [result1, result2].join(',')
		}
	},
	// 多配置, 修正
	"0117": {
		"id": 23,
		"pid": "0117",
		'dataFlow': true,
		"displayDial": true,
		"isCalculated": true,
		"name": "氧传感器4",
		"resId": "O2B1S4",
		"unit": "V",
		"remark": "第一个参数表示电压(V) 0~1.275，第二个参数表示短期燃油修正(%) -100~99.2",
		"min": 0,
		"max": 1.275,
		"effectiveLength": 2,
		'imperialUnit': "V",
		'metricMin': 0,
		'metricMax': 1,
		'imperialMin': 0,
		'imperialMax': 1,
		"formula": function(A, B) {
			let result1 = Number((A / 200).toFixed(3))
			let result2 = Number(((B-128)*100/128).toFixed(1))
			return [result1, result2].join(',')
		}
	},
	// 多配置, 修正
	"0118": {
		"id": 24,
		"pid": "0118",
		'dataFlow': true,
		"displayDial": true,
		"isCalculated": true,
		"name": "氧传感器5",
		"resId": "O2B2S1",
		"unit": "V",
		"remark": "第一个参数表示电压(V) 0~1.275，第二个参数表示短期燃油修正(%) -100~99.2",
		"min": 0,
		"max": 1.275,
		"effectiveLength": 2,
		'imperialUnit': "V",
		'metricMin': 0,
		'metricMax': 1,
		'imperialMin': 0,
		'imperialMax': 1,
		"formula": function(A, B) {
			let result1 = Number((A / 200).toFixed(3))
			let result2 = Number(((B-128)*100/128).toFixed(1))
			return [result1, result2].join(',')
		}
	},
	// 多配置, 修正
	"0119": {
		"id": 25,
		"pid": "0119",
		'dataFlow': true,
		"displayDial": true,
		"isCalculated": true,
		"name": "氧传感器6",
		"resId": "O2B2S2",
		"unit": "V",
		"remark": "第一个参数表示电压(V) 0~1.275，第二个参数表示短期燃油修正(%) -100~99.2",
		"min": 0,
		"max": 1.275,
		"effectiveLength": 2,
		'imperialUnit': "V",
		'metricMin': 0,
		'metricMax': 1,
		'imperialMin': 0,
		'imperialMax': 1,
		"formula": function(A, B) {
			let result1 = Number((A / 200).toFixed(3))
			let result2 = Number(((B-128)*100/128).toFixed(1))
			return [result1, result2].join(',')
		}
	},
	// 多配置, 修正
	"011A": {
		"id": 26,
		"pid": "011A",
		'dataFlow': true,
		"displayDial": true,
		"isCalculated": true,
		"name": "氧传感器7",
		"resId": "O2B2S3",
		"unit": "V",
		"remark": "第一个参数表示电压(V) 0~1.275，第二个参数表示短期燃油修正(%) -100~99.2",
		"min": 0,
		"max": 1.275,
		"effectiveLength": 2,
		'imperialUnit': "V",
		'metricMin': 0,
		'metricMax': 1,
		'imperialMin': 0,
		'imperialMax': 1,
		"formula": function(A, B) {
			let result1 = Number((A / 200).toFixed(3))
			let result2 = Number(((B-128)*100/128).toFixed(1))
			return [result1, result2].join(',')
		}
	},
	// 多配置, 修正
	"011B": {
		"id": 27,
		"pid": "011B",
		'dataFlow': true,
		"displayDial": true,
		"isCalculated": true,
		"name": "氧传感器8",
		"resId": "O2B2S4",
		"unit": "V",
		"remark": "第一个参数表示电压(V) 0~1.275，第二个参数表示短期燃油修正(%) -100~99.2",
		"min": 0,
		"max": 1.275,
		"effectiveLength": 2,
		'imperialUnit': "V",
		'metricMin': 0,
		'metricMax': 1,
		'imperialMin': 0,
		'imperialMax': 1,
		"formula": function(A, B) {
			let result1 = Number((A / 200).toFixed(3))
			let result2 = Number(((B-128)*100/128).toFixed(1))
			return [result1, result2].join(',')
		}
	},
	// 我的车辆需要
	"011C": {
		"id": 28,
		"pid": "011C",
		'dataFlow': true,
		"displayDial": false,
		"name": "车辆OBD标准指示",
		"resId": "OBDSUP",
		"unit": "",
		"remark": "当前车辆OBD 标准指示,位编码",
		"min": "",
		"max": "",
		"effectiveLength": 1,
		'imperialUnit': "",
		'metricMin': "",
		'metricMax': "",
		'imperialMin': "",
		'imperialMax': "",
		"formula": function(A) {
			let key = A.toString(16).toUpperCase()
			while (key.length < 2) {
				key = '0' + key
			}
			let jsonMap = {
				"01": "OBDII",
				"02": "OBD",
				"03": "OBD and OBDII",
				"04": "OBD I",
				"05": "No OBD",
				"06": "EOBD",
				"07": "EOBD and OBDII",
				"08": "EOBD and OBD",
				"09": "EOBD,OBD and OBDII",
				"0A": "JOBD",
				"OB": "JOBD and OBDII",
				"0C": "JOBD and EOBD",
				"0D": "JOBD,EOBD and BDII",
				"0E": "OBD, EOBD and KOBD",
				"0F": "OBD, OBD II, EOBD and KOBD",
				"11": "EMD",
				"12": "EMD+",
				"13": "HD OBD-C",
				"14": "HD OBD",
				"15": "WWD OBD",
				"17": "HD EOBD-I",
				"18": "HD EOBD-I N",
				"19": "HD EOBD-II",
				"1A": "HD EOBD-II N",
				"1C": "OBDBr-1",
				"1D": "OBDBr-2",
				"1E": "KOBD",
				"1F": "IOBD I",
				"20": "IOBD II",
				"21": "HD EOBD-VI",
				"22": "OBD, OBD II and HD OBD"
			}
			return jsonMap[key] ? jsonMap[key] : '---'
		}
	},


	"011D": {
		"id": 29,
		"pid": "011D",
		'dataFlow': true,
		"displayDial": false,
		"name": "氧传感器存在情况",
		"resId": "O2SLOC",
		"unit": "",
		"remark": "0113和011D同时只能支持一个，bank4",
		"min": "",
		"max": "",
		"effectiveLength": 1,
		'imperialUnit': "",
		'metricMin': "",
		'metricMax': "",
		'imperialMin': "",
		'imperialMax': "",
		"formula": function(A) {
			// [A0..A7] == [B1S1, B1S2, B2S1, B2S2, B3S1, B3S2, B4S1, B4S2] 
			// console.log("011D result====", A)
			let x = A.toString(2)
			while (x.length < 8) {
				x = "0" + x
			}
			// console.log("011D esult====", x)
			let result = []
			if(x[7]=== '1'){
				result.push('O2S11')
			}
			if(x[6]=== '1'){
				result.push('O2S12')
			}
			if(x[5]=== '1'){
				result.push('O2S21')
			}
			if(x[4]=== '1'){
				result.push('O2S22')
			}
			if(x[3]=== '1'){
				result.push('O2S31')
			}
			if(x[2]=== '1'){
				result.push('O2S32')
			}
			if(x[1]=== '1'){
				result.push('O2S41')
			}
			if(x[0]=== '1'){
				result.push('O2S42')
			}
			return result.join(',')
		}
	},
	"011E": {
		"id": 30,
		"pid": "011E",
		'dataFlow': true,
		"displayDial": false,
		"name": "动力输出状态",
		"resId": "PTO_STAT",
		"unit": "",
		"remark": "取力器 PTO 未启用",
		"min": null,
		"max": null,
		"effectiveLength": 1,
		'imperialUnit': "",
		'metricMin': "",
		'metricMax': "",
		'imperialMin': "",
		'imperialMax': "",
		"formula": function(A) {
			// A0=0:OFF, A0=1:ON
			console.log("011E result====", A)
			let x = A.toString(2)
			while (x.length < 8) {
				x = "0" + x
			}
			console.log("0113 result====", x)
			return x[7] === '1' ? 'ON' : 'OFF'
		}
	},
	"011F": {
		"id": 31,
		"pid": "011F",
		'dataFlow': true,
		"displayDial": true,
		"name": "发动机启动后运行时间", // (秒)
		"resId": "RUNTM",
		"unit": "second",
		"remark": "单位：秒",
		"min": 0,
		"max": 65535,
		"effectiveLength": 2,
		'imperialUnit': "second",
		'metricMin': 0,
		'metricMax': 10000,
		'imperialMin': 0,
		'imperialMax': 10000,
		"formula": function(A, B) {
			let result = (A * 256) + B
			return Number(result.toFixed(0))
		}
	},

	"0120": {
		"id": 32,
		"pid": "0120",
		'dataFlow': false,
		"displayDial": false,
		"name": "PID 支持情况（21-40）",
		"resId": "0120",
		"unit": "",
		"remark": "PID 支持情况（21-40）",
		"min": null,
		"max": null,
		"effectiveLength": 4,
		'imperialUnit': "",
		'imperialMin': "",
		'imperialMax':  "",
		"formula": function(A, B, C, D) {
			return A + B + C + D
		}
	},
	"0121": {
		"id": 33,
		"pid": "0121",
		'dataFlow': true,
		"displayDial": true,
		"name": "故障指示灯点亮后行驶里程",
		"resId": "MIL_DIST",
		"unit": "km",
		"remark": "取整数,1km=0.62mile",
		"min": 0,
		"max": 65535,
		"effectiveLength": 2,
		'metricMin': 0,
		'metricMax': 10000,
		'imperialUnit': "mile",
		'imperialMin': 0,
		'imperialMax': 40631,
		"formula": function(A, B) {
			let result = (A * 256) + B
			return Number(result.toFixed(0))
		}
	},
	"0122": {
		"id": 34,
		"pid": "0122",
		'dataFlow': true,
		"displayDial": true,
		"name": "燃油压力（相对于歧管真空度）",
		"resId": "FRP",
		"unit": "kPa",
		"remark": "保留1位小数,1kPa约等于0.145032PSI",
		"min": 0,
		"max": 5177.2,
		"effectiveLength": 2,
		'imperialUnit': "PSI",
		'metricMin': 0,
		'metricMax': 5000,
		'imperialMin': 0,
		'imperialMax': 700,
		"formula": function(A, B) {
			let result = 0.079 * (256 * A + B)
			return Number(result.toFixed(1))
		}
	},
	"0123": {
		"id": 35,
		"pid": "0123",
		'dataFlow': true,
		"displayDial": true,
		"name": "燃油压力（柴油或汽油直喷）",
		"resId": "FRP",
		"unit": "kPa",
		"remark": "取整数,1kPa约等于0.145032PSI",
		"min": 0,
		"max": 655350,
		"effectiveLength": 2,
		'imperialUnit': "PSI",
		'metricMin': 0,
		'metricMax': 100000,
		'imperialMin': 0,
		'imperialMax': 100000,
		"formula": function(A, B) {
			let result = ((A * 256) + B) * 10
			return Number(result.toFixed(0))
		}
	},
	// 多配置, 修正
	"0124": {
		"id": 36,
		"pid": "0124",
		'dataFlow': true,
		"displayDial": true,
		"name": "氧传感器1",
		"resId": "O2B1S1",
		"unit": "",
		"remark": "AB燃油-空气当量比(ratio)0～2， CD电压(V)0～8",
		"min": 0,
		"max": 1.999,
		"effectiveLength": 4,
		'imperialUnit': "",
		'metricMin': 0,
		'metricMax': 2,
		'imperialMin': 0,
		'imperialMax': 2,
		"formula": function(A, B, C, D) {
			let result1 = Number((((A*256)+B)*2/65535).toFixed(3))
			let result2 = Number((((C*256)+D)*8/65535).toFixed(3))
			return [result1, result2].join(',')
		}
	},
	// 多配置, 修正
	"0125": {
		"id": 37,
		"pid": "0125",
		'dataFlow': true,
		"displayDial": true,
		"name": "氧传感器2",
		"resId": "O2B1S2",
		"unit": "",
		"remark": "AB燃油-空气当量比(ratio)0～2， CD电压(V)0～8",
		"min": 0,
		"max": 1.999,
		"effectiveLength": 4,
		'imperialUnit': "",
		'metricMin': 0,
		'metricMax': 2,
		'imperialMin': 0,
		'imperialMax': 2,
		"formula": function(A, B, C, D) {
			let result1 = Number((((A*256)+B)*2/65535).toFixed(3))
			let result2 = Number((((C*256)+D)*8/65535).toFixed(3))
			return [result1, result2].join(',')
		}
	},
	// 多配置, 修正
	"0126": {
		"id": 38,
		"pid": "0126",
		'dataFlow': true,
		"displayDial": true,
		"isCalculated": true,
		"name": "氧传感器3",
		"resId": "O2B1S3",
		"unit": "",
		"remark": "AB燃油-空气当量比(ratio)0～2， CD电压(V)0～8",
		"min": 0,
		"max": 1.999,
		"effectiveLength": 4,
		'imperialUnit': "",
		'metricMin': 0,
		'metricMax': 2,
		'imperialMin': 0,
		'imperialMax': 2,
		"formula": function(A, B, C, D) {
			let result1 = Number((((A*256)+B)*2/65535).toFixed(3))
			let result2 = Number((((C*256)+D)*8/65535).toFixed(3))
			return [result1, result2].join(',')
		}
	},
	// 多配置, 修正
	"0127": {
		"id": 39,
		"pid": "0127",
		'dataFlow': true,
		"displayDial": true,
		"isCalculated": true,
		"name": "氧传感器4",
		"resId": "O2B1S4",
		"unit": "",
		"remark": "AB燃油-空气当量比(ratio)0～2， CD电压(V)0～8",
		"min": 0,
		"max": 1.999,
		"effectiveLength": 4,
		'imperialUnit': "",
		'metricMin': 0,
		'metricMax': 2,
		'imperialMin': 0,
		'imperialMax': 2,
		"formula": function(A, B, C, D) {
			let result1 = Number((((A*256)+B)*2/65535).toFixed(3))
			let result2 = Number((((C*256)+D)*8/65535).toFixed(3))
			return [result1, result2].join(',')
		}
	},
	// 多配置, 修正
	"0128": {
		"id": 40,
		"pid": "0128",
		'dataFlow': true,
		"displayDial": true,
		"isCalculated": true,
		"name": "氧传感器5",
		"resId": "O2B2S1",
		"unit": "",
		"remark": "AB燃油-空气当量比(ratio)0～2， CD电压(V)0～8",
		"min": 0,
		"max": 1.999,
		"effectiveLength": 4,
		'imperialUnit': "",
		'metricMin': 0,
		'metricMax': 2,
		'imperialMin': 0,
		'imperialMax': 2,
		"formula": function(A, B, C, D) {
			let result1 = Number((((A*256)+B)*2/65535).toFixed(3))
			let result2 = Number((((C*256)+D)*8/65535).toFixed(3))
			return [result1, result2].join(',')
		}
	},
	// 多配置, 修正
	"0129": {
		"id": 41,
		"pid": "0129",
		'dataFlow': true,
		"displayDial": true,
		"isCalculated": true,
		"name": "氧传感器6",
		"resId": "O2B2S2",
		"unit": "",
		"remark": "AB燃油-空气当量比(ratio)0～2， CD电压(V)0～8",
		"min": 0,
		"max": 1.999,
		"effectiveLength": 4,
		'imperialUnit': "",
		'metricMin': 0,
		'metricMax': 2,
		'imperialMin': 0,
		'imperialMax': 2,
		"formula": function(A, B, C, D) {
			let result1 = Number((((A*256)+B)*2/65535).toFixed(3))
			let result2 = Number((((C*256)+D)*8/65535).toFixed(3))
			return [result1, result2].join(',')
		}
	},
	// 多配置, 修正
	"012A": {
		"id": 42,
		"pid": "012A",
		'dataFlow': true,
		"displayDial": true,
		"isCalculated": true,
		"name": "氧传感器7",
		"resId": "O2B2S3",
		"unit": "",
		"remark": "AB燃油-空气当量比(ratio)0～2， CD电压(V)0～8",
		"min": 0,
		"max": 1.999,
		"effectiveLength": 4,
		'imperialUnit': "",
		'metricMin': 0,
		'metricMax': 2,
		'imperialMin': 0,
		'imperialMax': 2,
		"formula": function(A, B, C, D) {
			let result1 = Number((((A*256)+B)*2/65535).toFixed(3))
			let result2 = Number((((C*256)+D)*8/65535).toFixed(3))
			return [result1, result2].join(',')
		}
	},
	// 多配置, 修正
	"012B": {
		"id": 43,
		"pid": "012B",
		'dataFlow': true,
		"displayDial": true,
		"isCalculated": true,
		"name": "氧传感器8",
		"resId": "O2B2S4",
		"unit": "",
		"remark": "AB燃油-空气当量比(ratio)0～2， CD电压(V)0～8",
		"min": 0,
		"max": 1.999,
		"effectiveLength": 4,
		'imperialUnit': "",
		'metricMin': 0,
		'metricMax': 2,
		'imperialMin': 0,
		'imperialMax': 2,
		"formula": function(A, B, C, D) {
			let result1 = Number((((A*256)+B)*2/65535).toFixed(3))
			let result2 = Number((((C*256)+D)*8/65535).toFixed(3))
			return [result1, result2].join(',')
		}
	},
	"012C": {
		"id": 44,
		"pid": "012C",
		'dataFlow': true,
		"displayDial": true,
		"name": "废气循环",
		"resId": "EGR_PTC",
		"unit": "%",
		"remark": "保留1位小数",
		"min": 0,
		"max": 100,
		"effectiveLength": 1,
		'imperialUnit': "%",
		'metricMin': 0,
		'metricMax': 100,
		'imperialMin': 0,
		'imperialMax':  100,
		"formula": function(A) {
			let result = A * 100 / 255
			return Number(result.toFixed(1))
		}
	},
	"012D": {
		"id": 45,
		"pid": "012D",
		'dataFlow': true,
		"displayDial": true,
		"name": "废气循环错误",
		"resId": "EGR_ERR",
		"unit": "%",
		"remark": "保留1位小数",
		"min": -100,
		"max": 99.2,
		"effectiveLength": 1,
		'imperialUnit': "%",
		'metricMin': -100,
		'metricMax': 100,
		'imperialMin': -100,
		'imperialMax':  100,
		"formula": function(A) {
			let result = (A - 128) * 100 / 128
			return Number(result.toFixed(1))
		}
	},
	"012E": {
		"id": 46,
		"pid": "012E",
		'dataFlow': true,
		"displayDial": true,
		"name": "蒸发净化命令",
		"resId": "EVAP_PCT",
		"unit": "%",
		"remark": "保留1位小数",
		"min": 0,
		"max": 100,
		"effectiveLength": 1,
		'imperialUnit': "%",
		'metricMin': 0,
		'metricMax': 100,
		'imperialMin': 0,
		'imperialMax':  100,
		"formula": function(A) {
			let result = A * 100 / 255
			return Number(result.toFixed(1))
		}
	},
	"012F": {
		"id": 47,
		"pid": "012F",
		'dataFlow': true,
		"displayDial": true,
		"name": "油量液位情况",
		"resId": "FLI",
		"unit": "%",
		"remark": "保留1位小数",
		"min": 0,
		"max": 100,
		"effectiveLength": 1,
		'imperialUnit': "%",
		'metricMin': 0,
		'metricMax': 100,
		'imperialMin': 0,
		'imperialMax':  100,
		"formula": function(A) {
			let result = A * 100 / 255
			return Number(result.toFixed(1))
		}
	},
	"0130": {
		"id": 48,
		"pid": "0130",
		'dataFlow': true,
		"displayDial": true,
		"name": "故障码清除后热车次数",
		"resId": "WARM_UPS",
		"unit": "",
		"remark": "次数",
		"min": 0,
		"max": 255,
		"effectiveLength": 1,
		'imperialUnit': "",
		'metricMin': 0,
		'metricMax': 100,
		'imperialMin': 0,
		'imperialMax':  100,
		"formula": function(A) {
			return A
		}
	},
	"0131": {
		"id": 49,
		"pid": "0131",
		'dataFlow': true,
		"displayDial": true,
		"name": "故障码清除后后行驶里程",
		"resId": "CLR_DIST",
		"unit": "km",
		"remark": "取整数,1km=0.62mile，若大于65535公里保持65535公里",
		"min": 0,
		"max": 65535,
		"effectiveLength": 2,
		'imperialUnit': "mile",
		'metricMin': 0,
		'metricMax': 60000,
		'imperialMin': 0,
		'imperialMax':  40000,
		"formula": function(A, B) {
			let result = (A * 256) + B
			return Number(result.toFixed(0))
		}
	},
	"0132": {
		"id": 50,
		"pid": "0132",
		'dataFlow': true,
		"displayDial": true,
		"name": "燃油蒸发系统蒸汽压力",
		"resId": "EVAP_VP",
		"unit": "Pa",
		"remark": "inH2O保留1位小数,1kPa=4.0145inH2O，$54比$32更合适",
		"min": -8192,
		"max": 8192,
		"effectiveLength": 2,
		'imperialUnit': "inH2O",
		'metricMin': -10000,
		'metricMax': 10000,
		'imperialMin': -20,
		'imperialMax':  20,
		"formula": function(A, B) {
			let result = ((A * 256) + B) / 4
			return Number(result.toFixed(1))
		}
	},
	"0133": {
		"id": 51,
		"pid": "0133",
		'dataFlow': true,
		"displayDial": true,
		"name": "大气压",
		"resId": "BARO",
		"unit": "kPa",
		"remark": "inHg保留1位小数,1kPa约等于0.2953inHg",
		"min": 0,
		"max": 255,
		"effectiveLength": 1,
		'imperialUnit': "inHg",
		'metricMin': 0,
		'metricMax': 200,
		'imperialMin': 0,
		'imperialMax':  100,
		"formula": function(A) {
			let result = A
			return Number(result.toFixed(1))
		}
	},
	// 多配置, 修正
	"0134": {
		"id": 52,
		"pid": "0134",
		'dataFlow': true,
		"displayDial": true,
		"name": "氧气传感器1",
		"resId": "O2B1S1",
		"unit": "",
		"remark": "AB燃油和空气当量比 ratio，0-2 保留3位小数，CD是电流。mA -128~128",
		"min": 0,
		"max": 1.999,
		"effectiveLength": 4,
		'imperialUnit': "",
		'metricMin': 0,
		'metricMax': 2,
		'imperialMin': 0,
		'imperialMax': 2,
		"formula": function(A, B, C, D) {
			let result1 = Number(((A * 256 + B) / 32768).toFixed(3))
			let result2 = Number((((C*256)+D)/256 - 128).toFixed(0))
			return [result1, result2].join(',')
		}
	},
	// 多配置, 修正
	"0135": {
		"id": 53,
		"pid": "0135",
		'dataFlow': true,
		"displayDial": true,
		"name": "氧气传感器2",
		"resId": "O2B1S2",
		"unit": "",
		"remark": "AB燃油和空气当量比 ratio，0-2 保留3位小数，CD是电流。mA -128~128",
		"min": 0,
		"max": 1.999,
		"effectiveLength": 4,
		'imperialUnit': "",
		'metricMin': 0,
		'metricMax': 2,
		'imperialMin': 0,
		'imperialMax': 2,
		"formula": function(A, B, C, D) {
			let result1 = Number(((A * 256 + B) / 32768).toFixed(3))
			let result2 = Number((((C*256)+D)/256 - 128).toFixed(0))
			return [result1, result2].join(',')
		}
	},
	// 多配置, 修正
	"0136": {
		"id": 54,
		"pid": "0136",
		'dataFlow': true,
		"displayDial": true,
		"isCalculated": true,
		"name": "氧气传感器3",
		"resId": "O2B1S3",
		"unit": "",
		"remark": "AB燃油和空气当量比 ratio，0-2 保留3位小数，CD是电流。mA -128~128",
		"min": 0,
		"max": 1.999,
		"effectiveLength": 4,
		'imperialUnit': "",
		'metricMin': 0,
		'metricMax': 2,
		'imperialMin': 0,
		'imperialMax': 2,
		"formula": function(A, B, C, D) {
			let result1 = Number(((A * 256 + B) / 32768).toFixed(3))
			let result2 = Number((((C*256)+D)/256 - 128).toFixed(0))
			return [result1, result2].join(',')
		}
	},
	// 多配置, 修正
	"0137": {
		"id": 55,
		"pid": "0137",
		'dataFlow': true,
		"displayDial": true,
		"isCalculated": true,
		"name": "氧气传感器4",
		"resId": "O2B1S4",
		"unit": "",
		"remark": "AB燃油和空气当量比 ratio，0-2 保留3位小数，CD是电流。mA -128~128",
		"min": 0,
		"max": 1.999,
		"effectiveLength": 4,
		'imperialUnit': "",
		'metricMin': 0,
		'metricMax': 2,
		'imperialMin': 0,
		'imperialMax': 2,
		"formula": function(A, B, C, D) {
			let result1 = Number(((A * 256 + B) / 32768).toFixed(3))
			let result2 = Number((((C*256)+D)/256 - 128).toFixed(0))
			return [result1, result2].join(',')
		}
	},
	// 多配置, 修正
	"0138": {
		"id": 56,
		"pid": "0138",
		'dataFlow': true,
		"displayDial": true,
		"isCalculated": true,
		"name": "氧气传感器5",
		"resId": "Oxygen Sensor 5",
		"resId": "O2B2S1",
		"unit": "",
		"remark": "AB燃油和空气当量比 ratio，0-2 保留3位小数，CD是电流。mA -128~128",
		"min": 0,
		"max": 1.999,
		"effectiveLength": 4,
		'imperialUnit': "",
		'metricMin': 0,
		'metricMax': 2,
		'imperialMin': 0,
		'imperialMax': 2,
		"formula": function(A, B, C, D) {
			let result1 = Number(((A * 256 + B) / 32768).toFixed(3))
			let result2 = Number((((C*256)+D)/256 - 128).toFixed(0))
			return [result1, result2].join(',')
		}
	},
	// 多配置, 修正
	"0139": {
		"id": 57,
		"pid": "0139",
		'dataFlow': true,
		"displayDial": true,
		"isCalculated": true,
		"name": "氧气传感器6",
		"resId": "O2B2S2",
		"unit": "",
		"remark": "AB燃油和空气当量比 ratio，0-2 保留3位小数，CD是电流。mA -128~128",
		"min": 0,
		"max": 1.999,
		"effectiveLength": 4,
		'imperialUnit': "",
		'metricMin': 0,
		'metricMax': 2,
		'imperialMin': 0,
		'imperialMax': 2,
		"formula": function(A, B, C, D) {
			let result1 = Number(((A * 256 + B) / 32768).toFixed(3))
			let result2 = Number((((C*256)+D)/256 - 128).toFixed(0))
			return [result1, result2].join(',')
		}
	},
	// 多配置, 修正
	"013A": {
		"id": 58,
		"pid": "013A",
		'dataFlow': true,
		"displayDial": true,
		"isCalculated": true,
		"name": "氧气传感器7",
		"resId": "O2B2S3",
		"unit": "",
		"remark": "AB燃油和空气当量比 ratio，0-2 保留3位小数，CD是电流。mA -128~128",
		"min": 0,
		"max": 1.999,
		"effectiveLength": 4,
		'imperialUnit': "",
		'metricMin': 0,
		'metricMax': 2,
		'imperialMin': 0,
		'imperialMax': 2,
		"formula": function(A, B, C, D) {
			let result1 = Number(((A * 256 + B) / 32768).toFixed(3))
			let result2 = Number((((C*256)+D)/256 - 128).toFixed(0))
			return [result1, result2].join(',')
		}
	},
	// 多配置, 修正
	"013B": {
		"id": 59,
		"pid": "013B",
		'dataFlow': true,
		"displayDial": true,
		"isCalculated": true,
		"name": "氧气传感器8",
		"resId": "O2B2S4",
		"unit": "",
		"remark": "AB燃油和空气当量比 ratio，0-2 保留3位小数，CD是电流。mA -128~128",
		"min": 0,
		"max": 1.999,
		"effectiveLength": 4,
		'imperialUnit': "",
		'metricMin': 0,
		'metricMax': 2,
		'imperialMin': 0,
		'imperialMax': 2,
		"formula": function(A, B, C, D) {
			let result1 = Number(((A * 256 + B) / 32768).toFixed(3))
			let result2 = Number((((C*256)+D)/256 - 128).toFixed(0))
			return [result1, result2].join(',')
		}
	},
	"013C": {
		"id": 60,
		"pid": "013C",
		'dataFlow': true,
		"displayDial": true,
		"name": "催化剂温度（Bank 1，传感器1）",
		"resId": "CATEMP11",
		"unit": "℃",
		"remark": "取整数,℉ = ( 9 / 5 ) * ℃ + 32",
		"min": -40,
		"max": 6513.5,
		"effectiveLength": 2,
		'imperialUnit': "℉",
		'metricMin': -40,
		'metricMax': 6000,
		'imperialMin': -40,
		'imperialMax': 10000,
		"formula": function(A, B) {
			let result = ((A * 256) + B) / 10 - 40
			return Number(result.toFixed(0))
		}
	},
	"013D": {
		"id": 61,
		"pid": "013D",
		'dataFlow': true,
		"displayDial": true,
		"name": "催化剂温度（Bank 2，传感器1）",
		"resId": "CATEMP21",
		"unit": "℃",
		"remark": "℉ = ( 9 / 5 ) * ℃ + 32",
		"min": -40,
		"max": 6513.5,
		"effectiveLength": 2,
		'imperialUnit': "℉",
		'metricMin': -40,
		'metricMax': 6000,
		'imperialMin': -40,
		'imperialMax': 10000,
		"formula": function(A, B) {
			let result = ((A * 256) + B) / 10 - 40
			return Number(result.toFixed(0))
		}
	},
	"013E": {
		"id": 62,
		"pid": "013E",
		'dataFlow': true,
		"displayDial": true,
		"name": "催化剂温度（Bank 1，传感器2）",
		"resId": "CATEMP12",
		"unit": "℃",
		"remark": "取整数,℉ = ( 9 / 5 ) * ℃ + 32",
		"min": -40,
		"max": 6513,
		"effectiveLength": 2,
		'imperialUnit': "℉",
		'metricMin': -40,
		'metricMax': 6000,
		'imperialMin': -40,
		'imperialMax': 10000,
		"formula": function(A, B) {
			let result = ((A * 256) + B) / 10 - 40
			return Number(result.toFixed(0))
		}
	},
	"013F": {
		"id": 63,
		"pid": "013F",
		'dataFlow': true,
		"displayDial": true,
		"name": "催化剂温度（Bank 2，传感器2）",
		"resId": "CATEMP22",
		"unit": "℃",
		"remark": "取整数,℉ = ( 9 / 5 ) * ℃ + 32",
		"min": -40,
		"max": 6513,
		"effectiveLength": 2,
		'imperialUnit': "℉",
		'metricMin': -40,
		'metricMax': 6000,
		'imperialMin': -40,
		'imperialMax': 10000,
		"formula": function(A, B) {
			let result = ((A * 256) + B) / 10 - 40
			return Number(result.toFixed(0))
		}
	},
	"0140": {
		"id": 64,
		"pid": "0140",
		'dataFlow': false,
		"displayDial": false,
		"name": "PID 支持情况（41-60）",
		"resId": "",
		"unit": "",
		"remark": "PID 支持情况（41-60）",
		"min": "",
		"max": "",
		"effectiveLength": 4,
		'imperialUnit': "",
		'metricMin': "",
		'metricMax': "",
		'imperialMin': "",
		'imperialMax':  "",
		"formula": function(A, B, C, D) {
			return A + B + C + D
		}
	},
	"0141": {
		"id": 65,
		"pid": "0141",
		'dataFlow': false,
		"displayDial": false,
		"name": "这个驾驶周期的监控状态",
		"resId": "",
		"unit": "",
		"remark": "无解析规则",
		"min": "",
		"max": "",
		"effectiveLength": 4,
		'imperialUnit': "",
		'metricMin': "",
		'metricMax': "",
		'imperialMin': "",
		'imperialMax':  "",
		"formula": function(A, B, C, D) {
				/*
				【0-7】保留-将被用作$00报告

				 // 本次行程持续监控的启用状态：
				【15】Misfire monitoring enabled 失火监控启用
				【14】Fuel system monitoring enabled 燃油系统监控启用
				【13】Comprehensive component monitoring enabled 综合组件监控启用
				【12】ISO/SAE reserved	ISO/SAE 保留
				 // 本次行程持续监控的完成状态：
				【11】Misfire monitoring completed 失火监控完成
				【10】Fuel system monitoring completed 燃油系统监测完成
				【9】Comprehensive component monitoring completed 综合组件监控完成
				【8】ISO/SAE reserved	ISO/SAE 保留

				 // 本次行程非连续监控的启用状态：
				【23】Catalyst monitoring 催化剂监控
				【22】Heated catalyst monitoring 加热催化剂监控
				【21】Evaporative system monitoring 蒸发系统监控
				【20】Secondary air system monitoring 二次空气系统监控
				【19】A/C system refrigerant monitoring 空调系统制冷剂监控
				【18】Oxygen sensor monitoring 氧传感器监控
				【17】Oxygen sensor heater monitoring 氧传感器加热器监控
				【16】EGR system monitoring EGR系统监控

				 // 本次行程非连续监控的完成状态：
				【31】Catalyst monitoring completed  催化剂监控完成
				【30】Heated catalyst monitoring completed 加热催化剂监控完成
				【29】Evaporative system monitoring completed 蒸发系统监控完成
				【28】secondary air system monitoring completed 二次空气系统监控完成
				【27】A/C system refrigerant monitoring completed  空调系统制冷剂监控完成
				【26】Oxygen sensor monitoring completed 氧传感器监控完成
				【25】Oxygen sensor heater monitoringcompleted 氧传感器加热器监控完成
				【24】EGR system monitoring completed EGR系统监控完成

				*/
			return null
		}
	},
	"0142": {
		"id": 66,
		"pid": "0142",
		'dataFlow': true,
		"displayDial": true,
		"name": "控制模块电压",
		"resId": "VPWR",
		"unit": "V",
		"remark": "保留2位小数",
		"min": 0,
		"max": 65.635,
		"effectiveLength": 2,
		'imperialUnit': "V",
		'metricMin': 0,
		'metricMax': 50,
		'imperialMin': 0,
		'imperialMax': 50,
		"formula": function(A, B) {
			let result = ((A*256)+B)/1000
			return Number( result.toFixed(2) )
		}
	},
	"0143": {
		"id": 67,
		"pid": "0143",
		'dataFlow': true,
		"displayDial": true,
		"name": "绝对载荷", // 载荷绝对值
		"resId": "LOAD_ABS",
		"unit": "%",
		"remark": "负荷绝对值",
		"min": 0,
		"max": 25700,
		"effectiveLength": 2,
		'imperialUnit': "%",
		'metricMin': 0,
		'metricMax': 20000,
		'imperialMin': 0,
		'imperialMax':  20000,
		"formula": function(A, B) {
			let result = ((A*256)+B)*100/255
			return Number( result.toFixed(0) )
		}
	},
	"0144": {
		"id": 68,
		"pid": "0144",
		'dataFlow': true,
		"displayDial": true,
		"name": "等效比命令",// 燃空比
		"resId": "LAMBDA",
		"unit": "",
		"remark": "保留3位小数,燃/空（F/A）指令当量比",
		"min": 0,
		"max": 2,
		"effectiveLength": 2,
		'imperialUnit': "",
		'metricMin': 0,
		'metricMax': 2,
		'imperialMin': 0,
		'imperialMax': 2,
		"formula": function(A, B) {
			let result = ((A*256)+B)/32768
			return Number( result.toFixed(3) )
		}
	},
	"0145": {
		"id": 69,
		"pid": "0145",
		'dataFlow': true,
		"displayDial": true,
		"name": "相对节气门位置",
		"resId": "TP_R",
		"unit": "%",
		"remark": "保留1位小数",
		"min": 0,
		"max": 100,
		"effectiveLength": 1,
		'imperialUnit': "%",
		'metricMin': 0,
		'metricMax': 100,
		'imperialMin': 0,
		'imperialMax':  100,
		"formula": function(A) {
			let result = A*100/255
			return Number(result.toFixed(1))
		}
	},
	"0146": {
		"id": 70,
		"pid": "0146",
		'dataFlow': true,
		"displayDial": true,
		"name": "环境空气温度",
		"resId": "AAT",
		"unit": "℃",
		"remark": "取整数,℉ = ( 9 / 5 ) * ℃ + 32",
		"min": -40,
		"max": 215,
		"effectiveLength": 1,
		'imperialUnit': "℉",
		'metricMin': -40,
		'metricMax': 200,
		'imperialMin': -40,
		'imperialMax': 400,
		"formula": function(A) {
			let result = A - 40
			return Number(result.toFixed(0))
		}
	},
	"0147": {
		"id": 71,
		"pid": "0147",
		'dataFlow': true,
		"displayDial": true,
		"name": "节气门位置绝对值B",
		"resId": "TP_B",
		"unit": "%",
		"remark": "保留1位小数",
		"min": 0,
		"max": 100,
		"effectiveLength": 1,
		'imperialUnit': "%",
		'metricMin': 0,
		'metricMax': 100,
		'imperialMin': 0,
		'imperialMax':  100,
		"formula": function(A) {
			let result = A*100/255
			return Number(result.toFixed(1))
		}
	},
	"0148": {
		"id": 72,
		"pid": "0148",
		'dataFlow': true,
		"displayDial": true,
		"name": "节气门位置绝对值C",
		"resId": "TP_C",
		"unit": "%",
		"remark": "保留1位小数",
		"min": 0,
		"max": 100,
		"effectiveLength": 1,
		'imperialUnit': "%",
		'metricMin': 0,
		'metricMax': 100,
		'imperialMin': 0,
		'imperialMax':  100,
		"formula": function(A) {
			let result = A*100/255
			return Number(result.toFixed(1))
		}
	},
	"0149": {
		"id": 73,
		"pid": "0149",
		'dataFlow': true,
		"displayDial": true,
		"name": "加速踏板位置D",
		"resId": "APP_D",
		"unit": "%",
		"remark": "保留1位小数",
		"min": 0,
		"max": 100,
		"effectiveLength": 1,
		'imperialUnit': "%",
		'metricMin': 0,
		'metricMax': 100,
		'imperialMin': 0,
		'imperialMax':  100,
		"formula": function(A) {
			let result = A*100/255
			return Number(result.toFixed(1))
		}
	},
	"014A": {
		"id": 74,
		"pid": "014A",
		'dataFlow': true,
		"displayDial": true,
		"name": "加速踏板位置E",// 油门踏板位置E
		"resId": "APP_E",
		"unit": "%",
		"remark": "保留1位小数",
		"min": 0,
		"max": 100,
		"effectiveLength": 1,
		'imperialUnit': "%",
		'metricMin': 0,
		'metricMax': 100,
		'imperialMin': 0,
		'imperialMax':  100,
		"formula": function(A) {
			let result = A*100/255
			return Number(result.toFixed(1))
		}
	},
	"014B": {
		"id": 75,
		"pid": "014B",
		'dataFlow': true,
		"displayDial": true,
		"name": "油门踏板位置F",
		"resId": "APP_F",
		"unit": "%",
		"remark": "保留1位小数",
		"min": 0,
		"max": 100,
		"effectiveLength": 1,
		'imperialUnit': "%",
		'metricMin': 0,
		'metricMax': 100,
		'imperialMin': 0,
		'imperialMax':  100,
		"formula": function(A) {
			let result = A*100/255
			return Number(result.toFixed(1))
		}
	},
	"014C": {
		"id": 76,
		"pid": "014C",
		'dataFlow': true,
		"displayDial": true,
		"name": "油门执行器控制值",
		"resId": "TAC_PCT",
		"unit": "%",
		"remark": "节气门控制。保留1位小数",
		"min": 0,
		"max": 100,
		"effectiveLength": 1,
		'imperialUnit': "%",
		'metricMin': 0,
		'metricMax': 100,
		'imperialMin': 0,
		'imperialMax':  100,
		"formula": function(A) {
			let result = A*100/255
			return Number(result.toFixed(1))
		}
	},
	"014D": {
		"id": 77,
		"pid": "014D",
		'dataFlow': true,
		"displayDial": true,
		"name": "故障指示灯亮之后运行时间",
		"resId": "MIL_TIME",
		"unit": "minute",
		"remark": "4h:16m",
		"min": 0,
		"max": 65535,
		"effectiveLength": 2,
		'imperialUnit': "minute",
		'metricMin': 0,
		'metricMax': 10000,
		'imperialMin': 0,
		'imperialMax': 10000,
		"formula": function(A, B) {
			let result = (A * 256) + B
			return Number(result.toFixed(0))
		}
	},
	"014E": {
		"id": 78,
		"pid": "014E",
		'dataFlow': true,
		"displayDial": true,
		"name": "故障码清除后运行时间",
		"resId": "CLR_TIME",
		"unit": "minute",
		"remark": "4h:16m",
		"min": 0,
		"max": 65535,
		"effectiveLength": 2,
		'imperialUnit': "minute",
		'metricMin': 0,
		'metricMax': 10000,
		'imperialMin': 0,
		'imperialMax': 10000,
		"formula": function(A, B) {
			let result = (A * 256) + B
			return Number(result.toFixed(0))
		}
	},

	// 多配置, 修正
	// 等效比最大值	Maximum value for Equivalence Ratio
	// 氧传感器电压最大值	Maximum value for Oxygen Sensor Voltage
	// 氧传感器电流最大值	Maximum value for Oxygen Sensor Current
	// 进气歧管压力最大值	Maximum value for Intake Manifold Absolute Pressure
	"014F": {
		"id": 79,
		"pid": "014F",
		'dataFlow': false,
		"displayDial": false,
		"name": "等效比最大值",
		"resId": "",
		"unit": "",
		"remark": "相对当量比，氧传感器电压，氧传感器电流和进气歧管绝对压力最大值,注意不显示给人员看",
		"min": 0,
		"max": 255,
		"effectiveLength": 4,
		'imperialUnit': "",
		'metricMin': 0,
		'metricMax': 200,
		'imperialMin': 0,
		'imperialMax': 200,
		"formula": function(A, B, C, D) {
			return [A, B, C, D*10].join(',')
		}
	},
	"0150": {
		"id": 80,
		"pid": "0150",
		'dataFlow': true,
		"displayDial": true,
		"name": "空气流量传感器最大值",
		"resId": "Air flow sensor max.",
		"unit": "g/s",
		"remark": "B、C 和 D 保留供将来使用",
		"min": 0,
		"max": 2550,
		"effectiveLength": 4,
		'imperialUnit': "lb/min",
		'metricMin': 0,
		'metricMax': 2000,
		'imperialMin': 0,
		'imperialMax': 200,
		"formula": function(A, B, C, D) {
			return A * 10
		}
	},
	// 我的车辆需要
	"0151": {
		"id": 81,
		"pid": "0151",
		'dataFlow': true,
		"displayDial": false,
		"name": "燃油类型",
		"resId": "FUEL_TYP",
		"unit": "",
		"remark": "油料类型",
		"min": "",
		"max": "",
		"effectiveLength": 1,
		'imperialUnit': "",
		'metricMin': "",
		'metricMax': "",
		'imperialMin': "",
		'imperialMax':  "",
		"formula": function(A) {
			let key = A.toString(16).toUpperCase()
			while (key.length < 2) {
				key = '0' + key
			}
			let jsonMap = {
				"01": "GAS",
				"02": "METH",
				"03": "ETH",
				"04": "DSL",
				"05": "LPG",
				"06": "CNG",
				"07": "PROP",
				"08": "ELEC",
				"09": "BI_GAS",
				"0A": "BI_METH",
				"0B": "BI_ETH",
				"0C": "BI_LPG",
				"0D": "BI_CNG",
				"0E": "BI_PROP",
				"0F": "BI_ELEC",
				"10": "BI_MIX",
				"11": "HYB_GAS",
				"12": "HYB_ETH",
				"13": "HYB_DSL",
				"14": "HYB_ELEC",
				"15": "HYB_MIX",
				"16": "HYB_REG",
				"17": "BI_DSL",
				"18": "BI_NG",
				"19": "BI_DSL",
				"1A": "NG",
				"1B": "DSL_CNG",
				"1C": "DSL_NG"
			}
			return jsonMap[key] ? jsonMap[key] : '---'
		}
	},
	"0152": {
		"id": 82,
		"pid": "0152",
		'dataFlow': true,
		"displayDial": true,
		"name": "乙醇百分比",
		"resId": "ALCH_PCT",
		"unit": "%",
		"remark": "保留1位小数",
		"min": 0,
		"max": 100,
		"effectiveLength": 1,
		'imperialUnit': "%",
		'metricMin': 0,
		'metricMax': 100,
		'imperialMin': 0,
		'imperialMax':  100,
		"formula": function(A) {
			let result = A * 100 / 255
			return Number(result.toFixed(1))
		}
	},
	"0153": {
		"id": 83,
		"pid": "0153",
		'dataFlow': true,
		"displayDial": true,
		"name": "蒸汽系统压力绝对值",
		"resId": "EVAP_VPA",
		"unit": "Pa",
		"remark": "kPa保留1位小数,1kPa=4.0145inH2O",
		"min": 0,
		"max": 327.7,
		"effectiveLength": 2,
		'imperialUnit': "inH2O",
		'metricMin': 0,
		'metricMax': 300,
		'imperialMin': 0,
		'imperialMax': 1000,
		"formula": function(A, B) {
			let result = ((A * 256) + B) / 200
			return Number(result.toFixed(1))
		}
	},
	"0154": {
		"id": 84,
		"pid": "0154",
		'dataFlow': true,
		"displayDial": true,
		"name": "蒸汽系统压力",
		"resId": "EVAP_VP",
		"unit": "Pa",
		"remark": "inH2O保留1位小数,1kPa=4.0145inH2O,比$32更合适",
		"min": -32767,
		"max":  32767,
		"effectiveLength": 2,
		'imperialUnit': "inH2O",
		'metricMin': -30000,
		'metricMax': 30000,
		'imperialMin': -100,
		'imperialMax': 100,
		"formula": function(A, B) {
			let result = ((A * 256) + B) - 32767
			return Number(result.toFixed(1))
		}
	},

	// 多配置, 修正
	"0155": {
		"id": 85,
		"pid": "0155",
		'dataFlow': true,
		"displayDial": true,
		"name": "短期二次氧传感器修正 Bank 1, Bank 3",
		"resId": "STSO2FT1",
		"unit": "%",
		"remark": "保留1位小数",
		"min": -100,
		"max": 99.2,
		"effectiveLength": 2,
		'imperialUnit': "%",
		'metricMin': -100,
		'metricMax': 100,
		'imperialMin': -100,
		'imperialMax':  100,
		"formula": function(A, B) {
			let result1 = Number(((A-128)*100/128).toFixed(1))
			let result2 = Number(((B-128)*100/128).toFixed(1))
			return [result1, result2].join(',')
		}
	},
	// 多配置, 修正
	"0156": {
		"id": 86,
		"pid": "0156",
		'dataFlow': true,
		"displayDial": true,
		"name": "长期二次氧传感器修正 Bank 1, Bank 3",
		"resId": "LGSO2FT1",
		"unit": "%",
		"remark": "保留1位小数",
		"min": -100,
		"max": 99.2,
		"effectiveLength": 2,
		'imperialUnit': "%",
		'metricMin': -100,
		'metricMax': 100,
		'imperialMin': -100,
		'imperialMax':  100,
		"formula": function(A, B) {
			let result1 = Number(((A-128)*100/128).toFixed(1))
			let result2 = Number(((B-128)*100/128).toFixed(1))
			return [result1, result2].join(',')
		}
	},
	// 多配置, 修正
	"0157": {
		"id": 87,
		"pid": "0157",
		'dataFlow': true,
		"displayDial": true,
		"name": "短期二次氧传感器修正 Bank 2, Bank 4",
		"resId": "STSO2FT2",
		"unit": "%",
		"remark": "保留1位小数",
		"min": -100,
		"max": 99.2,
		"effectiveLength": 2,
		'imperialUnit': "%",
		'metricMin': -100,
		'metricMax': 100,
		'imperialMin': -100,
		'imperialMax':  100,
		"formula": function(A, B) {
			let result1 = Number(((A-128)*100/128).toFixed(1))
			let result2 = Number(((B-128)*100/128).toFixed(1))
			return [result1, result2].join(',')
		}
	},
	// 多配置, 修正
	"0158": {
		"id": 88,
		"pid": "0158",
		'dataFlow': true,
		"displayDial": true,
		"name": "长期二次氧传感器修正 Bank 2, Bank 4",
		"resId": "LGSO2FT2",
		"unit": "%",
		"remark": "保留1位小数",
		"min": -100,
		"max": 99.2,
		"effectiveLength": 2,
		'imperialUnit': "%",
		'metricMin': -100,
		'metricMax': 100,
		'imperialMin': -100,
		'imperialMax':  100,
		"formula": function(A, B) {
			let result1 = Number(((A-128)*100/128).toFixed(1))
			let result2 = Number(((B-128)*100/128).toFixed(1))
			return [result1, result2].join(',')
		}
	},
	"0159": {
		"id": 89,
		"pid": "0159",
		'dataFlow': true,
		"displayDial": true,
		"name": "燃油压力",
		"resId": "FRP",
		"unit": "kPa",
		"remark": "取整数,1kpa约等于0.145032PSI",
		"min": 0,
		"max": 655350,
		"effectiveLength": 2,
		'imperialUnit': "PSI",
		'metricMin': 0,
		'metricMax': 650000,
		'imperialMin': 0,
		'imperialMax':  100000,
		"formula": function(A, B) {
			let result = ((A * 256) + B) * 10
			return Number(result.toFixed(0))
		}
	},
	"015A": {
		"id": 90,
		"pid": "015A",
		'dataFlow': true,
		"displayDial": true,
		"name": "油门相对位置",
		"resId": "APP_R",
		"unit": "%",
		"remark": "相对加速踏板位置,保留1位小数",
		"min": 0,
		"max": 100,
		"effectiveLength": 1,
		'imperialUnit': "%",
		'metricMin': 0,
		'metricMax': 100,
		'imperialMin': 0,
		'imperialMax':  100,
		"formula": function(A) {
			let result = A * 100 / 255
			return Number(result.toFixed(1))
		}
	},
	"015B": {
		"id": 91,
		"pid": "015B",
		'dataFlow': true,
		"displayDial": true,
		"name": "混合动力电池剩余",
		"resId": "APP_R",
		"unit": "%",
		"remark": "保留1位小数",
		"min": 0,
		"max": 100,
		"effectiveLength": 1,
		'imperialUnit': "%",
		'metricMin': 0,
		'metricMax': 100,
		'imperialMin': 0,
		'imperialMax':  100,
		"formula": function(A) {
			let result = A * 100 / 255
			return Number(result.toFixed(1))
		}
	},
	"015C": {
		"id": 92,
		"pid": "015C",
		'dataFlow': true,
		"displayDial": true,
		"name": "发动机机油温度",
		"resId": "EOT",
		"unit": "℃",
		"remark": "取整数°F = ( 9 / 5 ) * °C + 32",
		"min": -40,
		"max": 215,
		"effectiveLength": 1,
		'imperialUnit': "℉",
		'metricMin': -40,
		'metricMax': 200,
		'imperialMin': -40,
		'imperialMax':  400,
		"formula": function(A) {
			let result = A - 40
			return Number(result.toFixed(0))
		}
	},
	"015D": {
		"id": 93,
		"pid": "015D",
		'dataFlow': true,
		"displayDial": true,
		"name": "喷油正时",
		"resId": "FIT",
		"unit": "°",
		"remark": "保留一位小数",
		"min": -210,
		"max": 301.992,
		"effectiveLength": 2,
		'imperialUnit': "°",
		'metricMin': -200,
		'metricMax': 300,
		'imperialMin': -200,
		'imperialMax':  300,
		"formula": function(A, B) {
			let result = ((A*256)+B) / 128 - 210
			return Number(result.toFixed(1))
		}
	},
	"015E": {
		"id": 94,
		"pid": "015E",
		'dataFlow': true,
		"displayDial": true,
		"name": "引擎油量消耗速率",
		"resId": "FUEL_RATE",
		"unit": "L/h",
		"remark": "保留1位小数",
		"min": 0,
		"max": 3276.75,
		"effectiveLength": 2,
		'imperialUnit': "L/h",
		'metricMin': 0,
		'metricMax': 3000,
		'imperialMin': 0,
		'imperialMax':  3000,
		"formula": function(A, B) {
			let result =  ((A*256)+B)*0.05
			return Number(result.toFixed(1))
		}
	},
	// 不支持
	"015F": {
		"id": 95,
		"pid": "015F",
		'dataFlow': true,
		"displayDial": false,
		"name": "设计排放要求",
		"resId": "",
		"unit": "",
		"remark": "",
		"min": "",
		"max": "",
		"effectiveLength": 1,
		'imperialUnit': "",
		'metricMin': "",
		'metricMax': "",
		'imperialMin': "",
		'imperialMax':  "",
		"formula": function(A) {
			let key = A.toString(16).toUpperCase()
			while (key.length < 2) {
				key = '0' + key
			}
			let json = {
				"0E": "EURO IV B1",
				"0F": "EURO V B2",
				"10": "EURO C",
				"11": "EURO VI"
			}
			return json[key] ? json[key] : '---'
		}
	},
	// "017F": {
	// 	"id": 127,
	// 	"pid": "017F",
	// 	'dataFlow': true,
	// 	"displayDial": true,
	// 	"name": "发动机运行时间",
	// 	"resId": "",
	// 	"unit": "km",
	// 	"remark": "单位：秒",
	// 	"min": 0,
	// 	"max": 65535,
	// 	"effectiveLength": 2,
	// 	'imperialUnit': "second",
	// 	'metricMin': 0,
	// 	'metricMax': 10000,
	// 	'imperialMin': 0,
	// 	'imperialMax':  10000,
	// 	"formula": function(A, B) {
	// 		let result = (A * 256) + B
	// 		return Number(result.toFixed(0))
	// 		return null
	// 	}
	// },
	// "01A4": {
	// 	"id": 164,
	// 	"pid": "01A4",
	// 	'dataFlow': true,
	// 	"displayDial": true,
	// 	"name": "变速箱实际档位",
	// 	"resId": "",
	// 	"unit": "",
	// 	"remark": "",
	// 	"effectiveLength": 4,
	// 	'imperialUnit': "mile",
	// 	'metricMin': "",
	// 	'metricMax': "",
	// 	'imperialMin': "",
	// 	'imperialMax':  "",
	// 	"formula": function(A, B, C, D) {
	// 		let result = (A * Math.pow(2, 24) + B * Math.pow(2, 16) + C * Math.pow(2, 8) + D)/10
	// 		return Number(result.toFixed(0))
	// 	}
	// },
	// "01A6": {
	// 	"id": 166,
	// 	"pid": "01A6",
	// 	'dataFlow': true,
	// 	"displayDial": true,
	// 	"name": "里程表",
	// 	"resId": "",
	// 	"unit": "km",
	// 	"remark": "取整数,1km=0.62mile",
	// 	"min": 0,
	// 	"max": 526385151.9,
	// 	"effectiveLength": 4,
	// 	'imperialUnit': "mile",
	// 	'metricMin': 0,
	// 	'metricMax': 10000000,
	// 	'imperialMin': 0,
	// 	'imperialMax':  10000000,
	// 	"formula": function(A, B, C, D) {
	// 		let result = (A * Math.pow(2, 24) + B * Math.pow(2, 16) + C * Math.pow(2, 8) + D)/10
	// 		return Number(result.toFixed(0))
	// 	}
	// }
}

