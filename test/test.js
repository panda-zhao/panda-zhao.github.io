// 处理 placeholder ie10以下不兼容 
$(function () {
  if (!placeholderSupport()) {
    $('[placeholder]').focus(function () {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val(''); input.removeClass('placeholder');
      }
      input.css("color", "black");
    }).blur(function () {
      var input = $(this);
      if (input.val() == '' || input.val() == input.attr('placeholder')) {
        input.addClass('placeholder');
        input.val(input.attr('placeholder'));
        input.css("color", "grey");
      } else {
        input.css("color", "black");
      }
    }).blur();
  };
})
$(function () { $("#tiShi").hide(); });
function placeholderSupport() {
  return 'placeholder' in document.createElement('input');
}
//只能录入数字 
function onlyNum(obj, msg) {
  if (obj.value != $(obj).attr('placeholder')) {
    if (obj.value.match(/\D/) != null) {
      var d = dialog({ title: '提示', content: msg + "不是有效整数！", okValue: '确定', ok: function () { } }).width(320).focus();
      d.showModal(); obj.value = '';
    }
  }
}
//弹出提醒 
function showTip(obj) { }
//表单提交 
function doSubmit() {
  var tel = $("#tel").val();
  var emp = $("#empNum").val();
  var email = $("#email").val();
  var code = $("#postalCode").val();
  if ($("#addr").val() == "请输入企业通讯地址" || $("#addr").val() == "" || $("#addr").val() == null) {
    //alert("请输入企业通讯地址！"); 
    var d = dialog({ title: '提示', content: "请输入企业通讯地址！", okValue: '确定', ok: function () { } }).width(320).focus();
    d.showModal();
    return false;
  }
  if (code == null || code == "" || code == "请输入企业邮政编码") {
    //alert("邮政编码不可为空！"); 
    var d = dialog({ title: '提示', content: "邮政编码不可为空！", okValue: '确定', ok: function () { } }).width(320).focus();
    d.showModal();
    return false;
  }
  if (!/^[0-9]\d{5}$/.test(code)) {
    if (code != "无") {
      var d = dialog({ title: '提示', content: "邮政编码格式不正确！", okValue: '确定', ok: function () { } }).width(320).focus();
      d.showModal();
      return false;
    }
  }
  //校验手机号 
  if (tel == null || tel == "" || tel == "请输入企业联系电话") {
    //alert("联系电话不可为空！"); 
    var d = dialog({ title: '提示', content: "联系电话不可为空！", okValue: '确定', ok: function () { } }).width(320).focus();
    d.showModal();
    return false;
  }
  if (!(/^1\d{10}$/.test(tel)) && !(/^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(tel)) && !(/^\d{7,8}$/.test(tel)) && !(/^400\d{7}$/.test(tel))) {
    if (tel != "无") {
      var d = dialog({ title: '提示', content: "联系电话格式不正确！", okValue: '确定', ok: function () { } }).width(320).focus();
      d.showModal(); return false;
    }
  }
  //校验邮箱
  if (email == null || email == "" || email == "请输入企业电子邮箱") {
    var d = dialog({ title: '提示', content: "电子邮箱不可为空！", okValue: '确定', ok: function () { } }).width(320).focus();
    d.showModal(); return false;
  } if (email.match(/^[-\w]+(\.[-\w]*\w+)*@([-\w]+)+((\.\w+)+)$/) == null) {
    if (email != "无") {
      var d = dialog({ title: '提示', content: "电子邮箱格式不正确！", okValue: '确定', ok: function () { } }).width(320).focus();
      d.showModal(); return false;
    }
  }
  //校验主营业务活动 
  var act = $("#entMainActivity").val();
  if (act == null || act == "" || act == "请输入企业主营业务活动") {
    //alert("请填写企业主营业务活动！") 
    var d = dialog({ title: '提示', content: "请填写企业主营业务活动！", okValue: '确定', ok: function () { } }).width(320).focus();
    d.showModal(); return false;
  }
  if (emp == null || emp == "" || emp == "请输入企业从业人数") {
    //alert("请输入企业从业人数！"); 
    var d = dialog({ title: '提示', content: "请输入企业从业人数！", okValue: '确定', ok: function () { } }).width(320).focus();
    d.showModal(); return false;
  } if ($("#femailNum").val() == null || $("#femailNum").val() == "" || $("#femailNum").val() == "请输入企业女性从业人数") {
    //alert("请输入企业女性从业人数！"); 
    var d = dialog({ title: '提示', content: "请输入企业女性从业人数！", okValue: '确定', ok: function () { } }).width(320).focus();
    d.showModal(); return false;
  }
  if (!checkPerNum($("#femailNum").val(), $("#empNum").val(), "其中女性从业人数")) return false;
  //比较人数多少 
  function checkPerNum(perNum1, perNum2, tipInfo) {
    if (parseInt(perNum1) > parseInt(perNum2)) {
      //alert(tipInfo+"大于从业人数，请查证！"); 
      var d = dialog({ title: '提示', content: tipInfo + "大于从业人数，请查证！", okValue: '确定', ok: function () { } }).width(320).focus();
      d.showModal();
      return false;
    } else {
      return true;
    }
  }
  debugger;
  $("#tb-form").submit();
}
function onHover() { $("#tiShi").show(); };
function outHover() { $("#tiShi").hide(); };
//沿用上一年的年度报告,增加配置项看是否影藏该功能 
function yanyong() {
  var d = dialog({
    title: '提示', content: "是否下载沿用上一年年报信息(年度报告发生变化不大时建议下载沿用)", okValue: '确定', ok: function () { guideToPage_yanyong("jbxx", "yanyong"); }, cancelValue: '取消',
    cancel: function () { }
  }).width(320).focus(); d.showModal();
}
$(function () {
  $('[title]').each(function (index, item) {
    $(item).jcTitle({ content: $(item).attr('title'), 'background-color': '#fad67a', 'border': '1px solid #000', 'opacity': '1', 'max-width': '400px' });
  })
});