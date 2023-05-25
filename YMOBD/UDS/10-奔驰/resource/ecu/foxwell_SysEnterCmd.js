var SysEnterCmd = {
	"115580288400": {
		"FiltEleInfo": {
		},
		"DTCType": {
			"DBCondition": "pkw_traktion_eps_sst_GFEPS169_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07BC",
			"CanFilterID": "0x07BD",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1a87",
				"0x1a9a",
				"0x1a9c"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580288500": {
		"FiltEleInfo": {
			"AddFilter": [
			]
		},
		"DTCType": {
			"DBCondition": "pkw_traktion_esp_sst_gfesp_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode81",
			"DeviceID": "0xF3",
			"FilterID": "0x34"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3B000107000748005BB27962B2791CB27960E9009E20FF20B1011DC6201D0740E900BE20FF24742462DB0B54606226DB05982526D108B1FF28C67A282018C67B00371C1574601DC6201DA07A64F13C1BFF980064D7020740F007400740B18160A07864F1261BFF980064D717E9009C20FF1CB31C021EE01E020540C71C021E07781762F0"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580288600": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2115",
			"FilterCount": "1",
			"Filter1": [
				"1",
				"2",
				"6",
				"FxFE%Funktion_RDVW_als_SA_codiert",
				"",
				"0"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_traktion_esp169_sst_GFESP169_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0784",
			"CanFilterID": "0x0785",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x2115"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"115580288700": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2127",
			"FilterCount": "1",
			"Filter1": [
				"1",
				"2",
				"1",
				"ECU1_FxFE_Parameterlenkung%aktivieren",
				"",
				"9"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_traktion_esp3_sst_GFESP164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0784",
			"CanFilterID": "0x0785"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x9d"
			],
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x2125",
				"0x2127",
				"0x2128",
				"0x2130",
				"0x2133"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580288800": {
		"FiltEleInfo": {
			"AddFilter": "ECU1_FxFE_Tempomatkodierung%ja",
			"FilterRelatedCmd": "0x2119",
			"FilterCount": "1",
			"Filter1": [
				"1",
				"2",
				"8",
				"ECU_ESP4_FxFE_PML%ja",
				""
			]
		},
		"DTCType": {
			"DBCondition": "pkw_traktion_esp4_sst_GFESP_E1_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0632",
			"CanFilterID": "0x0486",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580288900": {
		"DTCType": {
			"DBCondition": "pkw_traktion_esp5_sst_GFESP463_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0784",
			"CanFilterID": "0x0785"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580288A00": {
		"DTCType": {
			"DBCondition": "pkw_traktion_esp2_sst_gfesp203_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x34"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x1A0C",
				"0x2114"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"115580288B00": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_traktion_esp30_h_sst_GFESP30__sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x30"
		},
		"Access": {
			"AccessCmd": "0x81",
			"ReferCmd": [
				"0x8300",
				"0x3C00"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580288C00": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_traktion_esp34_h_sst_GFESP34__sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x34"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x3C00"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580288D00": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_traktion_esp35_h_sst_GFESP35__sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x35"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x3C00"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580288E00": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%BR_MIT_SD",
			"FilterRelatedCmd": "0x2114",
			"FilterCount": "1",
			"Filter1": [
				"1",
				"2",
				"6",
				"",
				"FxFE%Funktion_RDVW_als_SA_codiert",
				"9"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_traktion_espmk25_sst_gfespmk2_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0784",
			"CanFilterID": "0x0785",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x34",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x1A0C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01",
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081",
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580288F00": {
		"DTCType": {
			"DBCondition": "pkw_traktion_esp2_sst_gfesp203_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x34"
		},
		"Access": {
			"AccessCmd": "0x81",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558028B000": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_traktion_ets30_h_sst_GFETS30__sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x30"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558028B100": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_traktion_ets34_h_sst_GFETS34__sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x34"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558028B200": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_sitze_esv1l_h_sst_GFESV1L__sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x52"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3128"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"11558028B300": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_sitze_esv1r_h_sst_GFESV1R__sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x53"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3128"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"11558028B400": {
		"DTCType": {
			"DBCondition": "pkw_motordie_eve_h_sst_GFEVE_H_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x08"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x3C00",
				"0x2701",
				"0x3134",
				"0x3128",
				"0x220918"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"11558028B500": {
		"DTCType": {
			"DBCondition": "pkw_motor_fscu_sst_GFFSCU_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0778",
			"CanFilterID": "0x0779",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x86"
			]
		}
	},
	"11558028B600": {
		"DTCType": {
			"DBCondition": "pkw_motor_fscu_sst_GFFSCU_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06FA",
			"CanFilterID": "0x049F"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x01",
				"0x39"
			],
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558028B700": {
		"DTCType": {
			"DBCondition": "pkw_motor_fscu5_sst_GFFSCU5_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06FA",
			"CanFilterID": "0x049F",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558028B800": {
		"DTCType": {
			"DBCondition": "pkw_motor_fscu2_sst_gffscu2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0778",
			"CanFilterID": "0x0779",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x86",
				"0x89"
			]
		}
	},
	"11558028B900": {
		"DTCType": {
			"DBCondition": "pkw_motor_fscu2_sst_gffscu2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07ce",
			"CanFilterID": "0x07cf",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x86",
				"0x89"
			]
		}
	},
	"11558028BA00": {
		"DTCType": {
			"DBCondition": "pkw_motor_fscu2_sst_gffscu2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07ce",
			"CanFilterID": "0x07cf",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84"
			]
		}
	},
	"11558028BB00": {
		"DTCType": {
			"DBCondition": "pkw_motor_fscu2_sst_gffscu2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0778",
			"CanFilterID": "0x0779",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84"
			]
		}
	},
	"11558028BC00": {
		"DTCType": {
			"DBCondition": "pkw_motor_fscu4_sst_gffscu4_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode03",
			"CanDeviceID": "0x06fa",
			"CanFilterID": "0x049f",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84"
			]
		}
	},
	"11558028BD00": {
		"DTCType": {
			"DBCondition": "pkw_motor_fscu4_sst_gffscu4_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode03",
			"CanDeviceID": "0x07AA",
			"CanFilterID": "0x04B5",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84"
			]
		}
	},
	"11558028BE00": {
		"DTCType": {
			"DBCondition": "pkw_motor_fscu3_sst_gffscu3_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode03",
			"CanDeviceID": "0x06fa",
			"CanFilterID": "0x049f",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1a9B",
				"0x1A9C",
				"0x1A9D",
				"0x2101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x86"
			]
		}
	},
	"11558028BF00": {
		"DTCType": {
			"DBCondition": "pkw_rse_fu_sst_gffu_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x05E7",
			"CanFilterID": "0x04C7",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131",
				"0x22F18C",
				"0x22000D",
				"0x22000C",
				"0x220102"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"11558028A000": {
		"FiltEleInfo": {
		},
		"DTCType": {
			"DBCondition": "pkw_rse_fu_sst_gffu_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0763",
			"CanFilterID": "0x04EC",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F18C",
				"0x22000D",
				"0x22000C",
				"0x220102"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558028A100": {
		"FiltEleInfo": {
			"AddFilter": [
				"FxFE%MN_ANTRIEB",
				"LIC_Vorabdaten%YES"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_getriebe_ism_sst_GFISM_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06EA",
			"CanFilterID": "0x049D",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558028A200": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%FUN_AKTIV"
		},
		"DTCType": {
			"DBCondition": "pkw_getriebe_ewm2_sst_gfewm203_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0788",
			"CanFilterID": "0x0789",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x24"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x1a86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01",
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081",
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558028A300": {
		"DTCType": {
			"DBCondition": "pkw_getriebe_ewm4_sst_GFTSLM_204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x077A",
			"CanFilterID": "0x04AF"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558028A400": {
		"DTCType": {
			"DBCondition": "pkw_getriebe_ewm1_sst_gfewm210_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x24"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558028A500": {
		"DTCType": {
			"DBCondition": "pkw_getriebe_ewm_sst_gfewm220_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x24"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558028A600": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_fahrber_ezs1_h_sst_GFEZS1_H_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x22"
		},
		"Access": {
			"AccessCmd": [
				"0xC17EF381B3",
				"0x8300",
				"0x3128",
				"0x322800"
			],
			"ReferCmd": [
				"0x3C00",
				"0x2A0101"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"11558028A700": {
		"DTCType": {
			"DBCondition": "pkw_fahrber_ezs8_sst_GFEZS801_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x04E0",
			"CanFilterID": "0x05FF"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A87",
				"0x2103"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"11558028A800": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2101",
			"FilterCount": "40",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"10",
				"9",
				"1",
				"01",
				"FxFE%ZGW_Notalarm"
			],
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"10",
				"D",
				"1",
				"01",
				"FxFE%ZGW_Funkaufschaltung"
			],
			"Filter3": [
				"KwdTyp_VCD",
				"1",
				"10",
				"A",
				"1",
				"01",
				"FxFE%ZGW_Dachzeichen"
			],
			"Filter4": [
				"KwdTyp_VCD",
				"1",
				"10",
				"2E",
				"1",
				"01",
				"ECU1_FxFE_SA: Xenonlicht (C612)%vorhanden"
			],
			"Filter5": [
				"KwdTyp_VCD",
				"1",
				"10",
				"2A",
				"1",
				"01",
				"ECU1_FxFE_SA: Scheibenwaschanlage beheizt%vorhanden"
			],
			"Filter6": [
				"KwdTyp_VCD",
				"1",
				"10",
				"3A",
				"1",
				"00",
				"ECU1_FxFE_SA: Trsteuergerte hinten%nicht vorhanden"
			],
			"Filter7": [
				"KwdTyp_VCD",
				"1",
				"10",
				"4",
				"3",
				"01",
				"ECU_EZS7_FxFE_Lnderbezogene SA Codierung Innenraumbus%USA (C494)"
			],
			"Filter8": [
				"KwdTyp_VCD",
				"1",
				"10",
				"4",
				"3",
				"02",
				"ECU_EZS7_FxFE_Lnderbezogene SA Codierung Innenraumbus%Kanada (C460)"
			],
			"Filter9": [
				"KwdTyp_VCD",
				"1",
				"10",
				"38",
				"1",
				"01",
				"ECU1_FxFE_SA: Nebelscheinwerfer%vorhanden"
			],
			"Filter10": [
				"KwdTyp_VCD",
				"1",
				"10",
				"2F",
				"1",
				"01",
				"ECU_EZS7_FxFE_SA: Lichtsensor%vorhanden"
			],
			"Filter11": [
				"KwdTyp_VCD",
				"1",
				"10",
				"42",
				"5",
				"08",
				"ECU_EZS7_FxFE_Jahresangabe Innenraumbus%2008"
			],
			"Filter12": [
				"KwdTyp_VCD",
				"1",
				"10",
				"42",
				"5",
				"09",
				"ECU_EZS7_FxFE_Jahresangabe Innenraumbus%2009"
			],
			"Filter13": [
				"KwdTyp_VCD",
				"1",
				"10",
				"42",
				"5",
				"10",
				"ECU_EZS7_FxFE_Jahresangabe Innenraumbus%2010"
			],
			"Filter14": [
				"KwdTyp_VCD",
				"1",
				"10",
				"42",
				"5",
				"11",
				"ECU_EZS7_FxFE_Jahresangabe Innenraumbus%2011"
			],
			"Filter15": [
				"KwdTyp_VCD",
				"1",
				"10",
				"42",
				"5",
				"12",
				"ECU_EZS7_FxFE_Jahresangabe Innenraumbus%2012"
			],
			"Filter16": [
				"KwdTyp_VCD",
				"1",
				"10",
				"42",
				"5",
				"13",
				"ECU_EZS7_FxFE_Jahresangabe Innenraumbus%2013"
			],
			"Filter17": [
				"KwdTyp_VCD",
				"1",
				"10",
				"42",
				"5",
				"14",
				"ECU_EZS7_FxFE_Jahresangabe Innenraumbus%2014"
			],
			"Filter18": [
				"KwdTyp_VCD",
				"1",
				"10",
				"42",
				"5",
				"15",
				"ECU_EZS7_FxFE_Jahresangabe Innenraumbus%2015"
			],
			"Filter19": [
				"KwdTyp_VCD",
				"1",
				"10",
				"42",
				"5",
				"16",
				"ECU_EZS7_FxFE_Jahresangabe Innenraumbus%2016"
			],
			"Filter20": [
				"KwdTyp_VCD",
				"1",
				"10",
				"42",
				"5",
				"17",
				"ECU_EZS7_FxFE_Jahresangabe Innenraumbus%2017"
			],
			"Filter21": [
				"KwdTyp_VCD",
				"1",
				"10",
				"42",
				"5",
				"18",
				"ECU_EZS7_FxFE_Jahresangabe Innenraumbus%2018"
			],
			"Filter22": [
				"KwdTyp_VCD",
				"1",
				"10",
				"42",
				"5",
				"19",
				"ECU_EZS7_FxFE_Jahresangabe Innenraumbus%2019"
			],
			"Filter23": [
				"KwdTyp_VCD",
				"1",
				"10",
				"42",
				"5",
				"20",
				"ECU_EZS7_FxFE_Jahresangabe Innenraumbus%2020"
			],
			"Filter24": [
				"KwdTyp_VCD",
				"1",
				"10",
				"42",
				"5",
				"21",
				"ECU_EZS7_FxFE_Jahresangabe Innenraumbus%2021"
			],
			"Filter25": [
				"KwdTyp_VCD",
				"1",
				"10",
				"42",
				"5",
				"22",
				"ECU_EZS7_FxFE_Jahresangabe Innenraumbus%2022"
			],
			"Filter26": [
				"KwdTyp_VCD",
				"1",
				"10",
				"42",
				"5",
				"23",
				"ECU_EZS7_FxFE_Jahresangabe Innenraumbus%2023"
			],
			"Filter27": [
				"KwdTyp_VCD",
				"1",
				"10",
				"42",
				"5",
				"24",
				"ECU_EZS7_FxFE_Jahresangabe Innenraumbus%2024"
			],
			"Filter28": [
				"KwdTyp_VCD",
				"1",
				"10",
				"42",
				"5",
				"25",
				"ECU_EZS7_FxFE_Jahresangabe Innenraumbus%2025"
			],
			"Filter29": [
				"KwdTyp_VCD",
				"1",
				"10",
				"42",
				"5",
				"26",
				"ECU_EZS7_FxFE_Jahresangabe Innenraumbus%2026"
			],
			"Filter30": [
				"KwdTyp_VCD",
				"1",
				"10",
				"42",
				"5",
				"27",
				"ECU_EZS7_FxFE_Jahresangabe Innenraumbus%2027"
			],
			"Filter31": [
				"KwdTyp_VCD",
				"1",
				"10",
				"42",
				"5",
				"28",
				"ECU_EZS7_FxFE_Jahresangabe Innenraumbus%2028"
			],
			"Filter32": [
				"KwdTyp_VCD",
				"1",
				"10",
				"42",
				"5",
				"29",
				"ECU_EZS7_FxFE_Jahresangabe Innenraumbus%2029"
			],
			"Filter33": [
				"KwdTyp_VCD",
				"1",
				"10",
				"42",
				"5",
				"30",
				"ECU_EZS7_FxFE_Jahresangabe Innenraumbus%nicht FxFEiniert"
			],
			"Filter34": [
				"KwdTyp_VCD",
				"1",
				"10",
				"42",
				"5",
				"31",
				"ECU_EZS7_FxFE_Jahresangabe Innenraumbus%Serienbeginn Baureihe"
			],
			"Filter35": [
				"KwdTyp_VCD",
				"1",
				"10",
				"2B",
				"1",
				"01",
				"ECU1_FxFE_SA: CVT%vorhanden"
			],
			"Filter36": [
				"KwdTyp_VCD",
				"1",
				"10",
				"2F",
				"1",
				"00",
				"ECU_EZS7_FxFE_SA: Lichtsensor%nicht vorhanden"
			],
			"Filter37": [
				"KwdTyp_VCD",
				"1",
				"10",
				"3A",
				"1",
				"01",
				"ECU_EZS7_FxFE_SA: T???rsteuerger???te hinten%vorhanden"
			],
			"Filter38": [
				"KwdTyp_VCD",
				"1",
				"10",
				"3B",
				"1",
				"01",
				"ECU1_FxFE_SA: Innenraumlichtpaket%vorhanden"
			],
			"Filter39": [
				"KwdTyp_VCD",
				"1",
				"10",
				"3B",
				"1",
				"00",
				"ECU1_FxFE_SA: Innenraumlichtpaket%nicht vorhanden"
			],
			"Filter40": [
				"KwdTyp_VCD",
				"1",
				"10",
				"3A",
				"1",
				"00",
				"ECU_EZS7_FxFE_SA: T???rsteuerger???te hinten%nicht vorhanden"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_fahrber_ezs7_sst_GFEZS701_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x04E0",
			"CanFilterID": "0x05FF"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1a86",
				"0x2108",
				"0x2130",
				"0x2141",
				"0x2103",
				"0x2106"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"11558028A900": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x300101",
			"FilterCount": "6",
			"Filter1": [
				"1",
				"10",
				"8",
				"FxFE%IRS_vorhanden",
				""
			],
			"Filter2": [
				"1",
				"8",
				"16",
				"FxFE%Klima vorhanden",
				""
			],
			"Filter3": [
				"1",
				"14",
				"32",
				"FxFE%TPS_verbaut",
				""
			],
			"Filter4": [
				"KwdTyp_VCD",
				"1",
				"18",
				"9",
				"1",
				"01",
				"FxFE%EZS_Notalarm"
			],
			"Filter5": [
				"KwdTyp_VCD",
				"1",
				"18",
				"C",
				"1",
				"01",
				"ECU1_FxFE_Sonderfahrzeug%ja"
			],
			"Filter6": [
				"KwdTyp_VCD",
				"1",
				"18",
				"C",
				"1",
				"00",
				"ECU1_FxFE_Sonderfahrzeug%nein"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_fahrber_ezs2_sst_gfezs203_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x22"
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1a86",
				"0x2103",
				"0x300101"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x8B",
				"0x89"
			]
		}
	},
	"11558028AA00": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x300101",
			"FilterCount": "5",
			"Filter1": [
				"1",
				"8",
				"64",
				"FxFE%SRA vorhanden",
				""
			],
			"Filter2": [
				"1",
				"8",
				"16",
				"FxFE%Klima vorhanden",
				""
			],
			"Filter3": [
				"1",
				"8",
				"8",
				"FxFE%Automatikgetriebe vorhanden",
				""
			],
			"Filter4": [
				"1",
				"10",
				"8",
				"FxFE%IRS_vorhanden",
				""
			],
			"Filter5": [
				"1",
				"14",
				"32",
				"",
				"FxFE%TPS_verbaut"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_fahrber_ezs4_sst_gfezs401_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x04E0",
			"CanFilterID": "0x05FF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x22"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x300101",
				"0x2106",
				"0x210A"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"11558028AE00": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%FUN_STARTFREIGABE"
		},
		"DTCType": {
			"DBCondition": "pkw_fahrber_ezs5_sst_gfezs501_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x04E0",
			"CanFilterID": "0x05FF"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x01",
				"0xb7"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8A",
				"0x89"
			]
		}
	},
	"11558028AF00": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x3128",
			"FilterCount": "11",
			"Filter1": [
				"1",
				"9",
				"8",
				"FxFE%vorhanden",
				""
			],
			"Filter2": [
				"1",
				"8",
				"128",
				"FxFE%ART vorhanden",
				""
			],
			"Filter3": [
				"1",
				"9",
				"4",
				"FxFE%Heckrollo vorhanden",
				""
			],
			"Filter4": [
				"1",
				"9",
				"64",
				"FxFE%PTS vorhanden",
				""
			],
			"Filter5": [
				"1",
				"4",
				"2",
				"FxFE%AS vorhanden",
				""
			],
			"Filter6": [
				"1",
				"4",
				"1",
				"FxFE%IS vorhanden",
				""
			],
			"Filter7": [
				"1",
				"7",
				"128",
				"FxFE%KG vorhanden",
				""
			],
			"Filter8": [
				"1",
				"9",
				"128",
				"FxFE%Spiegelabblendung",
				""
			],
			"Filter9": [
				"1",
				"4",
				"1",
				"FxFE%IS",
				""
			],
			"Filter10": [
				"1",
				"3",
				"12",
				"FxFE%L???nderkodierung-Rest der Welt",
				""
			],
			"Filter11": [
				"KwdTyp_VCD",
				"1",
				"10",
				"15",
				"3",
				"00",
				"FxFE%Sonderschutzverglasung"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_fahrber_ezs_sst_gfezs220_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x22"
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3128"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x8B",
				"0x89"
			]
		}
	},
	"11558028D000": {
		"DTCType": {
			"DBCondition": "pkw_fahrber_ezs9_sst_GFEZS901_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0612",
			"CanFilterID": "0x0482",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"11558028D100": {
		"DTCType": {
			"DBCondition": "pkw_fahrber_ezs11_sst_GFEIS164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x04E0",
			"CanFilterID": "0x05FF",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"11558028D200": {
		"DTCType": {
			"DBCondition": "pkw_fahrber_ezs10_sst_GFEZS10_1_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0612",
			"CanFilterID": "0x0482"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"11558028D300": {
		"DTCType": {
			"DBCondition": "pkw_fahrber_ezs12_sst_GFEIS221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0612",
			"CanFilterID": "0x0482",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"11558028D400": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x3128",
			"FilterCount": "2",
			"Filter1": [
				"1",
				"9",
				"8",
				"FxFE%vorhanden",
				""
			],
			"Filter2": [
				"1",
				"3",
				"12",
				"FxFE%L???nderkodierung-Rest der Welt",
				""
			]
		},
		"DTCType": {
			"DBCondition": "pkw_fahrber_ezs3_sst_gfezs301_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x22"
		},
		"Access": {
			"AccessCmd": [
				"0xC17EF381B3",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x8B",
				"0x89"
			]
		}
	},
	"11558028D600": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x3128",
			"FilterCount": "11",
			"Filter1": [
				"1",
				"9",
				"8",
				"FxFE%vorhanden",
				""
			],
			"Filter2": [
				"1",
				"8",
				"128",
				"FxFE%ART vorhanden",
				""
			],
			"Filter3": [
				"1",
				"9",
				"4",
				"FxFE%Heckrollo vorhanden",
				""
			],
			"Filter4": [
				"1",
				"9",
				"64",
				"FxFE%PTS vorhanden",
				""
			],
			"Filter5": [
				"1",
				"4",
				"2",
				"FxFE%AS vorhanden",
				""
			],
			"Filter6": [
				"1",
				"4",
				"1",
				"FxFE%IS vorhanden",
				""
			],
			"Filter7": [
				"1",
				"7",
				"128",
				"FxFE%KG vorhanden",
				""
			],
			"Filter8": [
				"1",
				"9",
				"128",
				"FxFE%Spiegelabblendung",
				""
			],
			"Filter9": [
				"1",
				"4",
				"1",
				"FxFE%IS",
				""
			],
			"Filter10": [
				"1",
				"3",
				"12",
				"FxFE%L???nderkodierung-Rest der Welt",
				""
			],
			"Filter11": [
				"KwdTyp_VCD",
				"1",
				"10",
				"15",
				"3",
				"00",
				"FxFE%Sonderschutzverglasung"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_fahrber_ezs3_sst_gfezs301_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x22"
		},
		"Access": {
			"AccessCmd": [
				"0xC17EF381B3",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"11558028D700": {
		"DTCType": {
			"DBCondition": "pkw_fahrber_ezs6_sst_gfezs601_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x04E0",
			"CanFilterID": "0x05FF"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2106"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"11558028D800": {
		"DTCType": {
			"DBCondition": "pkw_fahrber_ezs2_sst_gfezs203_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x22"
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2103",
				"0x300101"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x8B"
			]
		}
	},
	"11558028D900": {
		"FiltEleInfo": {
			"FilterRelatedCmd": [
				"0x2130",
				"0x2132"
			],
			"FilterCount": "4",
			"Filter1": [
				"1",
				"3",
				"4",
				"ECU1_FxFE_Sitzeinbauerkennung Beifahrer vorhanden%ja",
				""
			],
			"Filter2": [
				"1",
				"9",
				"0",
				"ECU1_FxFE_Sitzmatten-Komponente Beifahrer%OD/ACSD (digital)",
				"",
				"9"
			],
			"Filter3": [
				"1",
				"9",
				"4",
				"ECU1_FxFE_Sitzmatten-Komponente Beifahrer%SBR (analog) nur bei SBR Funktion",
				"",
				"9"
			],
			"Filter4": [
				"2",
				"3",
				"1",
				"ECU1_FxFE_Windowbag vorne rechts%vorhanden",
				""
			]
		},
		"DTCType": {
			"DBCondition": "pkw_srs_dccam_sst_GFDCCAM_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06BC",
			"CanFilterID": "0x04FC"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1a87",
				"0x2701",
				"0x1a9b",
				"0x1a9d",
				"0x2130",
				"0x2132",
				"0x21a4"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"11558028DA00": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_fbm_sst_gffbm_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x58"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"11558028DB00": {
		"DTCType": {
			"DBCondition": "461g_fahrber_wsp_sst_gffbs_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x58"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"11558028DC00": {
		"DTCType": {
			"DBCondition": "pkw_sitze_fdsvl_sst_gffdsvl2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06BE",
			"CanFilterID": "0x04FE"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558028DD00": {
		"DTCType": {
			"DBCondition": "pkw_sitze_fdsvr_sst_gffdsvr2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06BF",
			"CanFilterID": "0x04FF"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558028DE00": {
		"DTCType": {
			"DBCondition": "pkw_sitze_fdsvl_sst_gffdsvl2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06C0",
			"CanFilterID": "0x07AD"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558028DF00": {
		"DTCType": {
			"DBCondition": "pkw_sitze_fdsvr_sst_gffdsvr2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06DE",
			"CanFilterID": "0x07AE"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558028C000": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2101",
			"FilterCount": "2",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"10",
				"10",
				"1",
				"00",
				"ECU_FDSVL2_FxFE_FDS und Massage%nicht aktiv"
			],
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"10",
				"10",
				"1",
				"01",
				"ECU_FDSVL2_FxFE_FDS und Massage%aktiv"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_sitze_fdsvl2_sst_GFFDSVL2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0663",
			"CanFilterID": "0x04CC",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558028C100": {
		"DTCType": {
			"DBCondition": "pkw_sitze_fdsvr2_sst_GFFDSVR2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x066B",
			"CanFilterID": "0x04CD",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558028C200": {
		"DTCType": {
			"DBCondition": "pkw_sitze_fdshl2_sst_GFFDSHL2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0673",
			"CanFilterID": "0x04CE"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558028C300": {
		"DTCType": {
			"DBCondition": "pkw_sitze_fdshr2_sst_GFFDSHR2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x067B",
			"CanFilterID": "0x04CF"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580281100": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_aag_sst_gfaag220_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x71"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3C03"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580281200": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_aag5_sst_GFAAG221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06EB",
			"CanFilterID": "0x04DD"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580281300": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_aag2_sst_gfaag203_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0730",
			"CanFilterID": "0x04F0",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x71"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2124"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580281400": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_aag4_sst_GFAAG169_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0730",
			"CanFilterID": "0x04F0"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1a86",
				"0x2124"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580281500": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_aag3_sst_gfaag211_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0730",
			"CanFilterID": "0x04F0"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1a86",
				"0x2124"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580281600": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_grundmod_aam_h_sst_gfaam_h_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x21"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3128"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580281700": {
		"FiltEleInfo": {
			"AddFilter": "ECU1_FxFE_KONFIG_NSW/NSL_USA/ECE%ECE",
			"FilterRelatedCmd": "0x3128",
			"FilterCount": "1",
			"Filter1": [
				"1",
				"2",
				"8",
				"ECU1_FxFE_KONFIG_EDW_VORHANDEN%vorhanden",
				""
			]
		},
		"DTCType": {
			"DBCondition": "pkw_grundmod_aam2k_sst_gfaam2k_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x21"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3128"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580281800": {
		"DTCType": {
			"DBCondition": "pkw_srs_ab2tr_h_sst_GFAB2TR__sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x41"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x3C00",
				"0x2701",
				"0x3C06"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x86"
			]
		}
	},
	"115580281900": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_traktion_abs30_h_sst_gfabs30__sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x30"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580281A00": {
		"DTCType": {
			"DBCondition": "pkw_traktion_abs50_sst_gfabs50_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x30"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580281B00": {
		"DTCType": {
			"DBCondition": "461g_traktion_abs461_sst_gfabs461_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0784",
			"CanFilterID": "0x0785",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580281C00": {
		"DTCType": {
			"DBCondition": "pkw_federung_abc_sst_gfabc_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x3B"
		},
		"Access": {
			"AccessCmd": "0x81",
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"115580281D00": {
		"FiltEleInfo": {
			"AddFilter": [
			]
		},
		"DTCType": {
			"DBCondition": "pkw_federung_abc2_sst_GFABC221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0692",
			"CanFilterID": "0x0492",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x2108"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580281E00": {
		"DTCType": {
			"DBCondition": "pkw_federung_abc2_sst_GFABC221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x078C",
			"CanFilterID": "0x078D",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2108"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"115580281F00": {
		"DTCType": {
			"DBCondition": "pkw_traktion_abrxt_sst_gfabr_xt_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode02",
			"CanDeviceID": "0x0632",
			"CanFilterID": "0x0486",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580280000": {
		"DTCType": {
			"DBCondition": "pkw_sonderfz_acl_sst_GFACL199_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0560",
			"CanFilterID": "0x07A8"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580280300": {
		"DTCType": {
			"DBCondition": "pkw_tele_aid_h_sst_GFAID_H_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x6C"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x300101"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"115580280400": {
		"DTCType": {
			"DBCondition": "pkw_sitze_as230_sst_gfas_230_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06C3",
			"CanFilterID": "0x07AF"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580280500": {
		"DTCType": {
			"DBCondition": "pkw_getriebe_aks_sst_gfaks_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x25"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580280600": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_alb_sst_gfalb211_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0561",
			"CanFilterID": "0x04C1"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2103",
				"0x300101",
				"0x2107"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580280700": {
		"DTCType": {
			"DBCondition": "pkw_beleucht_xalwal3_sst_GFXALWAL3_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x076A",
			"CanFilterID": "0x04AD",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580280800": {
		"DTCType": {
			"DBCondition": "pkw_beleucht_xalwar3_sst_GFXALWAR3_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0772",
			"CanFilterID": "0x04AE",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580280900": {
		"DTCType": {
			"DBCondition": "pkw_beleucht_lwrvr_sst_gfalwrm2_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x75"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580280A00": {
		"DTCType": {
			"DBCondition": "pkw_beleucht_lwrvl_sst_gfalwrs2_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x77"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580280B00": {
		"DTCType": {
			"DBCondition": "pkw_beleucht_xalwal3_sst_GFXALWAL3_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x076A",
			"CanFilterID": "0x04AD",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580280C00": {
		"DTCType": {
			"DBCondition": "pkw_beleucht_xalwal3_sst_GFXALWAL3_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0772",
			"CanFilterID": "0x04AE"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580280D00": {
		"DTCType": {
			"DBCondition": "gklasse_beleucht_alwr906_sst_gfalwr90_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0794",
			"CanFilterID": "0x0795",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580280E00": {
		"DTCType": {
			"DBCondition": "pkw_beleucht_xalwal_sst_GFXALWA221M_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x076A",
			"CanFilterID": "0x04AD",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580280F00": {
		"DTCType": {
			"DBCondition": "pkw_beleucht_xalwar_sst_GFXALWA221S_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0772",
			"CanFilterID": "0x04AE",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x2150"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580283000": {
		"DTCType": {
			"DBCondition": "pkw_beleucht_xalwal_sst_GFXALWA221M_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x076A",
			"CanFilterID": "0x04AD",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580283100": {
		"DTCType": {
			"DBCondition": "pkw_beleucht_xalwar_sst_GFXALWA221S_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0772",
			"CanFilterID": "0x04AE",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580283200": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2141",
			"FilterCount": "1",
			"Filter1": [
				"1",
				"2",
				"1",
				"ECU1_FxFE_Stahlfederung%verbaut",
				"",
				"9"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_beleucht_alwr_sst_gfalwr21_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0794",
			"CanFilterID": "0x0795",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x2142"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580283300": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%XALWA_LINKS"
		},
		"DTCType": {
			"DBCondition": "pkw_beleucht_xalwal2_sst_GFXALWA211_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x076A",
			"CanFilterID": "0x04AD",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x2141",
				"0x2143",
				"0x2142",
				"0x2144"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580283400": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%XALWA_RECHTS"
		},
		"DTCType": {
			"DBCondition": "pkw_beleucht_xalwar2_sst_gfxalwa211_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0772",
			"CanFilterID": "0x04AE",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x2141",
				"0x2143",
				"0x2142",
				"0x2144"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580283500": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_hvdcdc164_sst_GFHVDCDC164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0444",
			"CanFilterID": "0x044B",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580283600": {
		"DTCType": {
			"DBCondition": "pkw_parken_PTS11_sst_GFAPC169_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode03",
			"CanDeviceID": "0x078a",
			"CanFilterID": "0x04b1",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580283700": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2130",
			"FilterCount": "2",
			"Filter1": [
				"1",
				"5",
				"4",
				"ECU1_FxFE_Z???ndkreis 10: Sidebag links Fond%ja",
				""
			],
			"Filter2": [
				"1",
				"3",
				"128",
				"ECU1_FxFE_Digitaler Crashausgang%ja",
				""
			]
		},
		"DTCType": {
			"DBCondition": "pkw_srs_abzk_sst_gfarminc_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x41"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2701",
				"0x2130"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580283800": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x3C06",
			"FilterCount": "32",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"10",
				"20",
				"1",
				"01",
				"ECU1_FxFE_ARMINA links%ON"
			],
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"10",
				"20",
				"1",
				"00",
				"ECU1_FxFE_ARMINA links%OFF"
			],
			"Filter3": [
				"KwdTyp_VCD",
				"1",
				"10",
				"26",
				"1",
				"01",
				"ECU1_FxFE_Digitaler Crashausgang%ja"
			],
			"Filter4": [
				"KwdTyp_VCD",
				"1",
				"10",
				"26",
				"1",
				"01",
				"ECU1_FxFE_Digitaler Crashausgang%ON"
			],
			"Filter5": [
				"KwdTyp_VCD",
				"1",
				"10",
				"26",
				"1",
				"00",
				"ECU1_FxFE_Digitaler Crashausgang%OFF"
			],
			"Filter6": [
				"KwdTyp_VCD",
				"1",
				"10",
				"9",
				"1",
				"01",
				"ECU1_FxFE_ZK9 Sidebag links 2 WB%ON"
			],
			"Filter7": [
				"KwdTyp_VCD",
				"1",
				"10",
				"9",
				"1",
				"00",
				"ECU1_FxFE_ZK9 Sidebag links 2 WB%OFF"
			],
			"Filter8": [
				"KwdTyp_VCD",
				"1",
				"10",
				"10",
				"1",
				"01",
				"ECU1_FxFE_Gurtschlo? Fahrer%ON"
			],
			"Filter9": [
				"KwdTyp_VCD",
				"1",
				"10",
				"10",
				"1",
				"00",
				"ECU1_FxFE_Gurtschlo? Fahrer%OFF"
			],
			"Filter10": [
				"KwdTyp_VCD",
				"1",
				"10",
				"A",
				"1",
				"01",
				"ECU1_FxFE_ZK10 Sidebag Fond links%ON"
			],
			"Filter11": [
				"KwdTyp_VCD",
				"1",
				"10",
				"A",
				"1",
				"00",
				"ECU1_FxFE_ZK10 Sidebag Fond links%OFF"
			],
			"Filter12": [
				"KwdTyp_VCD",
				"1",
				"10",
				"E",
				"1",
				"01",
				"ECU1_FxFE_ZK14 Sidebag Fond rechts%ON"
			],
			"Filter13": [
				"KwdTyp_VCD",
				"1",
				"10",
				"E",
				"1",
				"00",
				"ECU1_FxFE_ZK14 Sidebag Fond rechts%OFF"
			],
			"Filter14": [
				"KwdTyp_VCD",
				"1",
				"10",
				"25",
				"1",
				"01",
				"ECU1_FxFE_Rechtslenker%ja"
			],
			"Filter15": [
				"KwdTyp_VCD",
				"1",
				"10",
				"25",
				"1",
				"00",
				"ECU1_FxFE_Rechtslenker%nein"
			],
			"Filter16": [
				"KwdTyp_VCD",
				"1",
				"10",
				"1",
				"1",
				"01",
				"ECU1_FxFE_ZK1 Airbag Fahrer 2%ON"
			],
			"Filter17": [
				"KwdTyp_VCD",
				"1",
				"10",
				"1",
				"1",
				"00",
				"ECU1_FxFE_ZK1 Airbag Fahrer 2%OFF"
			],
			"Filter18": [
				"KwdTyp_VCD",
				"1",
				"10",
				"3",
				"1",
				"01",
				"ECU1_FxFE_ZK3 Airbag Beifahrer 2%ON"
			],
			"Filter19": [
				"KwdTyp_VCD",
				"1",
				"10",
				"3",
				"1",
				"00",
				"ECU1_FxFE_ZK3 Airbag Beifahrer 2%OFF"
			],
			"Filter20": [
				"KwdTyp_VCD",
				"1",
				"10",
				"11",
				"1",
				"01",
				"ECU1_FxFE_Gurtschlo Beifahrer%ON"
			],
			"Filter21": [
				"KwdTyp_VCD",
				"1",
				"10",
				"11",
				"1",
				"00",
				"ECU1_FxFE_Gurtschlo Beifahrer%OFF"
			],
			"Filter22": [
				"KwdTyp_VCD",
				"1",
				"10",
				"15",
				"1",
				"01",
				"ECU1_FxFE_Sitzeinbauerkennung Beifahrer%ON"
			],
			"Filter23": [
				"KwdTyp_VCD",
				"1",
				"10",
				"15",
				"1",
				"00",
				"ECU1_FxFE_Sitzeinbauerkennung Beifahrer%OFF"
			],
			"Filter24": [
				"KwdTyp_VCD",
				"1",
				"10",
				"24",
				"1",
				"01",
				"ECU1_FxFE_USA-Version%ja"
			],
			"Filter25": [
				"KwdTyp_VCD",
				"1",
				"10",
				"24",
				"1",
				"00",
				"ECU1_FxFE_USA-Version%nein"
			],
			"Filter26": [
				"KwdTyp_VCD",
				"1",
				"10",
				"B",
				"1",
				"01",
				"ECU1_FxFE_ZK11 programmierbar%ON"
			],
			"Filter27": [
				"KwdTyp_VCD",
				"1",
				"10",
				"B",
				"1",
				"00",
				"ECU1_FxFE_ZK11 programmierbar%OFF"
			],
			"Filter28": [
				"KwdTyp_VCD",
				"1",
				"10",
				"D",
				"1",
				"00",
				"ECU1_FxFE_ZK13 Sidebag rechts 2 WB%OFF"
			],
			"Filter29": [
				"KwdTyp_VCD",
				"1",
				"10",
				"6",
				"1",
				"00",
				"ECU1_FxFE_ZK6 Gurtstraffer Fond links%OFF"
			],
			"Filter30": [
				"KwdTyp_VCD",
				"1",
				"10",
				"7",
				"1",
				"00",
				"ECU1_FxFE_ZK7 Gurtstraffer Fond rechts%OFF"
			],
			"Filter31": [
				"KwdTyp_VCD",
				"1",
				"10",
				"10",
				"1",
				"01",
				"ECU1_FxFE_Gurtschlo?Fahrer%ON"
			],
			"Filter32": [
				"KwdTyp_VCD",
				"1",
				"10",
				"10",
				"1",
				"00",
				"ECU1_FxFE_Gurtschlo?Fahrer%OFF"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_srs_abzk_sst_gfairb22_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x41"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x3C00",
				"0x2701",
				"0x3C06>"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580283900": {
		"FiltEleInfo": {
			"AddFilter": [
				"FxFE%ARMIN_x_ter_Einstieg",
				"ECU1_FxFE_AKSE/OC Beifahrer%ja",
				"ECU1_FxFE_S: Gurtstraffer hinten links: Status%vorhanden aktiv",
				"ECU1_FxFE_S: Gurtstraffer hinten rechts: Status%vorhanden aktiv"
			],
			"FilterRelatedCmd": [
				"0x2132",
				"0x2130"
			],
			"FilterCount": "10",
			"Filter1": [
				"1",
				"21",
				"192",
				"ECU1_FxFE_S: Sidebag (Thorxbag) vorne Fahrer: Status%vorhanden aktiv",
				""
			],
			"Filter2": [
				"1",
				"22",
				"192",
				"ECU1_FxFE_S: Sidebag (Thorxbag) vorne Beifahrer: Status%vorhanden aktiv",
				""
			],
			"Filter3": [
				"1",
				"23",
				"192",
				"ECU1_FxFE_S: Sidebag hinten links: Status%vorhanden aktiv",
				""
			],
			"Filter4": [
				"1",
				"24",
				"192",
				"ECU1_FxFE_S: Sidebag hinten rechts: Status%vorhanden aktiv",
				""
			],
			"Filter5": [
				"1",
				"27",
				"192",
				"ECU1_FxFE_S: Kneebag Fahrer: Status%vorhanden aktiv",
				""
			],
			"Filter6": [
				"1",
				"25",
				"192",
				"ECU1_FxFE_S: Windowbag vorne links: Status%vorhanden aktiv",
				""
			],
			"Filter7": [
				"1",
				"26",
				"192",
				"ECU1_FxFE_S: Windowbag vorne rechts: Status%vorhanden aktiv",
				""
			],
			"Filter8": [
				"2",
				"12",
				"1",
				"ECU1_FxFE_Sitzmatten-Komponente Beifahrer%Start OC/AKSE",
				"",
				"9"
			],
			"Filter9": [
				"2",
				"12",
				"0",
				"ECU1_FxFE_Sitzmatten-Komponente Beifahrer%SBE/AKSE",
				"",
				"9"
			],
			"Filter10": [
				"2",
				"12",
				"3",
				"ECU1_FxFE_Sitzmatten-Komponente Beifahrer%SBE/(+Kennung)",
				"",
				"9"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_srs_armada_sst_gfarmada_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06BC",
			"CanFilterID": "0x04FC"
		},
		"Access": {
			"AccessEcu211Before": [
				"0x01",
				"0x90",
				"0x01",
				"0x94"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1a86",
				"0x2701",
				"0x2132",
				"0x2130",
				"0x21A4"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580283A00": {
		"FiltEleInfo": {
			"AddFilter": [
				"FxFE%ARMIN_x_ter_Einstieg",
				"ECU1_FxFE_AKSE/OC Beifahrer%ja"
			],
			"FilterRelatedCmd": "0x2130",
			"FilterCount": "4",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"10",
				"20",
				"1",
				"01",
				"ECU1_FxFE_Pr???fung: Header-Programmierung CAN-Botschaft (EZS)%ja"
			],
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"10",
				"20",
				"1",
				"00",
				"ECU1_FxFE_Pr???fung: Header-Programmierung CAN-Botschaft (EZS)%nein"
			],
			"Filter3": [
				"KwdTyp_VCD",
				"1",
				"10",
				"11",
				"1",
				"00",
				"ECU1_FxFE_Rechts-/Linkslenker%%Linkslenker"
			],
			"Filter4": [
				"KwdTyp_VCD",
				"1",
				"10",
				"11",
				"1",
				"01",
				"ECU1_FxFE_Rechts-/Linkslenker%%Rechtslenker"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_srs_armada2_sst_gfarmada_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06BC",
			"CanFilterID": "0x07AC"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2701",
				"0x2132",
				"0x2130",
				"0x21A4",
				"0x21E1",
				"0x2105",
				"0x2101",
				"0x21A4"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580283B00": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2112",
			"FilterCount": "28",
			"Filter1": [
				"1",
				"11",
				"0",
				"ECU1_FxFE_Sitzmatten-Komponente Beifahrer%SBE/AKSE (ohne Kennung)",
				"",
				"9"
			],
			"Filter2": [
				"1",
				"11",
				"3",
				"ECU1_FxFE_Sitzmatten-Komponente Beifahrer%SBE-digital (+Kennung)",
				"",
				"9"
			],
			"Filter3": [
				"1",
				"5",
				"1",
				"ECU1_FxFE_ZK Endbeschlagstraffer hinten rechts vorhanden%ja",
				""
			],
			"Filter4": [
				"1",
				"5",
				"2",
				"ECU1_FxFE_ZK Gurtstraffer vorne mitte vorhanden%ja",
				""
			],
			"Filter5": [
				"1",
				"5",
				"4",
				"ECU1_FxFE_ZK Gurtstraffer 3. Sitzreihe links vorhanden%ja",
				""
			],
			"Filter6": [
				"1",
				"5",
				"8",
				"ECU1_FxFE_ZK Gurtstraffer 3. Sitzreihe mitte vorhanden%ja",
				""
			],
			"Filter7": [
				"1",
				"5",
				"16",
				"ECU1_FxFE_ZK Gurtstraffer 3. Sitzreihe rechts vorhanden%ja",
				""
			],
			"Filter8": [
				"1",
				"4",
				"1",
				"ECU1_FxFE_ZK Kneebag Beifahrer vorhanden%ja",
				""
			],
			"Filter9": [
				"1",
				"4",
				"2",
				"ECU1_FxFE_ZK Endbeschlagstraffer Fahrer vorhanden%ja",
				""
			],
			"Filter10": [
				"1",
				"4",
				"4",
				"ECU1_FxFE_ZK Endbeschlagstraffer Beifahrer vorhanden%ja",
				""
			],
			"Filter11": [
				"1",
				"4",
				"8",
				"ECU1_FxFE_ZK Gurtkraftbegrenzer Fahrer vorhanden%ja",
				""
			],
			"Filter12": [
				"1",
				"4",
				"16",
				"ECU1_FxFE_ZK Gurtkraftbegrenzer Beifahrer vorhanden%ja",
				""
			],
			"Filter13": [
				"1",
				"4",
				"128",
				"ECU1_FxFE_ZK Endbeschlagstraffer hinten links vorhanden%ja",
				""
			],
			"Filter14": [
				"1",
				"3",
				"1",
				"ECU1_FxFE_ZK Gurtstraffer hinten rechts vorhanden%ja",
				""
			],
			"Filter15": [
				"1",
				"3",
				"128",
				"ECU1_FxFE_ZK Kneebag Fahrer vorhanden%ja",
				""
			],
			"Filter16": [
				"1",
				"2",
				"64",
				"ECU1_FxFE_ZK Gurtstraffer hinten links vorhanden%ja",
				""
			],
			"Filter17": [
				"1",
				"2",
				"128",
				"ECU1_FxFE_ZK Gurtstraffer hinten mitte vorhanden%ja",
				""
			],
			"Filter18": [
				"1",
				"3",
				"8",
				"ECU1_FxFE_ZK Sidebag hinten links vorhanden%ja",
				""
			],
			"Filter19": [
				"1",
				"3",
				"16",
				"ECU1_FxFE_ZK Sidebag hinten rechts vorhanden%ja",
				""
			],
			"Filter20": [
				"1",
				"8",
				"32",
				"ECU1_FxFE_Gurtschlo???info HIMI%Gurtschlo???infos ???ber HW",
				""
			],
			"Filter21": [
				"1",
				"8",
				"16",
				"ECU1_FxFE_Gurtschlo???info HIMI%Gurtschlo???infos ???ber HW",
				"",
				"1"
			],
			"Filter22": [
				"1",
				"8",
				"8",
				"ECU1_FxFE_Gurtschlo???info HILI%Gurtschlo???infos ???ber HW",
				""
			],
			"Filter23": [
				"1",
				"8",
				"4",
				"ECU1_FxFE_Gurtschlo???info HILI%Gurtschlo???infos ???ber HW",
				"",
				"1"
			],
			"Filter24": [
				"1",
				"8",
				"128",
				"ECU1_FxFE_Gurtschlo???info HIRE%Gurtschlo???infos ???ber HW",
				""
			],
			"Filter25": [
				"1",
				"8",
				"64",
				"ECU1_FxFE_Gurtschlo???info HIRE%Gurtschlo???infos ???ber HW",
				"",
				"1"
			],
			"Filter26": [
				"KwdTyp_VCD",
				"1",
				"10",
				"46",
				"1",
				"01",
				"ECU1_FxFE_Analoge Crashausg???nge vorhanden%ja"
			],
			"Filter27": [
				"KwdTyp_VCD",
				"1",
				"10",
				"1A",
				"1",
				"00",
				"ECU1_FxFE_ZK Gurtstraffer 3. Sitzreihe links vorhanden%nein"
			],
			"Filter28": [
				"KwdTyp_VCD",
				"1",
				"10",
				"B",
				"1",
				"00",
				"ECU1_FxFE_ZK Sidebag hinten links vorhanden%nein"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_srs_arcade_sst_GFARCADE_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06BC",
			"CanFilterID": "0x07AC",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x9d"
			],
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x2701",
				"0x1A9B",
				"0x1A9D",
				"0x2112",
				"0x21A4"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580283C00": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2112",
			"FilterCount": "31",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"10",
				"31",
				"1",
				"01",
				"ECU1_FxFE_Crashaktive Kopfst???tzen BF vorhanden%ja"
			],
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"10",
				"30",
				"1",
				"01",
				"ECU1_FxFE_Crashaktive Kopfst???tzen F vorhanden%ja"
			],
			"Filter3": [
				"KwdTyp_VCD",
				"1",
				"10",
				"1A",
				"1",
				"01",
				"ECU1_FxFE_Gurtschlo? 3. Sitzreihe links vorhanden%ja"
			],
			"Filter4": [
				"KwdTyp_VCD",
				"1",
				"10",
				"1C",
				"1",
				"01",
				"ECU1_FxFE_Gurtschlo? 3. Sitzreihe rechts vorhanden%ja"
			],
			"Filter5": [
				"KwdTyp_VCD",
				"1",
				"10",
				"22",
				"11",
				"00",
				""
			],
			"Filter6": [
				"KwdTyp_VCD",
				"1",
				"10",
				"22",
				"11",
				"00",
				""
			],
			"Filter7": [
				"KwdTyp_VCD",
				"1",
				"10",
				"22",
				"11",
				"00",
				""
			],
			"Filter8": [
				"KwdTyp_VCD",
				"1",
				"10",
				"2B",
				"1",
				"01",
				"ECU1_FxFE_Schnittstellen Drucksensor hinten Fahrer/Beifahrer bzw. PAS mitte Fahrer/Beifahrer vorhanden%ja"
			],
			"Filter9": [
				"KwdTyp_VCD",
				"1",
				"10",
				"48",
				"8",
				"06",
				"ECU1_FxFE_Sitzmatten-Komponente Beifahrer%SBE / AKSE (+ Kennung)"
			],
			"Filter10": [
				"KwdTyp_VCD",
				"1",
				"10",
				"48",
				"8",
				"01",
				"ECU1_FxFE_Sitzmatten-Komponente Beifahrer%Start OC/AKSE"
			],
			"Filter11": [
				"KwdTyp_VCD",
				"1",
				"10",
				"48",
				"8",
				"01",
				"ECU1_FxFE_Sitzmatten-Komponente Beifahrer%Start OC/AKSE (+ Kennung)"
			],
			"Filter12": [
				"KwdTyp_VCD",
				"1",
				"10",
				"12",
				"1",
				"01",
				"ECU1_FxFE_ZK Endbeschlagstraffer Beifahrer vorhanden%ja"
			],
			"Filter13": [
				"KwdTyp_VCD",
				"1",
				"10",
				"11",
				"1",
				"01",
				"ECU1_FxFE_ZK Endbeschlagstraffer Fahrer vorhanden%ja"
			],
			"Filter14": [
				"KwdTyp_VCD",
				"1",
				"10",
				"17",
				"1",
				"01",
				"ECU1_FxFE_ZK Endbeschlagstraffer hinten links vorhanden%ja"
			],
			"Filter15": [
				"KwdTyp_VCD",
				"1",
				"10",
				"18",
				"1",
				"01",
				"ECU1_FxFE_ZK Endbeschlagstraffer hinten rechts vorhanden%ja"
			],
			"Filter16": [
				"KwdTyp_VCD",
				"1",
				"10",
				"14",
				"1",
				"01",
				"ECU1_FxFE_ZK Gurtkraftbegrenzer Beifahrer vorhanden%ja"
			],
			"Filter17": [
				"KwdTyp_VCD",
				"1",
				"10",
				"13",
				"1",
				"01",
				"ECU1_FxFE_ZK Gurtkraftbegrenzer Fahrer vorhanden%ja"
			],
			"Filter18": [
				"KwdTyp_VCD",
				"1",
				"10",
				"1A",
				"1",
				"01",
				"ECU1_FxFE_ZK Gurtstraffer 3. Sitzreihe links vorhanden%ja"
			],
			"Filter19": [
				"KwdTyp_VCD",
				"1",
				"10",
				"1B",
				"1",
				"01",
				"ECU1_FxFE_ZK Gurtstraffer 3. Sitzreihe mitte vorhanden%ja"
			],
			"Filter20": [
				"KwdTyp_VCD",
				"1",
				"10",
				"1C",
				"1",
				"01",
				"ECU1_FxFE_ZK Gurtstraffer 3. Sitzreihe rechts vorhanden%ja"
			],
			"Filter21": [
				"KwdTyp_VCD",
				"1",
				"10",
				"6",
				"1",
				"01",
				"ECU1_FxFE_ZK Gurtstraffer hinten links vorhanden%ja"
			],
			"Filter22": [
				"KwdTyp_VCD",
				"1",
				"10",
				"7",
				"1",
				"01",
				"ECU1_FxFE_ZK Gurtstraffer hinten mitte vorhanden%ja"
			],
			"Filter23": [
				"KwdTyp_VCD",
				"1",
				"10",
				"8",
				"1",
				"01",
				"ECU1_FxFE_ZK Gurtstraffer hinten rechts vorhanden%ja"
			],
			"Filter24": [
				"KwdTyp_VCD",
				"1",
				"10",
				"19",
				"1",
				"01",
				"ECU1_FxFE_ZK Gurtstraffer vorne mitte vorhanden%ja"
			],
			"Filter25": [
				"KwdTyp_VCD",
				"1",
				"10",
				"10",
				"1",
				"01",
				"ECU1_FxFE_ZK Kneebag Beifahrer vorhanden%ja"
			],
			"Filter26": [
				"KwdTyp_VCD",
				"1",
				"10",
				"F",
				"1",
				"01",
				"ECU1_FxFE_ZK Kneebag Fahrer vorhanden%ja"
			],
			"Filter27": [
				"KwdTyp_VCD",
				"1",
				"10",
				"1D",
				"1",
				"01",
				"ECU1_FxFE_ZK Pyrofuse vorhanden%ja"
			],
			"Filter28": [
				"KwdTyp_VCD",
				"1",
				"10",
				"1E",
				"1",
				"01",
				"ECU1_FxFE_ZK Pyroswitch f???r Hybridfahrzeuge vorhanden%ja"
			],
			"Filter29": [
				"KwdTyp_VCD",
				"1",
				"10",
				"15",
				"1",
				"01",
				"ECU1_FxFE_ZK Windowbag hinten links vorhanden%ja"
			],
			"Filter30": [
				"KwdTyp_VCD",
				"1",
				"10",
				"16",
				"1",
				"01",
				"ECU1_FxFE_ZK Windowbag hinten rechts vorhanden%ja"
			],
			"Filter31": [
				"KwdTyp_VCD",
				"1",
				"10",
				"1E",
				"1",
				"01",
				"ECU_ARCADE2_FxFE_ZK Pyroswitch f???r Hybridfahrzeuge vorhanden%ja"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_srs_arcade2_sst_GFARCADE2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x064A",
			"CanFilterID": "0x0489"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x2701",
				"0x1A9B",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580283D00": {
		"DTCType": {
			"DBCondition": "pkw_tempomat_dtr2_sst_GFARS200_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x078E",
			"CanFilterID": "0x078F",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x8A"
			]
		}
	},
	"115580283E00": {
		"DTCType": {
			"DBCondition": "pkw_tempomat_dtr2_sst_GFARS200_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0702",
			"CanFilterID": "0x04A0",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580283F00": {
		"DTCType": {
			"DBCondition": "pkw_tempomat_dtr2_sst_GFARS200_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0702",
			"CanFilterID": "0x04A0",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x8B"
			]
		}
	},
	"115580282000": {
		"DTCType": {
			"DBCondition": "pkw_tempomat_dtr3_sst_GFARS310_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0702",
			"CanFilterID": "0x04A0",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580282100": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_tele_aps_h_sst_GFAPS_H_SGS"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x63"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x3128",
				"0x322800"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580282200": {
		"DTCType": {
			"DBCondition": "pkw_tempomat_dtr_sst_gfart220_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x37"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": [
				"0x25",
				"0x82"
			]
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"115580282300": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_traktion_asr30_h_sst_GFASR30__sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x30"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580282400": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_traktion_asr34_h_sst_GFASR34__sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x34"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580282500": {
		"DTCType": {
			"DBCondition": "pkw_d2b_audio_sst_gfaudio_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0xD0"
		},
		"Access": {
			"AccessCmd": [
				"0xc17bf381b0",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1a86",
				"0x2101",
				"0x1802FF00"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0xC17BF382B1"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580282600": {
		"DTCType": {
			"DBCondition": "pkw_d2b_avn_sst_gfavn001_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0xD0"
		},
		"Access": {
			"AccessCmd": [
				"0xC17BF381B0",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": "0x1a86"
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0xC17BF382B1"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580282700": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_traktion_bas_h_sst_GFBAS_H_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x36"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3C10"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580282800": {
		"DTCType": {
			"DBCondition": "pkw_traktion_bas2_sst_gfbas203_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x36"
		},
		"Access": {
			"AccessCmd": "0x81",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580282900": {
		"DTCType": {
			"DBCondition": "pkw_bedien_bcg_sst_gfbcg240_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06BD",
			"CanFilterID": "0x04FD"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2105",
				"0x2108",
				"0x2109"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"115580282B00": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_bsg2_sst_gfbsg211_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0732",
			"CanFilterID": "0x04F2"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x21E3",
				"0x21E2"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580282C00": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_bsg4_sst_GFBSG221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06AA",
			"CanFilterID": "0x0495",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x2701",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580282D00": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_bsg2_sst_gfbsg211_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0732",
			"CanFilterID": "0x04F2"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x21E3",
				"0x21E2",
				"0x1802FF00",
				"0x17"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580282E00": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_bsg_sst_gfbns230_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x49"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3C09",
				"0x3B0900"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580282F00": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_bsg3_sst_gfbns240_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0713",
			"CanFilterID": "0x04C3"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580285000": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_bms164_sst_GFBMS164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E7",
			"CanFilterID": "0x07EF",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580285100": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_bms221_sst_GFBMS221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E7",
			"CanFilterID": "0x07EF",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580285C00": {
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0441",
			"CanFilterID": "0x0441"
		},
		"Access": {
			"CanAccessCmd": "0x044108021083FFFFFFFFFF"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E80"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x044108021081FFFFFFFFFF"
		}
	},
	"115580285D00": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_cm164_sst_GFCM164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06B6",
			"CanFilterID": "0x04CD"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580285E00": {
		"DTCType": {
			"DBCondition": "pkw_d2b_cdc_sst_gfcdc_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0xD0",
				"0xD1"
			]
		},
		"Access": {
			"AccessEcuBefore": [
				"0x00",
				"0x5f"
			],
			"AccessCmd": [
				"0xc17bf381b0",
				"0x8300",
				"0x8303",
				"0x1a86",
				"0x2101"
			],
			"ReferCmd": "0x1a86"
		},
		"LinkInfo": {
			"LinkCmd": "0x81D0F33E82"
		},
		"QuitInfo": {
			"QuitCmd": "0xC17BF382B1"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84"
			]
		}
	},
	"115580285F00": {
		"DTCType": {
			"DBCondition": "pkw_motordie_cdi2_sst_gfcr2_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x12"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2701",
				"0x300101",
				"0x2124",
				"0x1A90"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580284000": {
		"FiltEleInfo": {
			"FilterRelatedCmd": [
				"0x2124",
				"0x1A86"
			],
			"FilterCount": [
				"5",
				"5"
			],
			"Filter1": [
				[
					"1",
					"27",
					"37",
					"FxFE%OM613DE32LA",
					"",
					"9"
				],
				[
					"1",
					"12",
					"0",
					"FxFE%Getriebe_SG"
				],
				[
					"1",
					"12",
					"1",
					"FxFE%Getriebe_KSG"
				],
				[
					"1",
					"12",
					"2",
					"FxFE%Getriebe_AK"
				],
				[
					"1",
					"12",
					"4",
					"FxFE%Getriebe_AG"
				],
				[
					"1",
					"12",
					"5",
					"FxFE%Getriebe_AG"
				]
			],
			"Filter2": [
				"1",
				"27",
				"43",
				"FxFE%OM612DE27LA",
				"",
				"9"
			],
			"Filter3": [
				"1",
				"27",
				"44",
				"FxFE%OM611DE22LA",
				"",
				"9"
			],
			"Filter4": [
				"1",
				"27",
				"45",
				"FxFE%OM611DE22A",
				"",
				"9"
			],
			"Filter5": [
				"1",
				"27",
				"46",
				"FxFE%OM611DE22A",
				"",
				"9"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_motordie_cdi2_sst_gfcr2_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x12"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2701",
				"0x300101",
				"0x2124"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580284100": {
		"DTCType": {
			"DBCondition": "pkw_motordie_cdi3_sst_gfcr3_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x12",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2701",
				"0x2101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01",
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081",
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580284200": {
		"DTCType": {
			"DBCondition": "pkw_motordie_cdi3_up_sst_gfcr3_up_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x12",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2701",
				"0x2101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E",
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081",
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580284300": {
		"DTCType": {
			"DBCondition": "pkw_motordie_cdi3_up_sst_gfcr3_up_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x12"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2701",
				"0x2101"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580284400": {
		"DTCType": {
			"DBCondition": "pkw_motordie_cdi3_up_sst_gfcr3_up_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x2701",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x300101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580284500": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2110",
			"FilterCount": "3",
			"Filter1": [
				"1",
				"6",
				"1",
				"FxFE%DPF",
				""
			],
			"Filter2": [
				"1",
				"5",
				"8",
				"FxFE%Getriebe_AG",
				"FxFE%Getriebe_SG"
			],
			"Filter3": [
				"1",
				"5",
				"2",
				"FxFE%Getriebe_KSG",
				""
			]
		},
		"DTCType": {
			"DBCondition": "pkw_motordie_cdi4_sst_GFCR4_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x2701",
				"0x1A9A",
				"0x1A9C",
				"0x2102",
				"0x2101",
				"0x2104",
				"0x2110"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580284600": {
		"DTCType": {
			"DBCondition": "461g_motordie_cdi4_sst_gfcr4_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9C",
				"0x2101",
				"0x2104",
				"0x2110",
				"0x303601",
				"0x303701",
				"0x303801",
				"0x303901",
				"0x303B01"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580284700": {
		"DTCType": {
			"DBCondition": "pkw_motordie_cdi5_sst_GFCR5_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x2701",
				"0x1A9A",
				"0x1A9C",
				"0x2101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580284800": {
		"DTCType": {
			"DBCondition": "pkw_motordie_cdi5_us_sst_GFCR5_US_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x2701",
				"0x1A9A",
				"0x1A9C",
				"0x2101",
				"0x2110"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580284900": {
		"DTCType": {
			"DBCondition": "pkw_motordie_cdi6bin5_sst_GFCR6BIN5_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x2701",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131",
				"0x220164"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580284A00": {
		"DTCType": {
			"DBCondition": "pkw_motordie_cdi6_sst_GFCR6_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x2701",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580284B00": {
		"DTCType": {
			"DBCondition": "pkw_motordie_cdiv1_sst_gfcrv_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x12"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2701",
				"0x300101"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580284C00": {
		"DTCType": {
			"DBCondition": "pkw_motordie_cdid_sst_GFCRD_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x12"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2701",
				"0x300101"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"115580284D00": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2110",
			"FilterCount": "1",
			"Filter1": [
				"1",
				"6",
				"1",
				"FxFE%DPF",
				""
			]
		},
		"DTCType": {
			"DBCondition": "pkw_motordie_cdid_sst_GFCRD_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x2701",
				"0x1A9A",
				"0x1A9C",
				"0x2101",
				"0x2102",
				"0x1A98",
				"0x2110"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580284E00": {
		"DTCType": {
			"DBCondition": "pkw_motordie_cdid2_sst_GFCRD2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580284F00": {
		"DTCType": {
			"DBCondition": "pkw_d2b_comand_sst_gfcomand_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0xD0"
		},
		"Access": {
			"AccessCmd": [
				"0xc17bf381b0",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1a86",
				"0x2101"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0xC17BF382B1"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580287000": {
		"DTCType": {
			"DBCondition": "pkw_motordie_cdi1_h_sst_GfCR1_H_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": [
				"0xF3",
				"0xF1"
			],
			"FilterID": "0x0A"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x3C00",
				"0x2701",
				"0x8300",
				"0x3128",
				"0x3134",
				"0x3C00",
				"0x2C10D2010010",
				"0x2A0110"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"115580287100": {
		"DTCType": {
			"DBCondition": "pkw_motordie_cdi1_sst_gfcr1_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": [
				"0xF3",
				"0xF1"
			],
			"FilterID": "0x0a"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3f"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"115580287200": {
		"DTCType": {
			"DBCondition": "pkw_motordie_cdia1_sst_GFCRA_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x2701",
				"0x1A9A",
				"0x1A9C",
				"0x2102",
				"0x2101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580287300": {
		"DTCType": {
			"DBCondition": "pkw_bedien_zbe2_sst_GFCTRLC_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0743",
			"CanFilterID": "0x04E8"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580287500": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_bedien_dbe1_h_sst_gfdbe1_h_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x7A"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3128"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580287600": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%Hinweis_gelesen",
			"FilterRelatedCmd": "0x2163",
			"FilterCount": "1",
			"Filter1": [
				"1",
				"7",
				"2",
				"",
				"ECU_DBE6_FxFE_Regensensor%aktiv"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_bedien_dbe6_sst_gfdbe171_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0667",
			"CanFilterID": "0x04E7"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xa4"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x3B6321",
				"0x2163",
				"0x3B6301",
				"0x2163",
				"0x3B6302"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580287700": {
		"DTCType": {
			"DBCondition": "pkw_bedien_dbe7_sst_GFDBE169_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0667",
			"CanFilterID": "0x04E7"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xa2"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x3B6F01",
				"0x3B6F02",
				"0x3B6F03",
				"0x3B6F04",
				"0x3B6F05",
				"0x3B6F10",
				"0x3B6F11",
				"0x3B6F12",
				"0x3B6F00",
				"0x2140",
				"0x2141"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580287800": {
		"FiltEleInfo": {
			"AddFilter": "ECU1_FxFE_Sitzreihe Fond%vorhanden",
			"FilterRelatedCmd": "0x2100",
			"FilterCount": "1",
			"Filter1": [
				"1",
				"2",
				"2",
				"ECU_DBE8_FxFE_Glasbruchschleife%vorhanden",
				""
			]
		},
		"DTCType": {
			"DBCondition": "pkw_bedien_dbe8_sst_GFDBE164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0667",
			"CanFilterID": "0x04E7",
			"FlowDataCtrl": "0x60300823"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580287900": {
		"FiltEleInfo": {
			"FilterRelatedCmd": [
				"0x2124",
				"0x2151"
			],
			"FilterCount": "2",
			"Filter1": [
				"1",
				"2",
				"128",
				"ECU1_FxFE_SHD%vorhanden",
				""
			],
			"Filter2": [
				"2",
				"2",
				"1",
				"ECU1_FxFE_Sonderausstattung Innenspiegel%Mit EC-Spiegel",
				""
			]
		},
		"DTCType": {
			"DBCondition": "pkw_bedien_dbe2_sst_gfdbe203_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0667",
			"CanFilterID": "0x04E7",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x7A"
			]
		},
		"Access": {
			"AccessEcuBefore": [
				"0x00",
				"0xba",
				"0x00",
				"0xb9"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2146",
				"0x2140",
				"0x2147",
				"0x2152",
				"0x2151",
				"0x2153",
				"0x2150"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580287A00": {
		"DTCType": {
			"DBCondition": "pkw_bedien_dbe_sst_gfdbe220_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06E3",
			"CanFilterID": "0x04DC"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580287C00": {
		"FiltEleInfo": {
			"FilterRelatedCmd": [
				"0x21D9",
				"0x217C",
				"0x219C",
				"0x213C"
			],
			"FilterCount": "8",
			"Filter1": [
				"1",
				"2",
				"15",
				"ECU_DBE3_FxFE_ASD%vorhanden",
				"",
				"9"
			],
			"Filter2": [
				"1",
				"2",
				"1",
				"ECU_DBE3_FxFE_ASD%nicht vorhanden",
				"",
				"9"
			],
			"Filter3": [
				"2",
				"2",
				"15",
				"ECU_DBE3_FxFE_ASD%vorhanden",
				"",
				"9"
			],
			"Filter4": [
				"2",
				"2",
				"1",
				"ECU_DBE3_FxFE_ASD%nicht vorhanden",
				"",
				"9"
			],
			"Filter5": [
				"3",
				"2",
				"15",
				"ECU_DBE3_FxFE_ASD%vorhanden",
				"",
				"9"
			],
			"Filter6": [
				"3",
				"2",
				"1",
				"ECU_DBE3_FxFE_ASD%nicht vorhanden",
				"",
				"9"
			],
			"Filter7": [
				"4",
				"2",
				"15",
				"ECU_DBE3_FxFE_ASD%vorhanden",
				"",
				"9"
			],
			"Filter8": [
				"4",
				"2",
				"1",
				"ECU_DBE3_FxFE_ASD%nicht vorhanden",
				"",
				"9"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_bedien_dbe3_sst_gfdbe211_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0667",
			"CanFilterID": "0x04E7"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xa8"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x21D9",
				"0x217C",
				"0x219C",
				"0x213C",
				"0x2130",
				"0x3B2B0B",
				"0x2109",
				"0x3B2B0A",
				"0x2129"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89",
				"0x8B"
			]
		}
	},
	"115580287D00": {
		"FiltEleInfo": {
			"AddFilter": [
			]
		},
		"DTCType": {
			"DBCondition": "pkw_bedien_dbe_sst_gfdbe220_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x7A"
			]
		},
		"Access": {
			"AccessEcuBefore": [
				"0x00",
				"0xbf",
				"0x02",
				"0x25"
			],
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00",
				"0x3128"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B",
				"0x89"
			]
		}
	},
	"115580287E00": {
		"FiltEleInfo": {
			"AddFilter": "ECU_DBE9_FxFE_AIS vorhanden%ja"
		},
		"DTCType": {
			"DBCondition": "pkw_bedien_dbe9_sst_GFDBE221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode09",
			"CanDeviceID": "0x06E3",
			"CanFilterID": "0x04DC",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xad"
			],
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x21D9",
				"0x213D",
				"0x21F2",
				"0x213D",
				"0x2126",
				"0x3B2B02",
				"0x3B2B03"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580287F00": {
		"DTCType": {
			"DBCondition": "pkw_bedien_dbe2_sst_gfdbe230_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x7A"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580286000": {
		"DTCType": {
			"DBCondition": "pkw_bedien_dbe5_sst_gfdbe501_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0740",
			"CanFilterID": "0x07A7",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xab"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x212E",
				"0x2150",
				"0x2124"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580286100": {
		"DTCType": {
			"DBCondition": "pkw_bedien_dbe4_sst_gfdbe240_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06C7",
			"CanFilterID": "0x04E7"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x3B2B0B",
				"0x3B2B0A",
				"0x2129"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580286200": {
		"DTCType": {
			"DBCondition": "pkw_bedien_dbe2_sst_gfdbe203_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0667",
			"CanFilterID": "0x04E7",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x7A"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2151",
				"0x2150",
				"0x2124"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580286300": {
		"DTCType": {
			"DBCondition": "pkw_bedien_dkm_sst_gfdkm240_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06E1",
			"CanFilterID": "0x04C1",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580286400": {
		"DTCType": {
			"DBCondition": "pkw_parken_drvm_sst_GFDRVM221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0733",
			"CanFilterID": "0x04E6"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580286500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_drvu_x_sst_sgs_gf_drvu_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x062A",
			"CanFilterID": "0x0485",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580286600": {
		"FiltEleInfo": {
		},
		"DTCType": {
			"DBCondition": "pkw_bedien_drvu_sst_gfdrvu_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0542",
			"CanFilterID": "0x079e",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1a87",
				"0x1a9a",
				"0x1a9c",
				"0x2107"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580286700": {
		"DTCType": {
			"DBCondition": "pkw_getriebe_dsm_sst_GFDSM_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06EA",
			"CanFilterID": "0x049D",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580286800": {
		"DTCType": {
			"DBCondition": "pkw_parken_drvm_sst_GFDRVM221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0721",
			"CanFilterID": "0x04CC",
			"FlowDataCtrl": "0x60300832"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580286900": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_eamk_sst_gfeamk_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x4A"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580286A00": {
		"DTCType": {
			"DBCondition": "pkw_klima_eac_sst_gfeac_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x0696",
			"CanFilterID": "0x0697",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580286B00": {
		"DTCType": {
			"DBCondition": "pkw_traktion_rbs1_sst_gfrbs_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x07BC",
			"CanFilterID": "0x07BD",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580286D00": {
		"DTCType": {
			"DBCondition": "pkw_tele_ecallece_sst_gfecalle_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x6C"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x1a86",
				"0x21e1"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3e"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580286E00": {
		"DTCType": {
			"DBCondition": "pkw_tele_ecalljap_sst_gfecallj_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x6C"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x1a86",
				"0x21e1"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3e"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580286F00": {
		"DTCType": {
			"DBCondition": "pkw_tele_ecalljap_sst_gfecallj_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x6C"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x1a86",
				"0x21e1"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3e"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84"
			]
		}
	},
	"115580289100": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_edw_edw2_h_sst_GFEDW2_H_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x70"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3134",
				"0x3128",
				"0x3127"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580289200": {
		"DTCType": {
			"DBCondition": "pkw_edw_edw_sst_FCEDW169_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0563",
			"CanFilterID": "0x04E3"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2121",
				"0x2122"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580289300": {
		"DTCType": {
			"DBCondition": "pkw_edw_edz_h_sst_gfedz_h_sgs"
		},
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"NetInfo": {
			"PtclType": "KWPS",
			"IOBaudRate": "9600",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x70"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x01",
				"0xc8"
			],
			"AccessAddrCode": "7E",
			"AccessCmd": "0x8300",
			"ReferCmd": [
				"0x3C00",
				"0x3128"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"115580289400": {
		"DTCType": {
			"DBCondition": "pkw_getriebe_egs_SST_GFEGS_sgs"
		},
		"NetInfo": {
			"PtclType": "ISO9141",
			"IOBaudRate": "9600",
			"IOTimeParas": "IOTimes_Mode86",
			"AddrCode": "20"
		},
		"Access": {
			"ReferCmd": [
				"0x200F",
				"0x205001"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x205001"
		},
		"QuitInfo": {
			"QuitCmd": "0x2070"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89",
				"0x8B"
			]
		}
	},
	"115580289500": {
		"DTCType": {
			"DBCondition": "pkw_getriebe_egs_h_SST_GFEGS_H_sgs"
		},
		"NetInfo": {
			"PtclType": "ISO9141",
			"IOBaudRate": "9600",
			"IOTimeParas": "IOTimes_Mode86",
			"AddrCode": "20"
		},
		"Access": {
			"ReferCmd": [
				"0x200F",
				"0x205001"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x205001"
		},
		"QuitInfo": {
			"QuitCmd": "0x2070"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x86",
				"0x89"
			]
		}
	},
	"115580289600": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%SCHALTPRG_ALT"
		},
		"DTCType": {
			"DBCondition": "pkw_getriebe_egs1_sst_gfegs52_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E1",
			"CanFilterID": "0x07E9",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x20",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"AccessCmd": "0x81",
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9C",
				"0x300101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01",
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081",
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89",
				"0x8B"
			]
		}
	},
	"115580289700": {
		"DTCType": {
			"DBCondition": "pkw_getriebe_egs3_sst_gfegs53_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E1",
			"CanFilterID": "0x07E9"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9C",
				"0x21B1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89",
				"0x8B"
			]
		}
	},
	"115580289800": {
		"DTCType": {
			"DBCondition": "pkw_traktion_efb_sst_gfefb221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0732",
			"CanFilterID": "0x04A6",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xad"
			],
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x212A"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580289900": {
		"DTCType": {
			"DBCondition": "pkw_traktion_ehbasg_sst_gfehb_as_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x30"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x8B"
			]
		}
	},
	"115580289A00": {
		"DTCType": {
			"DBCondition": "pkw_traktion_ehbasg_sst_gfehb_as_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x30"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x8B"
			]
		}
	},
	"115580289B00": {
		"DTCType": {
			"DBCondition": "pkw_traktion_ehbasg_sst_gfehb_as_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x30"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x8B"
			]
		}
	},
	"115580289C00": {
		"DTCType": {
			"DBCondition": "pkw_traktion_ehbasg_sst_gfehb_as_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode08",
			"CanDeviceID": "0x079A",
			"CanFilterID": "0x079B",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x8B"
			]
		}
	},
	"115580289D00": {
		"DTCType": {
			"DBCondition": "pkw_traktion_ehbfsg_sst_gfehb_fs_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x34"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580289E00": {
		"FiltEleInfo": {
			"FilterRelatedCmd": [
				"0x2101",
				"0x2115"
			],
			"FilterCount": "2",
			"Filter1": [
				"1",
				"20",
				"2",
				"FxFE%DTR_Vorhanden",
				""
			],
			"Filter2": [
				"2",
				"2",
				"6",
				"FxFE%Funktion_RDVW_als_SA_codiert",
				"",
				"0"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_traktion_sbc121f_sst_GFSBC121_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0784",
			"CanFilterID": "0x0785",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2115",
				"0x2101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580289F00": {
		"DTCType": {
			"DBCondition": "pkw_traktion_sbc3_sst_GFSBC221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0632",
			"CanFilterID": "0x0486",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x2108"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580288000": {
		"FiltEleInfo": {
			"AddFilter": [
			]
		},
		"DTCType": {
			"DBCondition": "pkw_traktion_sbc3e_sst_GFSBC211_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0784",
			"CanFilterID": "0x0785",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2115",
				"0x2101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580288100": {
		"DTCType": {
			"DBCondition": "pkw_motordie_ere_h_sst_GFERE_H_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x08"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x3C00",
				"0x2701",
				"0x3134",
				"0x3128"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"115580288200": {
		"DTCType": {
			"DBCondition": "pkw_federung_ehnr_sst_gfehnr21_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x078C",
			"CanFilterID": "0x078D",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x2103"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"115580294100": {
		"DTCType": {
			"DBCondition": "pkw_bedien_mrm8_sst_GFMRM221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0622",
			"CanFilterID": "0x0484",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xad"
			],
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8A"
			]
		}
	},
	"115580294200": {
		"FiltEleInfo": {
		},
		"DTCType": {
			"DBCondition": "pkw_bedien_mrm2_sst_gfmrm230_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x2D"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303",
				"0x3C00"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580294300": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%Rest der Welt"
		},
		"DTCType": {
			"DBCondition": "pkw_bedien_mrm3_sst_gfmrm211_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06D5",
			"CanFilterID": "0x04F5",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x2D"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8A"
			]
		}
	},
	"115580294400": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_motorott_msm1_h_sst_GFMSM1_h_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x01"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x3C00",
				"0x2701",
				"0x3C00",
				"0x3134",
				"0x3128",
				"0x2211DF01"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580294500": {
		"DTCType": {
			"DBCondition": "pkw_motorott_msm2_sst_gfmsm2_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x01"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x3C00",
				"0x2701"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580294700": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_sonderfz_mss1_h_sst_GFMSS1_H_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x76"
		},
		"Access": {
			"AccessCmd": [
				"0x1083",
				"0x3128",
				"0x3228"
			],
			"ReferCmd": [
				"0x3C01",
				"0x3C00"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0xno"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580294800": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x300101",
			"FilterCount": "3",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"18",
				"29",
				"1",
				"01",
				"FxFE%VollAlarm_Option"
			],
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"18",
				"3D",
				"1",
				"01",
				"FxFE%SOSI"
			],
			"Filter3": [
				"KwdTyp_VCD",
				"1",
				"18",
				"3C",
				"1",
				"01",
				"FxFE%GAS"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_sonderfz_mss1_sst_gfmss203_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0726",
			"CanFilterID": "0x04E6",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x76"
			]
		},
		"Access": {
			"AccessEcuBefore": [
				"0x00",
				"0xb9"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": "0x1a86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"115580294900": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x3128",
			"FilterCount": "10",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"10",
				"38",
				"1",
				"00",
				"ECU1_FxFE_Panik-Alarm Fahrzeug%nein"
			],
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"10",
				"38",
				"1",
				"01",
				"ECU1_FxFE_Panik-Alarm Fahrzeug%ja"
			],
			"Filter3": [
				"KwdTyp_VCD",
				"1",
				"10",
				"3F",
				"1",
				"00",
				"ECU1_FxFE_TAXI+SONDERFAHRZEUG%nein"
			],
			"Filter4": [
				"KwdTyp_VCD",
				"1",
				"10",
				"3F",
				"1",
				"01",
				"ECU1_FxFE_TAXI+SONDERFAHRZEUG%ja"
			],
			"Filter5": [
				"KwdTyp_VCD",
				"1",
				"10",
				"29",
				"1",
				"00",
				"ECU1_FxFE_Unterfunktion Notalarm%nein"
			],
			"Filter6": [
				"KwdTyp_VCD",
				"1",
				"10",
				"29",
				"1",
				"01",
				"ECU1_FxFE_Unterfunktion Notalarm%ja"
			],
			"Filter7": [
				"KwdTyp_VCD",
				"1",
				"10",
				"28",
				"1",
				"00",
				"ECU1_FxFE_Unterfunktion Taxi%nein"
			],
			"Filter8": [
				"KwdTyp_VCD",
				"1",
				"10",
				"28",
				"1",
				"01",
				"ECU1_FxFE_Unterfunktion Taxi%ja"
			],
			"Filter9": [
				"KwdTyp_VCD",
				"1",
				"10",
				"2D",
				"1",
				"00",
				"FxFE%VollAlarm_Option"
			],
			"Filter10": [
				"KwdTyp_VCD",
				"1",
				"10",
				"2A",
				"1",
				"00",
				"FxFE%HILFERUF"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_sonderfz_mss_sst_gfmss220_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x76"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": [
				"0x3C00",
				"0x1083"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"115580294A00": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x300101",
			"FilterCount": "5",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"18",
				"39",
				"1",
				"01",
				"FxFE%PAS"
			],
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"18",
				"3C",
				"1",
				"01",
				"FxFE%GAS"
			],
			"Filter3": [
				"KwdTyp_VCD",
				"1",
				"18",
				"3D",
				"1",
				"01",
				"FxFE%SOSI"
			],
			"Filter4": [
				"KwdTyp_VCD",
				"1",
				"18",
				"38",
				"1",
				"01",
				"FxFE%Businesspaket"
			],
			"Filter5": [
				"KwdTyp_VCD",
				"1",
				"18",
				"3B",
				"1",
				"01",
				"FxFE%3ter_Fondsitz"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_sonderfz_mss2_sst_GFMSS240_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0726",
			"CanFilterID": "0x04e6"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xaf"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2103",
				"0x3b0370"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"115580294B00": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x300101",
			"FilterCount": "1",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"18",
				"29",
				"1",
				"01",
				"FxFE%VollAlarm_Option"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_sonderfz_mss3_sst_GFMSS169_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0726",
			"CanFilterID": "0x04E6"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xa2",
				"0x00",
				"0xb8"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1a86",
				"0x300101",
				"0x300201"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"115580294C00": {
		"DTCType": {
			"DBCondition": "pkw_sonderfz_mss3_sst_GFMSS169_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0726",
			"CanFilterID": "0x04E6"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1a86",
				"0x300101",
				"0x300201"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580294D00": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x300101",
			"FilterCount": "1",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"18",
				"50",
				"2",
				"00",
				"ECU_MPM221_FxFE_Einsatzfahrzeuge Optionen 3: SOSI%keine Funktion"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_sonderfz_mss4_sst_GFMPM221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0683",
			"CanFilterID": "0x04D0",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xad"
			],
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"115580294E00": {
		"DTCType": {
			"DBCondition": "pkw_sonderfz_mss6_sst_GFMPM_20_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0683",
			"CanFilterID": "0x04D0"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580297000": {
		"DTCType": {
			"DBCondition": "pkw_tempomat_nv_sst_GFNV221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x070A",
			"CanFilterID": "0x04A1",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580297100": {
		"DTCType": {
			"DBCondition": "pkw_bedien_obf5_sst_GFOBF171_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06A5",
			"CanFilterID": "0x04E5"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580297200": {
		"FiltEleInfo": {
			"AddFilter": [
				"FxFE%SA_Sitzheizung_vorhanden",
				"ECU_ZGW_FxFE_SA: Scheinwerferreinigungsanlage (C600)%vorhanden",
				"FxFE%SA_Nebelscheinwerfer_vorhanden"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_bedien_obf6_sst_GFOBF164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06A5",
			"CanFilterID": "0x04E5",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x9d",
				"0x01",
				"0xb2"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x210E"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580297300": {
		"DTCType": {
			"DBCondition": "pkw_bedien_obf2_sst_gfobf203_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06A5",
			"CanFilterID": "0x04E5",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x6B"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": "0x1a86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580297400": {
		"DTCType": {
			"DBCondition": "pkw_bedien_obf_sst_gfobf220_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x6B"
			]
		},
		"Access": {
			"AccessEcuBefore": [
				"0x00",
				"0xbf"
			],
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00",
				"0x3128"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580297500": {
		"DTCType": {
			"DBCondition": "pkw_bedien_obf4_sst_gfobf220_m_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x05C0",
			"CanFilterID": "0x07A5",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580297600": {
		"DTCType": {
			"DBCondition": "pkw_bedien_obf8_sst_GFOBF221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06DB",
			"CanFilterID": "0x04DB",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xad"
			],
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x2108"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580297700": {
		"FiltEleInfo": {
		},
		"DTCType": {
			"DBCondition": "pkw_bedien_obf3_sst_gfobf211_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06A5",
			"CanFilterID": "0x04E5"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xa8"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8A"
			]
		}
	},
	"115580297900": {
		"FiltEleInfo": {
			"AddFilter": [
			],
			"FilterRelatedCmd": "0x2102",
			"FilterCount": "5",
			"Filter1": [
				"1",
				"7",
				"4",
				"ECU1_FxFE_Pyro Fuse present%yes",
				""
			],
			"Filter2": [
				"1",
				"7",
				"2",
				"ECU1_FxFE_Curtain Bags left and right present%yes",
				""
			],
			"Filter3": [
				"1",
				"7",
				"1",
				"ECU1_FxFE_Rear Sidebags left and right present%yes",
				""
			],
			"Filter4": [
				"1",
				"6",
				"128",
				"ECU1_FxFE_Driver Knee Bag present%yes",
				""
			],
			"Filter5": [
				"1",
				"6",
				"16",
				"ECU1_FxFE_Rear Door pSats present%yes",
				""
			]
		},
		"DTCType": {
			"DBCondition": "pkw_srs_orc_sst_GFORC_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x064A",
			"CanFilterID": "0x0489"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9B",
				"0x1A9D",
				"0x2102",
				"0x2158"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"115580297A00": {
		"DTCType": {
			"DBCondition": "pkw_sitze_pfds_sst_gfpfds21_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x072E",
			"CanFilterID": "0x04EE"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580297B00": {
		"DTCType": {
			"DBCondition": "pkw_sitze_pfds_sst_GFPFDS21_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06Da",
			"CanFilterID": "0x07aa"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580297C00": {
		"DTCType": {
			"DBCondition": "pkw_sitze_pfds2_sst_GFPFDS2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x065B",
			"CanFilterID": "0x04CB",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x2101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580297D00": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_traktion_pl2_h_sst_GFPL2_H_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x29"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580297E00": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_pneumat_pse1_h_sst_GFPSE1_H_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x5B"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3128"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3C03",
				"0x3C04"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580297F00": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x3C04",
			"FilterCount": "1",
			"Filter1": [
				"1",
				"2",
				"4",
				"ECU1_FxFE_Fahrzeug mit HFS%ja",
				""
			]
		},
		"DTCType": {
			"DBCondition": "pkw_pneumat_pse_sst_gfpse220_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x5B"
			]
		},
		"Access": {
			"AccessEcuBefore": [
				"0x00",
				"0xbf",
				"0x00",
				"0xc4",
				"0x00",
				"0xc6"
			],
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3C05",
				"0x3C04",
				"0x3C03"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580296000": {
		"DTCType": {
			"DBCondition": "pkw_pneumat_pse_sst_gfpse230_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x5B"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": "0x3C00.3C03"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580296100": {
		"DTCType": {
			"DBCondition": "pkw_pneumat_pse2_sst_gfpse240_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0552",
			"CanFilterID": "0x04C2",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2103"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580296200": {
		"DTCType": {
			"DBCondition": "pkw_pneumat_psz_h_sst_gfpsz_h_sgs"
		},
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"NetInfo": {
			"PtclType": "KWPS",
			"IOBaudRate": "9600",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x5B"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x01",
				"0xc8"
			],
			"AccessAddrCode": "7E",
			"AccessCmd": "0x8300",
			"ReferCmd": [
				"0x3C00",
				"0x3128"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580296300": {
		"DTCType": {
			"DBCondition": "pkw_parken_pts7_sst_gfpts221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x069B",
			"CanFilterID": "0x04D3",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x2129"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580296400": {
		"DTCType": {
			"DBCondition": "pkw_parken_pts9_sst_GFPTS_204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x069B",
			"CanFilterID": "0x04D3"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580296500": {
		"DTCType": {
			"DBCondition": "pkw_parken_pts10_sst_gfpts230m_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode03",
			"CanDeviceID": "0x0543",
			"CanFilterID": "0x079F",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9C",
				"0x2132",
				"0x2129",
				"0x2134"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84"
			]
		}
	},
	"115580296600": {
		"DTCType": {
			"DBCondition": "pkw_parken_pts12_sst_GFPTS_212_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x078A",
			"CanFilterID": "0x04B1",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580296700": {
		"DTCType": {
			"DBCondition": "pkw_parken_pts1_sst_gfpts163_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x74"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580296800": {
		"DTCType": {
			"DBCondition": "pkw_parken_pts2_sst_gfpts203_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0733",
			"CanFilterID": "0x04F3",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x74"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580296900": {
		"DTCType": {
			"DBCondition": "pkw_parken_pts_sst_gfpts220_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x74"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580296A00": {
		"DTCType": {
			"DBCondition": "pkw_parken_pts3_sst_gfpts230_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x74"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3C01"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580296B00": {
		"FiltEleInfo": {
			"AddFilter": [
			]
		},
		"DTCType": {
			"DBCondition": "pkw_parken_pts4_sst_gfpts211_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0733",
			"CanFilterID": "0x04F3",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580296C00": {
		"DTCType": {
			"DBCondition": "pkw_parken_pts5_sst_gfpts169_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0733",
			"CanFilterID": "0x04F3"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580296D00": {
		"DTCType": {
			"DBCondition": "pkw_parken_pts6_sst_gfpts164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0733",
			"CanFilterID": "0x04F3"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580296E00": {
		"DTCType": {
			"DBCondition": "pkw_parken_pts8_sst_gfpts211m_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0733",
			"CanFilterID": "0x04F3",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580296F00": {
		"DTCType": {
			"DBCondition": "pkw_traktion_rdk_sst_gfrdk210_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x39"
		},
		"Access": {
			"AccessCmd": "0x81",
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8A",
				"0x89"
			]
		}
	},
	"115580299000": {
		"DTCType": {
			"DBCondition": "pkw_traktion_rdk_sst_gfrdk210_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x39"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": [
				"0x3C00",
				"0x2A0103"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580299100": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2103",
			"FilterCount": "2",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"10",
				"4",
				"1",
				"00",
				"ECU1_FxFE_Anzahl ueberwachte Raeder%4 Raeder"
			],
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"10",
				"4",
				"1",
				"01",
				"ECU1_FxFE_Anzahl ueberwachte Raeder%5 Raeder (nur fuer Entwicklung zulaessig)"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_traktion_rdk3_sst_gfrdk211_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06B8",
			"CanFilterID": "0x04F8"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2103",
				"0x2111",
				"0x2105"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580299200": {
		"DTCType": {
			"DBCondition": "pkw_tempomat_rdu_sst_GFRDU221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x063A",
			"CanFilterID": "0x0487"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x1802FF00"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580299B00": {
		"DTCType": {
			"DBCondition": "pkw_tempomat_rdu1_sst_GFRDU240_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x078E",
			"CanFilterID": "0x078F"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580299C00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_RDU_212_x_sst_sgs_gf_RDU_212_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_RDU_212_X_SG_Einstieg_RDU_212_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_RDU_212_X_CV_RDU_212_X_XML"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x063A",
			"CanFilterID": "0x0487",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580299D00": {
		"DTCType": {
			"DBCondition": "pkw_srs_revgsvl_sst_gfrevgsvl_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07B2",
			"CanFilterID": "0x07B3",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x2701"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580299E00": {
		"DTCType": {
			"DBCondition": "pkw_srs_revgsvr_sst_gfrevgsvr_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07B4",
			"CanFilterID": "0x07B5",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x2701"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580299F00": {
		"DTCType": {
			"DBCondition": "pkw_srs_revgsvl2_sst_gfrevgsvl2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07B2",
			"CanFilterID": "0x07B3"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x2701",
				"0x2132",
				"0x2131",
				"0x2130",
				"0x2133"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580298000": {
		"DTCType": {
			"DBCondition": "pkw_srs_revgsvl3_sst_gfrevgsvl3_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07B2",
			"CanFilterID": "0x07B3",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2132",
				"0x2133",
				"0x2130",
				"0x2131",
				"0x2701"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8A"
			]
		}
	},
	"115580298100": {
		"DTCType": {
			"DBCondition": "pkw_srs_revgsvl4_sst_GFRevGsVl4_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06BA",
			"CanFilterID": "0x0497",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x2701",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2132",
				"0x2130",
				"0x2131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580298200": {
		"DTCType": {
			"DBCondition": "pkw_srs_rbtmfl_204_sst_GFrbtmfl_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06BA",
			"CanFilterID": "0x0497",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580298300": {
		"DTCType": {
			"DBCondition": "pkw_srs_revgsvr2_sst_gfrevgsvr2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07B4",
			"CanFilterID": "0x07B5"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x2701",
				"0x2132",
				"0x2131",
				"0x2130",
				"0x2133"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580298400": {
		"DTCType": {
			"DBCondition": "pkw_srs_revgsvr3_sst_gfrevgsvr3_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07B4",
			"CanFilterID": "0x07B5",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2132",
				"0x2133",
				"0x2130",
				"0x2131",
				"0x2701"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580298500": {
		"DTCType": {
			"DBCondition": "pkw_srs_revgsvr4_sst_GFRevGsVr4_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06C2",
			"CanFilterID": "0x0498",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x2701",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2132",
				"0x2130",
				"0x2131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580298600": {
		"DTCType": {
			"DBCondition": "pkw_srs_rbtmfr_204_sst_GFrbtmfr_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06C2",
			"CanFilterID": "0x0498"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580298700": {
		"DTCType": {
			"DBCondition": "pkw_traktion_rbs1_sst_gfrbs_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0784",
			"CanFilterID": "0x0785",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x2119"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"115580298800": {
		"DTCType": {
			"DBCondition": "pkw_traktion_rbs1_sst_gfrbs_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0632",
			"CanFilterID": "0x0486",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x2119"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"115580298900": {
		"DTCType": {
			"DBCondition": "pkw_motor_rsg_sst_gfrsg_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x07E2",
			"CanFilterID": "0x07EA",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580298B00": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_rwt_sst_gfrwt211_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0560",
			"CanFilterID": "0x04C0"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xa8",
				"0x01",
				"0xc2"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x3B263C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580298C00": {
		"FiltEleInfo": {
			"AddFilter": "LIC_Entwicklungsdaten%YES"
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_arwt_sst_GFARWT21_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0577",
			"CanFilterID": "0x04F7",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580298D00": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_hks1_sst_GFhks10_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0693",
			"CanFilterID": "0x04D2"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580298E00": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_kds1_sst_GFKDS10_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0693",
			"CanFilterID": "0x04D2",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580298F00": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_hks2_sst_GFHKS2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0577",
			"CanFilterID": "0x04F7"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029B000": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_grundmod_sam1_h_sst_GFSAM1_H_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x2A"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3128"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"11558029B100": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_samr_sst_gfsamb22_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x2B"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029B200": {
		"DTCType": {
			"DBCondition": "Pkw_Grundmod_samb4_sst_GFSamb4_G2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0661",
			"CanFilterID": "0x04e1"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xaf"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029B300": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_saml_sst_gfsamf22_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x2A"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3C0D",
				"0x3C15"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029B400": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_samf2_sst_gfsamf23_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x2A"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3C15",
				"0x3C12",
				"0x3C13",
				"0x3C14",
				"0x3C16",
				"0x3C19",
				"0x3C20",
				"0x3C21",
				"0x3C22",
				"0x3C23"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029B500": {
		"DTCType": {
			"DBCondition": "Pkw_Grundmod_samf4_sst/GFSAMF4_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0662",
			"CanFilterID": "0x04e2"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xaf"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029B600": {
		"FiltEleInfo": {
			"FilterRelatedCmd": [
				"0x220304",
				"0x220320",
				"0x22030D",
				"0x220308"
			],
			"FilterCount": "5",
			"Filter1": [
				"1",
				"10",
				"2",
				"FxFE%DBE_unvernetzt vorhanden",
				"FxFE%DBE_unvernetzt nicht vorhanden"
			],
			"Filter2": [
				"1",
				"11",
				"1",
				"FxFE%Fu???raumbeleuchtung vorhanden",
				""
			],
			"Filter3": [
				"2",
				"6",
				"1",
				"FxFE%ZV_hinten vorhanden",
				""
			],
			"Filter4": [
				"3",
				"3",
				"1",
				"FxFE%Zusatzwasserpumpe vorhanden",
				""
			],
			"Filter5": [
				"4",
				"3",
				"2",
				"FxFE%WW_Schlauchheizung vorhanden",
				""
			]
		},
		"DTCType": {
			"DBCondition": "pkw_grundmod_SAMF204gesamt_SAMF204_sst_FC_SAMF204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06F3",
			"CanFilterID": "0x04DE",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029B700": {
		"FiltEleInfo": {
			"AddFilter": "ECU_ZGW_FxFE_SA: Diebstahlwarnanlage (C551)%vorhanden"
		},
		"DTCType": {
			"DBCondition": "pkw_grundmod_samh6_sst_GFSAMH17_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0563",
			"CanFilterID": "0x04E3"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2121",
				"0x2122",
				"0x2123",
				"0x2124"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029B800": {
		"FiltEleInfo": {
			"FilterRelatedCmd": [
				"0x212d",
				"0x2139",
				"0x212B"
			],
			"FilterCount": "7",
			"Filter1": [
				"1",
				"8",
				"1",
				"FxFE%Lichtpaket vorhanden",
				"",
				"9"
			],
			"Filter2": [
				"2",
				"6",
				"1",
				"ECU1_FxFE_Ausstellfenster vorhanden%ja",
				""
			],
			"Filter3": [
				"2",
				"6",
				"1",
				"ECU_SAMH7_FxFE_Ausstellfenster vorhanden%ja",
				""
			],
			"Filter4": [
				"1",
				"8",
				"1",
				"FxFE%Premiumlicht vorhanden",
				"",
				"9"
			],
			"Filter5": [
				"3",
				"2",
				"0",
				"ECU1_FxFE_Ersatzradhalter%nicht vorhanden",
				"",
				"9"
			],
			"Filter6": [
				"KwdTyp_VCD",
				"2",
				"10",
				"1F",
				"1",
				"01",
				"ECU_SAMH7_FxFE_Ersatzradhalter vorhanden%ja"
			],
			"Filter7": [
				"KwdTyp_VCD",
				"3",
				"10",
				"0",
				"1",
				"01",
				"ECU_SAMH7_FxFE_Ersatzradhalter%vorhanden"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_grundmod_samh7_sst_FCSAMH164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0563",
			"CanFilterID": "0x04E3",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x9d"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x2139",
				"0x212B",
				"0x2129",
				"0x2121",
				"0x2122",
				"0x2123",
				"0x2111"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029B900": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_samh_sst_gfsamh22_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x2C"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3C08",
				"0x3C09",
				"0x3C06"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029BA00": {
		"FiltEleInfo": [
			{
				"AddFilter": [
					"FxFE%Heckrollo",
					"ECU_ZGW_FxFE_889 Keyless Go (SA)%vorhanden"
				]
			},
			{
				"FilterRelatedCmd": "0x212A",
				"FilterCount": "2",
				"Filter1": [
					"KwdTyp_VCD",
					"1",
					"10",
					"10",
					"8",
					"01",
					"ECU_SAMH221_FxFE_Gurtschlosskontakte%aktiv"
				],
				"Filter2": [
					"KwdTyp_VCD",
					"1",
					"10",
					"8",
					"8",
					"01",
					"ECU_SAMH221_FxFE_Ansteuerung Kopfst???tzenabklappfunktion Lastzweig%aktiv"
				]
			}
		],
		"DTCType": {
			"DBCondition": "pkw_grundmod_samh221_sst_FCSAMH221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06FB",
			"CanFilterID": "0x04DF",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xad"
			],
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x2110",
				"0x21A5",
				"0x2126",
				"0x2129",
				"0x2123",
				"0x2132",
				"0x2150",
				"0x212D",
				"0x212A"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029BB00": {
		"FiltEleInfo": {
			"AddFilter": "ECU1_FxFE_Parameter SAM H - Tankgeber%mapps-Tankgeber ist initialisiert"
		},
		"DTCType": {
			"DBCondition": "pkw_grundmod_samh2_sst_gfsamh20_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0563",
			"CanFilterID": "0x04E3",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x2C"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2129",
				"0x2128",
				"0x2137",
				"0x2123",
				"0x2126",
				"0x211A"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029BC00": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%Variante_W",
			"FilterRelatedCmd": [
				"0x220522",
				"0x220510"
			],
			"FilterCount": "15",
			"Filter1": [
				"1",
				"3",
				"3",
				"FxFE%FC Heckscheibenheizung freigegeben",
				"",
				"3"
			],
			"Filter2": [
				"1",
				"3",
				"252",
				"FxFE%FC Sitzheizung vorn freigegeben",
				"",
				"3"
			],
			"Filter3": [
				"1",
				"5",
				"2",
				"ECU_SAMH204_FxFE_FLT_SIDEMARKER_A_RE_OL%freigegeben",
				""
			],
			"Filter4": [
				"1",
				"12",
				"18",
				"FxFE%FC Sitzlehnenneigung hinten freigegeben",
				"",
				"3"
			],
			"Filter5": [
				"1",
				"12",
				"108",
				"FxFE%FC Sitzlehnenverriegelung hinten freigegeben",
				"",
				"3"
			],
			"Filter6": [
				"1",
				"13",
				"3",
				"FxFE%FC Heckrollo freigegeben",
				"",
				"3"
			],
			"Filter7": [
				"1",
				"13",
				"60",
				"FxFE%FC Relais Sitzeinstellung freigegeben",
				"",
				"3"
			],
			"Filter8": [
				"1",
				"18",
				"1",
				"FxFE%FC Heckwischer freigegeben",
				""
			],
			"Filter9": [
				"1",
				"12",
				"128",
				"FxFE%FC Lordose freigegeben",
				""
			],
			"Filter10": [
				"1",
				"12",
				"1",
				"FxFE%FC Kopfst???tzentriegelung hinten freigegeben",
				""
			],
			"Filter11": [
				"2",
				"7",
				"2",
				"ECU_SAMH204_FxFE_GSS_MI_FKT%freigegeben",
				""
			],
			"Filter12": [
				"2",
				"7",
				"4",
				"ECU_SAMH204_FxFE_GSS_RE_FKT%freigegeben",
				""
			],
			"Filter13": [
				"2",
				"7",
				"1",
				"ECU_SAMH204_FxFE_GSS_LI_FKT%freigegeben",
				""
			],
			"Filter14": [
				"1",
				"10",
				"1",
				"ECU_SAMH204_FxFE_FLT_SPERRKL_SWITCH_FUNC_ERROR%freigegeben",
				""
			],
			"Filter15": [
				"1",
				"21",
				"32",
				"ECU_SAMH204_FxFE_FLT_TIMEOUT_PTCM%freigegeben",
				""
			]
		},
		"DTCType": {
			"DBCondition": "pkw_grundmod_SAMH204gesamt_SAMH204_sst_GFSAMR_204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06FB",
			"CanFilterID": "0x04DF"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x9f"
			],
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558028C400": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_fahrber_ffz_h_sst_GFFFZ_H_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x58"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3128",
				"0x322800",
				"0x315B04",
				"0x315B00",
				"0x315A0406",
				"0x325A00",
				"0x3162",
				"0x326200",
				"0x3134",
				"0x323400"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"11558028C500": {
		"DTCType": {
			"DBCondition": "pkw_getriebe_fgs_sst_gf01fag_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x20"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"11558028C600": {
		"DTCType": {
			"DBCondition": "pkw_getriebe_fgs2_sst_gfvgs2fa_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x20"
		},
		"Access": {
			"AccessCmd": "0x81",
			"ReferCmd": [
				"0x1A86",
				"0x300101"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"11558028C700": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%FUN_GETRIEBE"
		},
		"DTCType": {
			"DBCondition": "pkw_getriebe_egs2_sst_gfegs2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode01",
			"CanDeviceID": "0x07E1",
			"CanFilterID": "0x07E9",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9C",
				"0x21B1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x89",
				"0x8B"
			]
		}
	},
	"11558028C800": {
		"FiltEleInfo": {
			"AddFilter": [
			]
		},
		"DTCType": {
			"DBCondition": "pkw_getriebe_fcvt_sst_GFFCVT_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode07",
			"CanDeviceID": "0x07E1",
			"CanFilterID": "0x07e9",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1a87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x21B1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x8B"
			]
		}
	},
	"11558028C900": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_fhsg_sst_gffhsg16_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x6B"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558028CA00": {
		"DTCType": {
			"DBCondition": "pkw_klima_fkla_sst_gffkla24_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0790",
			"CanFilterID": "0x04F2"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xaf"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x300101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558028CB00": {
		"DTCType": {
			"DBCondition": "pkw_klima_fra_sst_gffra220_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x5D"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558028CC00": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_fsg_sst_gffsg215_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x47"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3C01"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"11558028CD00": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_fsg2_sst_GFFSG216_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0723",
			"CanFilterID": "0x04E4"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x300814"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"11558028CE00": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_fsg1_sst_gffsg209_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0749",
			"CanFilterID": "0x00FD",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x72"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2101",
				"0x2121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"11558028CF00": {
		"DTCType": {
			"DBCondition": "pkw_getriebe_gem_sst_gfewm_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x24"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558028F000": {
		"DTCType": {
			"DBCondition": "pkw_getriebe_haq_sst_GFHAQ164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07BA",
			"CanFilterID": "0x07BB",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0xno"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558028F100": {
		"DTCType": {
			"DBCondition": "pkw_bedien_hbf_sst_gfhbf240_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06BD",
			"CanFilterID": "0x04FD"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xaf"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558028F200": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%SA_Sitzheizung_vorhanden"
		},
		"DTCType": {
			"DBCondition": "pkw_bedien_hbf1_sst_GFHBF164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06BD",
			"CanFilterID": "0x04FD"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x9d"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558028F400": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_motorott_hfm_h_sst_gfhfm2_h_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x01"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x3C00",
				"0x2701",
				"0x22116501",
				"0x2300",
				"0x22116301",
				"0x2300"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"11558028F500": {
		"FiltEleInfo": {
			"AddFilter": [
			],
			"FilterRelatedCmd": "0x300101",
			"FilterCount": "2",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"18",
				"4",
				"1",
				"00",
				"ECU_HDS_FxFE_Zwischenstellung aktivierbar%???ber Kombiinstrument"
			],
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"18",
				"4",
				"1",
				"01",
				"ECU_HDS_FxFE_Zwischenstellung aktivierbar%???ber Bedienschalter"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_hds_sst_gfhds211_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0577",
			"CanFilterID": "0x04F7",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x26"
			]
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xa8"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2103",
				"0x300101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558028F700": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_hds_sst_gfhds211_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0577",
			"CanFilterID": "0x04F7"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2103",
				"0x300101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558028F800": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_hds1_sst_GFHFS164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0577",
			"CanFilterID": "0x04F7"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558028F900": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_hds2_sst_GFHFS221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0693",
			"CanFilterID": "0x04D2",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x2106",
				"0x2109",
				"0x210A"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558028FA00": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%HLM_LINKS",
			"FilterRelatedCmd": "0x2177",
			"FilterCount": "1",
			"Filter1": [
				"1",
				"5",
				"8",
				"",
				"ECU1_FxFE_Niveausensoren%verbaut"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_beleucht_hlmlt_204_sst_gf_HLMxT_204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x076A",
			"CanFilterID": "0x04AD",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x2177"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558028FB00": {
		"DTCType": {
			"DBCondition": "pkw_beleucht_hlmlt_x204_sst_GFHLMLT_X204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x076A",
			"CanFilterID": "0x04AD"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"11558028FC00": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%HLM_RECHTS"
		},
		"DTCType": {
			"DBCondition": "pkw_beleucht_hlmrt_204_sst_gf_HLMxT_204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0772",
			"CanFilterID": "0x04AE"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x2177"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"11558028FD00": {
		"DTCType": {
			"DBCondition": "Pkw_beleucht_hlmrt_x204_sst_GFHLMRT_X204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0772",
			"CanFilterID": "0x04AE"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"11558028FE00": {
		"DTCType": {
			"DBCondition": "pkw_motor_hsg1_sst_GFHCP_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E2",
			"CanFilterID": "0x07EA",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558028FF00": {
		"DTCType": {
			"DBCondition": "pkw_klima_kla10_sst_GFHVAC_204_sgs"
		},
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x22FD13",
			"FilterCount": "1",
			"Filter1": [
				"1",
				"10",
				"1",
				"ECU1_FxFE_IF_DBE_CAN%ja",
				"ECU1_FxFE_IF_DBE_CAN%nein"
			]
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06A3",
			"CanFilterID": "0x04D4",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131",
				"0x22FD13"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558028E000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hvac_212_x_sst_sgs_gf_hvac_212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06A3",
			"CanFilterID": "0x04D4",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"AccessEcuBefore": [
				"0xf0",
				"0x02"
			],
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558028E100": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_hvdcdc221_menues_MNHVDCDC221_s"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06D2",
			"CanFilterID": "0x049A",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"11558028E300": {
		"DTCType": {
			"DBCondition": "pkw_tele_ics_h_sst_GFICS_H_SGS"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x62"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x3128",
				"0x322800"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"11558028E500": {
		"DTCType": {
			"DBCondition": "pkw_kombi_ki11_sst_GFIC_204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060A",
			"CanFilterID": "0x0481",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x87",
				"0x89"
			]
		}
	},
	"11558028E600": {
		"DTCType": {
			"DBCondition": "461g_kombi_ki_sst_afsprin_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x69"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3C0A",
				"0x3128",
				"0x31232E",
				"0x312334",
				"0x312336",
				"0x312332",
				"0x312330",
				"0x31232A"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558028E700": {
		"DTCType": {
			"DBCondition": "pkw_kombi_ki8_sst_GFKI164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x05B4",
			"CanFilterID": "0x04F4"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558028E800": {
		"DTCType": {
			"DBCondition": "pkw_kombi_ki71_sst_GFKI169_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x05B4",
			"CanFilterID": "0x04F4"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1a86",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8C",
				"0x89"
			]
		}
	},
	"11558028E900": {
		"FiltEleInfo": {
			"AddFilter": [
			]
		},
		"DTCType": {
			"DBCondition": "pkw_kombi_ki61_sst_gfki171_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x05B4",
			"CanFilterID": "0x04F4"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558028EA00": {
		"DTCType": {
			"DBCondition": "pkw_kombi_ki10_sst_GFKI221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060A",
			"CanFilterID": "0x0481",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x213D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558028EB00": {
		"DTCType": {
			"DBCondition": "pkw_d2b_mcs_sst_gfmcs001_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0xD0"
		},
		"Access": {
			"AccessCmd": [
				"0xc17bf381b0",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1a86",
				"0x2101",
				"0x2103",
				"0x2104",
				"0x210b",
				"0x210a",
				"0x300101",
				"0x211a"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0xC17BF382B1"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558028ED00": {
		"DTCType": {
			"DBCondition": "PKW_D2B_mcs_sst_GFNAV001_SGS"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0xD0",
				"0x63"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17bf381b0",
				"0x8300",
				"0x8303",
				"0x1a86",
				"0x2101"
			],
			"ReferCmd": "0x1a86"
		},
		"LinkInfo": {
			"LinkCmd": "0x81d0f33e82"
		},
		"QuitInfo": {
			"QuitCmd": "0xC17BF382B1"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580291100": {
		"DTCType": {
			"DBCondition": "pkw_fahrber_kg_sst_gfkeygo2_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x58"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580291200": {
		"DTCType": {
			"DBCondition": "pkw_fahrber_kg2_sst_GFKG164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06A4",
			"CanFilterID": "0x04C2",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A87",
				"0x2109",
				"0x210A"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580291300": {
		"DTCType": {
			"DBCondition": "pkw_fahrber_kg3_sst_GFKG221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x068B",
			"CanFilterID": "0x04D1",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580291400": {
		"DTCType": {
			"DBCondition": "pkw_fahrber_kg4_sst_GFKG230_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x05C1",
			"CanFilterID": "0x07AB"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580291500": {
		"DTCType": {
			"DBCondition": "pkw_fahrber_kg5_sst_GFKG204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x068B",
			"CanFilterID": "0x04D1"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580291600": {
		"FiltEleInfo": {
			"AddFilter": [
			]
		},
		"DTCType": {
			"DBCondition": "pkw_kombi_kiw2_sst_gfki203_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x05B4",
			"CanFilterID": "0x04F4",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x69"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x300101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x87",
				"0x89"
			]
		}
	},
	"115580291700": {
		"DTCType": {
			"DBCondition": "pkw_kombi_kiw2m_sst_gfki203m_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x05B4",
			"CanFilterID": "0x04F4",
			"FlowDataCtrl": "0x60300832"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2132",
				"0x2131",
				"0x2115",
				"0x2124",
				"0x2125",
				"0x2126",
				"0x21F0"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x87",
				"0x89"
			]
		}
	},
	"115580291800": {
		"DTCType": {
			"DBCondition": "pkw_kombi_kiw5_sst_gfki209_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x05B4",
			"CanFilterID": "0x04F4",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x69"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x87",
				"0x85",
				"0x86"
			]
		}
	},
	"115580291900": {
		"DTCType": {
			"DBCondition": "pkw_kombi_kiw_sst_gfki220_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x69"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3128"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x87",
				"0x89"
			]
		}
	},
	"115580291A00": {
		"FiltEleInfo": {
			"AddFilter": [
			]
		},
		"DTCType": {
			"DBCondition": "pkw_kombi_kiw_sst_gfki220_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x69"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x300101"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x87",
				"0x89"
			]
		}
	},
	"115580291B00": {
		"DTCType": {
			"DBCondition": "pkw_kombi_kiw3_sst_gfki230_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0720",
			"CanFilterID": "0x07A4",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x69"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x87"
			]
		}
	},
	"115580291C00": {
		"DTCType": {
			"DBCondition": "pkw_kombi_kiw3_sst_gfki230_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0720",
			"CanFilterID": "0x07A4"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x87"
			]
		}
	},
	"115580291D00": {
		"DTCType": {
			"DBCondition": "pkw_kombi_kiw3_sst_gfki230_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x69"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x87"
			]
		}
	},
	"115580291E00": {
		"DTCType": {
			"DBCondition": "pkw_kombi_kiwm_sst_gfki240_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x05B4",
			"CanFilterID": "0x04F4"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8C",
				"0x8B"
			]
		}
	},
	"115580291F00": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x300101",
			"FilterCount": "2",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"18",
				"0",
				"1",
				"00",
				"ECU1_FxFE_Schlselabhgigkeit%aus"
			],
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"18",
				"0",
				"1",
				"01",
				"ECU1_FxFE_Schlselabhgigkeit%ein"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_kombi_ki4_sst_gfki211_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x05B4",
			"CanFilterID": "0x04F4",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580290000": {
		"DTCType": {
			"DBCondition": "pkw_kombi_kil_sst_gfkil_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x69"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x300101",
				"0x2126",
				"0x212C"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x87"
			]
		}
	},
	"115580290100": {
		"DTCType": {
			"DBCondition": "pkw_kombi_kiw_h_sst_GFKIW_H_sgs"
		},
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x69"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x3C00",
				"0x312800"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x86",
				"0x87"
			]
		}
	},
	"115580290200": {
		"DTCType": {
			"DBCondition": "pkw_klima_kla_h_sst_GFKLA_H_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode83",
			"DeviceID": "0xF3",
			"FilterID": "0x50"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"115580290300": {
		"DTCType": {
			"DBCondition": "pkw_klima_kla4_sst_gfkla163_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x50"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580290400": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x210F",
			"FilterCount": "10",
			"Filter1": [
				"1",
				"7",
				"1",
				"ECU1_FxFE_Booster Adapter (Kein Boostergebl???se)%aktiv",
				"ECU1_FxFE_Booster Adapter (Kein Boostergebl???se)%nicht aktiv"
			],
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"10",
				"40",
				"3",
				"00",
				"ECU_KLA8_FxFE_Fahrzeugtyp%W164 Basis"
			],
			"Filter3": [
				"KwdTyp_VCD",
				"1",
				"10",
				"40",
				"3",
				"01",
				"ECU_KLA8_FxFE_Fahrzeugtyp%W164 Premium"
			],
			"Filter4": [
				"KwdTyp_VCD",
				"1",
				"10",
				"40",
				"3",
				"02",
				"ECU_KLA8_FxFE_Fahrzeugtyp%X164 Basis"
			],
			"Filter5": [
				"KwdTyp_VCD",
				"1",
				"10",
				"40",
				"3",
				"03",
				"ECU_KLA8_FxFE_Fahrzeugtyp%X164 Premium"
			],
			"Filter6": [
				"KwdTyp_VCD",
				"1",
				"10",
				"40",
				"3",
				"04",
				"ECU_KLA8_FxFE_Fahrzeugtyp%X164 Premium+Heck"
			],
			"Filter7": [
				"KwdTyp_VCD",
				"1",
				"10",
				"40",
				"3",
				"05",
				"ECU_KLA8_FxFE_Fahrzeugtyp%W251 Basis"
			],
			"Filter8": [
				"KwdTyp_VCD",
				"1",
				"10",
				"40",
				"3",
				"06",
				"ECU_KLA8_FxFE_Fahrzeugtyp%W251 Premium"
			],
			"Filter9": [
				"KwdTyp_VCD",
				"1",
				"10",
				"40",
				"3",
				"07",
				"ECU_KLA8_FxFE_Fahrzeugtyp%W251 Premium+Heck"
			],
			"Filter10": [
				"KwdTyp_VCD",
				"1",
				"10",
				"6",
				"1",
				"01",
				"ECU1_FxFE_Klappe f???r Absenkung Mitteld???se (LIN Motor)%nicht vorhanden"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_klima_kla8_sst_GFKLA164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0791",
			"CanFilterID": "0x04F1"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x210F",
				"0x210e"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580290500": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2100",
			"FilterCount": "1",
			"Filter1": [
				"1",
				"7",
				"16",
				"ECU1_FxFE_PTC verbaut%ja",
				""
			]
		},
		"DTCType": {
			"DBCondition": "pkw_klima_kla7_sst_GFKLA169_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0791",
			"CanFilterID": "0x04F1"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2100"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580290700": {
		"DTCType": {
			"DBCondition": "pkw_klima_kla6_sst_GFKLA171_sgs"
		},
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2100",
			"FilterCount": "1",
			"Filter1": [
				"1",
				"8",
				"128",
				"",
				"ECU1_FxFE_Taupunktsensor verbaut%ja"
			]
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0791",
			"CanFilterID": "0x04F1"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580290800": {
		"FiltEleInfo": {
		},
		"DTCType": {
			"DBCondition": "pkw_klima_hkl_sst_gfhkl203_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0791",
			"CanFilterID": "0x04F1",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x50"
			]
		},
		"Access": {
			"AccessEcuBefore": [
				"0x00",
				"0xba"
			],
			"AccessEcu203Before": [
				"0x00",
				"0xb9"
			],
			"AccessEcu209Before": [
				"0x00",
				"0xba"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2132"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580290900": {
		"FiltEleInfo": {
			"AddFilter": "ECU_ZGW_FxFE_Jahresangabe%2004"
		},
		"DTCType": {
			"DBCondition": "pkw_klima_kla3_sst_gfkla211_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode08",
			"CanDeviceID": "0x0791",
			"CanFilterID": "0x04F1",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x300101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89",
				"0x8B"
			]
		}
	},
	"115580290A00": {
		"FiltEleInfo": {
			"AddFilter": [
			]
		},
		"DTCType": {
			"DBCondition": "pkw_klima_kla220_sst_gfkla220_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x50"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89",
				"0x8B"
			]
		}
	},
	"115580290B00": {
		"DTCType": {
			"DBCondition": "pkw_klima_kla9_sst_GFKLA221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06A3",
			"CanFilterID": "0x04D4",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x210F"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580290C00": {
		"DTCType": {
			"DBCondition": "pkw_klima_kla2_sst_gfkla230_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x50"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580290D00": {
		"DTCType": {
			"DBCondition": "pkw_klima_kla5_sst_gfkla240_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0791",
			"CanFilterID": "0x04F1"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x300101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"115580290E00": {
		"DTCType": {
			"DBCondition": "pkw_klima_tau168_sst_gfkla414_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode82",
			"DeviceID": "0xF3",
			"FilterID": "0x50"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": [
				"0x25",
				"0x82"
			]
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580290F00": {
		"DTCType": {
			"DBCondition": "pkw_getriebe_asg_sst_gfasg_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x20"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x300101"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8A",
				"0x89"
			]
		}
	},
	"115580293000": {
		"DTCType": {
			"DBCondition": "pkw_klima_lrk_sst_gflrk_21_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x4B"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3C01"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580293100": {
		"DTCType": {
			"DBCondition": "pkw_klima_lrk2_sst_gflrk_21_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06AF",
			"CanFilterID": "0x04EF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x4B"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8A",
				"0x89"
			]
		}
	},
	"115580293200": {
		"DTCType": {
			"DBCondition": "pkw_federung_lf_sst_gflufe22_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x3B"
		},
		"Access": {
			"AccessCmd": "0x81",
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"115580293300": {
		"DTCType": {
			"DBCondition": "pkw_federung_lf2_sst_GFLF164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x078C",
			"CanFilterID": "0x078D",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x2108"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"115580293400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_SPC_204_sst_sgs_gf_SPC_204_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0692",
			"CanFilterID": "0x0492",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"115580293500": {
		"FiltEleInfo": {
			"AddFilter": [
			]
		},
		"DTCType": {
			"DBCondition": "pkw_federung_lf3_sst_GFLF221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0692",
			"CanFilterID": "0x0492",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x210C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"115580293600": {
		"DTCType": {
			"DBCondition": "pkw_federung_slf_sst_gfslf211_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x078C",
			"CanFilterID": "0x078D",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x2108"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"115580293700": {
		"DTCType": {
			"DBCondition": "pkw_beleucht_lwr1_h_sst_gflwr1_h_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x75"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x3C00",
				"0x2A0101"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"115580293800": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_beleucht_lwr2_h_sst_gflwr2_h_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x75"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2103",
				"0x2101",
				"0x1A9B"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580293900": {
		"DTCType": {
			"DBCondition": "pkw_beleucht_lwr2_sst_gflwr163_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x75"
		},
		"Access": {
			"AccessCmd": "0x81",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580293A00": {
		"DTCType": {
			"DBCondition": "pkw_beleucht_lwr1_sst_gflwr170_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x75"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580293B00": {
		"DTCType": {
			"DBCondition": "pkw_beleucht_lwr_sst_gflwr220_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode85",
			"DeviceID": "0xF3",
			"FilterID": "0x75"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580293C00": {
		"DTCType": {
			"DBCondition": "pkw_beleucht_lwr_sst_gflwr220_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x6E"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580292100": {
		"DTCType": {
			"DBCondition": "pkw_motorott_me177_sst_GFME177_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131",
				"0x221001"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89",
				"0x8B"
			]
		}
	},
	"115580292200": {
		"DTCType": {
			"DBCondition": "pkw_motorott_me1_h_sst_Gfme1_h_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x01"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x3C00",
				"0x2701",
				"0x221165",
				"0x2300",
				"0x221163",
				"0x2300"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"115580292300": {
		"DTCType": {
			"DBCondition": "pkw_motorott_me20_sst_gfme20_sgs"
		},
		"FiltEleInfo": {
			"FilterCount": "2",
			"FilterRelatedCmd": [
				"0x22114901",
				"0x322800"
			],
			"Filter1": [
				"1",
				"3",
				"1",
				"ECU1_FxFE_SLP%JA",
				""
			],
			"Filter2": [
				"1",
				"3",
				"1",
				"ECU1_FxFE_ZUENDKREIS_OFF%JA",
				""
			],
			"Filter3": [
				"2",
				"9",
				"64",
				"ECU1_FxFE_AAV%JA",
				""
			]
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x01"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3128"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B",
				"0x89"
			]
		}
	},
	"115580292400": {
		"DTCType": {
			"DBCondition": "pkw_motorott_me20_sst_gfme20_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x01"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3128",
				"0x3228"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"115580292500": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_motorott_me2_h_sst_GFME2_H_SGS"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode87",
			"DeviceID": "0xF3",
			"FilterID": "0x01"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x3C00",
				"0x2701",
				"0x22116501",
				"0x2300",
				"0x3C00",
				"0x22116301"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580292600": {
		"DTCType": {
			"DBCondition": "pkw_motorott_me27_sst_gfme27_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x10"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2701",
				"0x1088",
				"0x300101"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580292700": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x300101",
			"FilterCount": "12",
			"Filter1": [
				"1",
				"15",
				"1",
				"ECU1_FxFE_ROZ%JA",
				"ECU1_FxFE_ROZ%NEIN"
			],
			"Filter2": [
				"1",
				"15",
				"2",
				"ECU1_FxFE_MKV%JA",
				"ECU1_FxFE_MKV%NEIN"
			],
			"Filter3": [
				"1",
				"15",
				"4",
				"ECU1_FxFE_TV%JA",
				"ECU1_FxFE_TV%NEIN"
			],
			"Filter4": [
				"1",
				"15",
				"8",
				"ECU1_FxFE_NSOLL_PN%JA",
				"ECU1_FxFE_NSOLL_PN%NEIN"
			],
			"Filter5": [
				"1",
				"15",
				"16",
				"ECU1_FxFE_NSOLL_D%JA",
				"ECU1_FxFE_NSOLL_D%NEIN"
			],
			"Filter6": [
				"1",
				"15",
				"32",
				"ECU1_FxFE_CO%JA",
				"ECU1_FxFE_CO%NEIN"
			],
			"Filter7": [
				"1",
				"15",
				"64",
				"ECU1_FxFE_LUR%JA",
				"ECU1_FxFE_LUR%NEIN"
			],
			"Filter8": [
				"1",
				"11",
				"128",
				"ECU1_FxFE_ZAS%JA",
				"ECU1_FxFE_ZAS%NEIN"
			],
			"Filter9": [
				"1",
				"13",
				"16",
				"ECU1_FxFE_ALLRAD%JA",
				"ECU1_FxFE_ALLRAD%NEIN"
			],
			"Filter10": [
				"1",
				"13",
				"32",
				"ECU1_FxFE_NAG%JA",
				"ECU1_FxFE_NAG%NEIN"
			],
			"Filter11": [
				"1",
				"13",
				"64",
				"ECU1_FxFE_KSG%JA",
				"ECU1_FxFE_KSG%NEIN"
			],
			"Filter12": [
				"1",
				"13",
				"240",
				"ECU1_FxFE_MG%NEIN",
				"ECU1_FxFE_MG%JA",
				"3"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_motorott_me28_sst_gfme28_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x10"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1a86",
				"0x1088",
				"0x2701",
				"0x300101"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"115580292800": {
		"DTCType": {
			"DBCondition": "pkw_motorott_me28_sst_gfme28_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x10"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x1088",
				"0x2701",
				"0x300101"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"115580292900": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%BR_MIT_SD",
			"FilterRelatedCmd": "0x217E",
			"FilterCount": "2",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"10",
				"35",
				"1",
				"01",
				"ECU1_FxFE_Tankdichte-Pruefung%Tankdichtepruefung aktiviert"
			],
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"10",
				"35",
				"1",
				"01",
				"ECU1_FxFE_Tankdichtheitspruefung%Tankdichtheitspruefung aktiviert"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_motorott_me97_sst_gfme97_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300805"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x2701",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x217E",
				"0x1A98",
				"0x2705"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89",
				"0x8B"
			]
		}
	},
	"115580292A00": {
		"DTCType": {
			"DBCondition": "pkw_motorott_me97amg_sst_gfme97amg_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A86",
				"0x2701",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x217E",
				"0x231C217B0D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89",
				"0x8B"
			]
		}
	},
	"115580292B00": {
		"DTCType": {
			"DBCondition": "pkw_motorott_med97_sst_GFMED97_sgs"
		},
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x217E",
			"FilterCount": "6",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"10",
				"58",
				"1",
				"01",
				"ECU_MED97_FxFE_ROZ-Korr.%ROZ-Korr.aktiviert"
			],
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"10",
				"59",
				"1",
				"01",
				"ECU_MED97_FxFE_MKV-Korrektur%MKV-Korr. aktiviert"
			],
			"Filter3": [
				"KwdTyp_VCD",
				"1",
				"10",
				"5B",
				"1",
				"01",
				"ECU_MED97_FxFE_NSoll-Korr.P/N%NSoll-Korr.P/N aktiviert"
			],
			"Filter4": [
				"KwdTyp_VCD",
				"1",
				"10",
				"5C",
				"1",
				"01",
				"ECU_MED97_FxFE_NSoll-Korr.Drive%NSoll-Korr.Drive aktiviert"
			],
			"Filter5": [
				"KwdTyp_VCD",
				"1",
				"10",
				"5D",
				"1",
				"01",
				"ECU_MED97_FxFE_Laufunruhekorrektur (LUR-korr.)%LUR-korr. aktiviert"
			],
			"Filter6": [
				"KwdTyp_VCD",
				"1",
				"10",
				"18",
				"5",
				"03",
				"BAUREIHE%BR204"
			]
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300805"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x2701",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x1A98"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89",
				"0x8B"
			]
		}
	},
	"115580292C00": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%HANNA"
		},
		"DTCType": {
			"DBCondition": "pkw_tele_minna_sst_gfminna2_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x6C"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x83038F1D1E001A"
			],
			"ReferCmd": [
				"0x1a86",
				"0x2105",
				"0x2110",
				"0x2103",
				"0x21E1"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3e"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580292D00": {
		"DTCType": {
			"DBCondition": "pkw_sitze_mklh_sst_gfmklh22_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x7D"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580292E00": {
		"FiltEleInfo": {
			"AddFilter": [
				"FxFE%W220",
				"FxFE%W220_AJ"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_sitze_mklvl_sst_gfmklvl2_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x7B"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580292F00": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%W220"
		},
		"DTCType": {
			"DBCondition": "pkw_sitze_mklvr_sst_gfmklvr2_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x7C"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580295000": {
		"DTCType": {
			"DBCondition": "pkw_sitze_mklvl_sst_gfmklvl2_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x7B"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580295100": {
		"DTCType": {
			"DBCondition": "pkw_sitze_mklvr_sst_gfmklvr2_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x7C"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580295200": {
		"DTCType": {
			"DBCondition": "pkw_sitze_mklvl4_sst_gfmklvl4_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0690",
			"CanFilterID": "0x04C8",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580295300": {
		"DTCType": {
			"DBCondition": "pkw_sitze_mklvr4_sst_gfmklvr4_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0691",
			"CanFilterID": "0x04C9",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580295400": {
		"DTCType": {
			"DBCondition": "pkw_sitze_mklhl4_sst_gfmklhl4_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0740",
			"CanFilterID": "0x04CA",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580295500": {
		"DTCType": {
			"DBCondition": "pkw_sitze_mklhr4_sst_gfmklhr4_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0741",
			"CanFilterID": "0x04CB",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580295600": {
		"DTCType": {
			"DBCondition": "pkw_motorott_me271_sst_gfme271_sgs"
		},
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x300101",
			"FilterCount": "6",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"10",
				"68",
				"1",
				"01",
				"ECU1_FxFE_ROZ%JA"
			],
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"10",
				"69",
				"1",
				"01",
				"ECU1_FxFE_MKV%JA"
			],
			"Filter3": [
				"KwdTyp_VCD",
				"1",
				"10",
				"6B",
				"1",
				"01",
				"ECU1_FxFE_NSOLL_PN%JA"
			],
			"Filter4": [
				"KwdTyp_VCD",
				"1",
				"10",
				"6C",
				"1",
				"01",
				"ECU1_FxFE_NSOLL_D%JA"
			],
			"Filter5": [
				"KwdTyp_VCD",
				"1",
				"10",
				"6D",
				"1",
				"01",
				"ECU1_FxFE_CO%JA"
			],
			"Filter6": [
				"KwdTyp_VCD",
				"1",
				"18",
				"5D",
				"1",
				"00",
				"ECU_ME271_FxFE_0309%Abgas-Code",
				" Lecktest 1 mm",
				""
			]
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x10"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2701",
				"0x1088",
				"0x300101"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B",
				"0x89"
			]
		}
	},
	"115580295700": {
		"DTCType": {
			"DBCondition": "pkw_motorott_me272_sst_GFME272_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x2701",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x217E"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"115580295800": {
		"DTCType": {
			"DBCondition": "pkw_motorott_me272_sst_GFME272_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x2701",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x217E"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x8B"
			]
		}
	},
	"115580295900": {
		"DTCType": {
			"DBCondition": "pkw_tempomat_mpc_sst_GFMPC212_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06A2",
			"CanFilterID": "0x0494",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"115580295A00": {
		"FiltEleInfo": {
			"AddFilter": [
				"FxFE%Distronic_yes",
				"FxFE%Rest der Welt"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_bedien_mrm7_sst_GFMRM164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0792",
			"CanFilterID": "0x0793",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8A"
			]
		}
	},
	"115580295B00": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%Rest der Welt"
		},
		"DTCType": {
			"DBCondition": "pkw_bedien_mrm5_sst_GFMRM169_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06D5",
			"CanFilterID": "0x04F5"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580295C00": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%Rest der Welt"
		},
		"DTCType": {
			"DBCondition": "pkw_bedien_mrm6_sst_GFMRM171_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06D5",
			"CanFilterID": "0x04F5",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x2D"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580295E00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_sccm_212_x_sst_sgs_gf_sccm_212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0622",
			"CanFilterID": "0x0484",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580295F00": {
		"DTCType": {
			"DBCondition": "pkw_bedien_mrm4_sst_gfmrm209_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x2D"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x8A",
				"0x86"
			]
		}
	},
	"115580294000": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%Rest der Welt"
		},
		"DTCType": {
			"DBCondition": "pkw_bedien_mrm_sst_gfmrm220_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x2D"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00",
				"0x3128"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8A"
			]
		}
	},
	"11558029BF00": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_samb2_sst_gfsamb23_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x2B"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029A000": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_samh3_sst_gfsamh23_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x2C"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3C07",
				"0x3C05",
				"0x3C04"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029A100": {
		"FiltEleInfo": {
		},
		"DTCType": {
			"DBCondition": "pkw_grundmod_samv2_sst_fcsamv171_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0662",
			"CanFilterID": "0x04E2"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xa4"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2112"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029A200": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x210E",
			"FilterCount": "9",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"10",
				"1A",
				"1",
				"00",
				"ECU_SAMV3_FxFE_LightFunction_BR251_MOPF2%vorhanden"
			],
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"10",
				"11",
				"1",
				"00",
				"ECU_SAMV3_FxFE_NSW%vorhanden"
			],
			"Filter3": [
				"KwdTyp_VCD",
				"1",
				"10",
				"3",
				"1",
				"01",
				"ECU_SAMV3_FxFE_Oelkuehler%vorhanden"
			],
			"Filter4": [
				"KwdTyp_VCD",
				"1",
				"10",
				"4",
				"1",
				"01",
				"ECU_SAMV3_FxFE_Sitzheizung%vorhanden"
			],
			"Filter5": [
				"KwdTyp_VCD",
				"1",
				"10",
				"1",
				"1",
				"01",
				"ECU_SAMV3_FxFE_Taglicht verf???gbar%ja"
			],
			"Filter6": [
				"KwdTyp_VCD",
				"1",
				"10",
				"15",
				"1",
				"01",
				"ECU_SAMV3_FxFE_Waschduesenheizung%vorhanden"
			],
			"Filter7": [
				"KwdTyp_VCD",
				"1",
				"10",
				"1B",
				"1",
				"01",
				"ECU_SAMV3_FxFE_WasherHeater%aktiviert"
			],
			"Filter8": [
				"KwdTyp_VCD",
				"1",
				"10",
				"04",
				"1",
				"00",
				"ECU_SAMV3_FxFE_WasherHeater%nicht vorhanden"
			],
			"Filter9": [
				"KwdTyp_VCD",
				"1",
				"10",
				"04",
				"1",
				"01",
				"ECU_SAMV3_FxFE_WasherHeater%vorhanden"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_grundmod_samv3_sst_FCSAMV164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0662",
			"CanFilterID": "0x04E2",
			"FlowDataCtrl": "0x6030081E"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x9d"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2120",
				"0x21F1",
				"0x21F2",
				"0x21F3",
				"0x21F4",
				"0x21F5",
				"0x21F6",
				"0x21F7",
				"0x21F8",
				"0x210E",
				"0x2132"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029A300": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2128",
			"FilterCount": "1",
			"Filter1": [
				"1",
				"2",
				"64",
				"",
				"ECU_SAMV_FxFE_Km Temperatur%Temperatur Sensor Klima gesperrt"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_grundmod_samv_sst_gfsamv20_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0662",
			"CanFilterID": "0x04E2",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x2A"
			]
		},
		"Access": {
			"AccessEcuBefore": [
				"0x00",
				"0xba",
				"0x00",
				"0xb9"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303",
				"0x300101"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2112",
				"0x2101",
				"0x210E",
				"0x210F"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029A400": {
		"FiltEleInfo": {
			"FilterRelatedCmd": [
				"0x2121",
				"0x2128",
				"0x212A",
				"0x212E"
			],
			"FilterCount": "6",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"10",
				"0",
				"8",
				"01",
				"ECU_SAMF221_FxFE_WW_Duesen_Hzg_Exist%vorhanden"
			],
			"Filter3": [
				"KwdTyp_VCD",
				"3",
				"10",
				"0",
				"8",
				"01",
				"ECU_SAMF221_FxFE_Wischerablagenheizung verbaut%vorhanden"
			],
			"Filter2": [
				"KwdTyp_VCD",
				"2",
				"10",
				"0",
				"8",
				"01",
				"ECU_SAMF221_FxFE_Nebelscheinwerfer verbaut%vorhanden"
			],
			"Filter4": [
				"KwdTyp_VCD",
				"2",
				"10",
				"8",
				"8",
				"01",
				"ECU_SAMF221_FxFE_Tagfahrlicht verbaut%vorhanden"
			],
			"Filter5": [
				"KwdTyp_VCD",
				"2",
				"10",
				"78",
				"8",
				"01",
				"ECU_SAMF221_FxFE_Codierung TFLeuchte%TFL verbaut"
			],
			"Filter6": [
				"KwdTyp_VCD",
				"4",
				"10",
				"00",
				"8",
				"01",
				"ECU_SAMF221_FxFE_Wasserventil verbaut%vorhanden"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_grundmod_SAMF221_sst_FC_SAMF221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06F3",
			"CanFilterID": "0x04DE",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xad"
			],
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x2128",
				"0x2129",
				"0x2150",
				"0x2122",
				"0x212A",
				"0x2124",
				"0x212D",
				"0x2121",
				"0x212E"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029A500": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_samv_sst_gfsamv20_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0662",
			"CanFilterID": "0x04E2",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x2A"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2112"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029A600": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_samh2_sst_gfsamh20_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0563",
			"CanFilterID": "0x04E3",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x2C"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2129",
				"0x2128",
				"0x2126",
				"0x2124"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029A700": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_samf3_sst_gfsamv21_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0662",
			"CanFilterID": "0x04E2",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xa8"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x21E1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029A800": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_samb3_sst_gfsamb21_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0661",
			"CanFilterID": "0x04E1"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xa8"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x21E1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029A900": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2150",
			"FilterCount": "3",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"10",
				"0",
				"8",
				"00",
				"ECU_SAMH4_FxFE_Bordnetz-Management%gesperrt"
			],
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"10",
				"0",
				"8",
				"01",
				"ECU_SAMH4_FxFE_Bordnetz-Management%freigegeben"
			],
			"Filter3": [
				"KwdTyp_VCD",
				"1",
				"10",
				"0",
				"8",
				"FF",
				"ECU_SAMH4_FxFE_Bordnetz-Management%automatische Ermittlung"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_grundmod_samh4_sst_gfsamh21_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0563",
			"CanFilterID": "0x04E3"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xa8",
				"0x01",
				"0xc2"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2115",
				"0x2117",
				"0x2118",
				"0x21E1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029AA00": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_samh4_sst_gfsamh21_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0563",
			"CanFilterID": "0x04E3"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2115",
				"0x2117",
				"0x2118",
				"0x21E1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"11558029AB00": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_samh51_sst_gfsam_h1_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0563",
			"CanFilterID": "0x04E3"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029AC00": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_samh52_sst_gfsam_h2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0570",
			"CanFilterID": "0x04F0"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2124"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029AD00": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%DBE nicht vorhanden"
		},
		"DTCType": {
			"DBCondition": "pkw_grundmod_sam2_sst_GFSAM169_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0662",
			"CanFilterID": "0x04E2"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xa2",
				"0x00",
				"0xb8",
				"0x00",
				"0x67"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1a86",
				"0x2160",
				"0x2152",
				"0x2153",
				"0x2151",
				"0x2150",
				"0x3101",
				"0x21E1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029AE00": {
		"DTCType": {
			"DBCondition": "pkw_d2b_sbs_sst_gfsbs_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0xD0",
				"0xD3"
			]
		},
		"Access": {
			"AccessEcuBefore": [
				"0x00",
				"0x5f"
			],
			"AccessCmd": [
				"0xc17bf381b0",
				"0x8300",
				"0x8303",
				"0x1a86",
				"0x2101"
			],
			"ReferCmd": "0x1a86"
		},
		"LinkInfo": {
			"LinkCmd": "0x81D0F33E82"
		},
		"QuitInfo": {
			"QuitCmd": "0xC17BF382B1"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84"
			]
		}
	},
	"11558029AF00": {
		"DTCType": {
			"DBCondition": "pkw_motordie_scr_sst_GFSCRCM_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E4",
			"CanFilterID": "0x07EC",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029D000": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_sds_sst_gfsds230_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x64"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x1A95"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84"
			]
		}
	},
	"11558029D100": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_sds2_sst_gfsd164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0798",
			"CanFilterID": "0x0799"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x310700",
				"0x310701",
				"0x2101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"11558029D200": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2101",
			"FilterCount": "2",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"10",
				"14",
				"1",
				"00",
				"ECU_SDS2_FxFE_Classic%nicht vorhanden"
			],
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"10",
				"14",
				"1",
				"01",
				"ECU_SDS2_FxFE_Classic%vorhanden"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_grundmod_sds2_sst_gfsd211_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0798",
			"CanFilterID": "0x0799"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x310700",
				"0x310701",
				"0x2101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84"
			]
		}
	},
	"11558029D300": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_sds2_sst_gfsd221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07C2",
			"CanFilterID": "0x04B8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"11558029D400": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_sds2_sst_gfsd230_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0798",
			"CanFilterID": "0x0799"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x310700",
				"0x310701",
				"0x2101",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"11558029D500": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_sds2_sst_gfsd240_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0798",
			"CanFilterID": "0x0799"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84"
			]
		}
	},
	"11558029D600": {
		"DTCType": {
			"DBCondition": "PKW_d2b_sdar_sst_GFXSDAR_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0xD0",
				"0xD1"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17bf381b0",
				"0x8300",
				"0x8303",
				"0x1A86",
				"0x2101"
			],
			"ReferCmd": "0x1a86"
		},
		"LinkInfo": {
			"LinkCmd": "0x81D0F33E82"
		},
		"QuitInfo": {
			"QuitCmd": "0xC17BF382B1"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84"
			]
		}
	},
	"11558029D700": {
		"DTCType": {
			"DBCondition": "pkw_grundmod_sem_h_sst_GFSEM_H_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x70"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x86"
			]
		}
	},
	"11558029D800": {
		"DTCType": {
			"DBCondition": "pkw_bedien_skf_h_sst_gfskf_h_sgs"
		},
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"NetInfo": {
			"PtclType": "KWPS",
			"IOBaudRate": "9600",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x21"
		},
		"Access": {
			"AccessAddrCode": "7E",
			"AccessCmd": "0x8300",
			"ReferCmd": [
				"0x3C00",
				"0x3128"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"11558029D900": {
		"DTCType": {
			"DBCondition": "pkw_klima_sth_sst_gfsheiz2_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x51"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029DB00": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%FUN_MOTOR",
			"FilterRelatedCmd": "0x2105",
			"FilterCount": "1",
			"Filter1": [
				"1",
				"6",
				"19",
				"ECU1_FxFE_Motor / Hubraum%M266 E20",
				"",
				"9"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_motorott_SIM266_sst_GFSIM266_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x2701",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2105"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029DC00": {
		"DTCType": {
			"DBCondition": "pkw_motorott_sim266cng_sst_gfSIM266CNG_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x2701",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2105"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029DD00": {
		"DTCType": {
			"DBCondition": "pkw_motorott_sim266_sst_gfsim266_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2105"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029DE00": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2105",
			"FilterCount": "2",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"10",
				"5B",
				"1",
				"01",
				"ECU1_FxFE_NSoll-Korrektur%aktiviert"
			],
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"10",
				"50",
				"1",
				"00",
				"ECU1_FxFE_Lam.-Regelung%Lambdaregelung OFF (918)   CO-Korrektur"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_motorott_sim271ke_sst_gfsim271ke_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x2701",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2105",
				"0x1a98",
				"0x322376020b"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029C000": {
		"FiltEleInfo": {
			"AddFilter": [
				"FxFE%FUN_MOTOR",
				"ECU1_FxFE_Getriebe%KSG Komfortschaltgetriebe",
				"ECU1_FxFE_Motorisierung%E20ML"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_motorott_sim4_sst_gfsim4_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x01"
		},
		"Access": {
			"AccessCmd": "0x81",
			"ReferCmd": [
				"0x1A86",
				"0x2701",
				"0x1A90"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029C100": {
		"DTCType": {
			"DBCondition": "pkw_motorott_SIM4CNG_sst_gfsim4cng_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x01"
		},
		"Access": {
			"AccessCmd": "0x81",
			"ReferCmd": [
				"0x1A86",
				"0x2701",
				"0x1081",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89",
				"0x8B"
			]
		}
	},
	"11558029C200": {
		"DTCType": {
			"DBCondition": "pkw_motorott_SIM4CNG_sst_gfsim4cng_ncv3_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x2701",
				"0x1A9A",
				"0x1A9C",
				"0x300101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029C300": {
		"DTCType": {
			"DBCondition": "pkw_motorott_sim4lde_sst_gfsim4lde_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x01"
		},
		"Access": {
			"AccessCmd": "0x81",
			"ReferCmd": [
				"0x1A86",
				"0x2701",
				"0x300101",
				"0x1081",
				"0x2101"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029C400": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%FUN_MOTOR",
			"FilterRelatedCmd": "0x300101",
			"FilterCount": "1",
			"Filter1": [
				"1",
				"10",
				"16",
				"ECU1_FxFE_???lsensor/-schalter%mit ???lschalter",
				""
			]
		},
		"DTCType": {
			"DBCondition": "pkw_motorott_sim4lse_sst_gfsim4lse_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x01"
		},
		"Access": {
			"AccessCmd": "0x81",
			"ReferCmd": [
				"0x1A86",
				"0x2701",
				"0x300101",
				"0x1081",
				"0x2101"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029C500": {
		"DTCType": {
			"DBCondition": "pkw_d2b_sound_sst_gfsound_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0xD0",
				"0xD1"
			]
		},
		"Access": {
			"AccessEcuBefore": [
				"0x00",
				"0x5f"
			],
			"AccessCmd": [
				"0xC17BF381B0",
				"0x8300",
				"0x8303",
				"0x1a86",
				"0x2101"
			],
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"LinkCmd": "0x81D0F33E82"
		},
		"QuitInfo": {
			"QuitCmd": "0xC17BF382B1"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"11558029C600": {
		"DTCType": {
			"DBCondition": "461g_d2b_audio_sst_GFAUDIO_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0xD0"
		},
		"Access": {
			"AccessCmd": [
				"0xC17BF381B0",
				"0x8300",
				"0x830314080A1406"
			],
			"ReferCmd": [
				"0x1A86",
				"0x210B00000000000000",
				"0x320100"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"11558029C700": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%BR_MIT_SD"
		},
		"DTCType": {
			"DBCondition": "pkw_sitze_esvf2_sst_GFSSGF16_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06AC",
			"CanFilterID": "0x04EC",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x52"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303",
				"0x1a86"
			],
			"CANReferCmd": [
				"1A87",
				"1A9A",
				"1A9C",
				"2114"
			],
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9C",
				"0x211D",
				"0x2122",
				"0x2114"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029C800": {
		"DTCType": {
			"DBCondition": "pkw_sitze_esvf2_sst_GFSSGF16_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06AC",
			"CanFilterID": "0x04EC"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x2114"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029C900": {
		"DTCType": {
			"DBCondition": "pkw_sitze_esvb2_sst_GFSSGB16_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06AD",
			"CanFilterID": "0x04ED",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x53"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A87",
				"0x2114"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029CA00": {
		"DTCType": {
			"DBCondition": "pkw_sitze_esvb2_sst_GFSSGB16_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06AD",
			"CanFilterID": "0x04ED"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A87",
				"0x2114"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029CB00": {
		"DTCType": {
			"DBCondition": "pkw_sitze_esvh_sst_gfssgh22_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x5E"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029CC00": {
		"DTCType": {
			"DBCondition": "pkw_sitze_era_sst_GFSSGH16_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x069E",
			"CanFilterID": "0x04CE"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029CD00": {
		"DTCType": {
			"DBCondition": "pkw_sitze_esvvl_sst_gfssgvl2_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x52"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3c00"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3c09"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029CE00": {
		"DTCType": {
			"DBCondition": "pkw_sitze_esvvl_sst_gfssgvl2_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x52"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3C01"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029CF00": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2101",
			"FilterCount": "3",
			"Filter1": [
				"1",
				"4",
				"4",
				"ECU1_FxFE_Lordose vorhanden%ja",
				""
			],
			"Filter2": [
				"1",
				"4",
				"1",
				"ECU1_FxFE_Sitzheizung vorhanden%ja",
				""
			],
			"Filter3": [
				"1",
				"4",
				"8",
				"ECU1_FxFE_Fondfussraumbeleuchtung vorhanden%ja",
				""
			]
		},
		"DTCType": {
			"DBCondition": "pkw_sitze_esvvl5_sst_GFSSGVL5_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06C3",
			"CanFilterID": "0x04D8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2141",
				"0x2101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029F000": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%HLM_LINKS",
			"FilterRelatedCmd": "0x2124",
			"FilterCount": "1",
			"Filter1": [
				"1",
				"4",
				"3",
				"ECU1_FxFE_Konfiguration E/A Hilfe%E/A Hilfe immer aktiv",
				"",
				"2"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_sitze_esvf3_sst_GFSEATD_204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06C3",
			"CanFilterID": "0x04D8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x2107",
				"0x2117",
				"0x2124",
				"0x2114"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029F100": {
		"DTCType": {
			"DBCondition": "pkw_sitze_esvvr_sst_gfssgvr2_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x53"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3C01"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029F200": {
		"DTCType": {
			"DBCondition": "pkw_sitze_esvvr_sst_gfssgvr2_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x53"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029F300": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2101",
			"FilterCount": "2",
			"Filter1": [
				"1",
				"4",
				"4",
				"ECU1_FxFE_Lordose vorhanden%ja",
				""
			],
			"Filter2": [
				"1",
				"4",
				"1",
				"ECU1_FxFE_Sitzheizung vorhanden%ja",
				""
			]
		},
		"DTCType": {
			"DBCondition": "pkw_sitze_esvvr5_sst_GFSSGVR5_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06CB",
			"CanFilterID": "0x04D9",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2141",
				"0x2101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029F400": {
		"DTCType": {
			"DBCondition": "pkw_sitze_esvb3_sst_GFSEATP_204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06CB",
			"CanFilterID": "0x04D9"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x2107",
				"0x2117",
				"0x2124",
				"0x2114"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029F500": {
		"DTCType": {
			"DBCondition": "pkw_sitze_esvb_sst_gfssgb20_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06AD",
			"CanFilterID": "0x04ED",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x53"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029F600": {
		"DTCType": {
			"DBCondition": "pkw_sitze_esvf_sst_gfssgf20_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06AC",
			"CanFilterID": "0x04EC",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x52"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x211D",
				"0x2122",
				"0x2114"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029F700": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%SG211"
		},
		"DTCType": {
			"DBCondition": "pkw_sitze_esvf_sst_gfssgf20_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06AC",
			"CanFilterID": "0x04EC",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x52"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x211D",
				"0x2122",
				"0x2114"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029F800": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%SG211"
		},
		"DTCType": {
			"DBCondition": "pkw_sitze_esvb_sst_gfssgb20_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06AD",
			"CanFilterID": "0x04ED",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x53"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029F900": {
		"DTCType": {
			"DBCondition": "pkw_sitze_esvvl3_sst_gfssgvl3_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x52"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029FA00": {
		"DTCType": {
			"DBCondition": "pkw_sitze_esvvr3_sst_gfssgvr3_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x53"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029FB00": {
		"DTCType": {
			"DBCondition": "pkw_sitze_esvvl4_sst_gfssgvl4_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06AC",
			"CanFilterID": "0x04EC"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2106",
				"0x2114"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029FC00": {
		"DTCType": {
			"DBCondition": "pkw_sitze_esvvr4_sst_gfssgvr4_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06AD",
			"CanFilterID": "0x04ED"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2106",
				"0x2114"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029FD00": {
		"DTCType": {
			"DBCondition": "pkw_sitze_esvhl4_sst_gfssghl4_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x075A",
			"CanFilterID": "0x04FA"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2106"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029FE00": {
		"DTCType": {
			"DBCondition": "pkw_sitze_esvhr4_sst_gfssghr4_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x075B",
			"CanFilterID": "0x04FB"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029FF00": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%SITZVERSTELLUNG",
			"FilterRelatedCmd": "0x2101",
			"FilterCount": "2",
			"Filter1": [
				"1",
				"4",
				"1",
				"ECU_ESVH5_FxFE_Sitzheizung vorhanden%ja",
				""
			],
			"Filter2": [
				"1",
				"4",
				"2",
				"ECU1_FxFE_Sitzbel???ftung vorhanden%ja",
				""
			]
		},
		"DTCType": {
			"DBCondition": "pkw_sitze_esvh5_sst_gfssgh5_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06D3",
			"CanFilterID": "0x04DA",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2141",
				"0x2101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029E000": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_klima_sth_h_sst_GFSTH_H_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x51"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029E100": {
		"DTCType": {
			"DBCondition": "pkw_klima_sth1_sst_gfsth203_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0739",
			"CanFilterID": "0x04F9",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x51"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2103"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029E200": {
		"DTCType": {
			"DBCondition": "pkw_klima_sth2_sst_gfsth211_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0739",
			"CanFilterID": "0x04F9"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2103"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029E300": {
		"DTCType": {
			"DBCondition": "pkw_klima_sth2_sst_gfsth211_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06A1",
			"CanFilterID": "0x07A6"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2103"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029E400": {
		"DTCType": {
			"DBCondition": "pkw_klima_sth4_sst_GFSTH221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06AB",
			"CanFilterID": "0x04D5",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x2103",
				"0x2104",
				"0x2105"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029E500": {
		"DTCType": {
			"DBCondition": "pkw_klima_sth1_sst_gfsth203_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x6D"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3C06",
				"0x3C0B"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"11558029E600": {
		"DTCType": {
			"DBCondition": "pkw_klima_sth3_sst_GFSTH164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0739",
			"CanFilterID": "0x04F9",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A87",
				"0x2104",
				"0x2103"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"11558029E700": {
		"FiltEleInfo": {
			"AddFilter": [
			]
		},
		"DTCType": {
			"DBCondition": "pkw_sitze_shz_sst_gfshz211_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x057B",
			"CanFilterID": "0x04FB"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2109",
				"0x2102",
				"0x2101",
				"0x2107",
				"0x2108",
				"0x2104",
				"0x2103",
				"0x2106",
				"0x300101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84"
			]
		}
	},
	"11558029E800": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%Sitzbel_vorhanden"
		},
		"DTCType": {
			"DBCondition": "pkw_sitze_shz2_sst_GFSHZ164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x057B",
			"CanFilterID": "0x04FB"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2101",
				"0x210E"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029E900": {
		"DTCType": {
			"DBCondition": "pkw_sitze_shz2_sst_GFSHZ164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x057B",
			"CanFilterID": "0x04FB",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2101",
				"0x210E"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029EA00": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%KRB"
		},
		"DTCType": {
			"DBCondition": "pkw_sitze_shz1_sst_GFSHZ171_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x057B",
			"CanFilterID": "0x04FB"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029EB00": {
		"DTCType": {
			"DBCondition": "pkw_tele_taidusa2_sst_gftaidus_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x6C"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x1a86",
				"0x300101",
				"0x2111",
				"0x2112",
				"0x2113",
				"0x2120",
				"0x2121",
				"0x2126",
				"0x2128",
				"0x2129",
				"0x2131",
				"0x2132",
				"0x2133",
				"0x2140",
				"0x2142",
				"0x2143"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3e"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"11558029EC00": {
		"DTCType": {
			"DBCondition": "pkw_tele_taidjap2_sst_gftaidja_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x6C"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x300101",
				"0x2126",
				"0x21E1"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"11558029ED00": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%HANNA"
		},
		"DTCType": {
			"DBCondition": "pkw_tele_minna_sst_gfminna2_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x6C"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x1a86",
				"0x21e1"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3e"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84"
			]
		}
	},
	"11558029EE00": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_klima_tau_h_sst_GFTAU_H_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode84",
			"DeviceID": "0xF3",
			"FilterID": "0x50"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"11558029EF00": {
		"DTCType": {
			"DBCondition": "pkw_d2b_tele_sst_gftele_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0xD0",
				"0xD3"
			]
		},
		"Access": {
			"AccessEcuBefore": [
				"0x00",
				"0x5f"
			],
			"AccessCmd": [
				"0xc17bf381b0",
				"0x8300",
				"0x8303",
				"0x1a86",
				"0x2101"
			],
			"ReferCmd": [
				"0x1a86",
				"0x21e1"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x81D0F33E82"
		},
		"QuitInfo": {
			"QuitCmd": "0xC17BF382B1"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84"
			]
		}
	},
	"1155802A1000": {
		"DTCType": {
			"DBCondition": "pkw_tele_dzf_sst_gfteledz_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x63"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A1200": {
		"DTCType": {
			"DBCondition": "pkw_getriebe_tcm_sst_gftcm164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x07E1",
			"CanFilterID": "0x07E9",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F150",
				"0x22F151",
				"0x22F111",
				"0x22F121",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A2500": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2130",
			"FilterCount": "1",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"10",
				"16",
				"2",
				"02",
				"ECU1_FxFE_TPM Low-/Midline%Mid-Line"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_traktion_tpm_sst_GFTPMLS_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0643",
			"CanFilterID": "0x04C8"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"1155802A2600": {
		"DTCType": {
			"DBCondition": "pkw_traktion_tpm2_sst_GFTPM_204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0643",
			"CanFilterID": "0x04C8"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"1155802A2700": {
		"FiltEleInfo": {
			"AddFilter": "ECU1_FxFE_ACTIVE_ECU%TPM_209"
		},
		"DTCType": {
			"DBCondition": "pkw_traktion_tpm2_sst_GFTPM_204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06B8",
			"CanFilterID": "0x04F8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"1155802A2800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tssr_204_x_sst_sgs_gf_tssr_204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06B3",
			"CanFilterID": "0x04D6",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802A2A00": {
		"DTCType": {
			"DBCondition": "pkw_d2b_tv_sst_gftv_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0xD0",
				"0xEF"
			]
		},
		"Access": {
			"AccessCmd": "0xc17bf381b0",
			"ReferCmd": "0x1a86"
		},
		"LinkInfo": {
			"LinkCmd": "0x81D0F33E82"
		},
		"QuitInfo": {
			"QuitCmd": "0xC17BF382B1"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A2B00": {
		"DTCType": {
			"DBCondition": "pkw_most_tvjp_sst_GFTVJP_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0773",
			"CanFilterID": "0x04EE"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2102",
				"0x2103",
				"0x1802FF00"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A2C00": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_tws_sst_gftws240_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0550",
			"CanFilterID": "0x04C0"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2109"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A2D00": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_tzl_sst_gftzl240_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0780",
			"CanFilterID": "0x04C4"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2102",
				"0x2130"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A2E00": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_tzr_sst_gftzr240_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0781",
			"CanFilterID": "0x04C5"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2102",
				"0x2130"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A2F00": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_bedien_ubf1_h_sst_GFUBF1_H_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x6A"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3128"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A5000": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_bedien_ubf2_h_sst_GFUBF2_H_SGS"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x6A"
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0xC17EF382B4"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A5100": {
		"DTCType": {
			"DBCondition": "pkw_bedien_ubf_sst_gfubf203_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06BD",
			"CanFilterID": "0x04FD",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x6A"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": "0x1a86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A5200": {
		"DTCType": {
			"DBCondition": "pkw_bedien_ubf2_sst_gfubf230_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x6B"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A5300": {
		"DTCType": {
			"DBCondition": "pkw_bedien_ubf3_sst_gfubf211_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06BD",
			"CanFilterID": "0x04FD"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xa8"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A5400": {
		"DTCType": {
			"DBCondition": "pkw_motor_fscu6_sst_GFFSCU6_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x06FA",
			"CanFilterID": "0x049F",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84"
			]
		}
	},
	"1155802A5500": {
		"DTCType": {
			"DBCondition": "pkw_d2b_uhi_sst_gfuhi_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0xD0",
				"0xD2"
			]
		},
		"Access": {
			"AccessEcuBefore": [
				"0x00",
				"0x5f"
			],
			"AccessCmd": [
				"0xc17bf381b0",
				"0x1a86",
				"0x2101"
			],
			"ReferCmd": "0x1a86"
		},
		"LinkInfo": {
			"LinkCmd": "0x81D0F33E82"
		},
		"QuitInfo": {
			"QuitCmd": "0xC17BF382B1"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A5600": {
		"DTCType": {
			"DBCondition": "pkw_traktion_up28_sst_gfup28_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x0C"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x1A86",
				"0x310301"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A5700": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_dach_uvs_h_sst_GFUVS_H_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x72"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3128"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A5800": {
		"DTCType": {
			"DBCondition": "pkw_dach_uvs_sst_gfuvs230_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x72"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A5900": {
		"DTCType": {
			"DBCondition": "pkw_dach_uvs1_sst_gfuvs209_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0749",
			"CanFilterID": "0x00FD",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x72"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2125",
				"0x2130",
				"0x212E",
				"0x212F"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A5A00": {
		"DTCType": {
			"DBCondition": "pkw_dach_uvs_sst_gfuvs230_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0560",
			"CanFilterID": "0x07A8"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2128"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A5B00": {
		"DTCType": {
			"DBCondition": "pkw_bedien_vbf_sst_gfvbf240_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0725",
			"CanFilterID": "0x04e5",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A5C00": {
		"DTCType": {
			"DBCondition": "pkw_dach_vd_h_sst_gfvd_h_sgs"
		},
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"NetInfo": {
			"PtclType": "KWPS",
			"IOBaudRate": "9600",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x21"
		},
		"Access": {
			"AccessAddrCode": "7E",
			"AccessCmd": "0x8300",
			"ReferCmd": [
				"0x3C00",
				"0x3128"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A5D00": {
		"DTCType": {
			"DBCondition": "pkw_dach_vd1_sst_gfvsg_r1_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0749",
			"CanFilterID": "0x04E9"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2115"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A5E00": {
		"DTCType": {
			"DBCondition": "pkw_dach_vd199_sst_gfvsg_x199_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06C0",
			"CanFilterID": "0x07AD",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3e01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A5F00": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_getriebe_vg_h_sst_GFVG_H_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x23"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A4000": {
		"DTCType": {
			"DBCondition": "pkw_getriebe_vg_sst_gfvgs463_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x23"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x300101"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A4100": {
		"DTCType": {
			"DBCondition": "pkw_getriebe_vg1_sst_GFVG164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07B8",
			"CanFilterID": "0x07B9",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2100"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802A4200": {
		"DTCType": {
			"DBCondition": "pkw_wartung_wia3_sst_GFWIA169_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07A0",
			"CanFilterID": "0x07A1"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x8C",
				"0x8A",
				"0x89"
			]
		}
	},
	"1155802A4300": {
		"DTCType": {
			"DBCondition": "pkw_wartung_wia4_sst_GFWIA4_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07A0",
			"CanFilterID": "0x07A1"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x214E"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x8C",
				"0x89"
			]
		}
	},
	"1155802A4400": {
		"DTCType": {
			"DBCondition": "pkw_wartung_wia2_sst_GFWIA171_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07A0",
			"CanFilterID": "0x07A1"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x8C"
			]
		}
	},
	"1155802A4500": {
		"DTCType": {
			"DBCondition": "pkw_wartung_wia5_sst_GFWIA221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07B2",
			"CanFilterID": "0x04B6"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x8C"
			]
		}
	},
	"1155802A4600": {
		"DTCType": {
			"DBCondition": "pkw_wartung_wr4_sst_GFWR4_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x079C",
			"CanFilterID": "0x079D"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x53"
			],
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x87",
				"0x89"
			]
		}
	},
	"1155802A4700": {
		"DTCType": {
			"DBCondition": "pkw_wartung_wr3_sst_GFWR169_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x079C",
			"CanFilterID": "0x079D"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x87",
				"0x8A",
				"0x89"
			]
		}
	},
	"1155802A4800": {
		"FiltEleInfo": {
			"AddFilter": [
			]
		},
		"DTCType": {
			"DBCondition": "pkw_wartung_wr2_sst_GFWR171_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x079C",
			"CanFilterID": "0x079D"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2144"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x87"
			]
		}
	},
	"1155802A4900": {
		"DTCType": {
			"DBCondition": "pkw_wartung_wr5_sst_GFWR221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07BA",
			"CanFilterID": "0x04B7"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x87",
				"0x89"
			]
		}
	},
	"1155802A4A00": {
		"DTCType": {
			"DBCondition": "pkw_srs_wss_sst_GFWSS_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06A8",
			"CanFilterID": "0x04C6"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A87",
				"0x2701"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x8A",
				"0x89"
			]
		}
	},
	"1155802A4B00": {
		"DTCType": {
			"DBCondition": "pkw_srs_wss4_sst_GFWSS4_Delphi_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06A8",
			"CanFilterID": "0x04C6"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x8A"
			]
		}
	},
	"1155802A4C00": {
		"DTCType": {
			"DBCondition": "pkw_srs_wss2_sst_GFWSS2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06BB",
			"CanFilterID": "0x04D7"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x8A"
			]
		}
	},
	"1155802A4D00": {
		"DTCType": {
			"DBCondition": "pkw_srs_wss5_sst_GFWSS5_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06BB",
			"CanFilterID": "0x04D7"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A4E00": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%KLA"
		},
		"DTCType": {
			"DBCondition": "pkw_wartung_wia_sst_gfwia211_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07A0",
			"CanFilterID": "0x07A1"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x8C"
			]
		}
	},
	"1155802A4F00": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2144",
			"FilterCount": "2",
			"Filter1": [
				"1",
				"2",
				"48",
				"FxFE%VOR_AJ05_MIT_FAELLIGKEITEN",
				""
			],
			"Filter2": [
				"1",
				"8",
				"16",
				"FxFE%ASSYST_PLUS_USA",
				""
			]
		},
		"DTCType": {
			"DBCondition": "pkw_wartung_wr_sst_gfwr211_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x079C",
			"CanFilterID": "0x079D"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x87",
				"0x89"
			]
		}
	},
	"1155802A7000": {
		"FiltEleInfo": {
			"AddFilter": "ECU1_FxFE_ACTIVE_ECU%XAGW",
			"FilterRelatedCmd": "0x2102",
			"FilterCount": "2",
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"10",
				"8",
				"8",
				"10",
				"ECU1_FxFE_Main FBlock number pos. 01%HU"
			],
			"Filter3": [
				"KwdTyp_VCD",
				"1",
				"10",
				"10",
				"8",
				"FF",
				"ECU1_FxFE_Main FBlock number pos. 02%nicht belegt"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_most_agw_sst_gfxagw_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x05D6",
			"CanFilterID": "0x04F6",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x064008021092FFFFFFFFFF",
			"ReferCmd": [
				"0x1A86",
				"0x2107",
				"0x2108",
				"0x2101",
				"0x2102",
				"0x2119"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x600006403E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x600006401081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"1155802A7100": {
		"FiltEleInfo": {
			"AddFilter": [
				"ECU1_FxFE_ACTIVE_ECU%XHUAGW",
				"ECU_AGW_FxFE_ACTIVE_ECU%XHUAGW"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_most_agw_sst_gfxagw_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x05D6",
			"CanFilterID": "0x04F6"
		},
		"Access": {
			"CanAccessCmd": "0x064008021092FFFFFFFFFF",
			"ReferCmd": [
				"0x1A86",
				"0x2107",
				"0x2108",
				"0x2101",
				"0x21E1",
				"0x2102",
				"0x21A1",
				"0x2115"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x600006403E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x600006401081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"1155802A7200": {
		"FiltEleInfo": {
		},
		"DTCType": {
			"DBCondition": "pkw_most_agw_sst_gfxagw_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0660",
			"CanFilterID": "0x07A9"
		},
		"Access": {
			"CanAccessCmd": "0x064008021092FFFFFFFFFF",
			"ReferCmd": [
				"0x1A86",
				"0x2107",
				"0x2108",
				"0x2101",
				"0x21E1",
				"0x2102",
				"0x21A1",
				"0x300101",
				"0x"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x600006403E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x600006401081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A7300": {
		"DTCType": {
			"DBCondition": "pkw_most_tgw_sst_gfhu221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0652",
			"CanFilterID": "0x048A",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x21E1",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x1A9E",
				"0x1A9F",
				"0x213E",
				"0x213C",
				"0x213D",
				"0x213B",
				"0x2123",
				"0x2135"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802B8300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tpm222_x_sst_sgs_gf_tpm222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0652",
			"CanFilterID": "0x05D2",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802B8400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ubfl205_x_sst_sgs_gf_ubfl205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x063A",
			"CanFilterID": "0x05BA",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "24"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802B8500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ubfr205_x_sst_sgs_gf_ubfr205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x063A",
			"CanFilterID": "0x05BA",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "25"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802B8700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_nv221_x_sst_sgs_gf_nv221_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_NV221_X_cv_NV221_X_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_NV221_X_SG_Einstieg_NV221_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x070a",
			"CanFilterID": "0x04a1",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802C1000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_aag221_x_sst_sgs_gf_aag221_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_AAG221_x_cv_AAG221_x_xml",
			"DoDisplay": "N"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_AAG221_x_SG_Einstieg_AAG221_X_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06EB",
			"CanFilterID": "0x04DD",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802C1200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_abr222_x_sst_sgs_gf_abr222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x061B",
			"CanFilterID": "0x059B",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C1700": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%HLM_LINKS"
		},
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_alwrl204_x_sst_sgs_gf_alwrl204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x076A",
			"CanFilterID": "0x04AD",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802C1800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_alwrr204_x_sst_sgs_gf_alwrr204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0772",
			"CanFilterID": "0x04AE",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802C1900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_anc_x_sst_sgs_gf_anc_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x05CA",
			"CanFilterID": "0x04CA",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802C1B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ars310_x_sst_sgs_gf_ars310_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_ARS310_X_sg_einstieg_ARS310_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_ARS310_X_cv_ARS310_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0702",
			"CanFilterID": "0x04a0",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802C1D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_asbm_da_x_sst_sgs_gf_asbm_da_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0609",
			"CanFilterID": "0x0589",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "1F"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C1E00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_asbm_db_x_sst_sgs_gf_asbm_db_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0609",
			"CanFilterID": "0x0589",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "20"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C1F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_as_f217_x_sst_sgs_gf_as_f217_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060D",
			"CanFilterID": "0x058D",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "15"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x%1%"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C0200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_awd_mfa_x_sst_sgs_gf_awd_mfa_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x079a",
			"CanFilterID": "0x04b3",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F150",
				"0x22F151",
				"0x22F111",
				"0x22F121",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C0400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_bc_f222_x_sst_sgs_gf_bc_f222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0609",
			"CanFilterID": "0x0589",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C0500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_bc_r222_x_sst_sgs_gf_bc_r222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060D",
			"CanFilterID": "0x058D",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C0800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_bms222pi_x_sst_sgs_gf_bms222pi_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E7",
			"CanFilterID": "0x07EF",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C0C00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_cbcbolero_x_sst_sgs_gf_cbcbolero_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cbcbolero_x_sg_einstieg_cbcbolero_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_CBCBOLERO_x_cv_CBCBOLERO_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06f3",
			"CanFilterID": "0x04de",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802C3000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_cgw_204_x_sst_sgs_gf_cgw_204_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_CGW_204_X_sg_einstieg_CGW_204_X_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0602",
			"CanFilterID": "0x0480",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"1155802C3100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_chm_x_sst_sgs_gf_chm_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060D",
			"CanFilterID": "0x058D",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "22"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C3400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_clock222_x_sst_sgs_gf_clock222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0609",
			"CanFilterID": "0x0589",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "08"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C3500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_cngcm246_x_sst_sgs_gf_cngcm246_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cngcm246_x_cv_cngcm246_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cngcm246_x_SG_Einstieg_cngcm246_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0762",
			"CanFilterID": "0x04ac",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802C3600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_cngcm_212_x_sst_sgs_gf_cngcm_212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0762",
			"CanFilterID": "0x04ac",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802C3800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_com222_x_sst_sgs_gf_com222_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_com222_x_sg_einstieg_com222_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_COM222_X_cv_COM222_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060b",
			"CanFilterID": "0x058b",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802C3B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_cpf222_x_sst_sgs_gf_cpf222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x061D",
			"CanFilterID": "0x059D",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C3C00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_cr41r_x_sst_sgs_gf_cr41r_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C3D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_cr6_x_sst_sgs_gf_cr6_x_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr6_x_act_cr6_x_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr6_x_adapt_cr6_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr6_x_SG_Einstieg_cr6_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_CR6_X_cv_CR6_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802C3E00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_cr60ls_x_sst_sgs_gf_cr60ls_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr60ls_x_SG_Einstieg_cr60ls_x_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr60ls_x_act_cr60ls_x_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr60ls_x_adapt_cr60ls_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr60ls_x_cv_cr60ls_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07e0",
			"CanFilterID": "0x07e8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802C3F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_cr6bin5eu6_x_sst_sgs_gf_cr6bin5eu6_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr6bin5eu6_x_SG_Einstieg_cr6bin5eu6_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr6bin5eu6_x_cv_CR6BIN5EU6_X_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr6bin5eu6_x_act_cr6bin5eu6_x_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr6bin5eu6_x_adapt_cr6bin5eu6_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07e0",
			"CanFilterID": "0x07e8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802C2000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_cr6eu5_x_sst_sgs_gf_cr6eu5_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr6eu5_x_SG_Einstieg_cr6eu5_x_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr6eu5_x_act_cr6eu5_x_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr6eu5_x_adapt_cr6eu5_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07e0",
			"CanFilterID": "0x07e8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802C2200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_crcm217_x_sst_sgs_gf_crcm217_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0601",
			"CanFilterID": "0x0581",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C2400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_crd_x_sst_sgs_gf_crd_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_CRD_X_SG_Einstieg_CRD_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_CRD_X_cv_CRD_X_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_crd_x_act_crd_x_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_crd_x_adapt_crd_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802C2500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_crd2_x_sst_sgs_gf_crd2_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_CRD2_X_SG_Einstieg_CRD2_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_CRD2_X_cv_CRD2_X_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_CRD2_X_act_CRD2_X_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_CRD2_X_adapt_CRD2_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07e0",
			"CanFilterID": "0x07e8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802C2800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_crd3s2_x_sst_sgs_gf_crd3s2_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C2F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ctrlc_222_x_sst_sgs_gf_ctrlc_222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x063A",
			"CanFilterID": "0x05BA",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C5400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dab_204_x_sst_sgs_gf_dab_204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06a9",
			"CanFilterID": "0x0455",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802C5700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dcdc222pi_x_sst_sgs_gf_dcdc222pi_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0666",
			"CanFilterID": "0x05E6",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C5900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dispc_204_x_sst_sgs_gf_dispc_204_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_DISPC_204_X_sg_einstieg_DISPC_204_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_DISPC_204_X_cv_DISPC_204_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0753",
			"CanFilterID": "0x04ea",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802C5A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_disp_rl_x_sst_sgs_gf_disp_rl_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_DISP_RL_X_cv_DISP_RL_X_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_DISP_RL_X_SG_Einstieg_DISP_RL_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06d9",
			"CanFilterID": "0x045b",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802C5B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_disp_rl_5_x_sst_sgs_gf_disp_rl_5_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0639",
			"CanFilterID": "0x05B9",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802C5D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_disp_rr_x_sst_sgs_gf_disp_rr_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_DISP_RR_X_cv_DISP_RR_X_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_DISP_RR_X_SG_Einstieg_DISP_RR_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06f9",
			"CanFilterID": "0x045f",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802C5E00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_disp_rr_5_x_sst_sgs_gf_disp_rr_5_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x063D",
			"CanFilterID": "0x05BD",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802C4000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dmfl222_x_sst_sgs_gf_dmfl222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0600",
			"CanFilterID": "0x0580",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802C4100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dmfl_204_x_sst_sgs_gf_dmfl_204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0703",
			"CanFilterID": "0x04E0",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802C4200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dmfr222_x_sst_sgs_gf_dmfr222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0602",
			"CanFilterID": "0x0582",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C4300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dmfr_204_x_sst_sgs_gf_dmfr_204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x070B",
			"CanFilterID": "0x04E1",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802C4400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dmrl222_x_sst_sgs_gf_dmrl222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0604",
			"CanFilterID": "0x0584",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C4500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dmrl_204_x_sst_sgs_gf_dmrl_204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0713",
			"CanFilterID": "0x04E2",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802C4600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dmrr222_x_sst_sgs_gf_dmrr222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0606",
			"CanFilterID": "0x0586",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C4700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dmrr_204_x_sst_sgs_gf_dmrr_204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x071B",
			"CanFilterID": "0x04E3",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802C4800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_drvktpls_x_sst_sgs_gf_drvktpls_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_DRVKTPLS_X_sg_einstieg_DRVKTPLS_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_DRVKTPLS_X_cv_DRVKTPLS_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06b1",
			"CanFilterID": "0x0456",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802C4900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_drvm221_x_sst_sgs_gf_drvm221_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0733",
			"CanFilterID": "0x04e6",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802C4B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_x_sst_sgs_gf_dsm_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_dsm_x_SG_Einstieg_dsm_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_DSM_X_cv_DSM_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06ea",
			"CanFilterID": "0x049d",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802C4D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_htvnfl205_x_sst_sgs_gf_dsm_htvnfl205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0600",
			"CanFilterID": "0x0580",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "12"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C4E00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_htvnfr205_x_sst_sgs_gf_dsm_htvnfr205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0602",
			"CanFilterID": "0x0582",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "12"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C4F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_htvnrl205_x_sst_sgs_gf_dsm_htvnrl205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0604",
			"CanFilterID": "0x0584",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "12"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C7000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_htvnrr205_x_sst_sgs_gf_dsm_htvnrr205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0606",
			"CanFilterID": "0x0586",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "12"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C7100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_ms_fl205_x_sst_sgs_gf_dsm_ms_fl205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0600",
			"CanFilterID": "0x0580",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "10"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C7200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_ms_fl222_x_sst_sgs_gf_dsm_ms_fl222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0600",
			"CanFilterID": "0x0580",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "10"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C7300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_ms_fr205_x_sst_sgs_gf_dsm_ms_fr205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0602",
			"CanFilterID": "0x0582",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "10"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C7400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_ms_fr222_x_sst_sgs_gf_dsm_ms_fr222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0602",
			"CanFilterID": "0x0582",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "10"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C7600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_ms_rl222_x_sst_sgs_gf_dsm_ms_rl222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0604",
			"CanFilterID": "0x0584",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "10"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C7800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_ms_rr222_x_sst_sgs_gf_dsm_ms_rr222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0606",
			"CanFilterID": "0x0586",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "10"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C7900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_wm_fl222_x_sst_sgs_gf_dsm_wm_fl222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0600",
			"CanFilterID": "0x0580",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0F"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C7A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_wm_fr222_x_sst_sgs_gf_dsm_wm_fr222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0602",
			"CanFilterID": "0x0582",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0F"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C7B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_wrb_rl222_x_sst_sgs_gf_dsm_wrb_rl222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0604",
			"CanFilterID": "0x0584",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0F"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C7C00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_wrb_rr222_x_sst_sgs_gf_dsm_wrb_rr222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0606",
			"CanFilterID": "0x0586",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0F"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C7F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dspc_222_x_sst_sgs_gf_dspc_222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x063B",
			"CanFilterID": "0x05BB",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C6000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dtr212_x_sst_sgs_gf_dtr212_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_DTR212_X_cv_DTR212_X_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_DTR212_X_SG_Einstieg_DTR212_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0702",
			"CanFilterID": "0x04a0",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802C6100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dtr222_x_sst_sgs_gf_dtr222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0741",
			"CanFilterID": "0x0721",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C6300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ec222_x_sst_sgs_gf_ec222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0609",
			"CanFilterID": "0x0589",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0C"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C6400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_efb221_x_sst_sgs_gf_efb221_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0732",
			"CanFilterID": "0x04A6",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C6500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_egs53_x_sst_sgs_gf_egs53_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07e1",
			"CanFilterID": "0x07e9",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802C6700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ehps221_x_sst_sgs_gf_ehps221_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06B2",
			"CanFilterID": "0x0496",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802C6800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_eis222_x_sst_sgs_gf_eis222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0607",
			"CanFilterID": "0x0587",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C6900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_eis_204_x_sst_sgs_gf_eis_204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0612",
			"CanFilterID": "0x0482",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F151",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"1155802C6F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_epkb222_x_sst_sgs_gf_epkb222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0654",
			"CanFilterID": "0x05D4",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C9000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_eps205_tk_x_sst_sgs_gf_eps205_tk_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0745",
			"CanFilterID": "0x0725",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C9100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_eps205_zf_x_sst_sgs_gf_eps205_zf_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0745",
			"CanFilterID": "0x0725",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C9200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_eps222_tk_x_sst_sgs_gf_eps222_tk_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0745",
			"CanFilterID": "0x0725",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C9300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_eps222_zf_x_sst_sgs_gf_eps222_zf_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0745",
			"CanFilterID": "0x0725",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C9700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_esp205_x_sst_sgs_gf_esp205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E2",
			"CanFilterID": "0x07EA",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C9800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_esp205_amg_odx_sst_sgs_gf_esp205_amg_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E2",
			"CanFilterID": "0x07EA",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802C9D00": {
		"FiltEleInfo": {
			"AddFilter": "ECU1_FxFE_Tempomatkodierung%ja",
			"FilterRelatedCmd": "0x2119",
			"FilterCount": "1",
			"Filter1": [
				"1",
				"2",
				"8",
				"ECU_ESP4_FxFE_PML%ja",
				""
			]
		},
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_esp_e1_x_sst_sgs_gf_esp_e1_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0632",
			"CanFilterID": "0x0486",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802C8100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ezs166_x_sst_sgs_gf_ezs166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_ezs166_x_sg_einstieg_ezs166_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_EZS166_x_cv_EZS166_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0612",
			"CanFilterID": "0x0482",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F154",
				"0x22F1A0",
				"0x22F155"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802C8200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_fcw222_x_sst_sgs_gf_fcw222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0655",
			"CanFilterID": "0x05D5",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C8400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ffap205_x_sst_sgs_gf_ffap205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x065C",
			"CanFilterID": "0x05DC",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C8500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_flanfs222_x_sst_sgs_gf_flanfs222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0761",
			"CanFilterID": "0x0760",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C8700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_fscm212_x_sst_sgs_gf_fscm212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06fa",
			"CanFilterID": "0x049f",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802C8800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_fscm221_x_sst_sgs_gf_fscm221_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06FA",
			"CanFilterID": "0x049F",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802C8B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_fscm_amg_pt_a_x_sst_sgs_gf_fscm_amg_pt_a_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06FA",
			"CanFilterID": "0x049F",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802C8C00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_fscm_amg_pt_b_x_sst_sgs_gf_fscm_amg_pt_b_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07AA",
			"CanFilterID": "0x04B5",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802C8D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_fscm_ec_x_sst_sgs_gf_fscm_ec_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_FSCM_EC_X_SG_Einstieg_FSCM_EC_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_FSCM_EC_X_cv_FSCM_EC_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07e3",
			"CanFilterID": "0x07eb",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802C8E00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_fscm_gen4_x_sst_sgs_gf_fscm_gen4_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E3",
			"CanFilterID": "0x07EB",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802C8F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_fu_x_sst_sgs_gf_fu_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_FU_X_cv_FU_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0763",
			"CanFilterID": "0x04ec",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802CB000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_fu5s1_x_sst_sgs_gf_fu5s1_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_FU5S1_X_SG_Einstieg_FU5S1_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_FU5S1_X_cv_FU5S1_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x054A",
			"CanFilterID": "0x054F",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802CB100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_fu_222_x_sst_sgs_gf_fu_222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0712",
			"CanFilterID": "0x0702",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CB300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_fwlpd222_x_sst_sgs_gf_fwlpd222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0608",
			"CanFilterID": "0x0588",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "05"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CB500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_fwlpp222_x_sst_sgs_gf_fwlpp222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060C",
			"CanFilterID": "0x058C",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "05"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CB700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_gdo222_x_sst_sgs_gf_gdo222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0609",
			"CanFilterID": "0x0589",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "03"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CB800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hli_fl212_x_sst_sgs_gf_hli_fl212_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_hli_fl212_x_sg_einstieg_hli_fl212_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_HLI_FL212_X_cv_HLI_FL212_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x076a",
			"CanFilterID": "0x04ad",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802CB900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hli_fl222_x_sst_sgs_gf_hli_fl222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0650",
			"CanFilterID": "0x05D0",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CBB00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hli_fr212_x_sst_sgs_gf_hli_fr212_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_HLI_FR212_X_sg_einstieg_HLI_FR212_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_HLI_FR212_X_cv_HLI_FR212_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0772",
			"CanFilterID": "0x04ae",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802CBC00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hli_fr222_x_sst_sgs_gf_hli_fr222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0656",
			"CanFilterID": "0x05D6",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CBE00": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%HLM_LINKS",
			"FilterRelatedCmd": "0x2177",
			"FilterCount": "1",
			"Filter1": [
				"1",
				"5",
				"8",
				"",
				"ECU1_FxFE_Niveausensoren%verbaut"
			]
		},
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hlmlt_204_x_sst_sgs_gf_hlmlt_204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x076A",
			"CanFilterID": "0x04AD",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802CBF00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_HLMLT_X204_X_sst_sgs_gf_HLMLT_X204_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x076A",
			"CanFilterID": "0x04AD",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802CA000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hlmrt_204_x_sst_sgs_gf_hlmrt_204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0772",
			"CanFilterID": "0x04AE",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802CA100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_HLMRT_X204_X_sst_sgs_gf_HLMRT_X204_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0772",
			"CanFilterID": "0x04AE",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802CA200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hu5_x_sst_sgs_gf_hu5_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_hu5_x_sg_einstieg_hu5_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_hu5_x_cv_hu5_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0638",
			"CanFilterID": "0x05B8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802CA500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hud222_x_sst_sgs_gf_hud222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0642",
			"CanFilterID": "0x05C2",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CA700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_HU_204_X_sst_sgs_gf_HU_204_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0652",
			"CanFilterID": "0x048A",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x04",
				"0x9F",
				"0x04",
				"0x4A",
				"0x04",
				"0x4D"
			],
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x21E1",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x1A9E",
				"0x1A9F"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802CA900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hvac222_x_sst_sgs_gf_hvac222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0611",
			"CanFilterID": "0x0591",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CAA00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_HVAC_204_X_sst_sgs_gf_HVAC_204_X_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_HVAC_204_X_SG_Einstieg_HVAC_204_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_HVAC_204_X_cv_HVAC_204_X_xml"
		},
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x22FD13",
			"FilterCount": "1",
			"Filter1": [
				"1",
				"10",
				"1",
				"ECU1_FxFE_IF_DBE_CAN%ja",
				"ECU1_FxFE_IF_DBE_CAN%nein"
			]
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06A3",
			"CanFilterID": "0x04D4",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x05",
				"0x3F"
			],
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802CAC00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hvac_f222_x_sst_sgs_gf_hvac_f222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0611",
			"CanFilterID": "0x0591",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "02"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CAD00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hvac_r205_x_sst_sgs_gf_hvac_r205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0611",
			"CanFilterID": "0x0591",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "01"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x%1%"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CAE00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hvac_r222_x_sst_sgs_gf_hvac_r222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0611",
			"CanFilterID": "0x0591",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "01"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CD100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ibs222_x_sst_sgs_gf_ibs222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0609",
			"CanFilterID": "0x0589",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "01"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CD300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ibsm3g205_r1_x_sst_sgs_gf_ibsm3g205_r1_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0625",
			"CanFilterID": "0x05A5",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CD400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ibsm3g205_r4_x_sst_sgs_gf_ibsm3g205_r4_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0626",
			"CanFilterID": "0x05A6",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CD500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ic222_x_sst_sgs_gf_ic222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0641",
			"CanFilterID": "0x05C1",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CDB00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ihtm205_x_sst_sgs_gf_ihtm205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0611",
			"CanFilterID": "0x0591",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "7A"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CDD00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ihtm222_x_sst_sgs_gf_ihtm222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0613",
			"CanFilterID": "0x0593",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CDE00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ihtmrc205_x_sst_sgs_gf_ihtmrc205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0611",
			"CanFilterID": "0x0591",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "03"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CC900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_kg166_x_sst_sgs_gf_kg166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_kg166_x_sg_einstieg_kg166_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_KG166_x_cv_KG166_x_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_KG166_X_act_KG166_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x068b",
			"CanFilterID": "0x04d1",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802CCA00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_kg222_x_sst_sgs_gf_kg222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0620",
			"CanFilterID": "0x05A0",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CCC00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_kg_204_x_sst_sgs_gf_kg_204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x068b",
			"CanFilterID": "0x04d1",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802CCD00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_x_sst_sgs_gf_lcu_fl212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07BF",
			"CanFilterID": "0x07C7",
			"CanSpecialID": "08",
			"OtherECUID": "076A",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CCE00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_lcu_fl222_x_sst_sgs_gf_lcu_fl222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0650",
			"CanFilterID": "0x05D0",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "08"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CF000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_x_sst_sgs_gf_lcu_fr212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07CF",
			"CanFilterID": "0x07D7",
			"CanSpecialID": "08",
			"OtherECUID": "0772",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CF100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_lcu_fr222_x_sst_sgs_gf_lcu_fr222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0656",
			"CanFilterID": "0x05D6",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "08"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CF500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_lisb205_x_sst_sgs_gf_lisb205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0609",
			"CanFilterID": "0x0589",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0B"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CF600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_lrr205_x_sst_sgs_gf_lrr205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0742",
			"CanFilterID": "0x0722",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CF800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_lrsm222_x_sst_sgs_gf_lrsm222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0609",
			"CanFilterID": "0x0589",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0B"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CF900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ltcu222_x_sst_sgs_gf_ltcu222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x061E",
			"CanFilterID": "0x059E",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CFA00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mcmsfl221_x_sst_sgs_gf_mcmsfl221_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0663",
			"CanFilterID": "0x04CC",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CFB00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mcmsfr221_x_sst_sgs_gf_mcmsfr221_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x066B",
			"CanFilterID": "0x04CD",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CFC00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mcms_fl222_x_sst_sgs_gf_mcms_fl222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0610",
			"CanFilterID": "0x0590",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CFD00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mcms_fr222_x_sst_sgs_gf_mcms_fr222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0612",
			"CanFilterID": "0x0592",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CFE00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mcms_rl222_x_sst_sgs_gf_mcms_rl222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0614",
			"CanFilterID": "0x0594",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CFF00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mcms_rr222_x_sst_sgs_gf_mcms_rr222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0616",
			"CanFilterID": "0x0596",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CE200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"FiltEleInfo": {
			"AddFilter": "FxFE%BR_MIT_SD",
			"FilterRelatedCmd": "0x217E",
			"FilterCount": "2",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"10",
				"35",
				"1",
				"01",
				"ECU1_FxFE_Tankdichte-Pruefung%Tankdichtepruefung aktiviert"
			],
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"10",
				"35",
				"1",
				"01",
				"ECU1_FxFE_Tankdichtheitspruefung%Tankdichtheitspruefung aktiviert"
			]
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_me97_x_sst_sgs_gf_me97_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_me97_x_SG_Einstieg_ME97_X_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_me97_x_act_me97_x_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_me97_x_adapt_me97_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07e0",
			"CanFilterID": "0x07e8",
			"FlowDataCtrl": "0x60300805"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89",
				"0x8B"
			]
		}
	},
	"1155802CE300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_me97amg_x_sst_sgs_gf_me97amg_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_me97amg_x_SG_Einstieg_me97amg_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_me97amg_x_cv_me97amg_x_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_me97amg_x_act_me97amg_x_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_me97amg_x_adapt_me97amg_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07e0",
			"CanFilterID": "0x07e8",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89",
				"0x8B"
			]
		}
	},
	"1155802CE400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_med177_x_sst_sgs_gf_med177_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_med177_x_SG_Einstieg_med177_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_MED177_X_cv_MED177_X_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_med177_x_act_med177_x_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_med177_x_adapt_med177_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802CE600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_med177v6la_x_sst_sgs_gf_med177v6la_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_med177v6la_x_SG_Einstieg_med177v6la_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_MED177V6LA_X_cv_MED177V6LA_X_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_MED177V6LA_X_act_MED177V6LA_X_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_MED177V6LA_X_adapt_MED177V6LA_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802CE700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_med97_x_sst_sgs_gf_med97_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_med97_x_SG_Einstieg_med97_x_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_med97_x_act_med97_x_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_med97_x_adapt_med97_x_xml"
		},
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x217E",
			"FilterCount": "6",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"10",
				"58",
				"1",
				"01",
				"ECU_MED97_FxFE_ROZ-Korr.%ROZ-Korr.aktiviert"
			],
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"10",
				"59",
				"1",
				"01",
				"ECU_MED97_FxFE_MKV-Korrektur%MKV-Korr. aktiviert"
			],
			"Filter3": [
				"KwdTyp_VCD",
				"1",
				"10",
				"5B",
				"1",
				"01",
				"ECU_MED97_FxFE_NSoll-Korr.P/N%NSoll-Korr.P/N aktiviert"
			],
			"Filter4": [
				"KwdTyp_VCD",
				"1",
				"10",
				"5C",
				"1",
				"01",
				"ECU_MED97_FxFE_NSoll-Korr.Drive%NSoll-Korr.Drive aktiviert"
			],
			"Filter5": [
				"KwdTyp_VCD",
				"1",
				"10",
				"5D",
				"1",
				"01",
				"ECU_MED97_FxFE_Laufunruhekorrektur (LUR-korr.)%LUR-korr. aktiviert"
			],
			"Filter6": [
				"KwdTyp_VCD",
				"1",
				"10",
				"18",
				"5",
				"03",
				"BAUREIHE%BR204"
			]
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07e0",
			"CanFilterID": "0x07e8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89",
				"0x8B"
			]
		}
	},
	"1155802CE900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mmpc222_x_sst_sgs_gf_mmpc222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0653",
			"CanFilterID": "0x05D3",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CEA00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mms166_f2_x_sst_sgs_gf_mms166_f2_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0449",
			"CanFilterID": "0x07a9",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CEB00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mms166_f3_x_sst_sgs_gf_mms166_f3_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x044a",
			"CanFilterID": "0x07b1",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CEC00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mms166_r1_x_sst_sgs_gf_mms166_r1_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x044c",
			"CanFilterID": "0x07c1",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CED00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mms166_r2_x_sst_sgs_gf_mms166_r2_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x044d",
			"CanFilterID": "0x07c9",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802CEE00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mms166_r4_x_sst_sgs_gf_mms166_r4_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x044f",
			"CanFilterID": "0x07d1",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D1400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mpm_x_sst_sgs_gf_mpm_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_MPM_X_sg_einstieg_MPM_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_MPM_X_cv_MPM_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0683",
			"CanFilterID": "0x04d0",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802D1500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mpm222_x_sst_sgs_gf_mpm222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x061A",
			"CanFilterID": "0x059A",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D1600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mpm_204_x_sst_sgs_gf_mpm_204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0683",
			"CanFilterID": "0x04D0",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802D1700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_nbr_f2_x_sst_sgs_gf_nbr_f2_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0449",
			"CanFilterID": "0x07a9",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D1800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_nbr_f3_x_sst_sgs_gf_nbr_f3_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x044a",
			"CanFilterID": "0x07b1",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D1900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_nbr_r1_x_sst_sgs_gf_nbr_r1_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x044c",
			"CanFilterID": "0x07c1",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D1A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_nbr_r4_x_sst_sgs_gf_nbr_r4_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x044f",
			"CanFilterID": "0x07d1",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D1C00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_nv222_x_sst_sgs_gf_nv222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0643",
			"CanFilterID": "0x05C3",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D0000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ocm222_x_sst_sgs_gf_ocm222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0645",
			"CanFilterID": "0x05C5",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "17"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D0300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ocm_204_x_sst_sgs_gf_ocm_204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06bb",
			"CanFilterID": "0x04d7",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802D0500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ohcm222_x_sst_sgs_gf_ohcm222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0609",
			"CanFilterID": "0x0589",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0A"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D0600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_orc222_x_sst_sgs_gf_orc222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0645",
			"CanFilterID": "0x05C5",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D0800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_orc_204_x_sst_sgs_gf_orc_204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x064A",
			"CanFilterID": "0x0489",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"1155802D0900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_park222_x_sst_sgs_gf_park222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0743",
			"CanFilterID": "0x0723",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D0A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_perfume222_x_sst_sgs_gf_perfume222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0611",
			"CanFilterID": "0x0591",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "4E"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D0B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_pfds221_x_sst_sgs_gf_pfds221_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x065b",
			"CanFilterID": "0x04cb",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802D0D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_pmcms222_x_sst_sgs_gf_pmcms222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0617",
			"CanFilterID": "0x0597",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D0E00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_PMCMS_STAR0_1_X_SG_Einstieg_PMCMS_STAR0_1_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_PMCMS_STAR0_1_X_cv_PMCMS_STAR0_1_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x065B",
			"CanFilterID": "0x04CB",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802D3000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_pmcu_fl222_x_sst_sgs_gf_pmcu_fl222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0610",
			"CanFilterID": "0x0590",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0A"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D3200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_pmcu_fr222_x_sst_sgs_gf_pmcu_fr222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0612",
			"CanFilterID": "0x0592",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0A"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D3300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_pmcu_rl222_x_sst_sgs_gf_pmcu_rl222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0614",
			"CanFilterID": "0x0594",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0A"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D3400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_pmcu_rr222_x_sst_sgs_gf_pmcu_rr222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0616",
			"CanFilterID": "0x0596",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0A"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D3600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_psmd205_x_sst_sgs_gf_psmd205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060D",
			"CanFilterID": "0x058D",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0D"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D3800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_psmp205_x_sst_sgs_gf_psmp205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060D",
			"CanFilterID": "0x058D",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "04"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D3900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ptcm_x_sst_sgs_gf_ptcm_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0693",
			"CanFilterID": "0x04d2",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802D3B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ptcm222_x_sst_sgs_gf_ptcm222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0615",
			"CanFilterID": "0x0595",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D3D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ptgw1t_x_sst_sgs_gf_ptgw1t_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0447",
			"CanFilterID": "0x044E",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D3E00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_pts_204_x_sst_sgs_gf_pts_204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x069B",
			"CanFilterID": "0x04D3",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802D2300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_rbs222_x_sst_sgs_gf_rbs222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E2",
			"CanFilterID": "0x07EA",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D2500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_rbtmfl222_x_sst_sgs_gf_rbtmfl222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0640",
			"CanFilterID": "0x05C0",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D2700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_rbtmfr222_x_sst_sgs_gf_rbtmfr222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0647",
			"CanFilterID": "0x05C7",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D2900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_rdu_222_x_sst_sgs_gf_rdu_222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0742",
			"CanFilterID": "0x0722",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D2B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_roof_204_x_sst_sgs_gf_roof_204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06E3",
			"CanFilterID": "0x04DC",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802D2F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"FiltEleInfo": {
			"FilterRelatedCmd": [
				"0x220304",
				"0x220320",
				"0x22030D",
				"0x220308"
			],
			"FilterCount": "5",
			"Filter1": [
				"1",
				"10",
				"2",
				"FxFE%DBE_unvernetzt vorhanden",
				"FxFE%DBE_unvernetzt nicht vorhanden"
			],
			"Filter2": [
				"1",
				"11",
				"1",
				"FxFE%Fu???raumbeleuchtung vorhanden",
				""
			],
			"Filter3": [
				"2",
				"6",
				"1",
				"FxFE%ZV_hinten vorhanden",
				""
			],
			"Filter4": [
				"3",
				"3",
				"1",
				"FxFE%Zusatzwasserpumpe vorhanden",
				""
			],
			"Filter5": [
				"4",
				"3",
				"2",
				"FxFE%WW_Schlauchheizung vorhanden",
				""
			]
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_samf_204_x_sst_sgs_gf_samf_204_x_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_samf_204_x_act_samf_204_x_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_samf_204_x_adapt_samf_204_x_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06f3",
			"CanFilterID": "0x04de",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802D5000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"FiltEleInfo": {
			"AddFilter": "FxFE%Variante_W",
			"FilterRelatedCmd": [
				"0x220522",
				"0x220510"
			],
			"FilterCount": "15",
			"Filter1": [
				"1",
				"3",
				"3",
				"FxFE%FC Heckscheibenheizung freigegeben",
				"",
				"3"
			],
			"Filter2": [
				"1",
				"3",
				"252",
				"FxFE%FC Sitzheizung vorn freigegeben",
				"",
				"3"
			],
			"Filter3": [
				"1",
				"5",
				"2",
				"ECU_SAMH204_FxFE_FLT_SIDEMARKER_A_RE_OL%freigegeben",
				""
			],
			"Filter4": [
				"1",
				"12",
				"18",
				"FxFE%FC Sitzlehnenneigung hinten freigegeben",
				"",
				"3"
			],
			"Filter5": [
				"1",
				"12",
				"108",
				"FxFE%FC Sitzlehnenverriegelung hinten freigegeben",
				"",
				"3"
			],
			"Filter6": [
				"1",
				"13",
				"3",
				"FxFE%FC Heckrollo freigegeben",
				"",
				"3"
			],
			"Filter7": [
				"1",
				"13",
				"60",
				"FxFE%FC Relais Sitzeinstellung freigegeben",
				"",
				"3"
			],
			"Filter8": [
				"1",
				"18",
				"1",
				"FxFE%FC Heckwischer freigegeben",
				""
			],
			"Filter9": [
				"1",
				"12",
				"128",
				"FxFE%FC Lordose freigegeben",
				""
			],
			"Filter10": [
				"1",
				"12",
				"1",
				"FxFE%FC Kopfst???tzentriegelung hinten freigegeben",
				""
			],
			"Filter11": [
				"2",
				"7",
				"2",
				"ECU_SAMH204_FxFE_GSS_MI_FKT%freigegeben",
				""
			],
			"Filter12": [
				"2",
				"7",
				"4",
				"ECU_SAMH204_FxFE_GSS_RE_FKT%freigegeben",
				""
			],
			"Filter13": [
				"2",
				"7",
				"1",
				"ECU_SAMH204_FxFE_GSS_LI_FKT%freigegeben",
				""
			],
			"Filter14": [
				"1",
				"10",
				"1",
				"ECU_SAMH204_FxFE_FLT_SPERRKL_SWITCH_FUNC_ERROR%freigegeben",
				""
			],
			"Filter15": [
				"1",
				"21",
				"32",
				"ECU_SAMH204_FxFE_FLT_TIMEOUT_PTCM%freigegeben",
				""
			]
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_samr_204_x_sst_sgs_gf_samr_204_x_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_samr_204_x_adapt_samr_204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06fb",
			"CanFilterID": "0x04df",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802D5100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_sccm222_x_sst_sgs_gf_sccm222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0746",
			"CanFilterID": "0x0726",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D5200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_sccm_204_x_sst_sgs_gf_sccm_204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0622",
			"CanFilterID": "0x0484",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802D5300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_scrcm_x_sst_sgs_gf_scrcm_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_SCRCM_X_sg_einstieg_SCRCM_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_SCRCM_X_cv_SCRCM_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07e4",
			"CanFilterID": "0x07ec",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802D5400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_scrcm3_x_sst_sgs_gf_scrcm3_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_SCRCM3_X_sg_einstieg_SCRCM3_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_SCRCM3_X_cv_SCRCM3_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E4",
			"CanFilterID": "0x07EC",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802D5500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_scu205_x_sst_sgs_gf_scu205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x061C",
			"CanFilterID": "0x059C",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D5600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_sdar221_x_sst_sgs_gf_sdar221_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_sdar221_x_sg_einstieg_sdar221_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_SDAR221_X_cv_SDAR221_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06c9",
			"CanFilterID": "0x0459",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802D5700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_sdcdc222_x_sst_sgs_gf_sdcdc222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0609",
			"CanFilterID": "0x0589",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "09"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D5800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_seatd222_x_sst_sgs_gf_seatd222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0608",
			"CanFilterID": "0x0588",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D5A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_seatp222_x_sst_sgs_gf_seatp222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060C",
			"CanFilterID": "0x058C",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D5C00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_seat_rl222_x_sst_sgs_gf_seat_rl222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060A",
			"CanFilterID": "0x058A",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D5D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_seat_rr222_x_sst_sgs_gf_seat_rr222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060E",
			"CanFilterID": "0x058E",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D5F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_shmd222_x_sst_sgs_gf_shmd222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0608",
			"CanFilterID": "0x0588",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "21"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D4000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_shmp222_x_sst_sgs_gf_shmp222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060C",
			"CanFilterID": "0x058C",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "21"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D4100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_shm_fl205_x_sst_sgs_gf_shm_fl205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060D",
			"CanFilterID": "0x058D",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "21"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D4200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_shm_fr205_x_sst_sgs_gf_shm_fr205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060D",
			"CanFilterID": "0x058D",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "20"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D4300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_shm_r_x_sst_sgs_gf_shm_r_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060D",
			"CanFilterID": "0x058D",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "23"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D4400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_shm_rl_x_sst_sgs_gf_shm_rl_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060A",
			"CanFilterID": "0x058A",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "21"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D4500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_shm_rr_x_sst_sgs_gf_shm_rr_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060E",
			"CanFilterID": "0x058E",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "21"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D4600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_sim271ke20_x_sst_sgs_gf_sim271ke20_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x2701",
				"0x1A9C",
				"0x1A9D",
				"0x1A9E"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802D4700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_sim271kecng_x_sst_sgs_gf_sim271kecng_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07e0",
			"CanFilterID": "0x07e8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802D4900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_siren222_x_sst_sgs_gf_siren222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0618",
			"CanFilterID": "0x0598",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "02"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D4B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_siren222star1_x_sst_sgs_gf_siren222star1_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x063B",
			"CanFilterID": "0x04C7",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "02"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x%1%"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D4C00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_smpc222_x_sst_sgs_gf_smpc222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0740",
			"CanFilterID": "0x0720",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D7200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_sound_204_x_sst_sgs_gf_sound_204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0691",
			"CanFilterID": "0x0452",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802D7300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_sound_204_bao_x_sst_sgs_gf_sound_204_bao_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_SOUND_204_BAO_X_SG_Einstieg_SOUND_204_BAO_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_SOUND_204_BAO_X_cv_SOUND_204_BAO_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0691",
			"CanFilterID": "0x0452",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802D7500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_spc197_x_sst_sgs_gf_spc197_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0692",
			"CanFilterID": "0x0492",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D7C00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_svs205_x_sst_sgs_gf_svs205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0644",
			"CanFilterID": "0x05C4",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D7E00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_svs222_x_sst_sgs_gf_svs222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0644",
			"CanFilterID": "0x05C4",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D6000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_swsp222_x_sst_sgs_gf_swsp222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0746",
			"CanFilterID": "0x0726",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "1B"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D6300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tb5_dab_x_sst_sgs_gf_tb5_dab_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TB5_DAB_X_sg_einstieg_TB5_DAB_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TB5_DAB_X_cv_TB5_DAB_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0714",
			"CanFilterID": "0x0704",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802D6400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tb5_tv_sdars_x_sst_sgs_gf_tb5_tv_sdars_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TB5_TV_SDARS_X_sg_einstieg_TB5_TV_SDARS_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TB5_TV_SDARS_X_cv_TB5_TV_SDARS_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0710",
			"CanFilterID": "0x0700",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802D6700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_teljp_204_x_sst_sgs_gf_teljp_204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0783",
			"CanFilterID": "0x04f0",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802D6900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tm205_x_sst_sgs_gf_tm205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0619",
			"CanFilterID": "0x0599",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D6A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tm222_x_sst_sgs_gf_tm222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0619",
			"CanFilterID": "0x0599",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D6E00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tpm_204_x_sst_sgs_gf_tpm_204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0643",
			"CanFilterID": "0x04C8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802E6900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_snd5_odx_sst_sgs_gf_snd5_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_snd5_odx_sg_einstieg_snd5_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_snd5_odx_cv_snd5_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0711",
			"CanFilterID": "0x0701",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E6A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_sogestar2_odx_sst_sgs_gf_sogestar2_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_sogestar2_odx_sg_einstieg_sogestar2_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_sogestar2_odx_cv_sogestar2_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x064E",
			"CanFilterID": "0x05CE",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E6B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_spc222_odx_sst_sgs_gf_spc222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_spc222_odx_sg_einstieg_spc222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_spc222_odx_cv_spc222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0744",
			"CanFilterID": "0x0724",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E6D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_svs205_odx_sst_sgs_gf_svs205_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0644",
			"CanFilterID": "0x05C4",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E6E00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_svs222_odx_sst_sgs_gf_svs222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_svs222_odx_sg_einstieg_svs222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_svs222_odx_cv_svs222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0644",
			"CanFilterID": "0x05C4",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E6F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_swsp222_odx_sst_sgs_gf_swsp222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0746",
			"CanFilterID": "0x0726",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "1B"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E9000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tb5_dab_odx_sst_sgs_gf_tb5_dab_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_tb5_dab_odx_sg_einstieg_tb5_dab_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_tb5_dab_odx_cv_tb5_dab_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0714",
			"CanFilterID": "0x0704",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E9100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tb5_tv_sdars_odx_sst_sgs_gf_tb5_tv_sdars_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_tb5_tv_sdars_odx_sg_einstieg_tb5_tv_sdars_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_tb5_tv_sdars_odx_cv_tb5_tv_sdars_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0710",
			"CanFilterID": "0x0700",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E9400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tm205_odx_sst_sgs_gf_tm205_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_tm205_odx_sg_einstieg_tm205_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_tm205_odx_cv_tm205_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0619",
			"CanFilterID": "0x0599",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E9500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tm222_odx_sst_sgs_gf_tm222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_tm222_odx_sg_einstieg_tm222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_tm222_odx_cv_tm222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0619",
			"CanFilterID": "0x0599",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E9600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tpad205_odx_sst_sgs_gf_tpad205_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_tpad205_odx_sg_einstieg_tpad205_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_tpad205_odx_cv_tpad205_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0637",
			"CanFilterID": "0x05B7",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E9700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tpm222_odx_sst_sgs_gf_tpm222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_tpm222_odx_SG_Einstieg_tpm222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_tpm222_odx_cv_tpm222_odx_xml",
			"DoDisplay": "N"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_tpm222_odx_act_tpm222_odx_xml",
			"DoDisplay": "N"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_tpm222_odx_adapt_tpm222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0652",
			"CanFilterID": "0x05D2",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802E9800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_TPM_172_odx_sst_sgs_gf_TPM_172_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TPM_172_ODXx_SG_Einstieg_TPM_172_ODx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TPM_172_ODX_cv_TPM_172_ODX_xml",
			"DoDisplay": "N"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TPM_172_ODX_act_TPM_172_ODX_xml",
			"DoDisplay": "N"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TPM_172_ODX_adapt_TPM_172_ODX_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0642",
			"CanFilterID": "0x0488",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802E9900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tssr222_odx_sst_sgs_gf_tssr222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_tssr222_odx_sg_einstieg_tssr222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_tssr222_odx_cv_tssr222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x061C",
			"CanFilterID": "0x059C",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E9A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_twtr_fl222_odx_sst_sgs_gf_twtr_fl222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0600",
			"CanFilterID": "0x0580",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "13"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E9B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_twtr_fr222_odx_sst_sgs_gf_twtr_fr222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0602",
			"CanFilterID": "0x0582",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "13"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E9C00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_twtr_rl222_odx_sst_sgs_gf_twtr_rl222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0604",
			"CanFilterID": "0x0584",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "13"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E9D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_twtr_rr222_odx_sst_sgs_gf_twtr_rr222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0606",
			"CanFilterID": "0x0586",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "13"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E9E00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ubfl205_odx_sst_sgs_gf_ubfl205_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x063A",
			"CanFilterID": "0x05BA",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "24"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E9F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ubfr205_odx_sst_sgs_gf_ubfr205_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x063A",
			"CanFilterID": "0x05BA",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "25"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E8100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_vgs4nag2_odx_sst_sgs_gf_vgs4nag2_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_vgs4nag2_odx_sg_einstieg_vgs4nag2_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_vgs4nag2_odx_cv_vgs4nag2_odx_xml",
			"DoDisplay": "N"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_vgs4nag2_odx_act_vgs4nag2_odx_xml",
			"DoDisplay": "N"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_vgs4nag2_odx_adapt_vgs4nag2_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E1",
			"CanFilterID": "0x07E9",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E8200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_vgsnag3_odx_sst_sgs_gf_vgsnag3_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_vgsnag3_odx_sg_einstieg_vgsnag3_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_vgsnag3_odx_cv_vgsnag3_odx_xml",
			"DoDisplay": "N"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_vgsnag3_odx_act_vgsnag3_odx_xml",
			"DoDisplay": "N"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_vgsnag3_odx_adapt_vgsnag3_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E1",
			"CanFilterID": "0x07E9",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802E8300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_vta222_odx_sst_sgs_gf_vta222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_vta222_odx_sg_einstieg_vta222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_vta222_odx_cv_vta222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0618",
			"CanFilterID": "0x0598",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E8400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_wpra205_odx_sst_sgs_gf_wpra205_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0609",
			"CanFilterID": "0x0589",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0E"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E8500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_wpra222_odx_sst_sgs_gf_wpra222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0609",
			"CanFilterID": "0x0589",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0E"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E8600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_wshtc222_odx_sst_sgs_gf_wshtc222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0611",
			"CanFilterID": "0x0591",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "10"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E8800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_rbs222_odx_sst_sgs_gf_rbs222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_rbs222_odx_sg_einstieg_rbs222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_rbs222_odx_cv_rbs222_odx_xml",
			"DoDisplay": "N"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_rbs222_odx_act_rbs222_odx_xml",
			"DoDisplay": "N"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_rbs222_odx_adapt_rbs222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E2",
			"CanFilterID": "0x07EA",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D81100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_orc_212_x_sst_sgs_gf_orc_212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x064A",
			"CanFilterID": "0x0489",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9B",
				"0x1A9D",
				"0x2102",
				"0x2158"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D81200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_SAMF_212_x_sst_sgs_gf_SAMF_212_x_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_samf_212_x_act_samf_212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06F3",
			"CanFilterID": "0x04DE",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D81400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dmfl_212_x_sst_sgs_gf_dmfl_212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0703",
			"CanFilterID": "0x04E0",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D81500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dmfr_212_x_sst_sgs_gf_dmfr_212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x070B",
			"CanFilterID": "0x04E1",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D81600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_eis_212_x_sst_sgs_gf_eis_212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0612",
			"CanFilterID": "0x0482",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"115580D81B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hlm_lt_212_x_sst_sgs_gf_hlm_lt_212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x076A",
			"CanFilterID": "0x04AD"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9B",
				"0x1A9D",
				"0x2102",
				"0x2158"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D81C00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hlm_rt_212_x_sst_sgs_gf_hlm_rt_212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0772",
			"CanFilterID": "0x04AE"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9B",
				"0x1A9D",
				"0x2102",
				"0x2158"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D81D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_HM_212_x_sst_sgs_gf_HM_212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x073B",
			"CanFilterID": "0x04E7",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x1A9E",
				"0x1A9F"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D80000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_sth212_x_sst_sgs_gf_sth212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06AB",
			"CanFilterID": "0x04D5",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9B",
				"0x1A9D",
				"0x2102",
				"0x2158"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D80300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_bms_gen1mod_x_sst_sgs_gf_bms_gen1mod_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E7",
			"CanFilterID": "0x07EF",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x221002"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D80400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_cgw231_x_sst_sgs_gf_cgw231_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_CGW231_X_sg_einstieg_CGW231_X_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0602",
			"CanFilterID": "0x0480",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"115580D80500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_cgw_212_x_sst_sgs_gf_cgw_212_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_CGW_212_X_sg_einstieg_CGW_212_X_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0602",
			"CanFilterID": "0x0480",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"115580D80700": {
		"DTCType": {
			"DBCondition": "pkw_motordie_cdi60ls_sst_gfcr60ls_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			],
			"AfterReferCmd": [
				"0x2701",
				"0x2709"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D80800": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%DPF"
		},
		"DTCType": {
			"DBCondition": "pkw_motordie_cdi6bin5eu6_sst_GFCR6BIN5EU6_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x2701",
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D80900": {
		"DTCType": {
			"DBCondition": "pkw_motordie_cdid3_sst_gfcrd3_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F150",
				"0x22F151",
				"0x22F111",
				"0x22F121",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D80B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ctrll218_x_sst_sgs_gf_ctrll218_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x078F",
			"CanFilterID": "0x0797",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"115580D80D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsi_x_sst_sgs_gf_dsi_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0792",
			"CanFilterID": "0x04B2",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D80E00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_eac212_x_sst_sgs_gf_eac212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06CA",
			"CanFilterID": "0x0499",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D80F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_efs212_x_sst_sgs_gf_efs212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x01078F",
			"CanFilterID": "0x010797",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D83100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_eps212_x_sst_SGS_GF_EPS212_X_XML"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06B2",
			"CanFilterID": "0x0496",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"115580D83200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_eps218_x_sst_sgs_gf_eps218_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_eps218_x_sg_einstieg_eps218_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_EPS218_X_cv_EPS218_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06B2",
			"CanFilterID": "0x0496",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"115580D83300": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_motor_fscu7_sst_GFFSCU7_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E3",
			"CanFilterID": "0x07EB",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D83400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_gdo166_x_sst_sgs_gf_gdo166_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x077F",
			"CanFilterID": "0x0787",
			"CanSpecialID": "03",
			"OtherECUID": "F04C",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D83900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_le_tube_x_sst_sgs_gf_le_tube_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E6",
			"CanFilterID": "0x07EE",
			"ChooseDsMenu": "TRUE",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D83D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_navbox45_x_sst_sgs_gf_navbox45_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_NAVBOX45_X_SG_Einstieg_NAVBOX45_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_NAVBOX45_X_CV_NAVBOX45_X_XML"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0633",
			"CanFilterID": "0x04C6",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D82400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_SAMF_172_X_sg_einstieg_SAMF_172_X_xml"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_SAMF_172_x_sst_sgs_gf_SAMF_172_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_SAMF_172_x_cv_SAMF_172_x_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_samf_172_x_act_samf_172_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06F3",
			"CanFilterID": "0x04DE",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D82500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_SAMR_212_x_sst_sgs_gf_SAMR_212_x_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_samr_212_x_adapt_samr_212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06FB",
			"CanFilterID": "0x04DF",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D82600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_SEATD172_x_sst_sgs_gf_SEATD172_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06C3",
			"CanFilterID": "0x04D8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B",
				"0x22F15D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D82A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tm_212_x_sst_sgs_gf_tm_212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06EB",
			"CanFilterID": "0x04DD",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D82B00": {
		"DTCType": {
			"DBCondition": "pkw_traktion_tpm3_sst_gftpm_221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0642",
			"CanFilterID": "0x0488",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"115580D82F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_UMI_x_sst_sgs_gf_UMI_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06B1",
			"CanFilterID": "0x0456",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9C",
				"0x1A9D",
				"0x1A9E",
				"0x1A9F",
				"0x1A9A",
				"0x1A9B",
				"0x210A",
				"0x210B",
				"0x21E1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D85100": {
		"DTCType": {
			"DBCondition": "pkw_tempomat_vrdu_sst_GFVRDU_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x063A",
			"CanFilterID": "0x0487",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84"
			]
		}
	},
	"115580D85300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ABR2XT_x_sst_sgs_gf_abr2xt_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0632",
			"CanFilterID": "0x0486",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D85400": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%HLM_LINKS"
		},
		"DTCType": {
			"DBCondition": "pkw_beleucht_alwrl204_sst_gfalwr204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x076A",
			"CanFilterID": "0x04AD",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D85500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_alwrl218_x_sst_sgs_gf_alwrl218_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x076A",
			"CanFilterID": "0x04AD",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D85600": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%HLM_RECHTS"
		},
		"DTCType": {
			"DBCondition": "pkw_beleucht_alwrr204_sst_gfalwr204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x0772",
			"CanFilterID": "0x04AE",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F150",
				"0x22F151",
				"0x22F111",
				"0x22F121",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D85700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_alwrr218_x_sst_sgs_gf_alwrr218_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0772",
			"CanFilterID": "0x04AE",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D85800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ars166_x_sst_sgs_gf_ars166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_ars166_x_sg_einstieg_ars166_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_ARS166_x_cv_ARS166_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0742",
			"CanFilterID": "0x04A8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D85900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_asbm_l_x_sst_sgs_gf_asbm_l_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x078F",
			"CanFilterID": "0x0797",
			"CanSpecialID": "07",
			"OtherECUID": "F04C",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D85A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_asbm_u_x_sst_sgs_gf_asbm_u_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x074F",
			"CanFilterID": "0x0757",
			"CanSpecialID": "02",
			"OtherECUID": "F04C",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D85B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_AS_207_x_sst_sgs_gf_AS_207_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x073B",
			"CanFilterID": "0x04E7",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1a87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x21B1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D85C00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_cbc_x_sst_sgs_gf_cbc_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cbc_x_sg_einstieg_cbc_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_CBC_x_cv_CBC_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06F3",
			"CanFilterID": "0x04DE",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D85D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_clock_x_sst_sgs_gf_clock_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x078F",
			"CanFilterID": "0x0797",
			"CanSpecialID": "08",
			"OtherECUID": "F034",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"115580D85E00": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%DPF"
		},
		"DTCType": {
			"DBCondition": "pkw_motordie_cdi6eu5_sst_gfcr6eu5_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D85F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_crcm172_x_sst_sgs_gf_crcm172_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x072B",
			"CanFilterID": "0x04E5",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D84000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_crcm197_x_sst_sgs_gf_crcm197_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x072B",
			"CanFilterID": "0x04E5",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D84100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_crcm231_x_sst_sgs_gf_crcm231_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x072B",
			"CanFilterID": "0x04E5",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D84200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_CRCM_207_x_sst_sgs_gf_CRCM_207_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x072B",
			"CanFilterID": "0x04E5",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D84700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dab45_x_sst_sgs_gf_dab45_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06A9",
			"CanFilterID": "0x0455",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x1A9E",
				"0x1A9F",
				"0x21A1",
				"0x21A5",
				"0x21E1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D84800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dct_x_sst_sgs_gf_dct_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E1",
			"CanFilterID": "0x07E9",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F1F0"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D84900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dmfl166_x_sst_sgs_gf_dmfl166_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_DMFL166_X_cv_DMFL166_X_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_DMFL166_X_SG_Einstieg_DMFL166_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0703",
			"CanFilterID": "0x04E0",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D84A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dmfr166_x_sst_sgs_gf_dmfr166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_DMFR166_X_sg_einstieg_DMFR166_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_DMFR166_X_cv_DMFR166_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x070B",
			"CanFilterID": "0x04E1",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D84B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dmrl166_x_sst_sgs_gf_dmrl166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_DMRL166_X_sg_einstieg_DMRL166_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_DMRL166_X_cv_DMRL166_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0713",
			"CanFilterID": "0x04E2",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D84C00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dmrr166_x_sst_sgs_gf_dmrr166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_DMRR166_X_sg_einstieg_DMRR166_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_DMRR166_X_cv_DMRR166_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x071B",
			"CanFilterID": "0x04E3",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D84D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ec166_x_sst_sgs_gf_ec166_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x077F",
			"CanFilterID": "0x0787",
			"CanSpecialID": "0C",
			"OtherECUID": "F04C",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F150",
				"0x22F151",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D84E00": {
		"DTCType": {
			"DBCondition": "pkw_traktion_rbs1_sst_gfrbs_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x06B2",
			"CanFilterID": "0x0496",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D84F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_eis166_x_sst_sgs_gf_eis166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_eis166_x_sg_einstieg_eis166_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_EIS166_X_cv_EIS166_X_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_EIS166_X_adapt_EIS166_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0612",
			"CanFilterID": "0x0482",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F10B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"115580D87000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_epkb166_x_sst_sgs_gf_epkb166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_epkb166_x_sg_einstieg_epkb166_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_EPKB166_x_cv_EPKB166_x_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_epkb166_x_act_epkb166_x_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_epkb166_x_adapt_epkb166_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0732",
			"CanFilterID": "0x04A6",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D87100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_eps246_x_sst_sgs_gf_eps246_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06B2",
			"CanFilterID": "0x0496",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D87200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_esp166_x_sst_sgs_gf_esp166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_ESP166_X_sg_einstieg_ESP166_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_ESP166_X_CV_ESP166_X_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_ESP166_X_act_ESP166_X_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_ESP166_X_adapt_ESP166_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0632",
			"CanFilterID": "0x0486",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D87300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_esp197_amg_x_sst_sgs_gf_esp197_amg_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0632",
			"CanFilterID": "0x0486",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D87400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_esp9mfa_x_sst_sgs_gf_esp9mfa_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0632",
			"CanFilterID": "0x0486",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D87500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ezs231_x_sst_sgs_gf_ezs231_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0612",
			"CanFilterID": "0x0482",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F1A0"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D87600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_fcw246_x_sst_sgs_gf_fcw246_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_fcw246_x_sg_einstieg_fcw246_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_FCW246_X_cv_FCW246_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x065A",
			"CanFilterID": "0x048B",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D87800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_fwlpp231_x_sst_sgs_gf_fwlpp231_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x071F",
			"CanFilterID": "0x0717",
			"CanSpecialID": "05",
			"OtherECUID": "F09C",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D87900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hlc166_x_sst_sgs_gf_hlc166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_HLC166_X_sg_einstieg_HLC166_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_HLC166_X_cv_HLC166_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x076A",
			"CanFilterID": "0x04AD",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D87A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hu45_x_sst_sgs_gf_hu45_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_HU45_X_SG_Einstieg_HU45_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_HU45_X_cv_HU45_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0652",
			"CanFilterID": "0x048A",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x04",
				"0x9F",
				"0x04",
				"0x4A",
				"0x04",
				"0x4D"
			],
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x1A9E",
				"0x1A9F",
				"0x2102",
				"0x210A",
				"0x210E",
				"0x210F",
				"0x2153",
				"0x2179",
				"0x21A1",
				"0x21A2",
				"0x21E1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D87B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hvac166_x_sst_sgs_gf_hvac166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_hvac166_x_sg_einstieg_hvac166_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_HVAC166_x_cv_HVAC166_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06A3",
			"CanFilterID": "0x04D4",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D87C00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hvac172_x_sst_sgs_gf_hvac172_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06A3",
			"CanFilterID": "0x04D4",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D87D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hvac197_x_sst_sgs_gf_hvac197_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06A3",
			"CanFilterID": "0x04D4",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"115580D87E00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hvac231_x_sst_sgs_gf_hvac231_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06A3",
			"CanFilterID": "0x04D4",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D87F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hvac246_x_sst_sgs_gf_hvac246_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06A3",
			"CanFilterID": "0x04D4",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D86000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hvacr166_x_sst_sgs_gf_hvacr166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_hvacr166_x_sg_einstieg_hvacr166_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_HVACR166_x_cv_HVACR166_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x074B",
			"CanFilterID": "0x04E9",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D86100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ibs166_x_sst_sgs_gf_ibs166_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x074F",
			"CanFilterID": "0x0757",
			"CanSpecialID": "01",
			"OtherECUID": "F04C",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D86200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ibsm212_r1_x_sst_sgs_gf_ibsm212_r1_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0672",
			"CanFilterID": "0x048E",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D86300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ibsm212_r4_x_sst_sgs_gf_ibsm212_r4_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x067A",
			"CanFilterID": "0x048F",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D86400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ic172_x_sst_sgs_gf_ic172_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_ic172_x_SG_Einstieg_ic172_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_IC172_X_cv_IC172_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060A",
			"CanFilterID": "0x0481",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x87",
				"0x89"
			]
		}
	},
	"115580D86500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ic197_x_sst_sgs_gf_ic197_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_ic197_x_SG_Einstieg_ic197_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_IC197_X_cv_IC197_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060A",
			"CanFilterID": "0x0481",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x87"
			]
		}
	},
	"115580D86600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ici_x_sst_sgs_gf_ici_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0773",
			"CanFilterID": "0x04EE",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x1A9E",
				"0x1A9F",
				"0x2179",
				"0x210A",
				"0x210C",
				"0x21E1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D86700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ihtm166_x_sst_sgs_gf_ihtm166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_ihtm166_x_sg_einstieg_ihtm166_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_IHTM166_x_cv_IHTM166_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06AB",
			"CanFilterID": "0x04D5",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D86800": {
		"DTCType": {
			"DBCondition": "pkw_fahrber_kg7_sst_gfkg216_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x068B",
			"CanFilterID": "0x04D1",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F150",
				"0x22F151",
				"0x22F111",
				"0x22F121",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D86900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_lamhl_x_sst_sgs_gf_lamhl_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07BF",
			"CanFilterID": "0x07C7",
			"CanSpecialID": "07",
			"OtherECUID": "F045",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D86A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_lamhr_x_sst_sgs_gf_lamhr_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07CF",
			"CanFilterID": "0x07D7",
			"CanSpecialID": "07",
			"OtherECUID": "F047",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D86B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_lamsl_x_sst_sgs_gf_lamsl_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07BF",
			"CanFilterID": "0x07C7",
			"CanSpecialID": "06",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D86C00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_lamsr_x_sst_sgs_gf_lamsr_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07CF",
			"CanFilterID": "0x07D7",
			"CanSpecialID": "06",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D86D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_lrr3_x_sst_sgs_gf_lrr3_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_LRR3_X_sg_einstieg_LRR3_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_LRR3_x_cv_LRR3_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0702",
			"CanFilterID": "0x04A0",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D86E00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_lrsm166_x_sst_sgs_gf_lrsm166_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x077F",
			"CanFilterID": "0x0787",
			"CanSpecialID": "0B",
			"OtherECUID": "F04C",
			"ChooseDsMenu": "TRUE",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D86F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ltcu172_x_sst_sgs_gf_ltcu172_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0623",
			"CanFilterID": "0x04C4",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D89000": {
		"DTCType": {
			"DBCondition": "pkw_motorott_med177_sst_gfmed177_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131",
				"0x221001"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D89100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_med40_x_sst_sgs_gf_med40_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_med40_x_SG_Einstieg_med40_x_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_med40_x_act_med40_x_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_med40_x_adapt_med40_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D89500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_offroad_x_sst_sgs_gf_offroad_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x078F",
			"CanFilterID": "0x0797",
			"CanSpecialID": "06",
			"OtherECUID": "F04C",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D89600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ohcm166_x_sst_sgs_gf_ohcm166_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x077F",
			"CanFilterID": "0x0787",
			"CanSpecialID": "0A",
			"OtherECUID": "F04C",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D89700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ohcm246_x_sst_sgs_gf_ohcm246_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x077F",
			"CanFilterID": "0x0787",
			"CanSpecialID": "0A",
			"OtherECUID": "F04C",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D89800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_orc166_x_sst_sgs_gf_orc166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_orc166_x_sg_einstieg_orc166_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_ORC166_x_cv_ORC166_x_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_orc166_x_act_orc166_x_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_orc166_x_adapt_orc166_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x064A",
			"CanFilterID": "0x0489",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22FA01"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D89900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ORC_172_x_sst_sgs_gf_ORC_172_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x064A",
			"CanFilterID": "0x0489",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"AccessEcuBefore": "Ecu_CGW_212",
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D89A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_pass166_x_sst_sgs_gf_pass166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_PASS166_X_SG_Einstieg_PASS166_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_pass166_x_cv_pass166_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060B",
			"CanFilterID": "0x058B",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D89D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ptcm166_x_sst_sgs_gf_ptcm166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_ptcm166_x_sg_einstieg_ptcm166_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_PTCM166_x_cv_PTCM166_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0693",
			"CanFilterID": "0x04D2",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D89E00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_pts218_x_sst_sgs_gf_pts218_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_pts218_x_sg_einstieg_pts218_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_PTS218_x_cv_PTS218_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x078A",
			"CanFilterID": "0x04B1",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D89F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_pts246_x_sst_sgs_gf_pts246_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x078A",
			"CanFilterID": "0x04B1",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D88000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_rbc166_x_sst_sgs_gf_rbc166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_RBC166_X_sg_einstieg_RBC166_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_RBC166_X_cv_RBC166_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06FB",
			"CanFilterID": "0x04DF",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D88200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_rbtmfl166_x_sst_sgs_gf_rbtmfl166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_rbtmfl166_x_sg_einstieg_rbtmfl166_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_RBTMFL166_x_cv_RBTMFL166_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06BA",
			"CanFilterID": "0x0497",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D88300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_rbtmfl172_x_sst_sgs_gf_rbtmfl172_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06BA",
			"CanFilterID": "0x0497",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D88400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_RBTMFR166_x_sst_sgs_gf_RBTMFR166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_rbtmfr166_x_sg_einstieg_rbtmfr166_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_RBTMFR166_x_cv_RBTMFR166_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06C2",
			"CanFilterID": "0x0498",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D88500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_RBTMFR172_x_sst_sgs_gf_RBTMFR172_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06C2",
			"CanFilterID": "0x0498",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D88700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ROOF172_x_sst_sgs_gf_ROOF172_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x077F",
			"CanFilterID": "0x0787",
			"CanSpecialID": "0A",
			"OtherECUID": "F034",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D88800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_RVC166_x_sst_sgs_gf_RVC166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_RVC166_X_sg_einstieg_RVC166_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_RVC166_X_cv_RVC166_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0733",
			"CanFilterID": "0x04E6",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D88900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_SCCM166_x_sst_sgs_gf_SCCM166_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_SCCM166_X_cv_SCCM166_X_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_SCCM166_x_SG_Einstieg_SCCM166_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode01",
			"CanDeviceID": "0x0622",
			"CanFilterID": "0x0484",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D88A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_SCU166_x_sst_sgs_gf_SCU166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_scu166_x_sg_einstieg_scu166_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_SCU166_x_cv_SCU166_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06B3",
			"CanFilterID": "0x04D6",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D88B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_SEATD166_x_sst_sgs_gf_SEATD166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_seatd166_x_sg_einstieg_seatd166_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_SEATD166_x_cv_SEATD166_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06C3",
			"CanFilterID": "0x04D8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D88C00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_SEATP166_x_sst_sgs_gf_SEATP166_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_SEATP166_x_cv_SEATP166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_seatp166_x_sg_einstieg_seatp166_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06CB",
			"CanFilterID": "0x04D9",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D88D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_SEATP172_x_sst_sgs_gf_SEATP172_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06CB",
			"CanFilterID": "0x04D9",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B",
				"0x22F15D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D88E00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_siren166_x_sst_sgs_gf_siren166_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07AF",
			"CanFilterID": "0x07B7",
			"CanSpecialID": "02",
			"OtherECUID": "F0AD",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0xB220FF7FFFFF",
				"0xB221FF7FFFFF",
				"0xB222FF7FFFFF",
				"0xB223FF7FFFFF",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x1A9E",
				"0x1A9F"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"115580D88F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_SOUND45_x_sst_sgs_gf_SOUND45_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_sound45_x_sg_einstieg_sound45_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_SOUND45_x_cv_SOUND45_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0691",
			"CanFilterID": "0x0452",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9C",
				"0x1A9D",
				"0x1A9E",
				"0x1A9F",
				"0x1A9A",
				"0x1A9B",
				"0x21E1",
				"0x21A1",
				"0x21A2"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D8B000": {
		"DTCType": {
			"DBCondition": "PKW_most_snd3_sst_GFSND204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0691",
			"CanFilterID": "0x0452",
			"OtherECUID": "0267",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x21E1",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x1A9E",
				"0x1A9F",
				"0x2121",
				"0x2131",
				"0x2132",
				"0x2135",
				"0x2136",
				"0x2137",
				"0x2138",
				"0x2139",
				"0x213A",
				"0x213B",
				"0x213C",
				"0x213E",
				"0x2174"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D8B100": {
		"DTCType": {
			"DBCondition": "PKW_most_snd3_sst_GFSND204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0691",
			"CanFilterID": "0x0452",
			"OtherECUID": "0267",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x21E1",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x1A9E",
				"0x1A9F",
				"0x2121",
				"0x2131",
				"0x2132",
				"0x2135",
				"0x2136",
				"0x2137",
				"0x2138",
				"0x2139",
				"0x213A",
				"0x213B",
				"0x213C",
				"0x213E",
				"0x2174"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D8B200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_SPC166_x_sst_sgs_gf_SPC166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_spc166_x_sg_einstieg_spc166_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_SPC166_x_cv_SPC166_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0692",
			"CanFilterID": "0x0492",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D8B400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_SVS166_x_sst_sgs_gf_SVS166_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_SVS166_x_cv_SVS166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_SVS166_x_SG_Einstieg_SVS166_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x066A",
			"CanFilterID": "0x048D",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D8B600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_TC166_x_sst_sgs_gf_TC166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TC166_x_sst_sgs_gf_TC166_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TC166_x_cv_TC166_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x079A",
			"CanFilterID": "0x04B3",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9C",
				"0x1A9D",
				"0x1A9E",
				"0x1A9F",
				"0x1A9A",
				"0x1A9B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D8B700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_TM166_x_sst_sgs_gf_TM166_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TM166_x_cv_TM166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TM166_x_SG_Einstieg_TM166_X_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TM166_x_act_TM166_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06EB",
			"CanFilterID": "0x04DD",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D8B800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_TPM_172_x_sst_sgs_gf_TPM_172_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TPM_172_x_sst_sgs_gf_TPM_172_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TPM_172_x_cv_TPM_172_x_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TPM_172_x_act_TPM_172_x_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TPM_172_x_adapt_TPM_172_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0642",
			"CanFilterID": "0x0488",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D8B900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_TSSR166_x_sst_sgs_gf_TSSR166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TSSR166_x_sst_sgs_gf_TSSR166_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TSSR166_x_cv_TSSR166_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06B3",
			"CanFilterID": "0x04D6",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D8BB00": {
		"DTCType": {
			"DBCondition": "pkw_most_tv3_sst_GFTV221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode09",
			"CanDeviceID": "0x06A1",
			"CanFilterID": "0x0454",
			"FlowDataCtrl": "0x60300832"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x1802FF00",
				"0x21E1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"115580D8BC00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_usbr45_x_sst_sgs_gf_usbr45_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0652",
			"CanFilterID": "0x048A",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B",
				"0x22F151"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D8BD00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_VTA166_x_sst_sgs_gf_VTA166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_vta166_x_sg_einstieg_vta166_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_VTA166_X_cv_VTA166_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x063B",
			"CanFilterID": "0x04C7",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D8A000": {
		"DTCType": {
			"DBCondition": "pkw_srs_rbtmfl1_sst_gfrbtmfl1_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07B2",
			"CanFilterID": "0x07B3",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D8A100": {
		"DTCType": {
			"DBCondition": "pkw_srs_rbtmfl2_sst_gfrbtmfl2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06BA",
			"CanFilterID": "0x0497",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D8A200": {
		"DTCType": {
			"DBCondition": "pkw_srs_rbtmfr1_sst_gfrbtmfr1_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07B4",
			"CanFilterID": "0x07B5",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D8A300": {
		"DTCType": {
			"DBCondition": "pkw_srs_rbtmfr2_sst_gfrbtmfr2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06C2",
			"CanFilterID": "0x0498",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D8A400": {
		"DTCType": {
			"DBCondition": "pkw_traktion_tpm3_sst_gftpm_221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x069B",
			"CanFilterID": "0x04BD",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"115580D8A500": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsgml9_sst_gftsgml_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x07AB",
			"CanFilterID": "0x04F5",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x1A9B",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D8A600": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsgmr9_sst_gftsgmr_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x07B3",
			"CanFilterID": "0x04F6",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x1A9B",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D8A700": {
		"DTCType": {
			"DBCondition": "PKW_most_tun_sst_GFtuner_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x0699",
			"CanFilterID": "0x0453",
			"FlowDataCtrl": "0x60300832"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x21E1",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x1A9E",
				"0x1A9F"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"115580D8A800": {
		"DTCType": {
			"DBCondition": "pkw_traktion_up28_sst_gfup28_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x0C"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x1A86",
				"0x310301"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D8AA00": {
		"DTCType": {
			"DBCondition": "pkw_srs_wss3_sst_gfwss3_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x06A8",
			"CanFilterID": "0x04C6",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D8AB00": {
		"DTCType": {
			"DBCondition": "pkw_ch2_zgw245ch2_sst_GFZGW245_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x04E4",
			"CanFilterID": "0x05FE",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x1A9E",
				"0x1A9F"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84"
			]
		}
	},
	"115580D8AC00": {
		"DTCType": {
			"DBCondition": "pkw_motordie_cdi40eu5_sst_gfcr40eu5_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D8AD00": {
		"DTCType": {
			"DBCondition": "pkw_motordie_cdi6eu5_sst_gfcr6eu5_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F150",
				"0x22F151",
				"0x22F111",
				"0x22F121",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D8AF00": {
		"DTCType": {
			"DBCondition": "pkw_sonderfz_acl2_sst_gfacl2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06C0",
			"CanFilterID": "0x07AD",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x2128",
				"0x1802"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D8D000": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%XALWA_LINKS"
		},
		"DTCType": {
			"DBCondition": "pkw_beleucht_alwrl216_sst_gfalwr216_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x076A",
			"CanFilterID": "0x04AD",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xad"
			],
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D8D100": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%XALWA_LINKS"
		},
		"DTCType": {
			"DBCondition": "pkw_beleucht_alwrl216_sst_gfalwr216_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x076A",
			"CanFilterID": "0x04AD",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xad"
			],
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D8D200": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%XALWA_LINKS"
		},
		"DTCType": {
			"DBCondition": "pkw_beleucht_alwrl221_sst_gfalwr221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x076A",
			"CanFilterID": "0x04AD",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F150",
				"0x22F151",
				"0x22F111",
				"0x22F121",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D8D300": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%XALWA_LINKS"
		},
		"DTCType": {
			"DBCondition": "pkw_beleucht_alwrl251_sst_gfalwrl251_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x076A",
			"CanFilterID": "0x04AD",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F150",
				"0x22F151",
				"0x22F111",
				"0x22F121",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D8D400": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_motor_fscu5_sst_GFFSCU5_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0778",
			"CanFilterID": "0x0779",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D8D500": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%XALWA_RECHTS"
		},
		"DTCType": {
			"DBCondition": "pkw_beleucht_alwrr216_sst_gfalwr216_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x0772",
			"CanFilterID": "0x04AE",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F150",
				"0x22F151",
				"0x22F111",
				"0x22F121",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D8D600": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%HLM_LINKS"
		},
		"DTCType": {
			"DBCondition": "pkw_beleucht_hlmlt_164_sst_gfhlm164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x076A",
			"CanFilterID": "0x04AD",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D8D700": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%HLM_RECHTS"
		},
		"DTCType": {
			"DBCondition": "pkw_beleucht_hlmrt_164_sst_gfhlm164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x0772",
			"CanFilterID": "0x04AE",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D8D800": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%XALWA_RECHTS"
		},
		"DTCType": {
			"DBCondition": "pkw_beleucht_alwrr216_sst_gfalwr216_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x0772",
			"CanFilterID": "0x04AE",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xad"
			],
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D8D900": {
		"FiltEleInfo": {
			"FilterRelatedCmd": [
				"0x213C",
				"0x213B"
			],
			"FilterCount": "4",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"10",
				"03",
				"1",
				"00",
				"ECU1_FxFE_NAV Data Basis Enabled%No"
			],
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"10",
				"03",
				"1",
				"01",
				"ECU1_FxFE_NAV Data Basis Enabled%Yes"
			],
			"Filter3": [
				"KwdTyp_VCD",
				"2",
				"10",
				"11",
				"1",
				"00",
				"ECU_TGW4_FxFE_Internal SDS Installed%No"
			],
			"Filter4": [
				"KwdTyp_VCD",
				"2",
				"10",
				"11",
				"1",
				"00",
				"ECU_TGW4_FxFE_Internal SDS Installed%Yes"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_most_tgw_sst_gfhu221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0652",
			"CanFilterID": "0x048A",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x21E1",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x1A9E",
				"0x1A9F",
				"0x213E",
				"0x213C",
				"0x213D",
				"0x213B",
				"0x2123",
				"0x2135"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D8DA00": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%XALWA_RECHTS"
		},
		"DTCType": {
			"DBCondition": "pkw_beleucht_alwrr221_sst_gfalwr221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x0772",
			"CanFilterID": "0x04AE",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F150",
				"0x22F151",
				"0x22F111",
				"0x22F121",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D8DB00": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%XALWA_RECHTS"
		},
		"DTCType": {
			"DBCondition": "pkw_beleucht_alwrr251_sst_gfalwr251_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x0772",
			"CanFilterID": "0x04AE",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F150",
				"0x22F151",
				"0x22F111",
				"0x22F121",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D8DC00": {
		"DTCType": {
			"DBCondition": "pkw_motor_hsg_menues_mnhsg001_s"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E2",
			"CanFilterID": "0x07EA",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D8DD00": {
		"DTCType": {
			"DBCondition": "pkw_tempomat_ibsmr1_sst_GFIBSMR1_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0751",
			"CanFilterID": "0x0752",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131",
				"0x220206"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D8DE00": {
		"DTCType": {
			"DBCondition": "pkw_tempomat_ibsmr4_sst_GFIBSMR4_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0759",
			"CanFilterID": "0x0753",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131",
				"0x220206"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D8C000": {
		"DTCType": {
			"DBCondition": "pkw_fahrber_kg6_sst_gfkg251_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x06A4",
			"CanFilterID": "0x04C2",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F150",
				"0x22F151",
				"0x22F111",
				"0x22F121",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D8C100": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2100",
			"FilterCount": "1",
			"Filter1": [
				"1",
				"7",
				"16",
				"ECU1_FxFE_PTC verbaut%ja",
				""
			]
		},
		"DTCType": {
			"DBCondition": "pkw_klima_kla7_sst_GFKLA169_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0791",
			"CanFilterID": "0x04F1"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2100"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D8C200": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2100",
			"FilterCount": "1",
			"Filter1": [
				"1",
				"7",
				"16",
				"ECU1_FxFE_PTC verbaut%ja",
				""
			]
		},
		"DTCType": {
			"DBCondition": "pkw_klima_kla7_sst_gfkla169_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0791",
			"CanFilterID": "0x04F1"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2100"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D8C300": {
		"DTCType": {
			"DBCondition": "pkw_sitze_fdsvl3_sst_GFFMCMSFL_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0663",
			"CanFilterID": "0x04CC",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D8C400": {
		"DTCType": {
			"DBCondition": "pkw_sitze_fdsvr3_sst_GFFMCMSFR_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x066B",
			"CanFilterID": "0x04CD",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D8C500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_crd3_x_sst_sgs_gf_crd3_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_CRD3_X_SG_Einstieg_CRD3_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_CRD3_X_cv_CRD3_X_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_crd3_x_act_crd3_x_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_crd3_x_adapt_crd3_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07e0",
			"CanFilterID": "0x07e8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D8C600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_esp212_x_sst_sgs_gf_esp212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0632",
			"CanFilterID": "0x0486",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D8C700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_kg_212_x_sst_sgs_gf_kg_212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x068B",
			"CanFilterID": "0x04D1",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D8C800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ehnr212_x_sst_sgs_gf_ehnr212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0692",
			"CanFilterID": "0x0492",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D8C900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mcmsfl_212_x_sst_sgs_gf_mcmsfl_212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0663",
			"CanFilterID": "0x04CC",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D8CA00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mcmsfr_212_x_sst_sgs_gf_mcmsfr_212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x066B",
			"CanFilterID": "0x04CD",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D8CB00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_roof_212_x_sst_sgs_gf_roof_212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06E3",
			"CanFilterID": "0x04DC",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D8CC00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_SIM271DE20_X_sst_sgs_gf_SIM271DE20_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07e0",
			"CanFilterID": "0x07e8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D8CD00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tssr_212_x_sst_sgs_gf_tssr_212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06B3",
			"CanFilterID": "0x04D6",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D8CE00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hmsw_212_x_sst_sgs_gf_hmsw_212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x064B",
			"CanFilterID": "0x04C9",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"115580D8CF00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_rbtmfl_204_x_sst_sgs_gf_rbtmfl_204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06BA",
			"CanFilterID": "0x0497",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D8E000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_rbtmfr_204_x_sst_sgs_gf_rbtmfr_204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06C2",
			"CanFilterID": "0x0498"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D8E300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_CTRLC_204_X_sst_sgs_gf_CTRLC_204_X_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_CTRLC_204_X_sg_einstieg_CTRLC_204_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_CTRLC_204_X_cv_CTRLC_204_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0743",
			"CanFilterID": "0x04E8"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D8E600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_SEATP_204_X_sst_sgs_gf_SEATP_204_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06CB",
			"CanFilterID": "0x04D9"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x2107",
				"0x2117",
				"0x2124",
				"0x2114"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D8E700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_TSLM_204_X_sst_sgs_gf_TSLM_204_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x077A",
			"CanFilterID": "0x04AF",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D8E800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_MPM_212_x_sst_sgs_gf_MPM_212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0683",
			"CanFilterID": "0x04d0",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"115580D8E900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_IC_204_X_sst_sgs_gf_IC_204_X_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_IC_204_X_SG_Einstieg_IC_204_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_IC_204_X_cv_IC_204_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060A",
			"CanFilterID": "0x0481",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x87",
				"0x89"
			]
		}
	},
	"115580D8EC00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_SPC_204_X_sst_sgs_gf_SPC_204_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0692",
			"CanFilterID": "0x0492",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89",
				"0x8B"
			]
		}
	},
	"115580D8ED00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_seatd_204_x_sst_sgs_gf_seatd_204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06c3",
			"CanFilterID": "0x04d8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D8EE00": {
		"DTCType": {
			"DBCondition": "pkw_motordie_cdi6eu5_sst_gfcr6eu5_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F150",
				"0x22F151",
				"0x22F111",
				"0x22F121",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"115580D61200": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": [
			]
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x01"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": [
				"0x3C00",
				"0x2701",
				"0x221165",
				"0x2300",
				"0x221163"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"115580D61400": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": [
			]
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x74"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"115580D61500": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": [
			]
		},
		"NetInfo": {
			"PtclType": "ISO9141",
			"IOBaudRate": "2500",
			"IOTimeParas": "IOTimes_Mode86",
			"AddrCode": "57"
		},
		"Access": {
			"ReferCmd": [
				"0x57270101",
				"0x5727000180"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x575001"
		},
		"QuitInfo": {
			"QuitCmd": "0x5770"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"115580D61600": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": [
			]
		},
		"NetInfo": {
			"PtclType": "ISO9141",
			"IOBaudRate": "9600",
			"IOTimeParas": "IOTimes_Mode86",
			"AddrCode": "C1"
		},
		"Access": {
			"AccessCmd": "0x41282207"
		},
		"LinkInfo": {
			"LinkCmd": "0x415001"
		},
		"QuitInfo": {
			"QuitCmd": "0x4170"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"115580D61700": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": [
			]
		},
		"NetInfo": {
			"PtclType": "ISO9141",
			"IOBaudRate": "9600",
			"IOTimeParas": "IOTimes_Mode86",
			"AddrCode": "D9"
		},
		"Access": {
			"ReferCmd": "0x595001"
		},
		"LinkInfo": {
			"LinkCmd": "0x595001"
		},
		"QuitInfo": {
			"QuitCmd": "0x5970"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"115580D61800": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": [
			]
		},
		"NetInfo": {
			"PtclType": "ISO9141",
			"AddressCodeBaudRate": "9600",
			"IOBaudRate": "9600",
			"IOTimeParas": "IOTimes_Mode86",
			"AddrCode": "20"
		},
		"Access": {
			"ReferCmd": [
				"0x200F",
				"0x202400",
				"0x203001003028",
				"0x20300128300E",
				"0x20300136301B",
				"0x203001FD0480"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x205001"
		},
		"QuitInfo": {
			"QuitCmd": "0x2070"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"115580D61900": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": [
			]
		},
		"NetInfo": {
			"PtclType": "ISO9141",
			"IOBaudRate": "9600",
			"IOTimeParas": "IOTimes_Mode86",
			"AddrCode": "98"
		},
		"Access": {
			"ReferCmd": [
				"0x183008000001",
				"0x183008030001"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x185001"
		},
		"QuitInfo": {
			"QuitCmd": "0x1870"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"115580D71100": {
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07DF",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x0100",
			"ReferCmd": "0x0101"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x82"
		},
		"VIN": {
			"Cmd": [
				"0x0902",
				"3",
				"17"
			]
		}
	},
	"115580D71200": {
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"VIN": {
			"Cmd": [
				"0x22F1A0",
				"3",
				"17"
			]
		}
	},
	"115580D71300": {
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"VIN": {
			"Cmd": [
				"0x1A90",
				"2",
				"17"
			]
		}
	},
	"115580D71400": {
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x01"
		},
		"Access": {
			"AccessCmd": "0x81",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"VIN": {
			"Cmd": [
				"0x1A90",
				"2",
				"17"
			]
		}
	},
	"115580D71500": {
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x10"
		},
		"Access": {
			"AccessCmd": "0x81",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"VIN": {
			"Cmd": [
				"0x1A90",
				"2",
				"17"
			]
		}
	},
	"115580D71600": {
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x12"
		},
		"Access": {
			"AccessCmd": "0x81",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"VIN": {
			"Cmd": [
				"0x1A90",
				"2",
				"17",
				"0x2701"
			]
		}
	},
	"115580D71700": {
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x01"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"VIN": {
			"Cmd": [
				"0x3134",
				"2",
				"14"
			]
		}
	},
	"115580D71800": {
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0602",
			"CanFilterID": "0x0480"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"VIN": {
			"Cmd": [
				"0x22F1A0",
				"3",
				"17"
			]
		}
	},
	"115580D71900": {
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0602",
			"CanFilterID": "0x0480"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"VIN": {
			"Cmd": [
				"0x316A6719",
				"11",
				"17"
			]
		}
	},
	"115580D71A00": {
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x04E4",
			"CanFilterID": "0x05FE"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"VIN": {
			"Cmd": [
				"0x31626A16",
				"9",
				"17"
			]
		}
	},
	"115580D71B00": {
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x04E0",
			"CanFilterID": "0x05FF"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"VIN": {
			"Cmd": [
				"0x1A90",
				"2",
				"17"
			]
		}
	},
	"1155802A7400": {
		"DTCType": {
			"DBCondition": "pkw_most_tGW2_sst_GFHU_204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0652",
			"CanFilterID": "0x048A",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x21E1",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x1A9E",
				"0x1A9F"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A7500": {
		"DTCType": {
			"DBCondition": "pkw_most_tgw3_sst_gfhu25_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode06",
			"CanDeviceID": "0x064a",
			"CanFilterID": "0x068a",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x21e1",
				"0x1a9a",
				"0x1a9b",
				"0x1a9c",
				"0x1a9d",
				"0x1a9e",
				"0x1a9f",
				"0x211f",
				"0x211e",
				"0x210a",
				"0x210f",
				"0x2102",
				"0x211c",
				"0x210e",
				"0x211b",
				"0x21a2"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802A7600": {
		"DTCType": {
			"DBCondition": "pkw_most_tun_sst_GFtuner_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode09",
			"CanDeviceID": "0x0689",
			"CanFilterID": "0x0451"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x21E1",
				"0x1A9B",
				"0x1A9D",
				"0x1A9E",
				"0x1A9F",
				"0x2104"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A7700": {
		"DTCType": {
			"DBCondition": "pkw_most_tun_sst_GFtuner_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0691",
			"CanFilterID": "0x0452",
			"FlowDataCtrl": "0x60300832"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x21E1",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x1A9E",
				"0x1A9F",
				"0x2104",
				"0x1802FF00",
				"0x21E1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A7800": {
		"DTCType": {
			"DBCondition": "pkw_most_uhi3_sst_gfxuhi_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode09",
			"CanDeviceID": "0x06B1",
			"CanFilterID": "0x0456"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x60",
				"0x02",
				"0x62"
			],
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x21E1",
				"0x1A9C",
				"0x21A5",
				"0x21a1",
				"0x21a0"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A7900": {
		"DTCType": {
			"DBCondition": "pkw_most_uci_sst_gfuci25_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode03",
			"CanDeviceID": "0x0646",
			"CanFilterID": "0x0686",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x21E1",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x1A9E",
				"0x1A9F",
				"0x21A1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84"
			]
		}
	},
	"1155802A7A00": {
		"DTCType": {
			"DBCondition": "pkw_most_uci_sst_gfuci25_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode03",
			"CanDeviceID": "0x06D1",
			"CanFilterID": "0x045A",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x21E1",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x1A9E",
				"0x1A9F",
				"0x21A1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84"
			]
		}
	},
	"1155802A7B00": {
		"DTCType": {
			"DBCondition": "pkw_most_sbs3_sst_GFSDS221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0681",
			"CanFilterID": "0x0450",
			"FlowDataCtrl": "0x60300832"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x310F",
				"0x21E1",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x1A9E",
				"0x1A9F",
				"0x2111"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A7C00": {
		"DTCType": {
			"DBCondition": "pkw_most_tv3_sst_GFTV221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode09",
			"CanDeviceID": "0x06A1",
			"CanFilterID": "0x0454",
			"FlowDataCtrl": "0x60300832"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2105",
				"0x2102",
				"0x2104",
				"0x2103",
				"0x2101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A7E00": {
		"DTCType": {
			"DBCondition": "pkw_most_sdar3_sst_gfsdar3_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode03",
			"CanDeviceID": "0x06C9",
			"CanFilterID": "0x0459",
			"FlowDataCtrl": "0x60300832"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x21E1",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x1A9E",
				"0x1A9F",
				"0x21A1",
				"0x2110"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A7F00": {
		"DTCType": {
			"DBCondition": "pkw_most_dab_sst_GFDAB_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06A9",
			"CanFilterID": "0x0455"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x21E1",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2102",
				"0x2103",
				"0x1802FF00"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A6000": {
		"DTCType": {
			"DBCondition": "pkw_most_dab_sst_gfdab_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode03",
			"CanDeviceID": "0x0643",
			"CanFilterID": "0x0683",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x21A1",
				"0x21E1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A6100": {
		"DTCType": {
			"DBCondition": "pkw_most_zan_sst_GFDSPC22_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0753",
			"CanFilterID": "0x04EA",
			"FlowDataCtrl": "0x60300832"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A6200": {
		"DTCType": {
			"DBCondition": "pkw_most_zan2_sst_GFDISPC_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0753",
			"CanFilterID": "0x04EA"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x21E1",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A6300": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%DISPRL_aktiv"
		},
		"DTCType": {
			"DBCondition": "pkw_rse_disp_sst_gfdisp_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06D9",
			"CanFilterID": "0x045B",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x73",
				"0x02",
				"0x74"
			],
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F18C",
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x220001"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A6400": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%DISPRR_aktiv"
		},
		"DTCType": {
			"DBCondition": "pkw_rse_disp_sst_gfdisp_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06F9",
			"CanFilterID": "0x045F",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x74",
				"0x02",
				"0x73"
			],
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F18C",
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x220001"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A6500": {
		"DTCType": {
			"DBCondition": "pkw_bedien_zbe_sst_GFCTC221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0743",
			"CanFilterID": "0x04E8",
			"FlowDataCtrl": "0x60300832"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A6600": {
		"DTCType": {
			"DBCondition": "pkw_bedien_zbeh_sst_GFCTCR221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x075B",
			"CanFilterID": "0x04EB",
			"FlowDataCtrl": "0x60300832"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x1802FF00",
				"0x17"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A6700": {
		"DTCType": {
			"DBCondition": "pkw_klima_kbeh_sst_GFHVCR221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x074B",
			"CanFilterID": "0x04E9",
			"FlowDataCtrl": "0x60300832"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A6800": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%Ansteuerungen"
		},
		"DTCType": {
			"DBCondition": "pkw_rse_aveh_sst_GFXAVS_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x05E7",
			"CanFilterID": "0x04C7"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2121",
				"0x2123",
				"0x2120"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A6A00": {
		"FiltEleInfo": {
			"AddFilter": [
				"ECU_ZGW_FxFE_275 Memory Paket (SA)%nicht vorhanden",
				"FxFE%Ansteuerungen"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_rse_aveh_sst_GFXAVS_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0763",
			"CanFilterID": "0x04EC"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2121",
				"0x2123",
				"0x2120"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A6B00": {
		"DTCType": {
			"DBCondition": "pkw_d2b_comand_sst_gfcomand_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0xD0"
		},
		"Access": {
			"AccessCmd": [
				"0xc17bf381b0",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1a86",
				"0x300101"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E"
		},
		"QuitInfo": {
			"QuitCmd": "0xC17BF382B1"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A6C00": {
		"DTCType": {
			"DBCondition": "pkw_most_cdc2_sst_gfxcdc_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0641",
			"CanFilterID": "0x0681",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x60",
				"0x02",
				"0x62"
			],
			"CanAccessCmd": "0x064008021092FFFFFFFFFF",
			"ReferCmd": [
				"0x1A86",
				"0x21E1",
				"0x2102"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x600006403E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x600006401081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"1155802A6D00": {
		"DTCType": {
			"DBCondition": "pkw_most_cdr_sst_gfxcdr_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x05D6",
			"CanFilterID": "0x04F6",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A6F00": {
		"DTCType": {
			"DBCondition": "pkw_most_cp_sst_gfxcp_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0643",
			"CanFilterID": "0x0683",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x60",
				"0x02",
				"0x61",
				"0x02",
				"0x62"
			],
			"CanAccessCmd": "0x064008021092FFFFFFFFFF",
			"ReferCmd": [
				"0x1A86",
				"0x21E1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x600006403E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x600006401081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A9100": {
		"DTCType": {
			"DBCondition": "pkw_most_cpta_sst_gfxcpta_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0643",
			"CanFilterID": "0x0683",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x60"
			],
			"CanAccessCmd": "0x064008021092FFFFFFFFFF",
			"ReferCmd": [
				"0x1A86",
				"0x21E1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x600006403E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x600006401081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A9400": {
		"DTCType": {
			"DBCondition": "pkw_rse_ftv_sst_gfxftv_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0xD0",
				"0xE0"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17bf381b0",
				"0x8300",
				"0x8303",
				"0x1a86"
			],
			"ReferCmd": [
				"0x1a86",
				"0x2116"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x81d0f33e82"
		},
		"QuitInfo": {
			"QuitCmd": "0xC17BF382B1"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A1300": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsghr_h_sst_GFTSGHR__sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x48"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3128"
			],
			"ReferCmd": [
				"0x3C0A",
				"0x3C00"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A1400": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsghl_h_sst_GFTSGHL__sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x47"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3128"
			],
			"ReferCmd": [
				"0x3C0A",
				"0x3C00"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A1500": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsgvr_h_sst_GFTSGVR__sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x46"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3128"
			],
			"ReferCmd": [
				"0x3C09",
				"0x3C00"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A1600": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsgvl_h_sst_GFTSGVL__sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x45"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3128"
			],
			"ReferCmd": [
				"0x3C09",
				"0x3C00"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A1700": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsg2hr_h_sst_GFTSG2HR_SGS"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x6A",
				"0x48"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x816AF33F1D"
		},
		"QuitInfo": {
			"QuitCmd": "0xC17EF382B4"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A1800": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsg2hl_h_sst_GFTSG2HL_SGS"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x6A",
				"0x47"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x816AF33F1D"
		},
		"QuitInfo": {
			"QuitCmd": "0xC17EF382B4"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A1900": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsg2vr_h_sst_GFTSG2VR_SGS"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x6A",
				"0x46"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x816AF33F1D"
		},
		"QuitInfo": {
			"QuitCmd": "0xC17EF382B4"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A1A00": {
		"DSType": {
			"DBCom": "FoxwellFill"
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsg2vl_h_sst_GFTSG2VL_SGS"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x6A",
				"0x45"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x816AF33F1D"
		},
		"QuitInfo": {
			"QuitCmd": "0xC17EF382B4"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A1B00": {
		"DTCType": {
			"DBCondition": "pkw_klima_tsa_sst_gftsa220_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x6D"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A1C00": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2162",
			"FilterCount": "1",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"10",
				"14",
				"1",
				"01",
				"ECU1_FxFE_Automatischer Hochlauf%vorhanden"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsghl7_sst_GFTSGHL1_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0749",
			"CanFilterID": "0x04E9"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xa2",
				"0x02",
				"0x0d"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2180",
				"0x2181",
				"0x21082",
				"0x2183",
				"0x2184",
				"0x2185",
				"0x2162"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A1D00": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2162",
			"FilterCount": "1",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"10",
				"14",
				"1",
				"01",
				"ECU1_FxFE_Automatischer Hochlauf%vorhanden"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsghr7_sst_GFTSGHR1_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x074B",
			"CanFilterID": "0x04EB"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xa2",
				"0x02",
				"0x0c"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2180",
				"0x2181",
				"0x21082",
				"0x2183",
				"0x2184",
				"0x2185",
				"0x2162"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A1E00": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2162",
			"FilterCount": "3",
			"Filter1": [
				"1",
				"6",
				"2",
				"ECU1_FxFE_Ausstiegsleuchte%vorhanden",
				""
			],
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"10",
				"14",
				"1",
				"01",
				"ECU1_FxFE_Automatischer Hochlauf%vorhanden"
			],
			"Filter3": [
				"KwdTyp_VCD",
				"1",
				"10",
				"18",
				"1",
				"01",
				"ECU1_FxFE_Spiegelabklappung%vorhanden"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsgvl7_sst_GFTSGVL1_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06C8",
			"CanFilterID": "0x04E8"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xa2",
				"0x00",
				"0xb8",
				"0x02",
				"0x0f"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2180",
				"0x2181",
				"0x2182",
				"0x2183",
				"0x2184",
				"0x2185",
				"0x2162"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A1F00": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsgvr7_sst_GFTSGVR1_sgs"
		},
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2162",
			"FilterCount": "2",
			"Filter1": [
				"1",
				"6",
				"2",
				"ECU1_FxFE_Ausstiegsleuchte%vorhanden",
				""
			],
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"10",
				"14",
				"1",
				"01",
				"ECU1_FxFE_Automatischer Hochlauf%vorhanden"
			]
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06CA",
			"CanFilterID": "0x04EA"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xa2",
				"0x00",
				"0xb8",
				"0x02",
				"0x0e"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2180",
				"0x2181",
				"0x21082",
				"0x2183",
				"0x2184",
				"0x2185",
				"0x2162"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A0000": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2162",
			"FilterCount": "6",
			"Filter1": [
				"1",
				"5",
				"1",
				"ECU1_FxFE_Spiegelabklappung%vorhanden",
				""
			],
			"Filter2": [
				"1",
				"5",
				"8",
				"ECU1_FxFE_Spiegelmemory%vorhanden",
				""
			],
			"Filter3": [
				"1",
				"6",
				"16",
				"ECU1_FxFE_EC%vorhanden",
				""
			],
			"Filter4": [
				"1",
				"6",
				"8",
				"ECU1_FxFE_T???rinnengriffbeleuchtung%vorhanden",
				"ECU1_FxFE_T???rinnengriffbeleuchtung%nicht vorhanden"
			],
			"Filter5": [
				"1",
				"6",
				"4",
				"ECU1_FxFE_PLG-Schalter%vorhanden",
				"ECU1_FxFE_PLG-Schalter%nicht vorhanden"
			],
			"Filter6": [
				"1",
				"4",
				"8",
				"ECU1_FxFE_Hallsensor%vorhanden",
				""
			]
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsgvl8_sst_GFTSGVL1_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06C8",
			"CanFilterID": "0x04E8",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x9d",
				"0x01",
				"0xa8"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A87",
				"0x2180",
				"0x2181",
				"0x2182",
				"0x2183",
				"0x2184",
				"0x2185",
				"0x2162"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A0100": {
		"FiltEleInfo": {
			"AddFilter": [
			],
			"FilterRelatedCmd": "0x2162",
			"FilterCount": "6",
			"Filter1": [
				"1",
				"5",
				"1",
				"ECU1_FxFE_Spiegelabklappung%vorhanden",
				""
			],
			"Filter2": [
				"1",
				"5",
				"8",
				"ECU1_FxFE_Spiegelmemory%vorhanden",
				""
			],
			"Filter3": [
				"1",
				"6",
				"16",
				"ECU1_FxFE_EC%vorhanden",
				""
			],
			"Filter4": [
				"1",
				"6",
				"8",
				"ECU1_FxFE_T???rinnengriffbeleuchtung%vorhanden",
				"ECU1_FxFE_T???rinnengriffbeleuchtung%nicht vorhanden"
			],
			"Filter5": [
				"1",
				"6",
				"4",
				"ECU1_FxFE_PLG-Schalter%vorhanden",
				"ECU1_FxFE_PLG-Schalter%nicht vorhanden"
			],
			"Filter6": [
				"1",
				"4",
				"8",
				"ECU1_FxFE_Hallsensor%vorhanden",
				""
			]
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsgvr8_sst_GFTSGVR1_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06CA",
			"CanFilterID": "0x04EA",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x9d",
				"0x01",
				"0xa8"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A87",
				"0x2180",
				"0x2181",
				"0x2182",
				"0x2183",
				"0x2184",
				"0x2185",
				"0x2162"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A0200": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2130",
			"FilterCount": "1",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"10",
				"0",
				"1",
				"01",
				"ECU1_FxFE_Sonderschutz-FH (links)%nein"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsghl9_sst_GFTSGHL2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0713",
			"CanFilterID": "0x04E2",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xad",
				"0x01",
				"0xef"
			],
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802A0300": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsghr9_sst_GFTSGHR2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x071B",
			"CanFilterID": "0x04E3",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xad",
				"0x01",
				"0xef"
			],
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802A0400": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsghl10_sst_GFDMRL_204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0713",
			"CanFilterID": "0x04E2"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x9f"
			],
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A0500": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsghr10_sst_GFDMRR_204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x071B",
			"CanFilterID": "0x04E3"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x9f"
			],
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A0600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_DMRL_212_x_sst_sgs_gf_DMRL_212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0713",
			"CanFilterID": "0x04E2",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A0700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_DMRR_212_x_sst_sgs_gf_DMRR_212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x071B",
			"CanFilterID": "0x04E3",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A0800": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2101",
			"FilterCount": "2",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"10",
				"11",
				"1",
				"00",
				"ECU1_FxFE_Sitzbel???ftung vorhanden%nein"
			],
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"10",
				"11",
				"1",
				"01",
				"ECU1_FxFE_Sitzbel???ftung vorhanden%ja"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsgvl9_sst_GFTSGVL2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0703",
			"CanFilterID": "0x04E0",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xad",
				"0x01",
				"0xdf"
			],
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802A0900": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsgvr9_sst_GFTSGVR2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x070B",
			"CanFilterID": "0x04E1",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xad",
				"0x01",
				"0xe3"
			],
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802A0A00": {
		"FiltEleInfo": {
			"AddFilter": "ECU_SAMF204_FxFE_IMR%verbaut"
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsgvl10gesamt_tsgvl10_sst_GFDMFL_204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0703",
			"CanFilterID": "0x04E0"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x9f"
			],
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A0B00": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsgvr10gesamt_tsgvr10_sst_GFDMFR_204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x070B",
			"CanFilterID": "0x04E1"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x9f"
			],
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A0C00": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsghl1_sst_gftsghl2_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0749",
			"CanFilterID": "0x04E9",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x47"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2109"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A0D00": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsghr1_sst_gftsghr2_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x074B",
			"CanFilterID": "0x04EB",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x48"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2109"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A0E00": {
		"FiltEleInfo": {
			"AddFilter": "ECU1_FxFE_Memory%aktiv",
			"FilterRelatedCmd": "0x2109",
			"FilterCount": "3",
			"Filter1": [
				"1",
				"2",
				"16",
				"",
				"FxFE%SITZ_MEM_YES"
			],
			"Filter2": [
				"1",
				"3",
				"16",
				"",
				"FxFE%BLINKER_YES"
			],
			"Filter3": [
				"1",
				"2",
				"4",
				"FxFE%SP_MEMORY",
				"FxFE%SP_NORMAL"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsgvl1_sst_gftsgvl2_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06C8",
			"CanFilterID": "0x04E8",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x45"
			]
		},
		"Access": {
			"AccessEcuBefore": [
				"0x00",
				"0x69"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303",
				"0x1A86"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2109"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A0F00": {
		"FiltEleInfo": {
			"AddFilter": "ECU1_FxFE_Memory%aktiv",
			"FilterRelatedCmd": "0x2109",
			"FilterCount": "3",
			"Filter1": [
				"1",
				"2",
				"16",
				"",
				"FxFE%SITZ_MEM_YES"
			],
			"Filter2": [
				"1",
				"3",
				"16",
				"",
				"FxFE%BLINKER_YES"
			],
			"Filter3": [
				"1",
				"2",
				"4",
				"FxFE%SP_MEMORY",
				"FxFE%SP_NORMAL"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsgvr1_sst_gftsgvr2_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06CA",
			"CanFilterID": "0x04EA",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x46"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303",
				"0x1A86"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2109"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A3000": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2109",
			"FilterCount": "2",
			"Filter1": [
				"1",
				"2",
				"16",
				"",
				"FxFE%SITZ_MEM_YES"
			],
			"Filter2": [
				"1",
				"3",
				"16",
				"",
				"FxFE%BLINKER_YES"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsgvl4_sst_gftsgvl2_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06C8",
			"CanFilterID": "0x04E8",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x45"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2109"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A3100": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2109",
			"FilterCount": "1",
			"Filter1": [
				"1",
				"3",
				"16",
				"",
				"FxFE%BLINKER_YES"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsgvr4_sst_gftsgvr2_sgs"
		},
		"NetInfo": {
			"PtclType": [
				"CANBUS",
				"KWPF"
			],
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06CA",
			"CanFilterID": "0x04EA",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x46"
			]
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x8303"
			],
			"ReferCmd": [
				"0x1A86",
				"0x2109"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02",
			"LinkCmd": "0x8122F33ED4"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081",
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A3200": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsghl_sst_gftsghl2_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x47"
			]
		},
		"Access": {
			"AccessEcuBefore": [
				"0x00",
				"0xbf",
				"0x00",
				"0xc4",
				"0x00",
				"0xc6"
			],
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3C09"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A3300": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsghr_sst_gftsghr2_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x48"
			]
		},
		"Access": {
			"AccessEcuBefore": [
				"0x00",
				"0xbf",
				"0x00",
				"0xc4",
				"0x00",
				"0xc6"
			],
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3C09"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A3400": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x3C09",
			"FilterCount": "3",
			"Filter1": [
				"1",
				"2",
				"64",
				"",
				"ECU1_FxFE_Komfortbet???tigung ???ber IR%aktivieren"
			],
			"Filter2": [
				"1",
				"2",
				"8",
				"ECU1_FxFE_Aktivierung SN-Schaltereing???nge%SN aktivieren",
				""
			],
			"Filter3": [
				"KwdTyp_VCD",
				"1",
				"10",
				"4",
				"1",
				"0",
				"ECU1_FxFE_Spiegelmemory%aktivieren"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsgvl_sst_gftsgvl2_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x45"
			]
		},
		"Access": {
			"AccessEcuBefore": [
				"0x00",
				"0xbf",
				"0x00",
				"0xc4",
				"0x00",
				"0xc6"
			],
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A3500": {
		"FiltEleInfo": {
			"AddFilter": "ECU_EZS_FxFE_Zuziehhilfe%vorhanden",
			"FilterRelatedCmd": "0x3C09",
			"FilterCount": "3",
			"Filter1": [
				"1",
				"2",
				"64",
				"",
				"ECU1_FxFE_Komfortbet???tigung ???ber IR%aktivieren"
			],
			"Filter2": [
				"1",
				"2",
				"8",
				"ECU1_FxFE_Aktivierung SN-Schaltereing???nge%SN aktivieren",
				""
			],
			"Filter3": [
				"1",
				"2",
				"32",
				"",
				"FxFE%Memory vorhanden"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsgvr_sst_gftsgvr2_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x46"
			]
		},
		"Access": {
			"AccessEcuBefore": [
				"0x00",
				"0xbf",
				"0x00",
				"0xc4",
				"0x00",
				"0xc6"
			],
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3c09"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A3600": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2109",
			"FilterCount": "6",
			"Filter1": [
				"1",
				"4",
				"2",
				"ECU_TSGHL_FxFE_FH Schalter FH-/Sitzheizungsschalter%FH Schalter deaktiviert FH-/Sitzheizungsschalter aktiviert",
				""
			],
			"Filter2": [
				"1",
				"4",
				"4",
				"",
				"ECU_TSGHL_FxFE_FH Schalter FH-/Sitzheizungsschalter%FH Schalter deaktiviert FH-/Sitzheizungsschalter aktiviert"
			],
			"Filter3": [
				"1",
				"4",
				"3",
				"ECU1_FxFE_Sitzheizung%verbaut",
				"",
				"9"
			],
			"Filter4": [
				"1",
				"4",
				"3",
				"ECU_TSGHL_FxFE_Sitzheizung%verbaut",
				"",
				"9"
			],
			"Filter5": [
				"1",
				"4",
				"2",
				"ECU1_FxFE_Sitzheizung%verbaut",
				"",
				"9"
			],
			"Filter6": [
				"1",
				"4",
				"2",
				"ECU_TSGHL_FxFE_Sitzheizung%verbaut",
				"",
				"9"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsghl_sst_gftsghl2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0749",
			"CanFilterID": "0x04E9",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2109"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B",
				"0x89"
			]
		}
	},
	"1155802A3700": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2109",
			"FilterCount": "6",
			"Filter1": [
				"1",
				"4",
				"2",
				"ECU_TSGHR_FxFE_FH Schalter FH-/Sitzheizungsschalter%FH Schalter deaktiviert FH-/Sitzheizungsschalter aktiviert",
				""
			],
			"Filter2": [
				"1",
				"4",
				"4",
				"",
				"ECU_TSGHR_FxFE_FH Schalter FH-/Sitzheizungsschalter%FH Schalter deaktiviert FH-/Sitzheizungsschalter aktiviert"
			],
			"Filter3": [
				"1",
				"4",
				"2",
				"ECU1_FxFE_Sitzheizung%verbaut",
				""
			],
			"Filter4": [
				"1",
				"4",
				"4",
				"",
				"ECU1_FxFE_Sitzheizung%verbaut"
			],
			"Filter5": [
				"1",
				"4",
				"3",
				"ECU_TSGHR_FxFE_Sitzheizung%verbaut",
				"",
				"9"
			],
			"Filter6": [
				"1",
				"4",
				"2",
				"ECU_TSGHR_FxFE_Sitzheizung%verbaut",
				"",
				"9"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsghr_sst_gftsghr2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x074B",
			"CanFilterID": "0x04EB"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2109"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B",
				"0x89"
			]
		}
	},
	"1155802A3800": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2109",
			"FilterCount": "5",
			"Filter1": [
				"1",
				"2",
				"128",
				"",
				"ECU_TSGVL_FxFE_EC-Glas Spiegel%aktiviert"
			],
			"Filter2": [
				"1",
				"2",
				"64",
				"",
				"ECU_TSGVL_FxFE_Einstiegsleuchte%aktiviert"
			],
			"Filter3": [
				"1",
				"2",
				"8",
				"",
				"ECU_TSGVL_FxFE_Memoryfunktion%aktiviert"
			],
			"Filter4": [
				"1",
				"2",
				"8",
				"",
				"ECU1_FxFE_Memoryfunktion%aktiviert"
			],
			"Filter5": [
				"1",
				"3",
				"64",
				"ECU_TSGVL_FxFE_Sitzverstellschalter%Fehler???berwachung am Schalterbus aktiviert",
				""
			]
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsgvl_sst_gftsgvl2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06C8",
			"CanFilterID": "0x04E8",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xa8"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B",
				"0x89"
			]
		}
	},
	"1155802A3900": {
		"FiltEleInfo": {
			"AddFilter": [
			],
			"FilterRelatedCmd": "0x2109",
			"FilterCount": "5",
			"Filter1": [
				"1",
				"2",
				"128",
				"",
				"ECU_TSGVR_FxFE_EC-Glas Spiegel%aktiviert"
			],
			"Filter2": [
				"1",
				"2",
				"64",
				"",
				"ECU_TSGVR_FxFE_Einstiegsleuchte%aktiviert"
			],
			"Filter3": [
				"1",
				"2",
				"8",
				"",
				"ECU_TSGVR_FxFE_Memoryfunktion%aktiviert"
			],
			"Filter4": [
				"1",
				"3",
				"64",
				"ECU_TSGVR_FxFE_Sitzverstellschalter%Fehler???berwachung am Schalterbus aktiviert",
				""
			],
			"Filter5": [
				"1",
				"2",
				"8",
				"",
				"ECU1_FxFE_Memoryfunktion%aktiviert"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsgvr_sst_gftsgvr2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06CA",
			"CanFilterID": "0x04EA"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xa8"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B",
				"0x89"
			]
		}
	},
	"1155802A3A00": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsgvl2_sst_gftsgvl2_sgs"
		},
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x3C09",
			"FilterCount": "1",
			"Filter1": [
				"1",
				"2",
				"2",
				"FxFE%MIT_SITZBEL???FTUNG",
				""
			]
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x45"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3C09"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A3B00": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsgvr2_sst_gftsgvr2_sgs"
		},
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x3C09",
			"FilterCount": "1",
			"Filter1": [
				"1",
				"2",
				"2",
				"FxFE%MIT_SITZBEL???FTUNG",
				""
			]
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0x22",
				"0x46"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17ef381b3",
				"0x8300",
				"0x3C00"
			],
			"ReferCmd": [
				"0x3C00",
				"0x3C09"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x8122F33FD5"
		},
		"QuitInfo": {
			"QuitCmd": "0x8122F38218"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A3C00": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsgvl5_sst_gftsgvl2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06C8",
			"CanFilterID": "0x04E8"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2109"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A3D00": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsgvr5_sst_gftsgvr2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06CA",
			"CanFilterID": "0x04EA"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2109"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A3E00": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsghl5_sst_gftsghl2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0749",
			"CanFilterID": "0x04E9"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2109"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A3F00": {
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsghr5_sst_gftsghr2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x074B",
			"CanFilterID": "0x04EB"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x2109"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A2000": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2109",
			"FilterCount": "4",
			"Filter1": [
				"1",
				"2",
				"128",
				"",
				"ECU1_FxFE_EC-Glasfunktion%aktiviert"
			],
			"Filter2": [
				"1",
				"2",
				"4",
				"",
				"ECU_TSGVL6_FxFE_Ausstiegsleuchte%aktiviert"
			],
			"Filter3": [
				"1",
				"2",
				"8",
				"",
				"ECU_TSGVL6_FxFE_Spiegelmemory und Spiegelparkstellung%aktiviert"
			],
			"Filter4": [
				"1",
				"2",
				"128",
				"",
				"ECU_TSGVL6_FxFE_EC-Glasfunktion%aktiviert"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsgvl6_sst_gftsgvl1_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06C8",
			"CanFilterID": "0x04E8"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xa4"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A2100": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2109",
			"FilterCount": "3",
			"Filter1": [
				"1",
				"2",
				"4",
				"",
				"ECU_TSGVR6_FxFE_Ausstiegsleuchte%aktiviert"
			],
			"Filter2": [
				"1",
				"2",
				"8",
				"",
				"ECU_TSGVR6_FxFE_Spiegelmemory und Spiegelparkstellung%aktiviert"
			],
			"Filter3": [
				"1",
				"2",
				"128",
				"",
				"ECU_TSGVR6_FxFE_EC-Glasfunktion%aktiviert"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_tuersg_tsgvr6_sst_gftsgvr1_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06CA",
			"CanFilterID": "0x04EA"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0xa4"
			],
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A2200": {
		"DTCType": {
			"DBCondition": "pkw_bedien_tssr2_sst_gftssr2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x06B3",
			"CanFilterID": "0x04D6",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F150",
				"0x22F151",
				"0x22F111",
				"0x22F121",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802A2400": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2130",
			"FilterCount": "1",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"10",
				"16",
				"2",
				"02",
				"ECU1_FxFE_TPM Low-/Midline%Mid-Line"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_traktion_tpm_sst_GFTPMLS_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06B8",
			"CanFilterID": "0x04F8"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x2130"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A9500": {
		"DTCType": {
			"DBCondition": "pkw_rse_ftv2_sst_gfftv240_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0xD0",
				"0xE0"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17bf381b0",
				"0x8300",
				"0x8303",
				"0x1a86",
				"0x1a9a",
				"0x1a9b",
				"0x1a9c",
				"0x1a9d"
			],
			"ReferCmd": [
				"0x1a86",
				"0x2105",
				"0x2102",
				"0x2104",
				"0x2101",
				"0x2103"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x81d0f33e82"
		},
		"QuitInfo": {
			"QuitCmd": "0xC17BF382B1"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A9600": {
		"DTCType": {
			"DBCondition": "pkw_rse_fcdc_sst_gfxfcdc_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0xD0",
				"0xD1"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17bf381b0",
				"0x8300",
				"0x8303",
				"0x1a86"
			],
			"ReferCmd": "0x1a86"
		},
		"LinkInfo": {
			"LinkCmd": "0x81d0f33e82"
		},
		"QuitInfo": {
			"QuitCmd": "0xC17BF382B1"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A9700": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%RFTL"
		},
		"DTCType": {
			"DBCondition": "pkw_rse_rft_sst_gfxrft_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0xD0",
				"0xE1"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17bf381b0",
				"0x8300",
				"0x8303",
				"0x1a86"
			],
			"ReferCmd": "0x1a86"
		},
		"LinkInfo": {
			"LinkCmd": "0x81d0f33e82"
		},
		"QuitInfo": {
			"QuitCmd": "0xC17BF382B1"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A9800": {
		"FiltEleInfo": {
			"AddFilter": "FxFE%RFTR"
		},
		"DTCType": {
			"DBCondition": "pkw_rse_rft_sst_gfxrft_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": [
				"0xD0",
				"0xE2"
			]
		},
		"Access": {
			"AccessCmd": [
				"0xc17bf381b0",
				"0x8300",
				"0x8303",
				"0x1a86"
			],
			"ReferCmd": "0x1a86"
		},
		"LinkInfo": {
			"LinkCmd": "0x81d0f33e82"
		},
		"QuitInfo": {
			"QuitCmd": "0xC17BF382B1"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A9900": {
		"DTCType": {
			"DBCondition": "pkw_most_sdar2_sst_gfxsdar2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0642",
			"CanFilterID": "0x0682",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x60",
				"0x02",
				"0x62"
			],
			"CanAccessCmd": "0x064008021092FFFFFFFFFF",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x600006403E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x600006401081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A9A00": {
		"DTCType": {
			"DBCondition": "Pkw_most_sdar3_sst_GFSDAR3_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0645",
			"CanFilterID": "0x0685",
			"FlowDataCtrl": "0x60300832"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x21E1",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A9B00": {
		"DTCType": {
			"DBCondition": "pkw_most_hu_sst_gfxhu_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0641",
			"CanFilterID": "0x0681",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x60",
				"0x02",
				"0x62"
			],
			"CanAccessCmd": "0x064008021092FFFFFFFFFF",
			"ReferCmd": [
				"0x1A86",
				"0x21E1",
				"0x2131",
				"0x300101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x600006403E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x600006401081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86",
				"0x8B"
			]
		}
	},
	"1155802A9C00": {
		"DTCType": {
			"DBCondition": "pkw_most_hujp_sst_gfxhujp_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0641",
			"CanFilterID": "0x0681",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x60",
				"0x02",
				"0x62"
			],
			"CanAccessCmd": "0x064008021092FFFFFFFFFF",
			"ReferCmd": [
				"0x1A86",
				"0x21E1",
				"0x2131",
				"0x300101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x600006403E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x600006401081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A9D00": {
		"DTCType": {
			"DBCondition": "pkw_most_navi_sst_gfxnavih_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0648",
			"CanFilterID": "0x0688",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x60"
			],
			"CanAccessCmd": "0x064008021092FFFFFFFFFF",
			"ReferCmd": [
				"0x1A86",
				"0x21e1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x600006403E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x600006401081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A9E00": {
		"DTCType": {
			"DBCondition": "pkw_most_navi2_sst_gfxnavih_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x054A",
			"CanFilterID": "0x058A",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A9F00": {
		"DTCType": {
			"DBCondition": "pkw_most_sbs2_sst_gfxsbs_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0648",
			"CanFilterID": "0x0688",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x60",
				"0x02",
				"0x62"
			],
			"CanAccessCmd": "0x064008021092FFFFFFFFFF",
			"ReferCmd": [
				"0x1A86",
				"0x21e1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x600006403E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x600006401081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x86"
			]
		}
	},
	"1155802A8100": {
		"DTCType": {
			"DBCondition": "pkw_most_snd_sst_GFXSND_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0641",
			"CanFilterID": "0x0681",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x60",
				"0x02",
				"0x62"
			],
			"CanAccessCmd": "0x064008021092FFFFFFFFFF",
			"ReferCmd": [
				"0x1A86",
				"0x21E1",
				"0x31a6010001",
				"0x31a600"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x600006403E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x600006401081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A8200": {
		"DTCType": {
			"DBCondition": "pkw_most_snd2_sst_gfxsndhb_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0641",
			"CanFilterID": "0x0681",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x60"
			],
			"CanAccessCmd": "0x064008021092FFFFFFFFFF",
			"ReferCmd": [
				"0x1A86",
				"0x21E1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x600006403E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x600006401081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802A8300": {
		"DTCType": {
			"DBCondition": "pkw_most_snd3_sst_GFSND204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0691",
			"CanFilterID": "0x0452"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x1802FF00"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A8400": {
		"DTCType": {
			"DBCondition": "PKW_Most_snd3_sst_GFSND204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0641",
			"CanFilterID": "0x0681",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x21E1",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A8500": {
		"FiltEleInfo": {
			"AddFilter": "ECU_UHI2_FxFE_Bluetooth%on"
		},
		"DTCType": {
			"DBCondition": "pkw_most_uhi2_sst_gfxuhi_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0641",
			"CanFilterID": "0x0681",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x60",
				"0x02",
				"0x62"
			],
			"CanAccessCmd": "0x064008021092FFFFFFFFFF",
			"ReferCmd": [
				"0x1A86",
				"0x21E1",
				"0x300101",
				"0x2110"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x600006403E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x600006401081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A8700": {
		"DTCType": {
			"DBCondition": "pkw_most_tv2_sst_gfxtv_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0644",
			"CanFilterID": "0x0684",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x60",
				"0x02",
				"0x62"
			],
			"CanAccessCmd": "0x064008021092FFFFFFFFFF",
			"ReferCmd": [
				"0x1A86",
				"0x2116",
				"0x21e1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x600006403E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x600006401081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A8800": {
		"DTCType": {
			"DBCondition": "pkw_most_tv3_sst_gftv221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0644",
			"CanFilterID": "0x0684",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x60",
				"0x02",
				"0x62"
			],
			"CanAccessCmd": "0x064008021092FFFFFFFFFF",
			"ReferCmd": [
				"0x1A86",
				"0x21e1",
				"0x21A1",
				"0x1a9a",
				"0x1a9b",
				"0x1a9c",
				"0x1a9d",
				"0x2102",
				"0x2104",
				"0x2103",
				"0x2101",
				"0x31A6010001"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x600006403E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x600006401081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802A8900": {
		"DTCType": {
			"DBCondition": "pkw_most_tv4_sst_gftv25_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0642",
			"CanFilterID": "0x0682",
			"FlowDataCtrl": "0x60300832"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x21E1",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x21A1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A8A00": {
		"DTCType": {
			"DBCondition": "Pkw_most_tvjp2_sst_GFTVJP2_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0642",
			"CanFilterID": "0x0682",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x21E1",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802A8B00": {
		"DTCType": {
			"DBCondition": "pkw_srs_zae_h_sst_GFZAE_H_sgs"
		},
		"NetInfo": {
			"PtclType": "ISO9141",
			"IOBaudRate": "9600",
			"IOTimeParas": "IOTimes_Mode86",
			"AddrCode": "C1"
		},
		"Access": {
			"AccessCmd": "0x41282207",
			"ReferCmd": "0x410F"
		},
		"LinkInfo": {
			"LinkCmd": "0x415001"
		},
		"QuitInfo": {
			"QuitCmd": "0x4170"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802A8C00": {
		"DTCType": {
			"DBCondition": "pkw_klima_zuh_h_sst_GFZUH_H_sgs"
		},
		"NetInfo": {
			"PtclType": "KWPF",
			"IOBaudRate": "10416",
			"IOTimeParas": "IOTimes_Mode86",
			"DeviceID": "0xF3",
			"FilterID": "0x51"
		},
		"Access": {
			"AccessCmd": [
				"0x81",
				"0x8300"
			],
			"ReferCmd": "0x3C00"
		},
		"LinkInfo": {
			"LinkCmd": "0x3F"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802A8D00": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x300101",
			"FilterCount": "21",
			"Filter1": [
				"1",
				"7",
				"128",
				"",
				"FxFE%SA_PRW_nicht vorhanden"
			],
			"Filter2": [
				"1",
				"9",
				"128",
				"",
				"ECU_ZGW_FxFE_SA: Abstandsregeltempomat (C219)%nicht vorhanden"
			],
			"Filter3": [
				"1",
				"25",
				"4",
				"FxFE%Anh???ngerkupplung vorhanden",
				""
			],
			"Filter4": [
				"1",
				"8",
				"16",
				"ECU_ZGW_FxFE_SA: Klimaanlage%vorhanden",
				""
			],
			"Filter5": [
				"1",
				"3",
				"31",
				"FxFE%Sidemarker vorhanden",
				"",
				"4"
			],
			"Filter6": [
				"1",
				"26",
				"1",
				"FxFE%SA_Offroad_vorhanden",
				""
			],
			"Filter7": [
				"1",
				"3",
				"16",
				"ECU_ZGW_FxFE_L?nderbezogene SA Codierung%USA (C494)",
				""
			],
			"Filter8": [
				"1",
				"25",
				"64",
				"ECU_ZGW_FxFE_CAN-C: Luftfederung%vorhanden",
				""
			],
			"Filter9": [
				"1",
				"10",
				"16",
				"FxFE%EDW vorhanden",
				""
			],
			"Filter10": [
				"1",
				"3",
				"31",
				"FxFE%USA",
				"",
				"4"
			],
			"Filter11": [
				"1",
				"9",
				"16",
				"FxFE%RWTS vorhanden",
				""
			],
			"Filter12": [
				"1",
				"10",
				"16",
				"ECU_ZGW_FxFE_SA: Diebstahlwarnanlage (C551)%vorhanden",
				""
			],
			"Filter13": [
				"KwdTyp_VCD",
				"1",
				"18",
				"0",
				"8",
				"F0&20",
				"ECU_ZGW_FxFE_L???nderbezogene SA Codierung%Kanada (C460)"
			],
			"Filter14": [
				"KwdTyp_VCD",
				"1",
				"18",
				"0",
				"8",
				"F0&10",
				"ECU_ZGW_FxFE_L???nderbezogene SA Codierung%USA (C494)"
			],
			"Filter15": [
				"KwdTyp_VCD",
				"1",
				"18",
				"38",
				"1",
				"01",
				"ECU_ZGW_FxFE_SA: Scheibenwaschbeh???lter (C875)%vorhanden"
			],
			"Filter16": [
				"KwdTyp_VCD",
				"1",
				"18",
				"2D",
				"1",
				"01",
				"ECU_ZGW_FxFE_SA: Scheinwerferreinigungsanlage (C600)%vorhanden"
			],
			"Filter17": [
				"KwdTyp_VCD",
				"1",
				"18",
				"2E",
				"1",
				"01",
				"ECU_ZGW_FxFE_SA: Xenonlicht (C612)%vorhanden"
			],
			"Filter18": [
				"KwdTyp_VCD",
				"1",
				"18",
				"40",
				"96",
				"030000000000000000000300&000000000000000000000000",
				"ECU_ZGW_FxFE_???nderungsjahr%/1"
			],
			"Filter19": [
				"KwdTyp_VCD",
				"1",
				"18",
				"40",
				"96",
				"030000000000000000000300&010000000000000000000100",
				"ECU_ZGW_FxFE_???nderungsjahr%/X"
			],
			"Filter20": [
				"KwdTyp_VCD",
				"1",
				"18",
				"40",
				"96",
				"030000000000000000000300&020000000000000000000200",
				"ECU_ZGW_FxFE_???nderungsjahr%/2"
			],
			"Filter21": [
				"KwdTyp_VCD",
				"1",
				"18",
				"40",
				"96",
				"030000000000000000000300&030000000000000000000300",
				"ECU_ZGW_FxFE_???nderungsjahr%/Serienbeginn Baureihe"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_gateway_zgw_sst_gfzgw164_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x04E4",
			"CanFilterID": "0x05FE",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x300101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x8B"
			]
		}
	},
	"1155802A8F00": {
		"DTCType": {
			"DBCondition": "pkw_gateway_cgw_sst_gfcgw204_sgs"
		},
		"FiltEleInfo": {
			"AddFilter": "ECU_CGW_FxFE_--- L???ndercode%USA",
			"FilterRelatedCmd": "0x220024",
			"FilterCount": "6",
			"Filter1": [
				"1",
				"5",
				"8",
				"ECU_CGW_FxFE_275 Memory Paket Fahrersitz%available",
				""
			],
			"Filter2": [
				"1",
				"19",
				"1",
				"ECU_CGW_FxFE_500 Spiegelanklappung%available",
				""
			],
			"Filter3": [
				"1",
				"19",
				"8",
				"ECU_CGW_FxFE_Ausstiegsleuchten%available",
				""
			],
			"Filter4": [
				"1",
				"19",
				"8",
				"ECU_CGW_FxFE_Ausstiegsleuchten%available",
				""
			],
			"Filter5": [
				"1",
				"16",
				"8",
				"FxFE%EDW vorhanden",
				""
			],
			"Filter6": [
				"1",
				"8",
				"4",
				"ECU_CGW_FxFE_890 Heckdeckelfernschliessung%available",
				""
			]
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode02",
			"CanDeviceID": "0x0602",
			"CanFilterID": "0x0480"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802AB000": {
		"DTCType": {
			"DBCondition": "pkw_gateway_cgw_sst_gfcgw204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0602",
			"CanFilterID": "0x0480"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802AB200": {
		"DTCType": {
			"DBCondition": "pkw_gateway_zgw_sst_gfzgw169_sgs"
		},
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x300101",
			"FilterCount": "10",
			"Filter1": [
				"1",
				"8",
				"128",
				"FxFE%Lichtsensor vorhanden",
				""
			],
			"Filter2": [
				"1",
				"10",
				"4",
				"ECU_ZGW_FxFE_SA: T???rsteuerger???te hinten%vorhanden",
				""
			],
			"Filter3": [
				"1",
				"8",
				"8",
				"FxFE%Automatikgetriebe vorhanden",
				""
			],
			"Filter4": [
				"1",
				"8",
				"32",
				"FxFE%SRA vorhanden",
				""
			],
			"Filter5": [
				"1",
				"8",
				"2",
				"FxFE%Regensensor vorhanden",
				""
			],
			"Filter6": [
				"KwdTyp_VCD",
				"1",
				"18",
				"9",
				"1",
				"01",
				"FxFE%ZGW_Notalarm"
			],
			"Filter7": [
				"KwdTyp_VCD",
				"1",
				"18",
				"D",
				"1",
				"01",
				"FxFE%ZGW_Funkaufschaltung"
			],
			"Filter8": [
				"KwdTyp_VCD",
				"1",
				"18",
				"A",
				"1",
				"01",
				"FxFE%ZGW_Dachzeichen"
			],
			"Filter9": [
				"KwdTyp_VCD",
				"1",
				"18",
				"2D",
				"1",
				"01",
				"ECU_ZGW_FxFE_SA: Scheinwerferreinigungsanlage (C600)%vorhanden"
			],
			"Filter10": [
				"KwdTyp_VCD",
				"1",
				"18",
				"3A",
				"1",
				"00",
				"ECU_ZGW_FxFE_SA: T???rsteuerger???te hinten%nicht vorhanden"
			]
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x04E4",
			"CanFilterID": "0x05FE"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1a86",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x300101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x8B"
			]
		}
	},
	"1155802AB400": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x300101",
			"FilterCount": "5",
			"Filter1": [
				"1",
				"10",
				"64",
				"ECU_ZGW_FxFE_SA: Lichtpaket (C876)%vorhanden",
				""
			],
			"Filter2": [
				"1",
				"8",
				"128",
				"ECU_ZGW_FxFE_SA: Regensensor(C345)%vorhanden",
				""
			],
			"Filter3": [
				"1",
				"8",
				"48",
				"FxFE%SRA vorhanden",
				""
			],
			"Filter4": [
				"1",
				"9",
				"4",
				"ECU_ZGW_FxFE_SA: Spiegelabklappung (C500)%vorhanden",
				""
			],
			"Filter5": [
				"1",
				"6",
				"2",
				"ECU_ZGW_FxFE_SA: Spiegelabblendung (C249)%vorhanden",
				""
			]
		},
		"DTCType": {
			"DBCondition": "pkw_gateway_zgw_sst_GFZGW171_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x04E4",
			"CanFilterID": "0x05FE"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x300101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x8B"
			]
		}
	},
	"1155802AB600": {
		"DTCType": {
			"DBCondition": "pkw_gateway_zgw_sst_GFZGW203_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x04E4",
			"CanFilterID": "0x05FE"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x8B"
			]
		}
	},
	"1155802AB800": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x300101",
			"FilterCount": "32",
			"Filter1": [
				"1",
				"8",
				"32",
				"FxFE%SA SRA vorhanden",
				""
			],
			"Filter2": [
				"1",
				"10",
				"32",
				"FxFE%Heckrollo_vorhanden",
				""
			],
			"Filter3": [
				"1",
				"10",
				"4",
				"FxFE%KG vorhanden",
				""
			],
			"Filter4": [
				"1",
				"10",
				"8",
				"ECU_ZGW_FxFE_SA: Innenraumschutz (C882)%vorhanden",
				""
			],
			"Filter5": [
				"1",
				"9",
				"32",
				"FxFE%SA_Standheizung",
				""
			],
			"Filter6": [
				"1",
				"11",
				"21",
				"3",
				"3",
				"FxFE%ZGW_Serienbeginn",
				""
			],
			"Filter7": [
				"1",
				"10",
				"4",
				"FxFE%KG_vorhanden",
				""
			],
			"Filter8": [
				"1",
				"4",
				"16",
				"FxFE%SA_SONDERFAHRZEUG",
				""
			],
			"Filter9": [
				"1",
				"4",
				"32",
				"FxFE%SA_TAXI_FUNK",
				""
			],
			"Filter10": [
				"1",
				"10",
				"128",
				"FxFE%SA_Parktronic",
				""
			],
			"Filter11": [
				"1",
				"9",
				"25",
				"128",
				"8",
				"FxFE%SA_DISTRONIC",
				""
			],
			"Filter12": [
				"1",
				"8",
				"8",
				"0x01",
				"0x26",
				"0x00",
				"0x92",
				"FxFE%SA_AIRMATIC",
				"FxFE%SA_EHNR"
			],
			"Filter13": [
				"KwdTyp_VCD",
				"1",
				"18",
				"2A",
				"1",
				"00",
				"ECU_ZGW_FxFE_SA: Komfort-Schaltgetriebe (C424)%nicht vorhanden"
			],
			"Filter14": [
				"KwdTyp_VCD",
				"1",
				"18",
				"2A",
				"1",
				"01",
				"ECU_ZGW_FxFE_SA: Komfort-Schaltgetriebe (C424)%vorhanden"
			],
			"Filter15": [
				"KwdTyp_VCD",
				"1",
				"18",
				"2B",
				"1",
				"00",
				"ECU_ZGW_FxFE_SA: Automatik-Getriebe (C423)%nicht vorhanden"
			],
			"Filter16": [
				"KwdTyp_VCD",
				"1",
				"18",
				"2B",
				"1",
				"01",
				"ECU_ZGW_FxFE_SA: Automatik-Getriebe (C423)%vorhanden"
			],
			"Filter17": [
				"KwdTyp_VCD",
				"1",
				"18",
				"08",
				"1",
				"00",
				"ECU_ZGW_FxFE_MSS: Taxi Stromversorgung (C450/965)%nicht aktiv"
			],
			"Filter18": [
				"KwdTyp_VCD",
				"1",
				"18",
				"08",
				"1",
				"01",
				"ECU_ZGW_FxFE_MSS: Taxi Stromversorgung (C450/965)%aktiv"
			],
			"Filter19": [
				"KwdTyp_VCD",
				"1",
				"18",
				"3C",
				"1",
				"00",
				"ECU_ZGW_FxFE_SA: Diebstahlwarnanlage (C551)%nicht vorhanden"
			],
			"Filter20": [
				"KwdTyp_VCD",
				"1",
				"18",
				"3C",
				"1",
				"01",
				"ECU_ZGW_FxFE_SA: Diebstahlwarnanlage (C551)%vorhanden"
			],
			"Filter21": [
				"KwdTyp_VCD",
				"1",
				"18",
				"40",
				"96",
				"030000000000000000000300&000000000000000000000000",
				"ECU_ZGW_FxFE_???nderungsjahr%/1"
			],
			"Filter22": [
				"KwdTyp_VCD",
				"1",
				"18",
				"40",
				"96",
				"030000000000000000000300&010000000000000000000100",
				"ECU_ZGW_FxFE_???nderungsjahr%/X"
			],
			"Filter23": [
				"KwdTyp_VCD",
				"1",
				"18",
				"40",
				"96",
				"030000000000000000000300&020000000000000000000200",
				"ECU_ZGW_FxFE_???nderungsjahr%/2"
			],
			"Filter24": [
				"KwdTyp_VCD",
				"1",
				"18",
				"40",
				"96",
				"030000000000000000000300&030000000000000000000300",
				"ECU_ZGW_FxFE_???nderungsjahr%Serienbeginn Baureihe"
			],
			"Filter25": [
				"KwdTyp_VCD",
				"1",
				"18",
				"0",
				"144",
				"F00000000000000000000000000000000300&000000000000000000000000000000000000",
				"ECU_ZGW_FxFE_L???nderbezogene SA Codierung%Rest der Welt (RDW)"
			],
			"Filter26": [
				"KwdTyp_VCD",
				"1",
				"18",
				"0",
				"144",
				"F00000000000000000000000000000000300&100000000000000000000000000000000100",
				"ECU_ZGW_FxFE_L???nderbezogene SA Codierung%USA (C494)"
			],
			"Filter27": [
				"KwdTyp_VCD",
				"1",
				"18",
				"0",
				"144",
				"F00000000000000000000000000000000300&200000000000000000000000000000000100",
				"ECU_ZGW_FxFE_L???nderbezogene SA Codierung%Kanada (C460)"
			],
			"Filter28": [
				"KwdTyp_VCD",
				"1",
				"18",
				"0",
				"144",
				"F00000000000000000000000000000000300&300000000000000000000000000000000000",
				"ECU_ZGW_FxFE_L???nderbezogene SA Codierung%Japan (C498)"
			],
			"Filter29": [
				"KwdTyp_VCD",
				"1",
				"18",
				"0",
				"144",
				"F00000000000000000000000000000000300&400000000000000000000000000000000000",
				"ECU_ZGW_FxFE_L???nderbezogene SA Codierung%Schweiz (C823)"
			],
			"Filter30": [
				"KwdTyp_VCD",
				"1",
				"18",
				"0",
				"144",
				"F00000000000000000000000000000000300&500000000000000000000000000000000000",
				"ECU_ZGW_FxFE_L???nderbezogene SA Codierung%Australien (C625)"
			],
			"Filter31": [
				"KwdTyp_VCD",
				"1",
				"18",
				"0",
				"144",
				"F00000000000000000000000000000000300&600000000000000000000000000000000000",
				"ECU_ZGW_FxFE_L???nderbezogene SA Codierung%Golfstaaten (C623)"
			],
			"Filter32": [
				"KwdTyp_VCD",
				"1",
				"18",
				"0",
				"144",
				"F00000000000000000000000000000000300&F00000000000000000000000000000000300",
				"ECU_ZGW_FxFE_L???nderbezogene SA Codierung%SG nicht programmiert (SNV)"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_gateway_zgw_sst_gfzgw211_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x04E4",
			"CanFilterID": "0x05FE"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x1A9E",
				"0x1A9F",
				"0x300101"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x8B"
			]
		}
	},
	"1155802ABB00": {
		"DTCType": {
			"DBCondition": "pkw_gateway_zgw_sst_gfzgw220_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x04E4",
			"CanFilterID": "0x05FE",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1a86",
				"0x1a9a",
				"0x1a9b",
				"0x1a9c",
				"0x1a9d",
				"0x300101"
			]
		},
		"LinkInfo": {
			"LinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"QuitCmd": "0x82"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x8B"
			]
		}
	},
	"1155802ABD00": {
		"FiltEleInfo": {
			"FilterRelatedCmd": "0x2101",
			"FilterCount": "71",
			"Filter1": [
				"KwdTyp_VCD",
				"1",
				"10",
				"6B",
				"1",
				"01",
				"ECU_ZGW_FxFE_551 Einbruch- und Diebstahlwarnanlage - EDW (SA)%vorhanden"
			],
			"Filter2": [
				"KwdTyp_VCD",
				"1",
				"10",
				"12",
				"1",
				"01",
				"ECU_ZGW_FxFE_540 Heckrollo (SA)%vorhanden"
			],
			"Filter3": [
				"KwdTyp_VCD",
				"1",
				"10",
				"6",
				"1",
				"01",
				"FxFE%ZGW_SOSI"
			],
			"Filter4": [
				"KwdTyp_VCD",
				"1",
				"10",
				"7",
				"1",
				"01",
				"FxFE%ZGW_GAS"
			],
			"Filter5": [
				"KwdTyp_VCD",
				"1",
				"10",
				"2D",
				"1",
				"00",
				"ECU_ZGW_FxFE_297 Sonneschutzrollo elektr. in Fondt???ren%nicht vorhanden"
			],
			"Filter6": [
				"KwdTyp_VCD",
				"1",
				"10",
				"2D",
				"1",
				"01",
				"ECU_ZGW_FxFE_297 Sonneschutzrollo elektr. in Fondt???ren%vorhanden"
			],
			"Filter7": [
				"KwdTyp_VCD",
				"1",
				"10",
				"75",
				"3",
				"02",
				"ECU_ZGW_FxFE_Dachvariante%415 aussenlaufendes Schiebe-Hebedach (SA)"
			],
			"Filter8": [
				"KwdTyp_VCD",
				"1",
				"10",
				"4E",
				"2",
				"02",
				"ECU_ZGW_FxFE_Sonderschutzklasse%Sonderschutz B6 / B7 (Code Z07)"
			],
			"Filter9": [
				"KwdTyp_VCD",
				"1",
				"10",
				"14",
				"1",
				"01",
				"ECU_ZGW_FxFE_614/618/615/616 Xenon Scheinwerfer (SA)%vorhanden"
			],
			"Filter10": [
				"KwdTyp_VCD",
				"1",
				"10",
				"15",
				"1",
				"01",
				"ECU_ZGW_FxFE_600 Scheinwerferreinigungsanlage (SA)%vorhanden"
			],
			"Filter11": [
				"KwdTyp_VCD",
				"1",
				"10",
				"44",
				"3",
				"00",
				"ECU_ZGW_FxFE_L???ndercode%Remain of world (ROW)"
			],
			"Filter12": [
				"KwdTyp_VCD",
				"1",
				"10",
				"44",
				"3",
				"01",
				"ECU_ZGW_FxFE_L???ndercode%USA"
			],
			"Filter13": [
				"KwdTyp_VCD",
				"1",
				"10",
				"44",
				"3",
				"02",
				"ECU_ZGW_FxFE_L???ndercode%Canada"
			],
			"Filter14": [
				"KwdTyp_VCD",
				"1",
				"10",
				"44",
				"3",
				"03",
				"ECU_ZGW_FxFE_L???ndercode%Japan"
			],
			"Filter15": [
				"KwdTyp_VCD",
				"1",
				"10",
				"44",
				"3",
				"04",
				"ECU_ZGW_FxFE_L???ndercode%Switzerland"
			],
			"Filter16": [
				"KwdTyp_VCD",
				"1",
				"10",
				"44",
				"3",
				"05",
				"ECU_ZGW_FxFE_L???ndercode%Australia"
			],
			"Filter17": [
				"KwdTyp_VCD",
				"1",
				"10",
				"44",
				"3",
				"06",
				"ECU_ZGW_FxFE_L???ndercode%Gulf states"
			],
			"Filter18": [
				"KwdTyp_VCD",
				"1",
				"10",
				"44",
				"3",
				"0F",
				"ECU_ZGW_FxFE_L???ndercode%signal not available"
			],
			"Filter19": [
				"KwdTyp_VCD",
				"1",
				"10",
				"75",
				"3",
				"00",
				"ECU_ZGW_FxFE_Dachvariante%Normaldach (Serie)"
			],
			"Filter20": [
				"KwdTyp_VCD",
				"1",
				"10",
				"75",
				"3",
				"01",
				"ECU_ZGW_FxFE_Dachvariante%414 Schiebe-Hebedach (SA)"
			],
			"Filter21": [
				"KwdTyp_VCD",
				"1",
				"10",
				"75",
				"5",
				"02",
				"ECU_ZGW_FxFE_Dachvariante%415 aussenlaufendes Schiebe-Hebedach (SA)"
			],
			"Filter22": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"00",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2000"
			],
			"Filter23": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"01",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2001"
			],
			"Filter24": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"02",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2002"
			],
			"Filter25": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"03",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2003"
			],
			"Filter26": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"04",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2004"
			],
			"Filter27": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"05",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2005"
			],
			"Filter28": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"06",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2006"
			],
			"Filter29": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"07",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2007"
			],
			"Filter30": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"08",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2008"
			],
			"Filter31": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"09",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2009"
			],
			"Filter32": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"0A",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2010"
			],
			"Filter33": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"0B",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2011"
			],
			"Filter34": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"0C",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2012"
			],
			"Filter35": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"0D",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2013"
			],
			"Filter36": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"0E",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2014"
			],
			"Filter37": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"0F",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2015"
			],
			"Filter38": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"10",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2016"
			],
			"Filter39": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"11",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2017"
			],
			"Filter40": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"12",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2018"
			],
			"Filter41": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"13",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2019"
			],
			"Filter42": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"14",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2020"
			],
			"Filter43": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"15",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2021"
			],
			"Filter44": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"16",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2022"
			],
			"Filter45": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"17",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2023"
			],
			"Filter46": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"18",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2024"
			],
			"Filter47": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"19",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2025"
			],
			"Filter48": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"1A",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2026"
			],
			"Filter49": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"1B",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2027"
			],
			"Filter50": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"1C",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2028"
			],
			"Filter51": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"1D",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%2029"
			],
			"Filter52": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"1E",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%nicht FxFEiniert"
			],
			"Filter53": [
				"KwdTyp_VCD",
				"1",
				"10",
				"52",
				"5",
				"1F",
				"ECU_ZGW_FxFE_???nderungsjahr Jahr%Stand bei Markteinf??????hrung"
			],
			"Filter54": [
				"KwdTyp_VCD",
				"1",
				"10",
				"12",
				"1",
				"00",
				"ECU_ZGW_FxFE_540 Heckrollo (SA)%nicht vorhanden"
			],
			"Filter55": [
				"KwdTyp_VCD",
				"1",
				"10",
				"12",
				"1",
				"01",
				"ECU_ZGW_FxFE_540 Heckrollo (SA)%vorhanden"
			],
			"Filter56": [
				"KwdTyp_VCD",
				"1",
				"10",
				"2A",
				"1",
				"00",
				"ECU_ZGW_FxFE_881 Heckdeckelfernschliessung (SA)%nicht vorhanden"
			],
			"Filter57": [
				"KwdTyp_VCD",
				"1",
				"10",
				"2A",
				"1",
				"01",
				"ECU_ZGW_FxFE_881 Heckdeckelfernschliessung (SA)%vorhanden"
			],
			"Filter58": [
				"KwdTyp_VCD",
				"1",
				"10",
				"13",
				"1",
				"00",
				"ECU_ZGW_FxFE_275 Memory Paket (SA)%nicht vorhanden"
			],
			"Filter59": [
				"KwdTyp_VCD",
				"1",
				"10",
				"13",
				"1",
				"01",
				"ECU_ZGW_FxFE_275 Memory Paket (SA)%vorhanden"
			],
			"Filter60": [
				"KwdTyp_VCD",
				"1",
				"10",
				"5D",
				"2",
				"00",
				"ECU_ZGW_FxFE_Lenkervariante%not FxFEined"
			],
			"Filter61": [
				"KwdTyp_VCD",
				"1",
				"10",
				"5D",
				"2",
				"01",
				"ECU_ZGW_FxFE_Lenkervariante%Left hand drive"
			],
			"Filter62": [
				"KwdTyp_VCD",
				"1",
				"10",
				"5D",
				"2",
				"02",
				"ECU_ZGW_FxFE_Lenkervariante%Right hand drive"
			],
			"Filter63": [
				"KwdTyp_VCD",
				"1",
				"10",
				"5D",
				"2",
				"03",
				"ECU_ZGW_FxFE_Lenkervariante%Signal not available"
			],
			"Filter64": [
				"KwdTyp_VCD",
				"1",
				"10",
				"4E",
				"2",
				"00",
				"ECU_ZGW_FxFE_Sonderschutzklasse%Kein Sonderschutz"
			],
			"Filter65": [
				"KwdTyp_VCD",
				"1",
				"10",
				"4E",
				"2",
				"01",
				"ECU_ZGW_FxFE_Sonderschutzklasse%Sonderschutz B4 (Code Z04)"
			],
			"Filter66": [
				"KwdTyp_VCD",
				"1",
				"10",
				"4E",
				"2",
				"02",
				"ECU_ZGW_FxFE_Sonderschutzklasse%Sonderschutz B6 / B7 (Code Z07)"
			],
			"Filter67": [
				"KwdTyp_VCD",
				"1",
				"10",
				"4E",
				"2",
				"03",
				"ECU_ZGW_FxFE_Sonderschutzklasse%Signal not available"
			],
			"Filter68": [
				"KwdTyp_VCD",
				"1",
				"10",
				"20",
				"1",
				"00",
				"ECU_ZGW_FxFE_234 Totwinkerlerkennung (SA)%nicht vorhanden"
			],
			"Filter69": [
				"KwdTyp_VCD",
				"1",
				"10",
				"20",
				"1",
				"01",
				"ECU_ZGW_FxFE_234 Totwinkerlerkennung (SA)%vorhanden"
			],
			"Filter70": [
				"KwdTyp_VCD",
				"1",
				"10",
				"1F",
				"1",
				"01",
				"ECU_ZGW_FxFE_610 Nightview (SA)%vorhanden"
			],
			"Filter71": [
				"KwdTyp_VCD",
				"1",
				"10",
				"6D",
				"1",
				"01",
				"ECU_ZGW_FxFE_228 Standheizung (SA)%vorhanden"
			]
		},
		"DTCType": {
			"DBCondition": "pkw_gateway_zgw_sst_gfzgw221_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0602",
			"CanFilterID": "0x0480"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9C",
				"0x2101",
				"0x2102"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x8B"
			]
		}
	},
	"1155802ABF00": {
		"DTCType": {
			"DBCondition": "pkw_gateway_zgw_sst_gfzgw240_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x04E4",
			"CanFilterID": "0x05FE"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A86",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85",
				"0x8B"
			]
		}
	},
	"1155802AE600": {
		"DTCType": {
			"DBCondition": "PKW_tele_lct_sst_GFXLCT_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x069a",
			"CanFilterID": "0x0493",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x21e1",
				"0x1a9a",
				"0x1a9b",
				"0x1a9c",
				"0x1a9d",
				"0x2104"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3e"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802AE700": {
		"DTCType": {
			"DBCondition": "PKW_tele_lct_sst_GFXLCT_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0701",
			"CanFilterID": "0x0460",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3e"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802AE800": {
		"DTCType": {
			"DBCondition": "PKW_tele_lct_sst_GFXLCT_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0709",
			"CanFilterID": "0x0461",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x2104"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3e"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802AE900": {
		"DTCType": {
			"DBCondition": "PKW_tele_lct_sst_GFXLCT_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0731",
			"CanFilterID": "0x0466",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3e"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802AEA00": {
		"DTCType": {
			"DBCondition": "PKW_tele_lct_sst_GFXLCT_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0729",
			"CanFilterID": "0x0465",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3e"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802AEB00": {
		"DTCType": {
			"DBCondition": "pkw_tele_gpsbox_sst_gfxgpsbox_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x069A",
			"CanFilterID": "0x0493",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": "0x1A86"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802AEC00": {
		"DTCType": {
			"DBCondition": "pkw_tele_teljp_sst_GFXTELJP_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x064F",
			"CanFilterID": "0x068F"
		},
		"Access": {
			"CanAccessCmd": "0x001c08021092ffffffffff",
			"ReferCmd": [
				"0x1A86",
				"0x21A0",
				"0x21A1",
				"0x21E1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x6000001c3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x6000001c1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802AED00": {
		"DTCType": {
			"DBCondition": "pkw_tele_teljp2_sst_GFTELJP_204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0783",
			"CanFilterID": "0x04F0"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x1802FF00"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802AEE00": {
		"DTCType": {
			"DBCondition": "pkw_tele_teljp2_sst_GFTELJP_204_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode03",
			"CanDeviceID": "0x064B",
			"CanFilterID": "0x068B",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x21A1",
				"0x21E1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802AEF00": {
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0440",
			"CanFilterID": "0x0440"
		},
		"Access": {
			"CanAccessCmd": "0x044008021092FFFFFFFFFF"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E02"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x044008021081FFFFFFFFFF"
		}
	},
	"1155802B1100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_abc231_x_sst_sgs_gf_abc231_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0692",
			"CanFilterID": "0x0492",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x1A9E",
				"0x1A9F"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B1300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_APM_197_x_sst_sgs_gf_APM_197_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x062B",
			"CanFilterID": "0x04C5",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B",
				"0x22F152",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B1500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_BMS197C_x_sst_sgs_gf_BMS197C_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E7",
			"CanFilterID": "0x07EF",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802D6F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tpm_221_x_sst_sgs_gf_tpm_221_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0642",
			"CanFilterID": "0x0488",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89",
				"0x8B"
			]
		}
	},
	"1155802D9100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tssr222_x_sst_sgs_gf_tssr222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x061C",
			"CanFilterID": "0x059C",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D9200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tssr246_x_sst_sgs_gf_tssr246_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06B3",
			"CanFilterID": "0x04D6",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D9300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tv221_x_sst_sgs_gf_tv221_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TV221_x_SG_Einstieg_TV221_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TV221_x_cv_TV221_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06a1",
			"CanFilterID": "0x0454",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802D9400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tv34jap_x_sst_sgs_gf_tv34jap_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TV34JAP_x_SG_Einstieg_TV34JAP_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TV34JAP_x_cv_TV34JAP_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06a1",
			"CanFilterID": "0x0454",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802D9500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tv45_x_sst_sgs_gf_tv45_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TV45_x_SG_Einstieg_TV45_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TV45_x_cv_TV45_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06a1",
			"CanFilterID": "0x0454",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802D9700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tvjp_204_x_sst_sgs_gf_tvjp_204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0773",
			"CanFilterID": "0x04EE",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802D9800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_twtr_fl222_x_sst_sgs_gf_twtr_fl222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0600",
			"CanFilterID": "0x0580",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "13"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D9900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_twtr_fr222_x_sst_sgs_gf_twtr_fr222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0602",
			"CanFilterID": "0x0582",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "13"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D9A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_twtr_rl222_x_sst_sgs_gf_twtr_rl222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0604",
			"CanFilterID": "0x0584",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "13"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D9B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_twtr_rr222_x_sst_sgs_gf_twtr_rr222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0606",
			"CanFilterID": "0x0586",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "13"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D9E00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_uci45_x_sst_sgs_gf_uci45_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_UCI45_X_cv_UCI45_X_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_uci45_x_sg_einstieg_uci45_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06d1",
			"CanFilterID": "0x045a",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802D9F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_uci_204_x_sst_sgs_gf_uci_204_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_UCI_204_X_cv_UCI_204_X_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_uci_204_x_sg_einstieg_uci_204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06d1",
			"CanFilterID": "0x045a",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802D8000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ufpcamg_x_sst_sgs_gf_ufpcamg_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06fa",
			"CanFilterID": "0x049f",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802D8300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_vgs4nag2_x_sst_sgs_gf_vgs4nag2_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_VGS4NAG2_X_SG_Einstieg_VGS4NAG2_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_VGS4NAG2_X_cv_VGS4NAG2_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E1",
			"CanFilterID": "0x07E9",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89",
				"0x8B"
			]
		}
	},
	"1155802D8400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_vgsnag2_x_sst_sgs_gf_vgsnag2_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_VGSNAG2_X_SG_Einstieg_VGSNAG2_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_VGSNAG2_X_cv_VGSNAG2_X_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_VGSNAG2_X_act_VGSNAG2_X_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_VGSNAG2_X_adapt_VGSNAG2_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07e1",
			"CanFilterID": "0x07e9",
			"FlowDataCtrl": "0x6030080A"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802D8500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_vgsnag3_x_sst_sgs_gf_vgsnag3_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_vgsnag3_x_cv_vgsnag3_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_vgsnag3_x_SG_Einstieg_VGSNAG3_X_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_vgsnag3_x_act_vgsnag3_x_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_vgsnag3_x_adapt_vgsnag3_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E1",
			"CanFilterID": "0x07E9",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802D8800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_vrdu_x_sst_sgs_gf_vrdu_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_VRDU_X_SG_Einstieg_VRDU_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_VRDU_X_cv_VRDU_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x063a",
			"CanFilterID": "0x0487",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802D8A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_vta222_x_sst_sgs_gf_vta222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0618",
			"CanFilterID": "0x0598",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D8D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_wpra205_x_sst_sgs_gf_wpra205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0609",
			"CanFilterID": "0x0589",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0E"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802D8E00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_wpra222_x_sst_sgs_gf_wpra222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0609",
			"CanFilterID": "0x0589",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0E"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DB000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_wshtc222_x_sst_sgs_gf_wshtc222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0611",
			"CanFilterID": "0x0591",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "10"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DB400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_xlct_x_sst_sgs_gf_xlct_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_XLCT_x_SG_Einstieg_XLCT_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_XLCT_x_cv_XLCT_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x069a",
			"CanFilterID": "0x0493",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DB500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_xlctecl_x_sst_sgs_gf_xlctecl_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_XLCTECL_X_cv_XLCTECL_X_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_XLCTECL_X_SG_Einstieg_XLCTECL_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0701",
			"CanFilterID": "0x0460",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DB600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_xlctrem_x_sst_sgs_gf_xlctrem_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_XLCTREM_X_cv_XLCTREM_X_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_XLCTREM_X_SG_Einstieg_XLCTREM_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0729",
			"CanFilterID": "0x0465",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DB700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_xlctserv_x_sst_sgs_gf_xlctserv_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_XLCTSERV_X_cv_XLCTSERV_X_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_XLCTSERV_X_SG_Einstieg_XLCTSERV_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0709",
			"CanFilterID": "0x0461",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DB800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_xlcttrk_x_sst_sgs_gf_xlcttrk_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_XLCTTRK_X_cv_XLCTTRK_X_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_XLCTTRK_X_SG_Einstieg_XLCTTRK_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0731",
			"CanFilterID": "0x0466",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DBA00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_pts_212_sst_sgs_gf_pts_212_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x078A",
			"CanFilterID": "0x04B1",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802DBB00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_MPC212_X_sst_sgs_gf_MPC212_X_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_MPC212_X_SG_Einstieg_MPC212_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_MPC212_X_cv_MPC212_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06A2",
			"CanFilterID": "0x0494",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"1155802DBC00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_abc222_odx_sst_sgs_gf_abc222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_abc222_odx_sg_einstieg_abc222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_abc222_odx_cv_abc222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0744",
			"CanFilterID": "0x0724",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DBD00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_abr222_odx_sst_sgs_gf_abr222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_abr222_odx_sg_einstieg_abr222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_abr222_odx_cv_abr222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x061B",
			"CanFilterID": "0x059B",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DA000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_asbmdb205_odx_sst_sgs_gf_asbmdb205_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x063A",
			"CanFilterID": "0x05BA",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "20"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DA100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_asbm_da_odx_sst_sgs_gf_asbm_da_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0609",
			"CanFilterID": "0x0589",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "1F"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DA200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_asbm_db_odx_sst_sgs_gf_asbm_db_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0609",
			"CanFilterID": "0x0589",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "20"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DA300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_as_f217_odx_sst_sgs_gf_as_f217_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060D",
			"CanFilterID": "0x058D",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "15"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x%1%"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DA700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_bc_f222_odx_sst_sgs_gf_bc_f222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_bc_f222_odx_sg_einstieg_bc_f222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_bc_f222_odx_cv_bc_f222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0609",
			"CanFilterID": "0x0589",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DA800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_bc_r222_odx_sst_sgs_gf_bc_r222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_bc_r222_odx_sg_einstieg_bc_r222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_bc_r222_odx_cv_bc_r222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060D",
			"CanFilterID": "0x058D",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DAC00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_bms222mh_odx_sst_sgs_gf_bms222mh_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_bms222mh_odx_sg_einstieg_bms222mh_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_bms222mh_odx_cv_bms222mh_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E7",
			"CanFilterID": "0x07EF",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DAD00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_bms222pi_odx_sst_sgs_gf_bms222pi_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_bms222pi_odx_sg_einstieg_bms222pi_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_bms222pi_odx_cv_bms222pi_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E7",
			"CanFilterID": "0x07EF",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DAE00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_bms242t_odx_sst_sgs_gf_bms242t_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0602",
			"CanFilterID": "0x0612",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DAF00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_bms_gen1mod_odx_sst_sgs_gf_bms_gen1mod_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E7",
			"CanFilterID": "0x07EF",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DD100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_CEPC_odx_sst_sgs_gf_CEPC_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cepc_odx_sg_einstieg_cepc_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cepc_odx_cv_cepc_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E5",
			"CanFilterID": "0x07ED",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DD200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_chm_odx_sst_sgs_gf_chm_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060D",
			"CanFilterID": "0x058D",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "22"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DD500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_clock222_odx_sst_sgs_gf_clock222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0609",
			"CanFilterID": "0x0589",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "08"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DD600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_com222_odx_sst_sgs_gf_com222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_com222_odx_sg_einstieg_com222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_com222_odx_cv_com222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060b",
			"CanFilterID": "0x058b",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DD900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_cpf222_odx_sst_sgs_gf_cpf222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cpf222_odx_sg_einstieg_cpf222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cpf222_odx_cv_cpf222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x061D",
			"CanFilterID": "0x059D",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DDA00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_cr41r_odx_sst_sgs_gf_cr41r_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DDB00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_cr43_odx_sst_sgs_gf_cr43_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr43_odx_sg_einstieg_cr43_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr43_odx_cv_cr43_odx_xml",
			"DoDisplay": "N"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr43_odx_act_cr43_odx_xml",
			"DoDisplay": "N"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr43_odx_adapt_cr43_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802DDC00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_cr61_odx_sst_sgs_gf_cr61_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr61_odx_sg_einstieg_cr61_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr61_odx_cv_cr61_odx_xml",
			"DoDisplay": "N"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr61_odx_act_cr61_odx_xml",
			"DoDisplay": "N"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr61_odx_adapt_cr61_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802DDD00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_cr6nfz_odx_sst_sgs_gf_cr6nfz_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode04",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F150",
				"0x22F151",
				"0x22F111",
				"0x22F121",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DDE00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_crcm217_odx_sst_sgs_gf_crcm217_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0601",
			"CanFilterID": "0x0581",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DC000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_crd3s2_odx_sst_sgs_gf_crd3s2_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DC100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ctrlc205_odx_sst_sgs_gf_ctrlc205_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x063A",
			"CanFilterID": "0x05BA",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DC200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ctrlc_222_odx_sst_sgs_gf_ctrlc_222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_ctrlc_222_odx_sg_einstieg_ctrlc_222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_ctrlc_222_odx_cv_ctrlc_222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x063A",
			"CanFilterID": "0x05BA",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DC300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dcdc222pi_odx_sst_sgs_gf_dcdc222pi_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_dcdc222pi_odx_sg_einstieg_dcdc222pi_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_dcdc222pi_odx_cv_dcdc222pi_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0666",
			"CanFilterID": "0x05E6",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DC500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_disp_rl_5_odx_sst_sgs_gf_disp_rl_5_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_disp_rl_5_odx_sg_einstieg_disp_rl_5_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_disp_rl_5_odx_cv_disp_rl_5_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0639",
			"CanFilterID": "0x05B9",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DC600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_disp_rr_5_odx_sst_sgs_gf_disp_rr_5_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_disp_rr_5_odx_sg_einstieg_disp_rr_5_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_disp_rr_5_odx_cv_disp_rr_5_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x063D",
			"CanFilterID": "0x05BD",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DC700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dmfl222_odx_sst_sgs_gf_dmfl222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_dmfl222_odx_sg_einstieg_dmfl222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_dmfl222_odx_cv_dmfl222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0600",
			"CanFilterID": "0x0580",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DC800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dmfr222_odx_sst_sgs_gf_dmfr222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_dmfr222_odx_sg_einstieg_dmfr222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_dmfr222_odx_cv_dmfr222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0602",
			"CanFilterID": "0x0582",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DC900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dmrl222_odx_sst_sgs_gf_dmrl222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_dmrl222_odx_sg_einstieg_dmrl222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_dmrl222_odx_cv_dmrl222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0604",
			"CanFilterID": "0x0584",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DCA00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dmrr222_odx_sst_sgs_gf_dmrr222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_dmrr222_odx_sg_einstieg_dmrr222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_dmrr222_odx_cv_dmrr222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0606",
			"CanFilterID": "0x0586",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DCB00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_drvu_odx_sst_sgs_gf_drvu_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x062A",
			"CanFilterID": "0x0485",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DCC00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm222_odx_sst_sgs_gf_dsm222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_dsm222_odx_sg_einstieg_dsm222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_dsm222_odx_cv_dsm222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x065F",
			"CanFilterID": "0x05DF",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DCD00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_htvnfl205_odx_sst_sgs_gf_dsm_htvnfl205_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0600",
			"CanFilterID": "0x0580",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "12"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DCE00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_htvnfr205_odx_sst_sgs_gf_dsm_htvnfr205_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0602",
			"CanFilterID": "0x0582",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "12"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DCF00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_htvnrl205_odx_sst_sgs_gf_dsm_htvnrl205_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0604",
			"CanFilterID": "0x0584",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "12"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DF000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_htvnrr205_odx_sst_sgs_gf_dsm_htvnrr205_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0606",
			"CanFilterID": "0x0586",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "12"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DF100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_ms_fl205_odx_sst_sgs_gf_dsm_ms_fl205_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0600",
			"CanFilterID": "0x0580",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "10"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DF200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_ms_fl222_odx_sst_sgs_gf_dsm_ms_fl222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0600",
			"CanFilterID": "0x0580",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "10"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DF300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_ms_fr205_odx_sst_sgs_gf_dsm_ms_fr205_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0602",
			"CanFilterID": "0x0582",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "10"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DF400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_ms_fr222_odx_sst_sgs_gf_dsm_ms_fr222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0602",
			"CanFilterID": "0x0582",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "10"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DF500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_ms_rl222_odx_sst_sgs_gf_dsm_ms_rl222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0604",
			"CanFilterID": "0x0584",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "10"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DF600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_ms_rr222_odx_sst_sgs_gf_dsm_ms_rr222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0606",
			"CanFilterID": "0x0586",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "10"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DF700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_wm_fl222_odx_sst_sgs_gf_dsm_wm_fl222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0600",
			"CanFilterID": "0x0580",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0F"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DF800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_wm_fr222_odx_sst_sgs_gf_dsm_wm_fr222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0602",
			"CanFilterID": "0x0582",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0F"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DF900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_wrb_rl222_odx_sst_sgs_gf_dsm_wrb_rl222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0604",
			"CanFilterID": "0x0584",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0F"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DFA00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dsm_wrb_rr222_odx_sst_sgs_gf_dsm_wrb_rr222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0606",
			"CanFilterID": "0x0586",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0F"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DFB00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dspc_205_odx_sst_sgs_gf_dspc_205_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x063B",
			"CanFilterID": "0x05BB",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DFC00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dspc_222_odx_sst_sgs_gf_dspc_222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_dspc_222_odx_sg_einstieg_dspc_222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_dspc_222_odx_cv_dspc_222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x063B",
			"CanFilterID": "0x05BB",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DFD00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dtr222_odx_sst_sgs_gf_dtr222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_dtr222_odx_sg_einstieg_dtr222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_dtr222_odx_cv_dtr222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0741",
			"CanFilterID": "0x0721",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DFE00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ec222_odx_sst_sgs_gf_ec222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0609",
			"CanFilterID": "0x0589",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0C"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DFF00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_egs53_odx_sst_sgs_gf_egs53_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07e1",
			"CanFilterID": "0x07e9",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": "0x1A87"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DE000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_eis222_odx_sst_sgs_gf_eis222_odx_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_EIS222_ODX_cv_EIS222_ODX_xml",
			"DoDisplay": "N"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_eis222_odx_sg_einstieg_eis222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0607",
			"CanFilterID": "0x0587",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DE200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_epkb222_odx_sst_sgs_gf_epkb222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_epkb222_odx_sg_einstieg_epkb222_odx_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_epkb222_odx_cv_epkb222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0654",
			"CanFilterID": "0x05D4",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802DE300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_eps205_tk_odx_sst_sgs_gf_eps205_tk_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0745",
			"CanFilterID": "0x0725",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DE400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_eps205_zf_odx_sst_sgs_gf_eps205_zf_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0745",
			"CanFilterID": "0x0725",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802DE500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_eps222_tk_odx_sst_sgs_gf_eps222_tk_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_eps222_tk_odx_sg_einstieg_eps222_tk_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_eps222_tk_odx_cv_eps222_tk_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0745",
			"CanFilterID": "0x0725",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DE600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_eps222_zf_odx_sst_sgs_gf_eps222_zf_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_eps222_zf_odx_sg_einstieg_eps222_zf_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_eps222_zf_odx_cv_eps222_zf_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0745",
			"CanFilterID": "0x0725",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802DE800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_esp205_odx_sst_sgs_gf_esp205_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E2",
			"CanFilterID": "0x07EA",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802DE900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_esp205_amg_odx_sst_sgs_gf_esp205_amg_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E2",
			"CanFilterID": "0x07EA",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802DEE00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_fcw222_odx_sst_sgs_gf_fcw222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_fcw222_odx_sg_einstieg_fcw222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_fcw222_odx_cv_fcw222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0655",
			"CanFilterID": "0x05D5",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E1000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ffap205_odx_sst_sgs_gf_ffap205_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x065C",
			"CanFilterID": "0x05DC",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E1100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_flanfs222_odx_sst_sgs_gf_flanfs222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_flanfs222_odx_sg_einstieg_flanfs222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_flanfs222_odx_cv_flanfs222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0761",
			"CanFilterID": "0x0760",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E1200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_fscm_gen4_odx_sst_sgs_gf_fscm_gen4_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_fscm_gen4_odx_sg_einstieg_fscm_gen4_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_fscm_gen4_odx_cv_fscm_gen4_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E3",
			"CanFilterID": "0x07EB",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E1300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_fu_222_odx_sst_sgs_gf_fu_222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_fu_222_odx_sg_einstieg_fu_222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_fu_222_odx_cv_fu_222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0712",
			"CanFilterID": "0x0702",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E1400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_fwlpd222_odx_sst_sgs_gf_fwlpd222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0608",
			"CanFilterID": "0x0588",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "05"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E1500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_fwlpp222_odx_sst_sgs_gf_fwlpp222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060C",
			"CanFilterID": "0x058C",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "05"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E1600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_gdo222_odx_sst_sgs_gf_gdo222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0609",
			"CanFilterID": "0x0589",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "03"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E1700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hli_fl222_odx_sst_sgs_gf_hli_fl222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_hli_fl222_odx_sg_einstieg_hli_fl222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_hli_fl222_odx_cv_hli_fl222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0650",
			"CanFilterID": "0x05D0",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E1800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hli_fr222_odx_sst_sgs_gf_hli_fr222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_hli_fr222_odx_sg_einstieg_hli_fr222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_hli_fr222_odx_cv_hli_fr222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0656",
			"CanFilterID": "0x05D6",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E1900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hu5_odx_sst_sgs_gf_hu5_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_hu5_odx_sg_einstieg_hu5_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_hu5_odx_cv_hu5_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0638",
			"CanFilterID": "0x05B8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E1A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hu5_entry_odx_sst_sgs_gf_hu5_entry_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_hu5_entry_odx_sg_einstieg_hu5_entry_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_hu5_entry_odx_cv_hu5_entry_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0638",
			"CanFilterID": "0x05B8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E1B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hud222_odx_sst_sgs_gf_hud222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_hud222_odx_sg_einstieg_hud222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_hud222_odx_cv_hud222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0642",
			"CanFilterID": "0x05C2",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E1C00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hvac222_odx_sst_sgs_gf_hvac222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_hvac222_odx_sg_einstieg_hvac222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_hvac222_odx_cv_hvac222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0611",
			"CanFilterID": "0x0591",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E1D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hvac_f205_odx_sst_sgs_gf_hvac_f205_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0611",
			"CanFilterID": "0x0591",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "02"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x%1%"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E1E00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hvac_f222_odx_sst_sgs_gf_hvac_f222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0611",
			"CanFilterID": "0x0591",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "02"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E1F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hvac_r205_odx_sst_sgs_gf_hvac_r205_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0611",
			"CanFilterID": "0x0591",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "01"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x%1%"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E0000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hvac_r222_odx_sst_sgs_gf_hvac_r222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0611",
			"CanFilterID": "0x0591",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "01"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E0100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ibs222_odx_sst_sgs_gf_ibs222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0609",
			"CanFilterID": "0x0589",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "01"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E0200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ibsm3g205_r1_odx_sst_sgs_gf_ibsm3g205_r1_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0625",
			"CanFilterID": "0x05A5",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E0300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ibsm3g205_r4_odx_sst_sgs_gf_ibsm3g205_r4_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0626",
			"CanFilterID": "0x05A6",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E0400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ic222_odx_sst_sgs_gf_ic222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_ic222_odx_sg_einstieg_ic222_odx_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_ic222_odx_cv_ic222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0641",
			"CanFilterID": "0x05C1",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x87",
				"0x89"
			]
		}
	},
	"1155802E0800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ihtm205_odx_sst_sgs_gf_ihtm205_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0611",
			"CanFilterID": "0x0591",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "7A"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E0900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ihtm222_odx_sst_sgs_gf_ihtm222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_ihtm222_odx_sg_einstieg_ihtm222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_ihtm222_odx_cv_ihtm222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0613",
			"CanFilterID": "0x0593",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E0A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ihtmrc205_odx_sst_sgs_gf_ihtmrc205_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0611",
			"CanFilterID": "0x0591",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "03"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E0B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_inv20em01_odx_sst_sgs_gf_inv20em01_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_inv20em01_odx_sg_einstieg_inv20em01_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_inv20em01_odx_cv_inv20em01_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E6",
			"CanFilterID": "0x07EE",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E0D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_kg222_odx_sst_sgs_gf_kg222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_kg222_odx_sg_einstieg_kg222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_kg222_odx_cv_kg222_odx_xml",
			"DoDisplay": "N"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_KG222_ODX_act_KG222_ODX_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0620",
			"CanFilterID": "0x05A0",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802E0E00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_kg222_ef1_odx_sst_sgs_gf_kg222_ef1_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_kg222_ef1_odx_sg_einstieg_kg222_ef1_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_kg222_ef1_odx_cv_kg222_ef1_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x063E",
			"CanFilterID": "0x05BE",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E0F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_lcu_fl222_odx_sst_sgs_gf_lcu_fl222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0650",
			"CanFilterID": "0x05D0",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "08"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E3000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_lcu_fr222_odx_sst_sgs_gf_lcu_fr222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0656",
			"CanFilterID": "0x05D6",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "08"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E3200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_le_tube_odx_sst_sgs_gf_le_tube_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_le_tube_odx_sg_einstieg_le_tube_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_le_tube_odx_cv_le_tube_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E6",
			"CanFilterID": "0x07EE",
			"ChooseDsMenu": "TRUE",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E3300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_lisb205_odx_sst_sgs_gf_lisb205_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0609",
			"CanFilterID": "0x0589",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0B"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E3400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_lrr205_odx_sst_sgs_gf_lrr205_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0742",
			"CanFilterID": "0x0722",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E3500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_lrsm222_odx_sst_sgs_gf_lrsm222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0609",
			"CanFilterID": "0x0589",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0B"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E3600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ltcu222_odx_sst_sgs_gf_ltcu222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_ltcu222_odx_sg_einstieg_ltcu222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_ltcu222_odx_cv_ltcu222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x061E",
			"CanFilterID": "0x059E",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E3700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mcms_fl222_odx_sst_sgs_gf_mcms_fl222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_mcms_fl222_odx_sg_einstieg_mcms_fl222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_mcms_fl222_odx_cv_mcms_fl222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0610",
			"CanFilterID": "0x0590",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E3800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mcms_fr222_odx_sst_sgs_gf_mcms_fr222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_mcms_fr222_odx_sg_einstieg_mcms_fr222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_mcms_fr222_odx_cv_mcms_fr222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0612",
			"CanFilterID": "0x0592",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E3900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mcms_rl222_odx_sst_sgs_gf_mcms_rl222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_mcms_rl222_odx_sg_einstieg_mcms_rl222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_mcms_rl222_odx_cv_mcms_rl222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0614",
			"CanFilterID": "0x0594",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E3A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mcms_rr222_odx_sst_sgs_gf_mcms_rr222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_mcms_rr222_odx_sg_einstieg_mcms_rr222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_mcms_rr222_odx_cv_mcms_rr222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0616",
			"CanFilterID": "0x0596",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E3B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ME1778_odx_sst_sgs_gf_me1778_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_me1778_odx_sg_einstieg_me1778_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_me1778_odx_cv_me1778_odx_xml",
			"DoDisplay": "N"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_me1778_odx_act_me1778_odx_xml",
			"DoDisplay": "N"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_me1778_odx_adapt_me1778_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802E3E00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_med177_odx_sst_sgs_gf_med177_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_med177_odx_sg_einstieg_med177_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_med177_odx_cv_med177_odx_xml",
			"DoDisplay": "N"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_med177_odx_act_med177_odx_xml",
			"DoDisplay": "N"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_med177_odx_adapt_med177_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802E3F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_med1775_odx_sst_sgs_gf_med1775_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E2000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_med177v6la_odx_sst_sgs_gf_med177v6la_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_med177v6la_odx_sg_einstieg_med177v6la_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_med177v6la_odx_cv_med177v6la_odx_xml",
			"DoDisplay": "N"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_med177v6la_odx_act_med177v6la_odx_xml",
			"DoDisplay": "N"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_med177v6la_odx_adapt_med177v6la_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802E2100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_med40_odx_sst_sgs_gf_med40_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E2300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mmpc222_odx_sst_sgs_gf_mmpc222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_mmpc222_odx_sg_einstieg_mmpc222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_mmpc222_odx_cv_mmpc222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0653",
			"CanFilterID": "0x05D3",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E2400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mms_f2_odx_sst_sgs_gf_mms_f2_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_mms_f2_odx_sg_einstieg_mms_f2_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_mms_f2_odx_cv_mms_f2_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0768",
			"CanFilterID": "0x0769",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E2500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mms_f3_odx_sst_sgs_gf_mms_f3_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_mms_f3_odx_sg_einstieg_mms_f3_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_mms_f3_odx_cv_mms_f3_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x076A",
			"CanFilterID": "0x076B",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E2600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mms_r1_odx_sst_sgs_gf_mms_r1_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_mms_r1_odx_sg_einstieg_mms_r1_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_mms_r1_odx_cv_mms_r1_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x076E",
			"CanFilterID": "0x076F",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E2700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mms_r2_odx_sst_sgs_gf_mms_r2_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_mms_r2_odx_sg_einstieg_mms_r2_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_mms_r2_odx_cv_mms_r2_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0770",
			"CanFilterID": "0x0771",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E2800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mms_r4_odx_sst_sgs_gf_mms_r4_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_mms_r4_odx_sg_einstieg_mms_r4_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_mms_r4_odx_cv_mms_r4_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0772",
			"CanFilterID": "0x0773",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E2900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mpm222_odx_sst_sgs_gf_mpm222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_mpm222_odx_sg_einstieg_mpm222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_mpm222_odx_cv_mpm222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x061A",
			"CanFilterID": "0x059A",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E2A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_nv222_odx_sst_sgs_gf_nv222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_nv222_odx_sg_einstieg_nv222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_nv222_odx_cv_nv222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0643",
			"CanFilterID": "0x05C3",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E2B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_obl222_odx_sst_sgs_gf_obl222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_obl222_odx_sg_einstieg_obl222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_obl222_odx_cv_obl222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0663",
			"CanFilterID": "0x05E3",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E2C00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ocm222_odx_sst_sgs_gf_ocm222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0645",
			"CanFilterID": "0x05C5",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "17"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E2E00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ohcm222_odx_sst_sgs_gf_ohcm222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0609",
			"CanFilterID": "0x0589",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0A"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E2F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_orc222_odx_sst_sgs_gf_orc222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_orc222_odx_sg_einstieg_orc222_odx_xml",
			"DoDisplay": "N"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_orc222_odx_act_orc222_odx_xml",
			"DoDisplay": "N"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_orc222_odx_adapt_orc222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_orc222_odx_cv_orc222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0645",
			"CanFilterID": "0x05C5",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802E5100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_park222_odx_sst_sgs_gf_park222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_park222_odx_sg_einstieg_park222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_park222_odx_cv_park222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0743",
			"CanFilterID": "0x0723",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E5200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_pass166_odx_sst_sgs_gf_pass166_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_pass166_odx_sg_einstieg_pass166_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_pass166_odx_cv_pass166_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060B",
			"CanFilterID": "0x058B",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F18C",
				"0x22F190"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E5300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_perfume222_odx_sst_sgs_gf_perfume222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0611",
			"CanFilterID": "0x0591",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "4E"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E4500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_pmcms222_odx_sst_sgs_gf_pmcms222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_pmcms222_odx_sg_einstieg_pmcms222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_pmcms222_odx_cv_pmcms222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0617",
			"CanFilterID": "0x0597",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E4600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_pmcu_fl222_odx_sst_sgs_gf_pmcu_fl222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0610",
			"CanFilterID": "0x0590",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0A"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E4700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_pmcu_fr222_odx_sst_sgs_gf_pmcu_fr222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0612",
			"CanFilterID": "0x0592",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0A"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E4800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_pmcu_rl222_odx_sst_sgs_gf_pmcu_rl222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0614",
			"CanFilterID": "0x0594",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0A"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E4900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_pmcu_rr222_odx_sst_sgs_gf_pmcu_rr222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0616",
			"CanFilterID": "0x0596",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0A"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E4A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_psmd205_odx_sst_sgs_gf_psmd205_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060D",
			"CanFilterID": "0x058D",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "0D"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E4B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_psmp205_odx_sst_sgs_gf_psmp205_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060D",
			"CanFilterID": "0x058D",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "04"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E4C00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ptcm222_odx_sst_sgs_gf_ptcm222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_ptcm222_odx_sg_einstieg_ptcm222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_ptcm222_odx_cv_ptcm222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0615",
			"CanFilterID": "0x0595",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E7100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_rbtmfl222_odx_sst_sgs_gf_rbtmfl222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_rbtmfl222_odx_sg_einstieg_rbtmfl222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_rbtmfl222_odx_cv_rbtmfl222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0640",
			"CanFilterID": "0x05C0",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E7200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_rbtmfr222_odx_sst_sgs_gf_rbtmfr222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_rbtmfr222_odx_sg_einstieg_rbtmfr222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_rbtmfr222_odx_cv_rbtmfr222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0647",
			"CanFilterID": "0x05C7",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E7300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_rdu_222_odx_sst_sgs_gf_rdu_222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_rdu_222_odx_sg_einstieg_rdu_222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_rdu_222_odx_cv_rdu_222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0742",
			"CanFilterID": "0x0722",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E7400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_rvc222_odx_sst_sgs_gf_rvc222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_rvc222_odx_sg_einstieg_rvc222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_rvc222_odx_cv_rvc222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0644",
			"CanFilterID": "0x05C4",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E7600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_sccm222_odx_sst_sgs_gf_sccm222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_sccm222_odx_sg_einstieg_sccm222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_sccm222_odx_cv_sccm222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0746",
			"CanFilterID": "0x0726",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E7700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_scrcm3_odx_sst_sgs_gf_scrcm3_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_scrcm3_odx_sg_einstieg_scrcm3_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_scrcm3_odx_cv_scrcm3_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E4",
			"CanFilterID": "0x07EC",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E7800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_scu205_odx_sst_sgs_gf_scu205_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x061C",
			"CanFilterID": "0x059C",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E7900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_sdcdc222_odx_sst_sgs_gf_sdcdc222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0609",
			"CanFilterID": "0x0589",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "09"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E7A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_seatd222_odx_sst_sgs_gf_seatd222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_seatd222_odx_sg_einstieg_seatd222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_seatd222_odx_cv_seatd222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0608",
			"CanFilterID": "0x0588",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E7B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_seatp222_odx_sst_sgs_gf_seatp222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_seatp222_odx_sg_einstieg_seatp222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_seatp222_odx_cv_seatp222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060C",
			"CanFilterID": "0x058C",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E7C00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_seat_rl222_odx_sst_sgs_gf_seat_rl222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_seat_rl222_odx_sg_einstieg_seat_rl222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_seat_rl222_odx_cv_seat_rl222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060A",
			"CanFilterID": "0x058A",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E7D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_seat_rr222_odx_sst_sgs_gf_seat_rr222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_seat_rr222_odx_sg_einstieg_seat_rr222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_seat_rr222_odx_cv_seat_rr222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060E",
			"CanFilterID": "0x058E",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802E7F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_shmd222_odx_sst_sgs_gf_shmd222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0608",
			"CanFilterID": "0x0588",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "21"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E6000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_shmp222_odx_sst_sgs_gf_shmp222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060C",
			"CanFilterID": "0x058C",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "21"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E6100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_shm_fl205_odx_sst_sgs_gf_shm_fl205_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060D",
			"CanFilterID": "0x058D",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "21"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E6200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_shm_fr205_odx_sst_sgs_gf_shm_fr205_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060D",
			"CanFilterID": "0x058D",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "20"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E6300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_shm_r_odx_sst_sgs_gf_shm_r_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060D",
			"CanFilterID": "0x058D",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "23"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E6400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_shm_rl_odx_sst_sgs_gf_shm_rl_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060A",
			"CanFilterID": "0x058A",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "21"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E6500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_shm_rr_odx_sst_sgs_gf_shm_rr_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x060E",
			"CanFilterID": "0x058E",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "21"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E6600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_siren222_odx_sst_sgs_gf_siren222_odx_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0618",
			"CanFilterID": "0x0598",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "02"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802E6700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_smpc222_odx_sst_sgs_gf_smpc222_odx_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_smpc222_odx_sg_einstieg_smpc222_odx_xml",
			"DoDisplay": "N"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_smpc222_odx_cv_smpc222_odx_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0740",
			"CanFilterID": "0x0720",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B1600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_bms197f_x_sst_sgs_gf_bms197f_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E4",
			"CanFilterID": "0x07EC",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F154",
				"0x22F153",
				"0x22F15B",
				"0x22F155"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B1700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_bms197r_x_sst_sgs_gf_bms197r_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F154",
				"0x22F18C",
				"0x22F153",
				"0x22F15B",
				"0x22F155"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B1A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_CEPC_x_sst_sgs_gf_CEPC_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_CEPC_x_sg_einstieg_CEPC_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_CEPC_x_cv_CEPC_x_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_CEPC_X_adapt_CEPC_X_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E5",
			"CanFilterID": "0x07ED",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B",
				"0x22F18C",
				"0x221000"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"1155802B1D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_CEPC_MFA_x_sst_sgs_gf_CEPC_MFA_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E5",
			"CanFilterID": "0x07ED",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B0000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_CPF117_x_sst_sgs_gf_CPF117_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_CPF117_X_sg_einstieg_CPF117_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_CPF117_X_cv_CPF117_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07BB",
			"CanFilterID": "0x04F7",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B0100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_cr42_x_sst_sgs_gf_cr42_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr42_x_cv_cr42_x_xml",
			"DoDisplay": "N"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr42_x_SG_Einstieg_cr42_x_xml",
			"DoDisplay": "N"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802B0200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_cr43_x_sst_sgs_gf_cr43_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr43_x_SG_Einstieg_cr43_x_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr43_x_act_cr43_x_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr43_x_adapt_cr43_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr43_x_CV_cr43_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802B0400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_cr61_x_sst_sgs_gf_cr61_x_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr61_x_act_cr61_x_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr61_x_adapt_cr61_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr61_x_cv_cr61_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_cr61_x_SG_Einstieg_cr61_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x221000"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802B0600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_crr1_x_sst_sgs_gf_crr1_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B0800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dcdc242_x_sst_sgs_gf_dcdc242_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06D2",
			"CanFilterID": "0x049A",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B3200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ESP9_212_x_sst_sgs_gf_ESP9_212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0632",
			"CanFilterID": "0x0486",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F111",
				"0x22F121",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802B3400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ezs218_x_sst_sgs_gf_ezs218_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0612",
			"CanFilterID": "0x0482",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F154",
				"0x22F1A0",
				"0x22F155"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B3C00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ibsm3g_r1_x_sst_sgs_gf_ibsm3g_r1_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0672",
			"CanFilterID": "0x048e",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B3D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ibsm3g_r4_x_sst_sgs_gf_ibsm3g_r4_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x067a",
			"CanFilterID": "0x048f",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B3F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_igw212_x_sst_sgs_gf_igw212_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_IGW212_X_cv_IGW212_X_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_IGW212_X_SG_Einstieg_IGW212_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x073A",
			"CanFilterID": "0x04A7",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F154",
				"0x22F153",
				"0x22F18C",
				"0x22F155"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B2000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_kg212m_x_sst_sgs_gf_kg212m_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x068B",
			"CanFilterID": "0x04D1",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802B2500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_lrr3_463_x_sst_sgs_gf_lrr3_463_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_LRR3_463_X_sg_einstieg_LRR3_463_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_LRR3_463_X_cv_LRR3_463_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0702",
			"CanFilterID": "0x04A0",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F154",
				"0x22F153",
				"0x22F18C",
				"0x22F155"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B2600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mcmsfl166_x_sst_sgs_gf_mcmsfl166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_mcmsfl166_x_sg_einstieg_mcmsfl166_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_MCMSFL166_X_cv_MCMSFL166_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0663",
			"CanFilterID": "0x04CC",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F18C",
				"0x22F153",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B2700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_mcmsfr166_x_sst_sgs_gf_mcmsfr166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_mcmsfr166_x_sg_einstieg_mcmsfr166_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_MCMSFR166_X_cv_MCMSFR166_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x066B",
			"CanFilterID": "0x04CD",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F18C",
				"0x22F153",
				"0x22F131"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B2800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ME1778_x_sst_sgs_gf_me1778_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F111",
				"0x22F121",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B2900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_MED177AMG_x_sst_sgs_gf_med177amg_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F111",
				"0x22F121",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B2A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_MED40AMG_x_sst_sgs_gf_med40amg_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_MED40AMG_x_cv_MED40AMG_x_xml",
			"DoDisplay": "N"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_MED40AMG_x_SG_Einstieg_MED40AMG_x_xml",
			"DoDisplay": "N"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F111",
				"0x22F121",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B2B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_MED40CNG_x_sst_sgs_gf_med40cng_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_MED40CNG_x_SG_Einstieg_MED40CNG_x_xml",
			"DoDisplay": "N"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_MED40CNG_x_act_MED40CNG_x_xml",
			"DoDisplay": "N"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_MED40CNG_x_adapt_MED40CNG_x_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F111",
				"0x22F121",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802B5200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_NV231_x_sst_sgs_gf_nv231_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x070A",
			"CanFilterID": "0x04A1",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F154",
				"0x22F155",
				"0x22F111",
				"0x22F121",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B5500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_PARK117_x_sst_sgs_gf_PARK117_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_PARK117_X_sg_einstieg_PARK117_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_PARK117_X_cv_PARK117_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x078A",
			"CanFilterID": "0x04B1",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802B5C00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_rbs212_x_sst_sgs_gf_rbs212_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_rbs212_x_SG_Einstieg_rbs212_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_RBS212_X_cv_RBS212_X_xml"
		},
		"ACTType": {
			"ACTType": "FoxwellManual",
			"DBCondition": "xentry_pkw_rbs212_x_act_rbs212_x_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_rbs212_x_adapt_rbs212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0632",
			"CanFilterID": "0x0486",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x1A9C",
				"0x1A9D",
				"0x1A9E",
				"0x1A9F"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89",
				"0x8B"
			]
		}
	},
	"1155802B5D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_rbtmfl231_x_sst_sgs_gf_rbtmfl231_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06BA",
			"CanFilterID": "0x0497",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F154",
				"0x22F153",
				"0x22F18C",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B5E00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_rbtmfr231_x_sst_sgs_gf_rbtmfr231_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06C2",
			"CanFilterID": "0x0498",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F154",
				"0x22F153",
				"0x22F18C",
				"0x22F15B",
				"0x22F155"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B4000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_rdu_212fr_x_sst_sgs_gf_rdu_212fr_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_RDU_212FR_X_sg_einstieg_RDU_212FR_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_RDU_212FR_X_cv_RDU_212FR_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x063a",
			"CanFilterID": "0x0487",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x89"
			]
		}
	},
	"1155802B4200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_rvc204_x_sst_sgs_gf_rvc204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0733",
			"CanFilterID": "0x04E6",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F154",
				"0x22F153",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802B4300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_samr_231_x_sst_sgs_gf_samr_231_x_xml"
		},
		"AdaptType": {
			"AdaptType": "FoxwellManual",
			"DBCondition": "xentry_pkw_samr_231_x_adapt_samr_231_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06FB",
			"CanFilterID": "0x04DF",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F15B",
				"0x22F18C"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802B4700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_smpc212_x_sst_sgs_gf_smpc212_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_SMPC212_x_SG_Einstieg_SMPC212_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_SMPC212_x_cv_SMPC212_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06a2",
			"CanFilterID": "0x0494",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B4900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_spc231_x_sst_sgs_gf_spc231_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0692",
			"CanFilterID": "0x0492",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802B4A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_svs204_x_sst_sgs_gf_svs204_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x066A",
			"CanFilterID": "0x048D",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F154",
				"0x22F153",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802B4F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tssr176_x_sst_sgs_gf_tssr176_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06B3",
			"CanFilterID": "0x04D6",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F111",
				"0x22F121",
				"0x22F150",
				"0x22F151",
				"0x22F154",
				"0x22F153",
				"0x22F155",
				"0x22F15B"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B7600": {
		"DTCType": {
			"DBCondition": "pkw_motorott_MED177V6LA_sst_GFMED177V6LA_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300800"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154",
				"0x22F155",
				"0x22F150",
				"0x22F151",
				"0x22F153",
				"0x22F111",
				"0x22F121",
				"0x22F131",
				"0x221001"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B7700": {
		"DTCType": {
			"DBCondition": "pkw_most_tv4_sst_gftv25_sgs"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode03",
			"CanDeviceID": "0x0642",
			"CanFilterID": "0x0682",
			"FlowDataCtrl": "0x60300828"
		},
		"Access": {
			"AccessEcuBefore": [
				"0x02",
				"0x65"
			],
			"CanAccessCmd": "0x1092",
			"ReferCmd": [
				"0x1A87",
				"0x21E1",
				"0x1A9A",
				"0x1A9B",
				"0x1A9C",
				"0x1A9D",
				"0x2108",
				"0x2105",
				"0x2102",
				"0x2106",
				"0x210C",
				"0x210B",
				"0x2104",
				"0x2103",
				"0x2101",
				"0x21A1"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E01"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x83",
				"0x84"
			]
		}
	},
	"1155802B7800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_asbmdb205_x_sst_sgs_gf_asbmdb205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x063A",
			"CanFilterID": "0x05BA",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "20"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802B7A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_bms222mh_x_sst_sgs_gf_bms222mh_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_BMS222MH_x_cv_BMS222MH_x_xml",
			"DoDisplay": "N"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E7",
			"CanFilterID": "0x07EF",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86",
				"0x89"
			]
		}
	},
	"1155802B7B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_bms242t_x_sst_sgs_gf_bms242t_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0602",
			"CanFilterID": "0x0612",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802B7D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_cepc242_x_sst_sgs_gf_cepc242_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E5",
			"CanFilterID": "0x07ED",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802B7E00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ctrlc5s1_x_sst_sgs_gf_ctrlc5s1_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_CTRLC5S1_X_cv_CTRLC5S1_X_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_CTRLC5S1_X_SG_Einstieg_CTRLC5S1_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0743",
			"CanFilterID": "0x04E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802B7F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ctrlc5s1_166_x_sst_sgs_gf_ctrlc5s1_166_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_ctrlc5s1_166_x_sg_einstieg_ctrlc5s1_166_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_CTRLC5S1_166_x_cv_CTRLC5S1_166_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0743",
			"CanFilterID": "0x04E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B6000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ctrlc205_x_sst_sgs_gf_ctrlc205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x063A",
			"CanFilterID": "0x05BA",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802B6100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_disp_rl_5s1_x_sst_sgs_gf_disp_rl_5s1_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_DISP_RL_5S1_X_cv_DISP_RL_5S1_X_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_DISP_RL_5S1_X_SG_Einstieg_DISP_RL_5S1_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06D9",
			"CanFilterID": "0x045B",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B6200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_disp_rr_5s1_x_sst_sgs_gf_disp_rr_5s1_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_DISP_RR_5S1_X_cv_DISP_RR_5S1_X_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_DISP_RR_5S1_X_SG_Einstieg_DISP_RR_5S1_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06F9",
			"CanFilterID": "0x045F",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B6400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dspc5s1_x_sst_sgs_gf_dspc5s1_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_DSPC5S1_x_cv_DSPC5S1_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_DSPC5S1_X_SG_Einstieg_DSPC5S1_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0753",
			"CanFilterID": "0x04EA",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B6500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_dspc_205_x_sst_sgs_gf_dspc_205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x063B",
			"CanFilterID": "0x05BB",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802B6800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hu5_entry_x_sst_sgs_gf_hu5_entry_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_hu5_entry_x_sg_einstieg_hu5_entry_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_HU5_ENTRY_X_cv_HU5_ENTRY_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0638",
			"CanFilterID": "0x05B8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B6900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hu5s1_x_sst_sgs_gf_hu5s1_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_hu5s1_x_sg_einstieg_hu5s1_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_HU5S1_x_cv_HU5S1_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0652",
			"CanFilterID": "0x048A",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B6A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hud_zub_x_sst_sgs_gf_hud_zub_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06C1",
			"CanFilterID": "0x0458",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B6D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_hvac_f205_x_sst_sgs_gf_hvac_f205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0611",
			"CanFilterID": "0x0591",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "02"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x%1%"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802B9000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_inv20em01_x_sst_sgs_gf_inv20em01_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_inv20em01_x_sg_einstieg_inv20em01_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_INV20EM01_x_cv_INV20EM01_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E6",
			"CanFilterID": "0x07EE",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B9200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_med1775_x_sst_sgs_gf_med1775_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x07E0",
			"CanFilterID": "0x07E8",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802B9300": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_ptcm156_x_sst_sgs_gf_ptcm156_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0693",
			"CanFilterID": "0x04D2",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802B9400": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_pxl218_fl_x_sst_sgs_gf_pxl218_fl_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0603",
			"CanFilterID": "0x04C0",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802B9500": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_pxl218_fr_x_sst_sgs_gf_pxl218_fr_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0613",
			"CanFilterID": "0x04C2",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802B9600": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_rbs242_x_sst_sgs_gf_rbs242_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0632",
			"CanFilterID": "0x0486",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802B9700": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_rvc218_x_sst_sgs_gf_rvc218_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_RVC218_X_cv_RVC218_X_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_RVC218_X_SG_Einstieg_RVC218_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0733",
			"CanFilterID": "0x04E6",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85",
				"0x86"
			]
		}
	},
	"1155802B9800": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_rvc222_x_sst_sgs_gf_rvc222_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0644",
			"CanFilterID": "0x05C4",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802B9900": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_siren222star0_x_sst_sgs_gf_siren222star0_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06FB",
			"CanFilterID": "0x04DF",
			"FlowDataCtrl": "0x60300814",
			"ADRESSE": "02"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1081"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802B9A00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_snd5_x_sst_sgs_gf_snd5_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0711",
			"CanFilterID": "0x0701",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802B9B00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_snd5s1_x_sst_sgs_gf_snd5s1_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_SND5S1_x_SG_Einstieg_SND5S1_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_SND5S1_x_cv_SND5S1_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0691",
			"CanFilterID": "0x0452",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B9C00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_soge451ev_x_sst_sgs_gf_soge451ev_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_soge451ev_x_sg_einstieg_soge451ev_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_SOGE451EV_x_cv_SOGE451EV_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06AA",
			"CanFilterID": "0x0495",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B9D00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_sogestar2_x_sst_sgs_gf_sogestar2_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x064E",
			"CanFilterID": "0x05CE",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	},
	"1155802B9E00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_svs207_x_sst_sgs_gf_svs207_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_SVS207_X_SG_Einstieg_SVS207_X_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_SVS207_X_CV_SVS207_X_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x066A",
			"CanFilterID": "0x048D",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": "0x22F100"
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B9F00": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tb5dabs1_x_sst_sgs_gf_tb5dabs1_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_tb5dabs1_x_sst_sgs_gf_tb5dabs1_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TB5DABS1_x_cv_TB5DABS1_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06A9",
			"CanFilterID": "0x0455",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B8000": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tb5tvsdarss1_x_sst_sgs_gf_tb5tvsdarss1_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_tb5tvsdarss1_x_sg_einstieg_tb5tvsdarss1_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TB5TVSDARSS1_x_cv_TB5TVSDARSS1_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06C9",
			"CanFilterID": "0x0459",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B8100": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tm166ibk_x_sst_sgs_gf_tm166ibk_x_xml"
		},
		"SG_EinstiegType": {
			"SG_EinstiegType": "FoxwellManual",
			"DBCondition": "xentry_pkw_tm166ibk_x_sst_sgs_gf_tm166ibk_x_xml"
		},
		"DSType": {
			"DSType": "FoxwellManual",
			"DBCondition": "xentry_pkw_TM166IBK_x_cv_TM166IBK_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x06EB",
			"CanFilterID": "0x04DD",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84",
				"0x85"
			]
		}
	},
	"1155802B8200": {
		"GetTxt": {
			"TextFile": "extraText"
		},
		"DTCType": {
			"DBCondition": "xentry_pkw_tpad205_x_sst_sgs_gf_tpad205_x_xml"
		},
		"NetInfo": {
			"PtclType": "CANBUS",
			"CanIOTimeParas": "IOTimes_Mode05",
			"CanDeviceID": "0x0637",
			"CanFilterID": "0x05B7",
			"FlowDataCtrl": "0x60300814"
		},
		"Access": {
			"CanAccessCmd": "0x1003",
			"ReferCmd": [
				"0x22F100",
				"0x22F154"
			]
		},
		"LinkInfo": {
			"CanLinkCmd": "0x3E00"
		},
		"QuitInfo": {
			"CanQuitCmd": "0x1001"
		},
		"FuncMenu": {
			"MenuItem": [
				"0x81",
				"0x82",
				"0x84"
			]
		}
	}
}
