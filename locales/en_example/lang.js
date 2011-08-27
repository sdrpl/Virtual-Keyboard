/**
 * This is example language file. Use it for new translations.
 * Please, translate ALL strings between single quotes.
 * 
 * Do NOT translate it word for word. Try to keep string's length, 
 * but remember about sense - people speaking your language MUST understand it
 * and it MUST be written correctly according to your language's rules.
 * 
 * If you need to use single quote char in your string 
 * put backslash before it, ie. \'.
 * 
 * This file MUST be encoded with UTF-8! Do not use default Windows' Notepad
 * to edit this file. I recommend you Notepad++ for example.
 * http://notepad-plus-plus.org/
 * 
 * Change parent directory's name to your language code. You can find correct
 * code by pressing Ctrl+F12 in Opera. Look for "Language" section. The code is
 * placed between brackets, ie. en for English, ru for Russian.
 * 
 * Send completed translation to sdrpl@myopera.com with subject: 
 * "Virtual Keyboard translation". It will be reviewed and published as soon
 * as possible (next extension's release probably).
 */
var lang = {
  meta: {
    extension: {
      name: 'Virtual Keyboard', // Extension name.
      description: 'Virtual keyboard whenever you need it. Protect your passwords. Be safe.' // Extension's short description.
    },
    author: {
      name: 'FirstName LastName', // Your real name (first and last name preferred).
      myopera: 'YourLogin', // Your login at MyOpera.
      email: 'you@example.com', // Your e-mail address (just for contact, it won't be published).
      url: 'http://www.example.com/' // Your website address (homepage, blog, Facebook profile, etc).
    },
    defaultLayout: 'us', // Default layout code for people speaking your language (check preferences page's source).
    date: '2011-06-12' // When did you finished this translation (YYYY-MM-DD)?
  },
  translation: {
    /**
     * Strings placed below are visible on preferences page.
     */
    options: {
      title: {
        innerHTML: 'Virtual Keyboard &ndash; preferences'
      },
      header: {
        innerHTML: 'Virtual Keyboard &ndash; preferences'
      },
      defaultLayout: {
        innerText: 'Default layout',
        title: 'This is layout set by default for keyboard when you open it first time on page or reload the page. You can always change current layout temporarily by clicking on blue button in keyboard\'s bottom right corner.'
      },
      showButton: {
        innerText: 'Show button in address bar',
        title: 'This may be good if you do not like using keyboard shortcuts to enable virtual keyboard (lol!) or you have no real keyboard. However if you feel this extra button useless or need more space on your address bar - disable it.'
      },
      toolbarIcon: {
        innerText: 'Button\'s icon',
        title: 'Change icon displayed in toolbar\'s button if you think the default one is not cool enough ;)'
      },
      customShortcut: {
        innerText: 'Keyboard shortcut',
        title: 'Note that some keyboard shortcuts may already be reserved by Opera browser or your operating system. In such case it won\'t work.'
      },
      showOnDoubleClick: {
        innerText: 'Show on double click',
        title: 'Shows virtual keyboard when you double click on text field.'
      },
      highlightKeysOnClick: {
        innerText: 'Highlight keys on click',
        title: 'Virtual keyboard\'s keys are highlighted when you click on them. It\'s easier to see if you have clicked the right key ;)'
      },
      useDragHandler: {
        innerText: 'Use separate drag handler',
        title: 'Check this if you prefer separated handler for dragging keyboard. This may help with "sticky" keyboard when typing fast.'
      }
    },
    /**
     * Strings placed below are visible on release notes page.
     */
    releaseNotes: {
      title: {
        innerHTML: 'Virtual Keyboard &ndash; release notes'
      },
      header: {
        innerHTML: 'Virtual Keyboard &ndash; release notes'
      },
      congrats: {
        innerHTML: 'Congratulations! Your Virtual Keyboard extension has been successfully upgraded to ' + widget.version + ' version and is up to date now :)<br />Restart your Opera browser to get it working, please.'
      },
      thankYou: {
        innerText: 'Thank you for installing and using this extension. Please, read this short introduction to know all about the changes made from previous version.'
      },
      important: {
        innerText: 'Important!'
      },
      whatsNew: {
        innerText: 'What has been changed in this version?'
      },
      todo: {
        innerText: 'What still need to be polished?'
      }
    },
    /**
     * Strings placed below may be visible on more pages.
     */
    globals: {
      linksRate: {
        innerText: 'Like this extension? Rate it!'
      },
      linksDonate: {
        innerHTML: 'Donate developer &hearts;'
      },
      linksSupport: {
        innerText: 'Problems, questions, ideas?'
      },
      translation: {
        innerText: 'Translation:' // Visible in footer before your name.
      }
    }
  }
};
