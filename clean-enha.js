
var clean_enhajs = (function () {
  "use strict";
  // 취소선 엘리먼트 전체를 수집
  var i, s, engine, a, title;
  
  s = document.getElementsByTagName('del');

  for (i = 0; i < s.length; i += 1) {
    // display:none CSS 적용하여 숨김
    s[i].style.cssText = 'display:none;';
  }

  // <a> 링크 엘리먼트 전체를 수집
  // 위키 HTML 렌더링 엔진 감지
  if (document.querySelector("#_core")) {
    a = document.querySelector("article.namu-doc").getElementsByTagName("a");
    engine = "namumirror";
  } else if (document.querySelector(".wiki-content")) {
    a = document.querySelector(".wiki-content").getElementsByTagName("a");
    engine = "namu";
  } else {
    a = document.getElementsByTagName('a');
    engine = "enha";
  }

  if (!a) {
    return;
  }
  
  switch (engine) {
  case "namumirror":
    for (i = 0; i < a.length; i += 1) {
      if (a[i].getAttribute("class") === null && a[i].href.indexOf('#') === -1) {
        // 경로 문제: /dark/~~~~~~ /wiki/~~~~~~~
        title = decodeURI(a[i].pathname.substring(6, a[i].pathname.length));
        if (title !== a[i].innerHTML) {
          a[i].innerHTML += '<sup>' + title + '</sup>';
        }
      }
    }
    break;
  case "namu":
    for (i = 0; i < a.length; i += 1) {
      if (a[i].title && a[i].getAttribute("class") === "wiki-link-internal" && a[i].title !== a[i].innerHTML) {
        // 해당 경우에 윗첨자로 원제목을 별도로 표시한다
        a[i].innerHTML += '<sup>' + a[i].title + '</sup>';
      }
    }
    break;
  default:
    // enha 포함 fallback들
    for (i = 0; i < a.length; i += 1) {
      // id 속성이 없음 /  title 속성이 존재해야함 / title과 <a>~</a> 사이의 내용이 다른지 체크
      if (!a[i].id && a[i].title && a[i].title !== a[i].innerHTML) {
        // 해당 경우에 윗첨자로 원제목을 별도로 표시한다
        a[i].innerHTML += '<sup>' + a[i].title + '</sup>';
      }
    }
  }
}());