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
      name: 'Віртуальна клавіатура', // Extension name.
      description: 'Віртуальна клавіатура - там, де тобі необхідно. Захисти свої паролі. Бережи себе.' // Extension's short description.
    },
    author: {
      name: 'Askold Uaixovich', // Your real name (first and last name preferred).
      myopera: 'uaixovich', // Your login at MyOpera.
      email: 'uaixovich@gmail.com', // Your e-mail address (just for contact, it won't be published).
      url: 'http://about.me/uaixovich' // Your website address (homepage, blog, Facebook profile, etc).
    },
    defaultLayout: 'ur', // Default layout code for people speaking your language (check preferences page's source).
    date: '2012-06-23' // When did you finished this translation (YYYY-MM-DD)?
  },
  translation: {
    /**
     * Strings placed below are visible on preferences page.
     */
    options: {
      title: {
        innerHTML: 'Virtual Keyboard &ndash; налаштування'
      },
      header: {
        innerHTML: 'Virtual Keyboard &ndash; налаштування'
      },
      defaultLayout: {
        innerText: 'Default layout',
        title: 'Це розкладка встановлена за замовчуванням при першому відкритті або при перезавантаженні веб-сторінки. Ви завжди можете змінити розкладку кліком по синій кнопці у правому нижноьому куті.'
      },
      showButton: {
        innerText: 'Show button in address bar',
        title: 'Знадобиться, якщо ви не користуєтесь шорткатами для активації віртуальної клавіатури, або ж у вас зовсім немає справжньої. Так чи інакше, якщо іконка розширення не сподобалася, ви можете вимкнути її.'
      },
      toolbarIcon: {
        innerText: 'Іконка',
        title: 'Змінює іконку в адресному рядку на іншу ;)'
      },
      customShortcut: {
        innerText: 'Шорткат',
        title: 'Налаштовуючи клавіатурне скорочення май на увазі, що деякі з них вже закріплені Оперою чи операційною системою. Вони не працюватимуть.'
      },
      showOnDoubleClick: {
        innerText: 'Показати за дабл-кліком',
        title: 'Показує віртуальну клавіатуру за подвійним кліком у текстовому полі.'
      },
      highlightKeysOnClick: {
        innerText: 'Підсвітити кліки',
        title: 'Кліки по віртуальній клавіатурі підсвічуються. Легко побачити, чи ви не помилилися ;)'
      },
      useDragHandler: {
        innerText: 'Користуватись окремим обробником',
        title: 'Оберіть цей пункт, якщо хочете позбутись прив\'язки розташування віртуальної клавіатури до поля вводу.'
      }
    },
    /**
     * Strings placed below are visible on release notes page.
     */
    releaseNotes: {
      title: {
        innerHTML: 'Virtual Keyboard &ndash; нотатки по релізу'
      },
      header: {
        innerHTML: 'Virtual Keyboard &ndash; нотатки по релізу'
      },
      congrats: {
        innerHTML: 'Вітаємо! Ваше Virtual Keyboard розширення було оновлено до ' + widget.version + ' версії і є актуальним :)<br />Перезавантажте ваш Opera браузер, щоб відновити роботу розширення'
      },
      thankYou: {
        innerText: 'Дякуємо за встановлення та користування цим розширенням. Будь ласка, прочитайте короткий вступ, щоб дізнатися про відмінності від попередньої версії.'
      },
      important: {
        innerText: 'Важливо!'
      },
      whatsNew: {
        innerText: 'Що змінилося у цій версії?'
      },
      todo: {
        innerText: 'Що ще треба вдосконалити?'
      }
    },
    /**
     * Strings placed below may be visible on more pages.
     */
    globals: {
      linksRate: {
        innerText: 'Подобається розширення? Оціни його!'
      },
      linksDonate: {
        innerHTML: 'Допомогти розробникам &hearts;'
      },
      linksSupport: {
        innerText: 'Проблеми, питання, ідеї?'
      },
      translation: {
        innerText: 'Переклад:' // Visible in footer before your name.
      }
    }
  }
};
