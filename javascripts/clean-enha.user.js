// ==UserScript==
// @id            nidev
// @name          CleanEnhaJS
// @version       20150716
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
// @include       https://namu.mirror.wiki/dark/*
// @include       http://namu.mirror.wiki/dark/*
// @run-at        document-end
// ==/UserScript==

var clean_enhajs=(function(){"use strict";var i,s,engine,a,title;s=document.getElementsByTagName('del');for(i=0;i<s.length;i+=1){s[i].style.cssText='display:none;'}if(document.querySelector("#_core")){a=document.querySelector("article.namu-doc").getElementsByTagName("a");engine="namumirror"}else if(document.querySelector(".wiki-content")){a=document.querySelector(".wiki-content").getElementsByTagName("a");engine="namu"}else{a=document.getElementsByTagName('a');engine="enha"}if(!a){return}switch(engine){case"namumirror":for(i=0;i<a.length;i+=1){if(a[i].getAttribute("class")===null&&a[i].href.indexOf('#')===-1){title=decodeURI(a[i].pathname.substring(6,a[i].pathname.length));if(title!==a[i].innerHTML){a[i].innerHTML+='<sup>'+title+'</sup>'}}}break;case"namu":for(i=0;i<a.length;i+=1){if(a[i].title&&a[i].getAttribute("class")==="wiki-link-internal"&&a[i].title!==a[i].innerHTML){a[i].innerHTML+='<sup>'+a[i].title+'</sup>'}}break;default:for(i=0;i<a.length;i+=1){if(!a[i].id&&a[i].title&&a[i].title!==a[i].innerHTML){a[i].innerHTML+='<sup>'+a[i].title+'</sup>'}}}}());