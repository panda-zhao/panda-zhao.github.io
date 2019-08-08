!function() {
  var d, r = (d = {},
  function(e, A) {
      var r = e ? A ? "is" + A + "IE" + e : "isIE" + e : "isIE"
        , o = d[r];
      if (void 0 !== o)
          return o;
      if (e) {
          var t = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:|Edge\/)(\d+)/);
          if (t) {
              var a = parseInt(t[1]);
              o = A ? "lt" == A ? a < e : "gt" == A ? e < a : void 0 : a == e
          } else if (e <= 9) {
              var i = document.createElement("b")
                , n = "\x3c!--[if " + (A || "") + " IE " + e + "]><i></i><![endif]--\x3e";
              i.innerHTML = n,
              o = 1 === i.getElementsByTagName("i").length
          } else
              o = void 0
      } else
          o = -1 !== navigator.userAgent.indexOf("MSIE") || 0 < navigator.appVersion.indexOf("Trident/");
      return d[r] = o
  }
  );
  !function(e, A) {
      "use strict";
      e = e || "docReady",
      A = A || window;
      var r = []
        , o = !1
        , t = !1;
      function a() {
          if (!o) {
              o = !0;
              for (var e = 0; e < r.length; e++)
                  r[e].fn.call(window, r[e].ctx);
              r = []
          }
      }
      function i() {
          "complete" === document.readyState && a()
      }
      A[e] = function(e, A) {
          if ("function" != typeof e)
              throw new TypeError("callback for docReady(fn) must be a function");
          o ? setTimeout(function() {
              e(A)
          }, 1) : (r.push({
              fn: e,
              ctx: A
          }),
          "complete" === document.readyState || !document.attachEvent && "interactive" === document.readyState ? setTimeout(a, 1) : t || (document.addEventListener ? (document.addEventListener("DOMContentLoaded", a, !1),
          window.addEventListener("load", a, !1)) : (document.attachEvent("onreadystatechange", i),
          window.attachEvent("onload", a)),
          t = !0))
      }
  }("docReady", window);
  var n = ".bu-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;color:#333;overflow:auto;outline:0;line-height:1;text-align:center;background-color:rgba(0,0,0,0.45);font-family:'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei UI','Microsoft YaHei','微软雅黑',Arial,sans-serif}.bu-modal:before{content:'';display:inline-block;height:100%;vertical-align:middle;width:0}.bu-modal .bu-modal-dialog{display:inline-block;vertical-align:middle;position:relative;background-color:#fff;width:630px;margin:30px 0;padding:20px 38px 30px;text-align:left}.bu-modal .bu-modal-hd{font-size:24px;border-bottom:4px solid #0d1c28;line-height:1;padding-top:20px;padding-bottom:15px;margin-bottom:38px}.bu-modal .bu-modal-title{font-weight:500;color:#000}.bu-modal .bu-modal-close{position:absolute;top:0;right:0;color:#fff;width:38px;height:38px;line-height:38px;text-align:center;font-size:16px;background:#3e97df;font-weight:normal;text-decoration:none}.bu-modal .bu-modal-close:hover{background:#3784c2;color:#fff}.bu-modal .bu-modal-bd{font-size:16px;line-height:1.8}.bu-browser-list{margin:20px 0}.bu-browser-list .bu-browser-item{display:inline-block;height:48px;min-width:168px;text-align:center;line-height:48px;color:#3e97df;background-color:#ebf4fb;padding:0 10px;text-decoration:none;margin-right:5px}.bu-browser-list .bu-browser-item:hover{color:#fff;background-color:#3e97df}.bu-browser-list .bu-browser-qq{color:#fff;background-color:#3e97df}.bu-browser-list .bu-browser-qq:hover{color:#fff;background-color:#327fbd}.bu-typo-para{margin:15px 0}.bu-typo-h2{font-weight:bold;color:#111}.bu-typo-hint{color:#727475;margin:15px 0;padding-left:24px;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAABydHZ2dnlzdHVydXVzdHVzdXVydnZzdXVze3uAgIB2dnYpMi9cAAAADHRSTlMA8i29qtWUj34fDDhCrAlhAAAAXElEQVQI12NgYFAPFC1iAAI2Ca1FjQlAhvEEBgZOY6CAAUiYOYFBcQID9wYGTiGGCgYGFgcGhnaGIAhDlUEKwlgIZwClgIpBUhUQRjtQO1AKqB1uIMwKhKVwZwAAHCESRKwmrxUAAAAASUVORK5CYII=') no-repeat left 6px transparent}.bu-upgrade-bar{position:relative;box-sizing:border-box;text-align:center;line-height:48px;font-size:0;color:#45484b;height:48px;border:1px solid #f9d799;background-color:#fffaf1;font-size:16px;font-family:'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei UI','Microsoft YaHei','微软雅黑',Arial,sans-serif}.bu-upgrade-bar .bu-upgrade-bar-close{position:absolute;top:0;right:0;width:48px;text-align:center;color:#777;line-height:48px;font-size:18px;cursor:pointer;text-decoration:none}.bu-upgrade-bar .bu-upgrade-bar-content{display:inline-block;color:#45484b;padding-left:30px;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAM1BMVEUAAAD7rhX/rxz6rhX7rRX7rhT6rhX7rhX6rhX7rhb8sBf8rRf/rhT/rxb/vxX/sSf7rRQOClecAAAAEHRSTlMArBts8/LZtpt1Wk4mIwwNsaFimwAAAJBJREFUKM91ktsSAyEIQ0Vcta5rz/9/bS+zjE4teZMYMgTCjaglp5SLxrAiVjDUhToPkNbH6E3gOK2uIJc9LgG9/8MjLHjAVxMPq0/m+PhUJPxAqG8BWH8wH4hBpwCmREOh7USjhEzfiU4OibETg/SfeJLcVmZumOaK7ISg7oBrJDAjcUP0YncX5a/WPwb3fF7qpAlOhbL3YgAAAABJRU5ErkJggg==') no-repeat left 12px transparent}.bu-upgrade-bar .bu-upgrade-bar-download{color:#3e97df;text-decoration:none;cursor:pointer}.bu-upgrade-page{font-family:'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei UI','Microsoft YaHei','微软雅黑',Arial,sans-serif;position:fixed;top:0;left:0;right:0;bottom:0;background:#fff;z-index:1001;text-align:center;overflow:auto}.bu-upgrade-page:before{content:'';display:inline-block;height:100%;vertical-align:middle;width:0}.bu-upgrade-page .bu-upgrade-page-content{display:inline-block;vertical-align:middle;position:relative;text-align:left;width:680px;line-height:1.8}.bu-upgrade-page .bu-upgrade-page-title{text-align:center;font-size:24px;font-weight:bold;color:#111;padding-top:110px;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAdVBMVEUAAAD/sBj7rRT8rxT7rxb/sSP/shf6rhT/xS77rhT7rhT7rhT7rxX8rhb/rxz/sRn6rhT7rRT7rhT7rhT6rhX7rhX6rxX8rxX/sRf7rxX7rhX6rhT7rRX7rRT7rhX6rhX8rxX7rRb7rxX6rRb7rxb/rxX7rRR32biGAAAAJnRSTlMAKfdWOA4h3wXm78iOTRsT1M29r52GbV4sPOzYwburp5KAeWdGMKFw+MYAAALXSURBVGjetNTpsqIwEIbhNgTCIiAiKu7bee//EqdSOGPVuByE5PljCQlfkq609FXqVVNnM7NRamNmWd2sdCkuFauF4QWzWBXixKTZ8sG2mchI5TKjo6rjOdDrqIzjMlrr4HysFJ1sWY45ppPqAvYXHcuTWF/29wGnoccWLRSAOuSxvBXnh27UIpLvhVOs6hr+OvJaYU1D+VKQAOxu0sttB5AE353UHGDeSm9tN+OLM8tT7LoG7D3NpZ94OuyEw25eLD0UGWC0DKANkBU9ymGAOpRBwhowvxbmJwGWMtgSSH7kozYFlcsIuYK0/biPFFIto2j7jQ97iRJI1jLS2n7lbV0KA6nNGJuSgine3I8MlBYHtILs9X2ZArk4kQPTdy+W4sjy9YKjFGpxpob0ufhzMKE4ExqYP/VQQItDGgj+C05spZyaQhK+eOLS87ojIBDHAiCSh4WtknNzWDz+FQpaca4F9eguJ9hJH9HsLpI+dnCSu1LBTfqYcDeRPm6gykcPqMRHiFSPTpXB1U/IFbJ/M1XoJyRUf4c2cBA/IXKARqwt5L5Cctja3wJU7CskVmCvygr24itE9rDqWsrFX8ilay0GtL8QDUaktCXxF2KLUtqoSvyFSAXa1v3oM+RoK9/A2WfIGRqpIfAZEkAtGWifIRoymcHaZ8gaZmIg8hkSgZENlD5DStiIgthnSAzqT7VmjgMgEMSwAvH/L9MguaBhwTJDPjASx27GSTIkeVzJi08+4eRnTI6V5IBMjvq1S2vfTu1LlxbXry6uX4yELYwElkgXlghzpwtzh03VhU3FcNvCcLM66GJ1YAnS/xOWoGKdSxbTaMUGFvhDgAVgD30I2AOA4w8B4ICixCGgqAtU04YA1RI8WIDOAtkm8LnA6EUgkEQbRUhTxE1FcFZEgN+HmU4sOyNgfh+Vzwn9X9UXphUxHlZKZpZjVms+swtLN6tXfymRCXW4A8r0plEG32K4AAAAAElFTkSuQmCC') no-repeat center top transparent}.bu-browser-card{margin:25px 0;text-align:center}.bu-browser-card .bu-browser-card-item{display:inline-block;margin:0 20px;width:180px;*display:inline;*zoom:1}.bu-browser-card .bu-browser-card-icon{width:100%;height:120px;display:block;background-repeat:no-repeat;background-color:transparent;background-position:center center;margin-bottom:15px}.bu-browser-card .bu-browser-card-qq .bu-browser-card-icon{background-image:url('data:image/png;base64,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')}.bu-browser-card .bu-browser-card-chrome .bu-browser-card-icon{background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAABjCAMAAAC45U6nAAAC91BMVEUAAADkTA8AoT3tpAUAqFrsNi4AqFkAoVL/xAD/wwD/xAD/wwDqNy/nNDD/wwAAp1jtPDbtOTMAplcAo1TmNS73tADySEEAq1zyRj8Ap1vvPjb/wgDrKS9tpfXzSUIAplj/wAAApFYAplfpODNyqPfsRj/sMy3yRT7/wwD/wgAAqFr/wgAApVb/vwD6vAB8rvizzvZre04AolX/xAAApFX/wwD+wAAApljvPDjtPTboMCrtR0DtPjj/wQD/wQDuNS/9wgD7wgCLzq/Eqpr/wgBTrDv5uwD/xAD/wgDy8vIAp1kAq10ApFYApVj/xgAAqVsAqFrxSEDtPTbuPzgAr2AArV8Al0/sOTLwRT7wRj/vQzzzTEUQevkVfPoYfvvzSkMLePfvRD0Hd/bqNS/0TkfvQToAoVUhgv8cgP0AcvLxSUPrNzDz8/PsOzUegP3wuwAAdPTqMy0BdfXePDXpMSrvuwIAsWLoLij/xwD/ygD29PIApFTgPjfxvAAkhP/79/H49vIAlVDjQDrdODH89vjy8/YAb/P/zQDxswASff8AtWXz9vbsRi339PX+UUrvtwDz+fnxMivy9Prz8e4AnFEAk0v4Rj/utAsAbPHrQSn4wgCRu/nX4vT7TUXnQj3pOjfoKicCePz1QDnyOTL1vgBanPqjxPbn7PMLuYTtSjL/yy7pPiX81GnxbGUAn1vmYFkAn0c0iv0qhfyEs/q90/VnovXG2PTf5vPs7/Hy6enz7+Ty4N/y0c/wsweav/eCsPQvg/RCjfPK59vz69X05ML05LXzt7VhyqPujonw0oTzyFO1WULdSECBsTGptybjwADwvABFk/7e7Oa84dKe2MKP1bppzqj23p7zoZwsuYgAomVVh1KRa0ekY0XIUD9QqzrbMCrDuxm2z/Xb6+X16cn0xMJ0zbAAt33ygnvwy2QFmFg5kFYjk1V+dUzhUksVpEMppj/ORzpkrTjvwDTNvA/K2/SyzPPj7urzv7w+uo/U1I6Ssy3dxAdF5N2yAAAAR3RSTlMABQgM7clVFvfXyZgy/OLEWE5MJhsT6828q3hhEf7Ku0RCNCX+/LKnjYV/bF85Jf7+/di8k4p5dkXyjItpVU7uLR3+/qdxKX06GAgAAAmASURBVGjerdplXFNRGAbwoaKoGBio2N3d3V62wUDcQBELARGvhYrbQDdxgoA4EbAQEJCwu7u7u7u784Mn7u7duPdcJ/j4zQ/n7/O+51zjp8T6VKlt7+BQGsbBwb52Fcl/TrkOTvWrOdYduIBJundHR9v6Th3K/afzbeydKjoOS05e0L//oIEDB44YMcIbxj8dUB0rOtnb5Fuo7VQtKDl5WH+QQYOwgQR//wEg/unpA2ydauerQof6jgAICjInRjAEjIeHx4D09I71HGzyKjhUHJw8eBiPAAEENnDSM2xL50npUNEPCCAiNVDGjh3rlZFh6/Dve6g/LHnw4MFEAoUlQDK86tn/25i6OM4dbEGwCxesgZLR3cnmH0pUnOuHCfEaKCZizBivDFurq5R2BARXA0akBmeMGZnRvbR1c+rs5wcIcg0yMXJkXFwnK+ZVpf5c1rDi3poTKBn1qvz1ywRWkdcaKBPjbMv9hagGCKtqkIiJJEScEF04JkAY4m9IFUDA5GNSIJMnx9kSd2JTERHEeytegyMAUo90uzpDIv81QKbGdRImupAJ8r3lE8iYGtdFiLB35Ahs9M9zjalTJ5ewJ+wbG1Z/b8k1QBHbgoRl5PfeYgKFv5JaLfszRP4XjrOMN63q0ae8WSO/C2eK1LMkCkdHv0pJCfrrvfXAs/EaC2I+JktgGRMHc6JAheiQkDup4UFiNQZ4eY3wWwOzzm/FnDkrUOaYZbEpq3AW25q/xCaACFl7Ojy8LkdYGv5eA9YdP7p7R3wMSPyOwydOzp69kMseGKPRONsizo1z1QiJfuMRHp4SJFADCEHPn+yYNy+GpqUgNB0zP/7IiynGKaaMhzkPMo3N8iWUpiR3f8sAAkR+NwUi/HvrMej4rpgYWmqR+bMOnzQaOQPHTFAoFJGVWaMSMJRKZcit1HCQuozBEWt2z4uxBLAivfbJKGCMn7bcGQjQKGbaSFkgoKhOASQsvK4F4e99Pd4kaPV6vQ780JqUQyeNfANUYNOUMRpFK3FCXocDIywsxczwDzo6D0+J1tPbNmclbUrK2rxUqsPMrPgTRnNjChoSGyqyuGnjsAZGbqdCIyx8EEc8mYcF3baszA2BUTBDN2buXYoVehZCWMGZAwDBbr0WJHDA/UXGpPC62PAe9B0T+uykDVGBo2DGjQsc6pO2sfk2PYdAYDwYktqCAFHXYEfFIi1TkTEpLAXVGHAdEbR+84WoUdOnM8S4wMChQ9M2ZGnhEGnpC+MUICxfolDzCCqyATJKYQPH7W4qNEBSgOHxfBY6Rps0HQgWxFDQpc52LdzJzk/GacsptVqAoDToZhUpxM4K31/GmBnm7e23KwYRmwKn84ghQ4akZSJk/hEgCBOUwq4ZfICI4HInlTFmThqDJ6VPEiJAfIK30DRsslpBIECRruw6uCIvw0zGzNO74Am6FqMIhI9PcJIeGo+JBBXZFj5y1lChKG+nMsb947CGdtuFUSTCx3fIFy0uQiAoTWtgoNeh4qJc+8E0q91wG/pNUURi+PDgLXgjFIGg1EULgpVjgEtIyxLYWBdPgxpLN4wiE8N9h28FCL1zJcUncOx6go8VY3BxOwUROCq08CgiAY0JzfVoWBSfYNJUUlPFi/IVNo4Cg5ZmBooRvsEbsmkwrGsUidB0A1dXxc8dgMB1wFFtHCVCAMMXDmvWYYpPMEZlSWFLQw6jfAl64JurbxEoQkAjIksHjENqAkFFtuMMuVmUb0pMmvl2BzT2RokTwRH7gCFllk4JGA2RIc8d1dq7zLXSbYoSJyZEVIVGPDIoIaMtMOQCUd4qMXOdFBrNo8QJc4MSNBpAQzCnppp6iBLmBvWPhuo13ocuKUqcGB3RXIcfIQxhH0q5MHI7ZRc0WkSJE6MX7cX3SsQoQzLWfsDvY3qgGAGyWY/eByHOmsaSWnJCVC3RO99+YYgoEbF/G3rnzkSjq6RsIRKS0NsghQtJE22xaAv+XjkTCGdFDfDdVfGPd4OR3YiVoo8JkUBGC7xyEkHB32wrKC0P56I8CBF9nTQx4oAUjuoIQQA14J+wKjGGGy+hVw24iA+BgOv4qkOjIhro98H2Ifh4ftyjL9KwyN40AgG3oYXEIQWBAEZxYNRkCUIRmq6aRiIOZENjvuDGnbFRGf35iojIVGgj2u2ZwcLE/qWoxmOSAFfeA/2VVkkukiOlIZKdGSzYYqke9tSedCYa8I8McCEkw93dHU4LItJ9PsG+uW7U6KpoUPT8n6QaeB0wtQSPx5HJriCE1m/N9J0QHMy+7kURBx5qISE19PpMIFCPbszfP+T8w1lEfhkhUj29uc5+3wic0fu3PJTqEG54+pEg4NdRHgh4WNzxfOSKgcaKLntr1r46Vevsy9qardejn4ylj3meIxl4VDhlC4HziXF1PSaFtwttV4ejxarUcPFG4hkFmUB/xcGppCJ0wAnNOQiq8GOIvXwzcf0SAgGjZv5ei56h0OFcQlXHHhliLQHaEHspJzFxxlkFUcAPkIlNKQ6RCcU1NOTYQXCq6Z8ZYg2Gb5dzPBM9Z7wjt8AbZ1NGTjqeU+Q5Ty9dlMbGGmK3P7p05cdN0MHT0/MBJVajnYRLgVJyMYBRQmUhz3Jybjy7uXZGYmKiJ8iMe2KTonANdiNu4gDrgCSgAojwPCdCwN/JUbirZYWAIguABDbOKEQIRbGCZgB+I+LHc0lga6xfQibQb+S50l4udrqFwdY4Sya4J26+9uq5EVdCWOKdGKEuihZOnJarWFw8TXkgQlB2YFL8FHbjHU8y8L0lEvhpCKaR3ArBJUDg3jrziD42woZNJTHEBYUzzoi1KMYtg793wvFcXAPYe0smivaUEFOklJx8PA56HvjekolmJMAScSEkNAER7zmBQIgjLqLBT/CzyC4gIY5UchNHUI2PZKI1f938xbeRiSEBaOFTCASlLl5QYk2aFHL7i/GLUEJt11hiZWqVIs8rAdYQbkFpijWVWJ0CjQq5C98qdK0eCBIau4aEOZGqVJfJLE8HCQBJ4D5UliUUrUklyClcwR0r8HAuoMY5vqDQFK2cl//9UaBJK5mMOZ4L+6Eyv0yaoo3RmPKklAp1d8llMB8qswpUscpAyHtqtmnl4u4aambgDxXbQF2yeNN8/7eiImXatAqQucuYlb9nBEqh1mjsihbvVl7yX1KgbJM21VsVCggIdQn9HQmi0ajtShYrXrkHb0b5hIqUrVmmTN+2DRq0bdiua41+1v/6/wDD28xuxORB/wAAAABJRU5ErkJggg==')}.bu-browser-card .bu-browser-card-ie .bu-browser-card-icon{background-image:url('data:image/png;base64,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')}.bu-browser-card .bu-browser-card-btn{display:inline-block;height:48px;display:block;text-align:center;line-height:48px;color:#3e97df;background-color:#ebf4fb;padding:0 10px;text-decoration:none;margin-right:5px}.bu-browser-card .bu-browser-card-btn:hover{color:#fff;background-color:#3e97df}.bu-browser-card .bu-browser-card-qq .bu-browser-card-btn{color:#fff;background-color:#3e97df}.bu-browser-card .bu-browser-card-qq .bu-browser-card-btn:hover{color:#fff;background-color:#327fbd}"
    , c = '<div class="bu-upgrade-bar"><a href="javascript:;" id="bu-upgrade-bar-close" class="bu-upgrade-bar-close">X</a><div class="bu-upgrade-bar-content">      当前浏览器版本过低，可能会有安全风险且无法正常显示。建议您升级或使用其他浏览器。<a id="bu-upgrade-bar-download" class="bu-upgrade-bar-download" href="javascript:;">立即下载</a></div></div>'
    , l = '<div class="bu-modal"><div class="bu-modal-dialog"><div class="bu-modal-hd"><div class="bu-modal-title">更换或升级浏览器以获得最佳体验</div><a href="javascript:;" id="bu-modal-close" class="bu-modal-close">X</a></div><div class="bu-modal-bd"><div class="bu-typo-para">当前浏览器版本过低，可能会有安全风险且无法正常显示。建议您升级或使用其他浏览器。</div><div class="bu-browser-list"><a class="bu-browser-item bu-browser-qq" href="https://browser.qq.com/" target="_blank">QQ 浏览器</a><a class="bu-browser-item bu-browser-chrome" href="https://www.google.com/chrome/" target="_blank">Google Chrome</a><a class="bu-browser-item bu-browser-ie" href="https://www.microsoft.com/zh-cn/download/internet-explorer.aspx" target="_blank">IE 浏览器</a></div><div class="bu-typo-hint">若您当前使用的浏览器为QQ浏览器或360浏览器仍出现该提示，请切换至极速模式。</div></div></div></div>'
    , o = '<div class="bu-upgrade-page"><div class="bu-upgrade-page-content"><div class="bu-upgrade-page-title">升级或更换浏览器以继续使用</div><div class="bu-typo-para">当前浏览器版本过低，可能会有安全风险且无法正常显示。建议您升级或使用其他浏览器。</div><div class="bu-typo-h2">推荐使用以下浏览器：</div><div class="bu-browser-card"><div class="bu-browser-card-item bu-browser-card-qq"><div class="bu-browser-card-icon"></div><a class="bu-browser-card-btn" href="https://browser.qq.com/" target="_blank">QQ 浏览器</a></div><div class="bu-browser-card-item bu-browser-card-chrome"><div class="bu-browser-card-icon"></div><a class="bu-browser-card-btn" href="https://www.google.com/chrome/" target="_blank">Google Chrome</a></div><div class="bu-browser-card-item bu-browser-card-ie"><div class="bu-browser-card-icon"></div><a class="bu-browser-card-btn" href="https://www.microsoft.com/zh-cn/download/internet-explorer.aspx" target="_blank">IE 浏览器</a></div></div><div class="bu-typo-hint">若您当前使用的浏览器为QQ浏览器或360浏览器仍出现该提示，请切换至极速模式。</div></div></div>';
  function s(e, A, r) {
      var o = document.createElement(e);
      return A && (o.className = A),
      r && (o.id = r),
      o
  }
  function g(e) {
      var A = document.getElementById("bu-style");
      A || ((A = document.createElement("style")).id = "bu-style"),
      A.type = "text/css",
      A.styleSheet ? A.styleSheet.cssText = e : A.appendChild(document.createTextNode(e)),
      document.getElementsByTagName("head")[0].appendChild(A)
  }
  function b(e) {
      var A = {
          time: (new Date).getTime(),
          closed: e
      };
      localStorage.setItem("wt_browser_upgrade", JSON.stringify(A))
  }
  function e() {
      var e, A;
      r(9) || r(10) ? (!function() {
          var e = new Date
            , A = {
              time: e.getTime(),
              closed: 0
          };
          if (localStorage.getItem("wt_browser_upgrade")) {
              var r = JSON.parse(localStorage.getItem("wt_browser_upgrade"))
                , o = r.time;
              A.closed = r.closed;
              var t = new Date(parseInt(o));
              return localStorage.setItem("wt_browser_upgrade", JSON.stringify(A)),
              (e - t) / 864e5 < 7
          }
          return localStorage.setItem("wt_browser_upgrade", JSON.stringify(A)),
          !1
      }() || !localStorage.getItem("wt_browser_upgrade") || 1 != JSON.parse(localStorage.getItem("wt_browser_upgrade")).closed) && function() {
          b(0);
          var e = document.getElementsByTagName("body")[0]
            , A = e.children[0]
            , r = document.getElementById("bu-upgrade-bar");
          r || (r = s("div", "", "bu-upgrade-bar")),
          r.innerHTML = c,
          r.style.display = "block";
          var o = document.getElementById("bu-upgrade-modal");
          o || (o = s("div", "", "bu-upgrade-modal")),
          o.innerHTML = l,
          o.style.display = "none",
          g(n),
          e.insertBefore(r, A),
          e.appendChild(o);
          var t = document.getElementById("bu-upgrade-bar-close");
          t && t.addEventListener("click", function() {
              r.style.display = "none",
              b(1)
          });
          var a = document.getElementById("bu-upgrade-bar-download");
          a && a.addEventListener("click", function() {
              o.style.display = "block"
          });
          var i = document.getElementById("bu-modal-close");
          i && i.addEventListener("click", function() {
              o.style.display = "none"
          })
      }() : r(9, "lt") && (e = document.getElementsByTagName("body")[0],
      (A = document.getElementById("bu-upgrade-page")) || (A = s("div", "", "bu-upgrade-page")),
      A.innerHTML = o,
      A.style.display = "block",
      g(n),
      e.appendChild(A))
  }
  docReady(function() {
      e()
  })
}();
