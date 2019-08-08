(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  $(function () {

    // 小屏幕下底部链接换行后样式调整及下拉菜单对齐方向调整
    var windowWidth = void 0;
    var footerLinksWidth = void 0;
    resizeFooterLinks();
    $(window).on('resize', resizeFooterLinks);

    function resizeFooterLinks() {
      windowWidth = $(window).width();
      footerLinksWidth = getFooterLinksWidth();
      footerLinkAlignChange();
      dropDownAlignChange();
    }

    // 底部链接子元素总宽度
    function getFooterLinksWidth() {
      var width = 0;
      var children = $('.footer-links').children();
      for (var i = 0; i < children.length; i++) {
        width += children.eq(i).outerWidth();
      }
      return width;
    }

    // 对比左右距离与下拉菜单的宽度，改变对齐方向
    function dropDownAlignChange() {
      var doms = $('.footer-links-choose');
      for (var i = 0; i < doms.length; i++) {
        var $this = $('.footer-links-choose').eq(i);
        var $dropdown = $this.find('.dropdown-menu');
        var dropdownWidth = $dropdown.width();
        var offsetLeft = $this.offset().left;
        var offsetRight = windowWidth - offsetLeft;

        if (offsetRight > dropdownWidth) {
          if ($dropdown.hasClass('dropdown-menu-right-align')) {
            $dropdown.removeClass('dropdown-menu-right-align');
          }
        } else if (offsetLeft > dropdownWidth) {
          if (!$dropdown.hasClass('dropdown-menu-right-align')) {
            $dropdown.addClass('dropdown-menu-right-align');
          }
        } else {
          if ($dropdown.hasClass('dropdown-menu-right-align')) {
            $dropdown.removeClass('dropdown-menu-right-align');
          }
        }
      }
    }

    // 底部链接宽度超过屏幕宽度，改变对齐方式/行高
    function footerLinkAlignChange() {
      if (footerLinksWidth + 85 < windowWidth) {
        $('.footer-links').css('text-align', 'justify');
        $('.footer-links').css('height', '3.4rem');
        $('.footer-links-item').css('line-height', '1.2rem');
        $('.footer-links-split').css('margin', '0');
      } else {
        $('.footer-links').css('text-align', 'left');
        $('.footer-links').css('height', '5.4rem');
        $('.footer-links-item').css('line-height', '1.6rem');
        $('.footer-links-split').css('margin', '0 12px');
      }
    }

    var currentDropdown = null;
    $('.footer-links-choose').on('click.bs.dropdown', function () {
      currentDropdown = this;
      dropDownOrUp(currentDropdown);
    });
    $('.footer-links-choose').on('shown.bs.dropdown', function () {
      $(window).on('scroll.shown.dropdown', dropDownOrUp);
    });
    $('.footer-links-choose').on('hide.bs.dropdown', function () {
      $(window).off('scroll.shown.dropdown', dropDownOrUp);
    });

    // 对比选择框距离窗口顶部及底部的距离，改变menu方向
    function dropDownOrUp(e) {
      var $this = $(currentDropdown);
      var offsetTop = $this.offset().top;
      var scrollTop = $(document).scrollTop();
      var elTop = offsetTop - scrollTop + $this.height();
      var elBottom = $(window).height() - (offsetTop - scrollTop);
      var $menu = $this.find('.dropdown-menu');
      if (elBottom < 280 && elTop > 280) {
        $menu.addClass('dropup-menu');
      } else {
        if ($menu.hasClass('dropup-menu')) {
          $menu.removeClass('dropup-menu');
        }
      }
    }

    // 政府纠错网站
    var currentUrl = encodeURIComponent(window.location.href);
    $('.support-link').attr('href', 'http://121.43.68.40/exposure/jiucuo.html?site_code=4400000084&url=' + currentUrl);
  });


  $('body>div:eq(0), .footer').on('click', function (e) {
    var $target = $(e.target);
    var $clickedMpItem = null;

    if ($target.hasClass('footer-mp-item')) {
      $clickedMpItem = $target;
    } else if ($(e.target).parents('.footer-mp-item').length > 0) {
      $clickedMpItem = $target.parents('.footer-mp-item');
      if ($target.hasClass('footer-mp-item-hover--close')) {
        $clickedMpItem = null;
      }
    }

    $('.footer-mp-item').removeClass('footer-mp-item__show');
    if ($clickedMpItem) {
      $clickedMpItem.addClass('footer-mp-item__show');
    }
  });


  $(document).on('click', '.search-result-location-province', function () {
    $('.search-location').removeClass('show-search');
    $('.search-other').addClass('show-search');
  })

  // 搜索框联想
  .on('keyup', '.search-form-input', function () {
    if ($('.search-form-input').val() != '') {
      $('.search-form-association').css('display', 'block');
    } else if ($('.search-form-input').val() == '') {
      $('.search-form-association').css('display', 'none');
    }
  }).on('blur', '.search-form-input', function () {
    $('.search-form-association').css('display', 'none');
  }).on('focus', '.search-form-input', function () {
    if ($('.search-form-input').val() != '') {
      $('.search-form-association').css('display', 'block');
    } else {
      $('.search-form-association').css('display', 'none');
    }
  });


})));
