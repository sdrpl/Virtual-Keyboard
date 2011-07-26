// ==UserScript==
// @include *
// ==/UserScript==

(function()
{
  /**
   * This script should not be loaded in frames.
   */
  if (window != window.top) return;
  
  /**
   * Init keyboard reference.
   */
  var keyboard = {};
  var layout;
  
  /**
   * Configuration data.
   */
  var config = {};
  
  /**
   * DOM flag.
   */
  var domContentLoaded = false;
  
  /**
   * DOM content loaded.
   */
  window.addEventListener('DOMContentLoaded', function()
  {
    /**
     * Change DOM flag.
     */
    domContentLoaded = true;
    
    /**
     * Load keyboard if it isn't already.
     */
    if (config.defaultLayout && !keyboard.id) loadVirtualKeyboard();
  }, false);
  
  /**
   * Message received from background script.
   */
  opera.extension.addEventListener('message', function(e)
  {
    var data = e.data.virtualKeyboardOexBroadcast || {};
    
    if (data.config)
    {
      /**
       * Configuration received.
       */
      config = data.config;
      layout = config.defaultLayout;
      
      /**
       * Load keyboard if it isn't already.
       */
      if (domContentLoaded && !keyboard.id) loadVirtualKeyboard();
    }
  }, false);
  
  /**
   * Virtual keyboard loader.
   */
  var loadVirtualKeyboard = function()
  {
    /**
     * Append keyboard container.
     */
    keyboard            = document.createElement('div');
    keyboard.id         = 'virtual-keyboard-oex-' + Math.random().toString().substr(2);
    keyboard.style.top  = (window.innerHeight - 150) + 'px';
    keyboard.style.left = Math.round((window.innerWidth - 387) / 2) + 'px';
    keyboard.className += layout[0].layout == 'ISO' ? ' iso-layout-' + keyboard.id : '';
    keyboard.className += config.highlightKeysOnClick ? ' highlight-keys-' + keyboard.id : '';
    keyboard.className += config.useDragHandler ? '' : ' drag-' + keyboard.id;
    keyboard.addEventListener('click', function(e)
    {
      /**
       * Prevent other DOM elements from losing focus. For example:
       * prevents some layers, menus from hiding on document click.
       */
      e.preventDefault();
      e.stopPropagation();
      
      /**
       * Hide layout select list (but not when lang button is clicked).
       */
      if (e.target != lang) select.style.display = 'none !important';
    }, false);
    keyboard.addEventListener('contextmenu', function(e)
    {
      /**
       * Disable context menu on keyboard.
       */
      e.preventDefault();
      e.stopPropagation();
    }, false);
    document.querySelector('html').appendChild(keyboard);
    
    /**
     * Append keyboard style.
     */
    var style       = document.createElement('style');
    style.type      = 'text/css';
    style.innerText = '/*Virtual Keyboard Opera Extension CSS reset.*/div#'+keyboard.id+',div#'+keyboard.id+' *{line-height:normal !important;font-family:helvetica, arial, sans-serif !important;font-size:13px !important;font-weight:normal !important;text-decoration:none !important;text-transform:none !important;color:#000 !important;text-shadow:none !important;background:none !important;box-shadow:none !important;border:0 !important;border-radius:0 !important;float:none !important;position:static !important;padding:0 !important;margin:0 !important;}div#'+keyboard.id+'{width:387px !important;height:133px !important;box-shadow:0 0 10px #000, inset 0 0 3px #fff !important;border-radius:5px !important;display:none !important;position:fixed !important;z-index:1000000 !important;padding:2px !important;margin:0 !important;}div#'+keyboard.id+'.drag-'+keyboard.id+'{cursor:move !important;}div#'+keyboard.id+' ::selection{background-color:transparent !important;}div#'+keyboard.id+'>img{cursor:move !important;display:none !important;position:absolute !important;bottom:3px !important;left:3px !important;}div#'+keyboard.id+':not(.drag-'+keyboard.id+'):hover>img{display:block !important;}div#'+keyboard.id+'>ul:nth-of-type(1){height:17px !important;line-height:17px !important;overflow:hidden !important;list-style:none !important;position:absolute !important;z-index:1 !important;bottom:4px !important;right:4px !important;padding:0 !important;margin:0 !important;}div#'+keyboard.id+'>ul:nth-of-type(1)>li{height:17px !important;line-height:17px !important;list-style:none !important;float:left !important;padding:0 !important;margin:0 !important;}div#'+keyboard.id+'>ul:nth-of-type(1)>li>button{width:auto !important;height:17px !important;line-height:17px !important;font-family:helvetica, arial, sans-serif !important;font-size:10px !important;text-align:center !important;border:0 !important;cursor:pointer !important;float:left !important;padding:0 3px !important;margin:0 0 0 1px !important;}div#'+keyboard.id+'>ul:nth-of-type(1)>li:first-child>button{border-top-left-radius:2px !important;margin:0 !important;}div#'+keyboard.id+'>ul:nth-of-type(1)>li:last-child>button{border-bottom-right-radius:2px !important;}div#'+keyboard.id+'>ul:nth-of-type(1)>li>button.lang-'+keyboard.id+'{color:#fff !important;background-color:#369 !important;}div#'+keyboard.id+'>ul:nth-of-type(1)>li>button.close-'+keyboard.id+'{font-size:18px !important;color:#fff !important;background-color:#b33 !important;}div#'+keyboard.id+'>ul:nth-of-type(2){width:384px !important;height:130px !important;overflow:hidden !important;background-color:#ddd !important;box-shadow:inset 0 0 10px #aaa !important;border-radius:3px !important;list-style:none !important;padding:2px 1px 1px 2px !important;margin:0 !important;}div#'+keyboard.id+'>ul:nth-of-type(2)>li{width:384px !important;height:26px !important;overflow:hidden !important;text-align:left !important;list-style:none !important;padding:0 !important;margin:0 !important;}div#'+keyboard.id+'>ul:nth-of-type(2)>li>input{width:25px !important;height:25px !important;line-height:20px !important;font-size:11px !important;text-align:center !important;color:#111 !important;background-color:#ddd !important;box-shadow:inset 0 -10px 10px #bbb,inset -2px -2px 1px #999 !important;border:1px solid #333 !important;border-radius:2px !important;cursor:pointer !important;margin:0 1px 0 0 !important;padding:0 !important;}div#'+keyboard.id+'.highlight-keys-'+keyboard.id+'>ul:nth-of-type(2)>li>input:active{background-color:#fb0 !important;box-shadow:inset 0 -10px 10px #fc0, inset -2px -2px 1px #fa0 !important;}/*Special buttons\' dark background.*/div#'+keyboard.id+'>ul:nth-of-type(2)>li:nth-child(1)>input.bksp-'+keyboard.id+',div#'+keyboard.id+'>ul:nth-of-type(2)>li:nth-child(2)>input.tab-'+keyboard.id+',div#'+keyboard.id+'>ul:nth-of-type(2)>li:nth-child(3)>input.caps-'+keyboard.id+',div#'+keyboard.id+'>ul:nth-of-type(2)>li:nth-child(3)>input.enter-'+keyboard.id+',div#'+keyboard.id+'>ul:nth-of-type(2)>li:nth-child(4)>input.shift-'+keyboard.id+',div#'+keyboard.id+'>ul:nth-of-type(2)>li:nth-child(5)>input.alt-'+keyboard.id+'{background-color:#aaa !important;box-shadow:inset 0 -10px 10px #999, inset -2px -2px 1px #777 !important;}/*Backspace.*/div#'+keyboard.id+'>ul:nth-of-type(2)>li:nth-child(1)>input:last-child{width:45px !important;}/*Tab skip.*/div#'+keyboard.id+'>ul:nth-of-type(2)>li:nth-child(2)>input:first-child{margin-left:36px !important;}/*Backslash.*/div#'+keyboard.id+'>ul:nth-of-type(2)>li:nth-child(2)>input:last-child{width:35px !important;}div#'+keyboard.id+'.iso-layout-'+keyboard.id+'>ul:nth-of-type(2)>li:nth-child(2)>input:last-child{width:25px !important;}/*Caps Lock.*/div#'+keyboard.id+'>ul:nth-of-type(2)>li:nth-child(3)>input:first-child{width:46px !important;}/*Enter.*/div#'+keyboard.id+'>ul:nth-of-type(2)>li:nth-child(3)>input:last-child{width:50px !important;}div#'+keyboard.id+'.iso-layout-'+keyboard.id+'>ul:nth-of-type(2)>li:nth-child(3)>input:last-child{width:24px !important;}/*Left Shift.*/div#'+keyboard.id+'>ul:nth-of-type(2)>li:nth-child(4)>input:first-child{width:56px !important;}div#'+keyboard.id+'.iso-layout-'+keyboard.id+'>ul:nth-of-type(2)>li:nth-child(4)>input:first-child{width:30px !important;}/*Right Shift.*/div#'+keyboard.id+'>ul:nth-of-type(2)>li:nth-child(4)>input:last-child{width:66px !important;}/*Left Fn, Ctrl, Win skip.*/div#'+keyboard.id+'>ul:nth-of-type(2)>li:nth-child(5)>input:first-child{margin-left:66px !important;}/*Space.*/div#'+keyboard.id+'>ul:nth-of-type(2)>li:nth-child(5)>input:nth-child(2){width:156px !important;color:rgba(0,0,0,0) !important;}/*Caps Lock/Shift/Alt enabled.*/div#'+keyboard.id+'>ul:nth-of-type(2)>li:nth-child(3)>input.caps-'+keyboard.id+'.enabled-'+keyboard.id+',div#'+keyboard.id+'>ul:nth-of-type(2)>li:nth-child(4)>input.shift-'+keyboard.id+'.enabled-'+keyboard.id+',div#'+keyboard.id+'>ul:nth-of-type(2)>li:nth-child(5)>input.alt-'+keyboard.id+'.enabled-'+keyboard.id+',div#'+keyboard.id+'.highlight-keys-'+keyboard.id+'>ul:nth-of-type(2)>li:nth-child(1)>input:last-child:active,div#'+keyboard.id+'.highlight-keys-'+keyboard.id+'>ul:nth-of-type(2)>li:nth-child(3)>input:last-child:active{color:#eee !important;background-color:#666 !important;box-shadow:inset 0 -10px 10px #555, inset -2px -2px 1px #444 !important;}/*Layout select list.*/div#'+keyboard.id+'>select{max-width:80px !important;height:17px !important;line-height:17px !important;color:#fff !important;background-color:#369 !important;cursor:default !important;display:none !important;position:absolute !important;z-index:2 !important;bottom:4px !important;right:22px !important;padding:0 5px !important;}div#'+keyboard.id+'>select>option{color:#fff !important;background-color:#369 !important;cursor:default !important;display:block !important;padding:0 3px !important;}';
    document.querySelector('head').appendChild(style);
    
    /**
     * Drag handler.
     */
    var dragHandler = document.createElement('img');
    dragHandler.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sFHg8xEBy9uXsAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAUElEQVQ4y2NgIAxSGSgAqQwMDP/JNQSm+T85hqBrJskQdEX/SQmTVCwasPFTCTmbkAEYhuDyMyGcSjUXUCUMqBILVEkHVEmJVMkLVMmNBAEAaDc73OIUnEsAAAAASUVORK5CYII=';
    keyboard.appendChild(dragHandler);
    
    /**
     * Append keyboard icons.
     */
    var icons = document.createElement('ul');
    keyboard.appendChild(icons);
    
    var li = document.createElement('li');
    icons.appendChild(li);
    
    var lang       = document.createElement('button');
    lang.className = 'lang-' + keyboard.id;
    lang.innerText = 'EN';
    lang.addEventListener('click', function()
    {
      /**
       * Show layout select list.
       */
      select.style.display = 'block !important';
    }, false);
    li.appendChild(lang);
    
    var li = document.createElement('li');
    icons.appendChild(li);
    
    var close       = document.createElement('button');
    close.className = 'close-' + keyboard.id;
    close.innerText = '\u00d7';
    close.addEventListener('click', function()
    {
      /**
       * Hide keyboard.
       */
      keyboard.style.display = 'none !important';
    }, false);
    li.appendChild(close);
    
    /**
     * Setup layout.
     */
    lang.innerText = layout[0].lang;
    
    /**
     * Append keyboard buttons.
     */
    var specialKeysCodes = [
      '\u2408', '\u2409', '\u21ec', '\u2424', '\u240f', '\u2387', '\u0020'
    ];
    var specialKeysNames = [
      'Bksp', 'Tab', 'Caps', 'Enter', 'Shift', 'Alt', 'Space', '\u2325'
    ];
    
    var ul = document.createElement('ul');
    keyboard.appendChild(ul);
    
    var rebuildKeyboard = function()
    {
      /**
       * Remove all keys.
       */
      ul.innerHTML = '';
      
      for (var row = 1; row < layout.length; ++row)
      {
        var li = document.createElement('li');
        ul.appendChild(li);
        
        for (var key = 0; key < layout[row].length; ++key)
        {
          var specialKeyIndex = specialKeysCodes.indexOf(layout[row][key][0]);
          var button          = document.createElement('input');
              button.type     = 'button';
          
          if (specialKeyIndex >= 0)
          {
            button.className = specialKeysNames[specialKeyIndex].toLowerCase() + '-' + keyboard.id
            button.value     = (specialKeyIndex == 5 && /Mac/.test(window.navigator.platform))
                             ? '\u2325'
                             : specialKeysNames[specialKeyIndex];
          }
          else
          {
            button.value = layout[row][key][0];
          }
          
          button.addEventListener('click', function(e)
          {
            if (/caps\-/.test(this.className))
            {
              /**
               * Caps Lock clicked.
               */
              if (specialKeys.capsEnabled)
                specialKeys.disableCaps();
              else
                specialKeys.enableCaps();
            }
            else if (/shift\-/.test(this.className))
            {
              /**
               * Shift clicked.
               */
              if (specialKeys.shiftEnabled)
                specialKeys.disableShift();
              else
                specialKeys.enableShift();
            }
            else if (/alt\-/.test(this.className))
            {
              /**
               * Alt clicked.
               */
              if (specialKeys.altEnabled)
                specialKeys.disableAlt();
              else
                specialKeys.enableAlt();
            }
            else if (this.value.length > 0)
            {
              /**
               * Update field's value.
               */
              opera.extension.postMessage({ 'keyClicked': true, 'value': this.value });
              
              /**
               * Disable Shift and Alt.
               */
              if (specialKeys.shiftEnabled) specialKeys.disableShift();
              if (specialKeys.altEnabled)   specialKeys.disableAlt();
            }
          }, false);
          li.appendChild(button);
        }
      }
      
      if (layout[0].layout == 'ISO')
      {
        keyboard.querySelector('.enter-' + keyboard.id).value = '\u21b5';
        keyboard.querySelector('.shift-' + keyboard.id).value = '\u21e7';
      }
    };
    
    rebuildKeyboard();
    
    /**
     * Layout select list.
     */
    var select = document.createElement('select');
    select.addEventListener('change', function()
    {
      opera.extension.postMessage({ 'requestLayout': this.value });
    }, false);
    keyboard.appendChild(select);
    
    var optgroup = {};
    
    optgroup['QWERTY']       = document.createElement('optgroup');
    optgroup['QWERTY'].label = 'QWERTY';
    select.appendChild(optgroup['QWERTY']);
    
    optgroup['QWERTZ']       = document.createElement('optgroup');
    optgroup['QWERTZ'].label = 'QWERTZ';
    select.appendChild(optgroup['QWERTZ']);
    
    optgroup['AZERTY']       = document.createElement('optgroup');
    optgroup['AZERTY'].label = 'AZERTY';
    select.appendChild(optgroup['AZERTY']);
    
    optgroup['Non-QWERTY']       = document.createElement('optgroup');
    optgroup['Non-QWERTY'].label = 'Non-QWERTY';
    select.appendChild(optgroup['Non-QWERTY']);
    
    optgroup['Non-Latin']       = document.createElement('optgroup');
    optgroup['Non-Latin'].label = 'Non-Latin';
    select.appendChild(optgroup['Non-Latin']);
    
    for (var langCode in config.keyboardLayouts)
    {
      var option       = document.createElement('option');
      option.value     = langCode;
      option.selected  = langCode == config.defaultLayoutCode ? true : false;
      option.innerText = config.keyboardLayouts[langCode].label;
      option.addEventListener('click', function()
      {
        select.style.display = 'none !important';
      }, false);
      optgroup[config.keyboardLayouts[langCode].group].appendChild(option);
    }
    
    /**
     * Caps, Shift, Alt flags.
     */
    var specialKeys = {
      'capsEnabled': false,
      'enableCaps': function()
      {
        var capsKey       = keyboard.querySelector('input.caps-' + keyboard.id);
        capsKey.className = capsKey.className + ' enabled-' + keyboard.id;
        this.capsEnabled  = true;
        this.refreshLayout();
      },
      'disableCaps': function()
      {
        var capsKey       = keyboard.querySelector('input.caps-' + keyboard.id);
        capsKey.className = capsKey.className.replace(' enabled-' + keyboard.id, '');
        this.capsEnabled  = false;
        this.refreshLayout();
      },
      'shiftEnabled': false,
      'enableShift': function()
      {
        var shiftKeys          = keyboard.querySelectorAll('input.shift-' + keyboard.id);
        shiftKeys[0].className = 
        shiftKeys[1].className = shiftKeys[1].className + ' enabled-' + keyboard.id;
        this.shiftEnabled      = true;
        this.refreshLayout();
      },
      'disableShift': function()

      {
        var shiftKeys          = keyboard.querySelectorAll('input.shift-' + keyboard.id);
        shiftKeys[0].className = 
        shiftKeys[1].className = shiftKeys[1].className.replace(' enabled-' + keyboard.id, '');
        this.shiftEnabled      = false;
        this.refreshLayout();
      },
      'altEnabled': false,
      'enableAlt': function()
      {
        var altKeys          = keyboard.querySelectorAll('input.alt-' + keyboard.id);
        altKeys[0].className = 
        altKeys[1].className = altKeys[1].className + ' enabled-' + keyboard.id;
        this.altEnabled      = true;
        this.refreshLayout();
      },
      'disableAlt': function()
      {
        var altKeys          = keyboard.querySelectorAll('input.alt-' + keyboard.id);
        altKeys[0].className = 
        altKeys[1].className = altKeys[1].className.replace(' enabled-' + keyboard.id, '');
        this.altEnabled      = false;
        this.refreshLayout();
      },
      'refreshLayout': function()
      {
        var index  = (this.capsEnabled)  ? 'c' : '';
            index += (this.shiftEnabled) ? 's' : '';
            index += (this.altEnabled)   ? 'a' : '';
        
        switch (index)
        {
          case 'c':   index = 1; break;
          case 's':   index = 2; break;
          case 'a':   index = 3; break;
          case 'cs':  index = 4; break;
          case 'ca':  index = 5; break;
          case 'sa':  index = 6; break;
          case 'csa': index = 7; break;
          default:    index = 0;
        }
        
        /**
         * Redraw buttons' innerText.
         */
        for (var row = 1; row < layout.length; ++row)
        {
          for (var key = 0; key < layout[row].length; ++key)
          {
            var button = keyboard.querySelector('ul:nth-of-type(2) > li:nth-child(' + row + ') > input:nth-child(' + (key + 1) + ')');
            
            if (button.className == '')
            {
              button.value = layout[row][key][index];
            }
          }
        }
        
        /**
         * Keep focus on field.
         */
        opera.extension.postMessage({ 'keepFocus': true });
      }
    };
    
    /**
     * Dragging keyboard.
     */
    var dragHandlerReference = config.useDragHandler ? dragHandler : keyboard;
    
    /**
     * Dragging...
     */
    var moveKeyboard = function(e)
    {
      /**
       * Remove keyboard styling - moving shadow bug.
       */
      keyboard.style.boxShadow = 'none !important';
      keyboard.style.opacity   = '0.5 !important';
      
      /**
       * Move keyboard to the new coords.
       */
      keyboard.style.left = e.clientX - keyboard.dragOffset.x + 'px';
      keyboard.style.top  = e.clientY - keyboard.dragOffset.y + 'px';
        
      /**
       * Keep focus on field.
       */
      opera.extension.postMessage({ 'keepFocus': true });
    };
    
    /**
     * Drag start.
     */
    dragHandlerReference.addEventListener('mousedown', function(e)
    {
      /**
       * Prevent text selection when dragging.
       */
      e.preventDefault();
      
      /**
       * Save keyboard's clicked point coords.
       */
      keyboard.dragOffset = {
        'x': e.clientX - /\d+/.exec(keyboard.style.left), 
        'y': e.clientY - /\d+/.exec(keyboard.style.top)
      };
      document.addEventListener('mousemove', moveKeyboard, false);
    }, false);
    
    /**
     * Drop.
     */
    dragHandlerReference.addEventListener('mouseup', function()
    {
      /**
       * Restore keyboard styling.
       */
      keyboard.style.boxShadow = '0 0 10px #000, inset 0 0 3px #fff !important';
      keyboard.style.opacity   = '1 !important';
      document.removeEventListener('mousemove', moveKeyboard, false);
    }, false);
    
    /**
     * When document clicked...
     */
    document.addEventListener('click', function(e)
    {
      if (e.target != select && e.target != lang)
      {
        /**
         * Hide layout selection list, but exclude clicks on lang label and list itself.
         */
        select.style.display = 'none !important';
      }
      
      if (e.target.nodeName != 'INPUT' && e.target.nodeName != 'TEXTAREA' && 
          !keyboard.contains(e.target))
      {
        /**
         * Hide keyboard, but exclude clicks on inputs, textareas and keyboard itself.
         */
        keyboard.style.display = 'none !important';
      }
    }, false);
    
    /**
     * Show keyboard on toolbar button click.
     */
    opera.extension.addEventListener('message', function(e)
    {
      if (e.data.showKeyboard)
      {
        /**
         * Show keyboard.
         */
        if (!keyboard.dataDisplayedBefore)
        {
          /**
           * First run on current page. Fix position bug.
           */
          keyboard.dataDisplayedBefore = true;
          
          keyboard.style.top  = (window.innerHeight - 150) + 'px';
          keyboard.style.left = Math.round((window.innerWidth - 387) / 2) + 'px';
        }
        
        keyboard.style.display = 'block !important';
      }
      else if (e.data.hideKeyboard)
      {
        /**
         * Hide keyboard.
         */
        keyboard.style.display = 'none !important';
      }
      else if (e.data.changeLayout)
      {
        /**
         * Keyboard keyboard changed. Update and rebuild.
         */
        layout         = e.data.changeLayout;
        lang.innerText = layout[0].lang;
        
        var layoutRegExp    = /(^|\s)(ansi|iso)\-layout\-\S+(\s|$)/;
        keyboard.className  = keyboard.className.replace(layoutRegExp, '');
        
        rebuildKeyboard();
        specialKeys.disableCaps();
        specialKeys.disableShift();
        specialKeys.disableAlt();
        specialKeys.refreshLayout();
        
        if (layout[0].layout == 'ISO')
        {
          keyboard.className += ' iso-layout-' + keyboard.id;
          
          keyboard.querySelector('.enter-' + keyboard.id).value = '\u21b5';
          keyboard.querySelector('.shift-' + keyboard.id).value = '\u21e7';
        }
      }
    }, false);
  };
})();
