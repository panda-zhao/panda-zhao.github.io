var nationArray = {
  "01": "汉",
  "02": "蒙古",
  "03": "回",
  "04": "藏",
  "05": "维吾尔",
  "06": "苗",
  "07": "彝",
  "08": "壮",
  "09": "布依",
  "10": "朝鲜",
  "11": "满",
  "12": "侗",
  "13": "瑶",
  "14": "白",
  "15": "土家",
  "16": "哈尼",
  "17": "哈萨克",
  "18": "傣",
  "19": "黎",
  "20": "傈僳",
  "21": "佤",
  "22": "畲",
  "23": "高山",
  "24": "拉祜",
  "25": "水",
  "26": "东乡",
  "27": "纳西",
  "28": "景颇",
  "29": "柯尔克孜",
  "30": "土",
  "31": "达斡尔",
  "32": "仫佬",
  "33": "羌",
  "34": "布朗",
  "35": "撒拉",
  "36": "毛南",
  "37": "仡佬",
  "38": "锡伯",
  "39": "阿昌",
  "40": "普米",
  "41": "塔吉克",
  "42": "怒",
  "43": "乌孜别克",
  "44": "俄罗斯",
  "45": "鄂温克",
  "46": "德昂",
  "47": "保安",
  "48": "裕固",
  "49": "京",
  "50": "塔塔尔",
  "51": "独龙",
  "52": "鄂伦春",
  "53": "赫哲",
  "54": "门巴",
  "55": "珞巴",
  "56": "基诺"
}
// 白云小程序入口配置
const entryConfig = {
  "wholeSetText": "智能办理企业名称自主申报 + 设立登记 + 印章申请 + 银行开户 + 税务登记发票申领",
  "menus": [
    {
      "page": "/pages/webView/name/main",
      "icon": "https://6563-ec-gov-biz-mp-19a952-1258264808.tcb.qcloud.la/ec/icon/name.png?sign=c0918a81038a021f6f2acb793c15191a&t=1560766955",
      "name": "智能精算<br>公司起名",
      "width": 65,
      "height": 63
    },
    {
      "code": "NAME_APPLY",
      "icon": "https://6563-ec-gov-biz-mp-19a952-1258264808.tcb.qcloud.la/ec/icon/check-name.png?sign=d5121f32847436bd4a4436a49febe833&t=1560766256",
      "name": "名称自主<br>申报",
      "width": 74,
      "height": 65
    },
    {
      "code": "REG_APPLY",
      "icon": "https://6563-ec-gov-biz-mp-19a952-1258264808.tcb.qcloud.la/ec/icon/sign-up.png?sign=48f6ba15446a97cf244b05b60dbb4dc5&t=1560766281",
      "name": "设立登记",
      "width": 68,
      "height": 68
    },
    {
      "code": "STAMP_RECORD",
      "icon": "https://6563-ec-gov-biz-mp-19a952-1258264808.tcb.qcloud.la/ec/icon/stamp.png?sign=2a7b1ddfe935b66d9380e34dbedd4c91&t=1560766306",
      "name": "印章申请",
      "width": 59,
      "height": 75
    },
    {
      "code": "BANK_ACCOUNT",
      "icon": "https://6563-ec-gov-biz-mp-19a952-1258264808.tcb.qcloud.la/ec/icon/bank.png?sign=d45e8eb2fe71eaa70007432d7c8107b3&t=1560766320",
      "name": "银行开户",
      "width": 63,
      "height": 65
    },
    {
      "code": "SHUIWU_APPLY",
      "icon": "https://6563-ec-gov-biz-mp-19a952-1258264808.tcb.qcloud.la/ec/icon/tax.png?sign=9e796137d8222818721a5ca7ea383cea&t=1560766336",
      "name": "税务登记<br>发票申领",
      "width": 76,
      "height": 61
    }
  ]
}