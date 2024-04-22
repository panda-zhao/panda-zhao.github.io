奔驰查找ECUID
[] foxwell_VehiSysInfors.txt，拿SysX数组的第1行的值diagnosName
[] 在foxwell_SysInfors.txt的"DiagElementToECUID"分组中，根据diagnosName，拿diagnosID，根据"115580"和diagnosID和"00"组成sysID，
[] foxwell_SysEnterCmd.txt中查找sysID，过滤"PtclType"为"CANBUS"，"CanDeviceID"为发送ECUID，"CanFilterID"为接收ECUID

[] 在foxwell_SysInfors.txt的"DASElementToSysNameID"分组中，根据diagnosName，拿dataDisplay，
根据"11DF2817"和dataDisplay组合，在cn_text.txt中查找控制器名称


奔驰故障码号和故障码解析
cn_dtc.txt文件中每组第1行后6位为故障码ID，第2行为故障码名称，第3行位故障码解析

>>>>>>>>>> ！！！警告 ！！！ <<<<<<<<<<
三位数的故障码，每个车型都不相同，直接不入库转化为厂商自定义

diagnosName CR6EU5
sysID D85E    115580D85E00 

"CanDeviceID": "0x07E0",
"CanFilterID": "0x07E8",

dataDisplay 

11DF2817 56E8