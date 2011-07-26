// ==UserScript==
// @include *
// ==/UserScript==

(function()
{
  /**
   * Script loader flag.
   */
  var scriptLoaded = false;
  
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
    
    if (config.defaultLayout && !scriptLoaded)
    {
      /**
       * Load script if it isn't already.
       */
      scriptLoaded = true;
      loadScript();
    }
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
      
      if (domContentLoaded && !scriptLoaded)
      {
        /**
         * Load script if it isn't already.
         */
        scriptLoaded = true;
        loadScript();
      }
    }
  }, false);
  
  /**
   * Script loader.
   */
  var loadScript = function()
  {
    /**
     * Returns currently focused text field.
     */
    var getFocused = function()
    {
      var currentlyFocused = document.querySelector('input:focus, textarea:focus');
      
      return currentlyFocused
           ? {
               'reference':      currentlyFocused,
               'selectionStart': parseInt(currentlyFocused.selectionStart),
               'selectionEnd':   parseInt(currentlyFocused.selectionEnd)
             }
           : {};
    };
    
    /**
     * Shows/hides virtual keyboard in top window.
     */
    var keyboard = {
      'show': function()
      {
        try
        {
          /**
           * If top window document is in the same domain.
           */
          window.top.document.querySelector('div[id^="virtual-keyboard-oex-"]')
                             .style.display = 'block !important';
        }
        catch (e)
        {
          /**
           * If top window document is in another domain.
           */
          opera.extension.postMessage({ 'showKeyboard': true });
        }
      },
      'hide': function()
      {
        try
        {
          /**
           * If top window document is in the same domain.
           */
          window.top.document.querySelector('div[id^="virtual-keyboard-oex-"]')
                             .style.display = 'none !important';
        }
        catch (e)
        {
          /**
           * If top window document is in another domain.
           */
          opera.extension.postMessage({ 'hideKeyboard': true });
        }
      }
    };
    
    /**
     * Add event listeners to all text fields.
     */
    var addEventListenersTo = function(node)
    {
      if (node.nodeName == 'TEXTAREA' ||
           ('checkbox|radio|submit|reset|file|hidden|image|button|' +
            'datetime|datetime-local|date|month|week|range|color')
            .split('|').indexOf(node.type) < 0)
      {
        /**
         * Is text field.
         */
        
        if (config.showOnDoubleClick)
        {
          /**
           * Show keyboard on field double click.
           */
          node.addEventListener('dblclick', function()
          {
            /**
             * Show keyboard.
             */
            keyboard.show();
          }, false);
        }
      }
    };
    
    /**
     * Present fields.
     */
    var textFields = document.querySelectorAll('input, textarea');
    
    for (var i = 0; i < textFields.length; ++i)
    {
      addEventListenersTo(textFields[i]);
    }
    
    /**
     * Future fields.
     */
    document.addEventListener('DOMNodeInsertedIntoDocument', function(e)
    {
      addEventListenersTo(e.target);
    }, false);
    
    /**
     * Message received.
     */
    opera.extension.addEventListener('message', function(e)
    {
      var data = e.data.virtualKeyboardOexBroadcast || {};
      
      if (data.updateFocused && data.value)
      {
        /**
         * Update field on keyboard's button click.
         */
        
        /**
         * Get currently focused text field.
         */
        var focused = getFocused().reference;
        var insert  = null;
        
        /**
         * No field focused. Cancel action.
         */
        if (!focused) return;
        
        /**
         * Choose action or char to be inserted.
         */
        switch (data.value)
        {
          case 'Space':  insert = ' '; break;
          case 'Bksp':   insert = ''; break;
          case 'Enter':  
          case '\u21b5': insert = focused.nodeName == 'TEXTAREA'
                                ? '\r\n' : null; break;
          default:       insert = data.value;
        }
        
        if (insert != null)
        {
          var selectionStart = getFocused().selectionStart;
          var selectionEnd   = getFocused().selectionEnd;
          var rangeLength    = selectionEnd - selectionStart;
          var value          = focused.value;
          
          var beforeSelection = value.substring(0, selectionStart);
          var afterSelection  = value.substring(selectionEnd);
          
          /**
           * If backspace pressed...
           */
          if (data.value == 'Bksp' && beforeSelection.match(/\r\n$/))
          {
            // Backspace new line.
            selectionStart  = selectionStart - 2;
            rangeLength     = selectionEnd - selectionStart;
            beforeSelection = value.substring(0, selectionStart);
          }
          else if (data.value == 'Bksp' && selectionStart == selectionEnd)
          {
            // Backspace normal char.
            selectionStart  = selectionStart - 1;
            rangeLength     = selectionEnd - selectionStart;
            beforeSelection = value.substring(0, selectionStart);
          }
          //else if (data.value == 'Bksp' && selectionStart < selectionEnd)
            // No extra action needed when backspace range.
          
          /**
           * Update field's value.
           */
          focused.value = beforeSelection + insert + afterSelection;
          
          /**
           * Move cursor to the new position.
           */
          var newCursorPosition = (selectionEnd < 0 ? 0 : selectionEnd)
                                + insert.length 
                                - rangeLength;
          focused.setSelectionRange(newCursorPosition, newCursorPosition);
        }
        
        /**
         * Auto scroll textarea on 'Enter'.
         */
        if (focused.nodeName == 'TEXTAREA' && focused.value.length > newCursorPosition)
          focused.scrollTop = focused.scrollHeight;
        
        /**
         * Keep focus on field.
         */
        focused.focus();
      }
      else if (data.keepFocus && getFocused().reference)
      {
        /**
         * Keep focus on field.
         */
        getFocused().reference.focus();
      }
    }, false);
    
    /**
     * Show keyboard on key combo press.
     */
    window.addEventListener('keypress', function(e)
    {
      /**
       * Some key pressed. Check for key combination.
       */
      var ctrlKey = e.ctrlKey || e.metaKey;
      
      if ((ctrlKey == config.customShortcut_Ctrl) && (e.altKey == config.customShortcut_Alt) && 
          (e.shiftKey == config.customShortcut_Shift) && e.keyCode == config.customShortcut) 
      {
        /**
         * Show keyboard.
         */
        keyboard.show();
      }
    }, false);
    
    /**
     * When document in frame and clicked...
     */
    document.addEventListener('click', function(e)
    {
      if (window != window.top && 
          e.target.nodeName != 'INPUT' && e.target.nodeName != 'TEXTAREA')
      {
        /**
         * Hide keyboard, but exclude clicks on inputs and textareas.
         */
        keyboard.hide();
      }
    }, false);
  };
})();
