// ==UserScript==
// @id            nidev
// @name          CleanEnhaJS
// @version       20150514
// @namespace     https://g.nidev.org/clean-enha.js/
// @author        Nidev
// @homepage      http://g.nidev.org/clean-enha.js
// @description   I need KFC fried chicken
// @grant   none
// @include       https://mirror.enha.kr/wiki/*
// @include       https://rigvedawiki.net/r1/wiki.php/*
// @include       https://namu.wiki/w/*
// @include       http://namu.wiki/w/*
// @include       https://namu.mirror.wiki/wiki/*
// @include       http://namu.mirror.wiki/wiki/*
// @run-at        document-end
// ==/UserScript==


(function() {
  // %% 취소선 삭제 작업
  // 취소선 엘리먼트 전체를 수집
  var s = document.getElementsByTagName('del');

  var i=0;
  for ( ; i < s.length ;i++) {
    // display:none CSS 적용하여 숨김
    s[i].style.cssText='display:none;'
  };

  // %% 위키 링크 윗첨자 작업(링크된 이름과 실제 보여질 항목이 다른 링크)
  // <a> 링크 엘리먼트 전체를 수집
  var a = document.getElementsByTagName('a');

  var i=0;
  for( ; i < a.length ; i++) {
    // title 속성이 urlencoded이면 처리하지 않음
    if (a[i].title[0] == "%") continue;

    // 위키 항목 링크를 감지하는 조건
    // id 속성이 없음 /  title 속성이 존재해야함 / title과 <a>~</a> 사이의 내용이 다른지 체크
    if (!a[i].id && a[i].title && a[i].title !== a[i].innerHTML) {
      // 해당 경우에 윗첨자로 원제목을 별도로 표시한다
      a[i].innerHTML += '<sup>' + a[i].title + '</sup>';
    }
  }
})();