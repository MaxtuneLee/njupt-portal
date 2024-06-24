// ==UserScript==
// @name         NJUPT Portal
// @namespace    http://tampermonkey.net/
// @version      2024-03-11
// @description  try to take over the world!
// @author       You
// @match        https://vpn.njupt.edu.cn:8443/http/webvpn136ccf6a01ae6ad865c858647c2c1787df24ddb65ef7dc25fd3739a96a22c0ea/portal
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const element = document.createElement('div')
    element.setAttribute('class', 'search-input')
    const input = document.createElement('input')
    input.placeholder='输入网址按下enter跳转'
    input.value='https://'
    element.appendChild(input)
    input.onkeypress = (e)=>{
        if (e.which == 13) {
            console.log(e.target.value)
            const alink = document.createElement('a')
            alink.href=e.target.value
            alink.click()
        }
    }
    document.querySelector('.search-box').style.display='flex'
    document.querySelector('.search-box').style.gap='10px'
    document.querySelector('.search-box').appendChild(element)
    setTimeout(()=>{
        console.log(document.querySelector('ul#usual_app'))
    },2000)

    // Your code here...
})();