// ==UserScript==
// @include http://addons.opera.com/addons/extensions/details/virtual-keyboard/*
// @include https://addons.opera.com/addons/extensions/details/virtual-keyboard/*
// ==/UserScript==

window.addEventListener('DOMContentLoaded', function()
{
  opera.extension.addEventListener('message', function(e)
  {
    if (!e.data.version) return;
    
    var available = document.querySelector('div#meta-details dd:nth-child(6)').innerText;
    
    if (e.data.version == available) return;
    
    var li                     = document.createElement('li');
        li.style.color         = '#f00';
        li.style.paddingBottom = '10px';
        li.innerText           = 'Please note that you are using an outdated version of this extension. '
                               + 'If you are experiencing any problems, upgrade your installation, give it a try '
                               + 'and then rate. Thank you :)';
    
    document.querySelector('form#feedback-form ul').appendChild(li);
  }, false);
  
  opera.extension.postMessage({ 'getVersion': true });
}, false);
