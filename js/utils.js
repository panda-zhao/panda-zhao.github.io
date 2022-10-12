/**
 * 公共方法
 */

/**
 * 作用：判断数组内是否有重复的值
 * 参数： 必填，要判断的数组
 * 返回值: 如果有重复返回true 否则false
 * 调用方法： isRepeat(array)
 */
const isRepeat = function (arr) {
  var hash = {}
  for (var value of arr) {
    if (hash[value]) return true;
    hash[value] = true;
  }
  return false;
}
/**
 * 作用：过滤必填参数或者判断输入的参数是否为空，支持字符串，数组，和对象
 * 参数： 要判断的数组
 * 返回值: 如果全部不为空返回true,否则false
 * 调用方法： filterParams("1",{},[],...)
 */
const filterParams = function () {
  // console.log(arguments) // 参数列表，类型 object
  for (var i = 0; i < arguments.length; i++) {
    var param = arguments[i]
    if ("" === param || undefined === param || null === param) {
      return false
    }
  }
  return true
}

/**
 * 作用：判断文件类型是图片/视频/音频
 * 参数： 要判断的文件名
 * 返回值: 图片,视频,音频
 * 调用方法： checkSuffix(str)
 */
const checkSuffix = function (str) {
  var index = str.lastIndexOf('.')
  var suffix = str.substring(index + 1).toLowerCase() //获取后缀

  var img = ["png", "jpg", "jpeg", "gif", "bmp"] // 不支持webp格式
  var video = ["mp4", "ogg", "avi", "rmvb", "wma", "rm"] //不支持webm格式
  var audio = ["mp3", "wav", "ogg"]
  if (img.indexOf(suffix) > -1) {
    console.log("当前的文件类型是【图片】，格式是" + suffix)
    return "图片"
  }
  if (video.indexOf(suffix) > -1) {
    console.log("当前的文件类型是【视频】，格式是" + suffix)
    return "视频"
  }
  if (audio.indexOf(suffix) > -1) {
    console.log("当前的文件类型是【视频】，格式是" + suffix)
    return "音频"
  }
}
/**
 * 作用：判断是否移动端/PC端
 * 参数： 无
 * 返回值: 当前环境
 * 调用方法： checkUserAgent()
 */
const checkUserAgent = function () {
  if ((/mobile/i).test(window.navigator.userAgent)) {
    return "当前是在移动设备"
  }
  if (/\b(Windows\sNT|Macintosh)\b/.test(window.navigator.userAgent)) {
    return "当前是在PC端"
  }
}

/*
 * 作用：格式化日期
 * 参数： date对象，如new Date()
 * 返回值: 格式化后的日期如 2019-08-11 11:00:00
 * 调用方法： formatTime(new Date())
 */
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
  }
  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
/*
 * 作用：指定日期倒计时
 * 参数： 格式化的日期如 '2019/12/31 00:00:00'
 * 返回值: 格式化后的日期如 '2019/12/31 00:00:00'
 * 调用方法： bindCountdown('2019/12/31 00:00:00')
 */
const bindCountdown = targetTime => {
  const timer = setInterval(() => {
    const diff = new Date(targetTime) - new Date() // 时间差
    const day = parseInt(diff / (1000 * 60 * 60 * 24)) // 剩余天数
    const D = diff - day * 1000 * 60 * 60 * 24 //除去天的毫秒数
    const hour = parseInt(D / (1000 * 60 * 60)) // 剩余小时
    const H = D - hour * 1000 * 60 * 60 // //除去天、小时的毫秒数
    const minute = parseInt(H / (1000 * 60)) // 剩余分钟
    const M = H - minute * 1000 * 60 // 除去天、小时、分的毫秒数
    const secoud = parseInt(M / 1000) // 剩余秒
    const formatNumber = n => {
      n = n.toString()
      return n[1] ? n : '0' + n
    }
    const json = {
      DD: formatNumber(day),
      HH: formatNumber(hour),
      MM: formatNumber(minute),
      secoud: secoud
    }
    console.log(json)
    document.write("当前距离元旦还有" + json.DD + "天" + json.HH + ":" + json.MM + ":" + json.secoud)
  }, 1000)
}

/**
 * 获取当前月份的前后多少月的月份是几月
 * @param {Number} AddDayCount 多少月，可以为负
 *  GetMonth(2)//2月后的月份
 */
function GetMonth(AddMonthCount) {
  var dd = new Date();
  dd.setMonth(dd.getMonth() + AddMonthCount); //设置为AddMonthCount后的月份
  var mm = dd.getMonth() + 1;
  return mm + "月"
}


/**
 * 作用：获取当前日期的前后多少天的日期
 * @param {Number} AddDayCount 多少天，可以为负
 * 调用方法：GetDateStr(-1)//获取昨天 GetDateStr(0)// 获取今天 GetDateStr(1)//获取明天
 */
function GetDateStr(AddDayCount) {
  var dd = new Date();
  dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
  var y = dd.getFullYear();
  var m = dd.getMonth() + 1; //获取当前月份的日期
  var d = dd.getDate();
  return y + "-" + m + "-" + d;
}

/**
 * 作用：获取当前日期，比如2018-01-01
 * @param 无
 */
function getCurrentDate() {
  var yy = new Date().getFullYear(); //获取年
  var mm = new Date().getMonth() + 1; //获取月，从0开始计算要+1
  var dd = new Date().getDate(); //获取日

  var date = yy + "-" + addZero(mm) + "-" + addZero(dd);
  return date;
}

// 
/**
 * 作用：生产短信验证码
 * 调用方法： generatedCode()
 */
function generatedCode() {
  var code = ""; //生成的验证码 
  var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < 6; i++) {
    var index = Math.floor(Math.random() * 10); //随机0-10
    code += array[index];
  }
  console.log("生产的验证码", code)
  return code;
};

/**
 * 作用： 存储localStorage
 * @param {存储对象名} key
 * @param {存储的值} value
 * 调用方法：setStore("name","张三三")
 * 返回值：  {"data":"张三三", "time":1542088361449}
 */
function setStore(key, value) {
  if (!key) return; //如果值为空则不保存
  var curTime = new Date().getTime()
  window.localStorage.setItem(key, JSON.stringify({
    data: value,
    time: curTime
  }));
  return {
    data: value,
    time: curTime
  }
}
// setStore("name","张三三");// {"data":"张三三","time":1542088361449}

/**
 * 作用： 获取localStorage
 * @param {存储对象名，字符串} key
 * @param {超时时间，数值，比如 1000*60*60*24} exp
 * 调用方法：getStore("name", 950)
 * 返回值：存储的数组
 */
function getStore(key, exp) {
  var dataObj = JSON.parse(window.localStorage.getItem(key)); //获取存储的数据
  // console.log(dataObj);
  var diff = new Date().getTime() - dataObj.time; // 当前时间和存储时间的差
  if (diff > exp) {
    console.log("登录已过期");
    return; //如果过期返回的是undefined
  }
  var data = dataObj.data;
  return data;
}
/**
 * 作用：删除localStorage
 * @param { string } key --- 要删除的对象名称
 *调用方法：removeStore("name")
 *返回值：无
 */
function removeStore(key) {
  if (!key) return;
  window.localStorage.removeItem(key);
}

/**
 * 模拟form表单提交
 * @param { string } url --- 当表单被提交时数据被送往何处
 * @param { JSON } params --- 表单提交时的参数
 */
function postSimulate(url, params) {
  var form = $(`<form action="${url}" method="post" id="formData"></form>`);
  var input;
  $.each(params, function (key, value) {
    input = $(" <input type='hidden'/> ");
    input.attr({
      "name": key
    });
    input.val(value);
    form.append(input);
  });
  var submit = $(`<input type="submit">`);
  form.append(submit);
  form.appendTo("body").submit().remove();
};

/**
 * 获取url得参数列表，有返回json对象，没有返回{}
 * @param 无
 * 调用方法：getUrlParamsObj()
 * 返回值：获取路径中的参数对象 如{key: value}
 */
function getUrlParamsObj() {
  var url = location.search //获取url中"?"符后的字串
  var paramsObj = new Object()
  if (url.indexOf("?") != -1) {
    var strs = url.substr(1).split("&") // 去掉?号，并以&为分隔符分割为数组
    console.log('strs', strs)
    for (var i = 0; i < strs.length; i++) {
      // paramsObj[strs[i].split("=")[0]]= unescape(strs[i].split("=")[1])
      paramsObj[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1])
    }
  }
  return paramsObj
}

/**
 * 获取url指定参数key的值，有则返回，没有返回null
 * @param {String} name 要获取的参数名称
 * 调用方法：getUrlParam("title")
 * 返回值：有则返回，没有返回null
 */
function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)") // 构造一个含有目标参数的正则表达式对象 
  var r = window.location.search.substr(1).match(reg) // 匹配目标参数 
  if (r != null) return decodeURI(r[2]);
  return null;
}
/**
 * 文件对象转换成base64编码字符串
 * @param {JSON} file 文件对象
 */
function fileToBase64(file) {
  var reader = new FileReader()
    reader.readAsDataURL(file) // 将文件读取为DataURL
    reader.onload = function (e){
      console.log('【file ===> base64成功】base64=', e.target.result)
      document.getElementById('base64Img').setAttribute('src', e.target.result )
    }
    reader.onerror = function (error){
      console.log('【file转base64时发生错误】', error)
    }
}
/**
 * base64编码字符串转换成文件对象
 * @param {string} base64URL base64编码字符串 *必填参数
 * @param {string} fileName 文件名 **必填参数
 */
function base64ToFile(base64URL, fileName) {
  // 1先把base64转换成blob对象
  var arr = base64URL.split(',')// 切割字符串
  var mime = arr[0].match(/:(.*?);/)[1] // 获取图片类型
  var bstr = window.atob(arr[1])// 解码使用 base-64 编码的字符串
  var n = bstr.length
  var u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  var blob = new Blob([u8arr], {type: mime})
  // 2将blob转换为file对象
  blob.lastModifiedDate = new Date()
  blob.name = fileName
  return blob
}