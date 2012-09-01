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
      description: 'Ένα εικονικό πληκτρολόγιο οποτεδήποτε το χρειάζεσθε. Προστατεύστε τους κωδικούς σας. Γίνεται ασφαλείς.' // Extension's short description.
    },
    author: {
      name: 'Άγγελος Δούνδης', // Your real name (first and last name preferred).
      myopera: 'Talos2002', // Your login at MyOpera.
      email: 'talos_2002@yahoo.com', // Your e-mail address (just for contact, it won't be published).
      url: 'http://www.fb.com/doundis' // Your website address (homepage, blog, Facebook profile, etc).
    },
    defaultLayout: 'he', // Default layout code for people speaking your language (check preferences page's source).
    date: '2011-08-30' // When did you finished this translation (YYYY-MM-DD)?
  },
  translation: {
    /**
     * Strings placed below are visible on preferences page.
     */
    options: {
      title: {
        innerHTML: 'Virtual Keyboard &ndash; Ρυθμίσεις'
      },
      header: {
        innerHTML: 'Virtual Keyboard &ndash; Ρυθμίσεις'
      },
      defaultLayout: {
        innerText: 'Αρχική γλώσσα',
        title: 'Αυτή η γλώσσα τίθεται αρχικά στο πληκτρολόγιο όταν το ανοίγετε πρώτη φορά σε μια σελίδα ή ανανεώνετε τη σελίδα. Πάντα μπορείτε να αλλάξετε προσωρινά την τρέχουσα γλώσσα με κλικ στο μπλε κουμπί στη κάτω δεξιά γωνία του πληκτρολογίου.'
      },
      showButton: {
        innerText: 'Κουμπί στη γραμμή διευθύνσεων',
        title: 'Ίσως είναι καλό εάν δεν σας αρέσει να χρησιμοποιείτε συντομεύσεις πληκτρολογίου για να ενεργοποιήσετε το εικονικό πληκτρολόγιο ή δεν έχετε πραγματικό πληκτρολόγιο. Ωστόσο, αν νοιώθετε άχρηστο αυτό το επιπλέον κουμπί ή χρειάζεσθε περισσότερο χώρο στην γραμμή διευθύνσεών σας – απενεργοποιήστε το.'
      },
      toolbarIcon: {
        innerText: 'Εικονίδιο κουμπιού',
        title: 'Αλλάξτε το εικονίδιο που εμφανίζεται στο κουμπί της γραμμής εργαλείων αν νομίζετε ότι το αρχικό δεν είναι αρκετά καλό ;)'
      },
      customShortcut: {
        innerText: 'Συντόμευση πληκτρολογίου',
        title: 'Κάποιες συντομεύσεις πληκτρολογίου ίσως είναι ήδη δεσμευμένες από τον Opera ή το λειτουργικό σας σύστημα. Σε αυτή τη περίπτωση δεν λειτουργεί.'
      },
      showOnClick: {
        innerText: 'Εμφάνιση με κλικ',
        title: 'Εμφανίζει το εικονικό πληκτρολόγιο όταν κάνετε κλικ σε ένα πλαίσιο κειμένου.'
      },
      showOnDoubleClick: {
        innerText: 'Εμφάνιση με διπλό κλικ',
        title: 'Εμφανίζει το εικονικό πληκτρολόγιο όταν κάνετε διπλό κλικ σε ένα πλαίσιο κειμένου.'
      },
      highlightKeysOnClick: {
        innerText: 'Έντονα κουμπιά όταν κλικάροντε',
        title: 'Τα κουμπιά του εικονικού πληκτρολογίου τονίζονται όταν κάνετε κλικ σε αυτά. Είναι ευκολότερο να δείτε αν κάνατε κλικ στο σωστό κουμπί ;)'
      },
      useDragHandler: {
        innerText: 'Ειδικό σημείο λαβής μετακίνησης',
        title: 'Σημαδέψτε αυτό αν προτιμάτε ένα ξεχωριστό σημείο λαβής για να μετακινείτε το πληκτρολόγιο. Αυτό ίσως βοηθάει όταν πληκτρολογείτε γρήγορα, «κολλώντας» το πληκτρολόγιο.'
      }
    },
    /**
     * Strings placed below are visible on release notes page.
     */
    releaseNotes: {
      title: {
        innerHTML: 'Virtual Keyboard &ndash; Πληροφορίες έκδοσης'
      },
      header: {
        innerHTML: 'Virtual Keyboard &ndash; Πληροφορίες έκδοσης'
      },
      congrats: {
        innerHTML: 'Συγχαρητήρια! Η επέκτασή σας Virtual Keyboard έχει επιτυχώς αναβαθμισθεί στην έκδοση ' + widget.version + ' και είναι πλέον ενημερωμένη :)<br />Επανεκκινήστε τον Opera σας για να ενεργοποιηθεί, παρακαλώ.'
      },
      thankYou: {
        innerText: 'Σας ευχαριστώ για την εγκατάσταση και χρήση αυτής της επέκτασης. Παρακαλώ, διαβάστε αυτή τη σύντομη εισαγωγή για να μάθετε για τις αλλαγές που έγιναν από την προηγούμενη έκδοση.'
      },
      important: {
        innerText: 'Σημαντικό!'
      },
      whatsNew: {
        innerText: 'Τι έχει αλλαχθεί σε αυτή την έκδοση;'
      },
      todo: {
        innerText: 'Τι χρειάζεται ακόμα να βελτιωθεί;'
      }
    },
    /**
     * Strings placed below may be visible on more pages.
     */
    globals: {
      linksRate: {
        innerText: 'Σας αρέσει αυτή η επέκταση; Βαθμολογήστε τη!'
      },
      linksDonate: {
        innerHTML: 'Δωρίστε στον δημιουργό &hearts;'
      },
      linksSupport: {
        innerText: 'Προβλήματα, ερωτήσεις, ιδέες;'
      },
      translation: {
        innerText: 'Μετάφραση:' // Visible in footer before your name.
      }
    }
  }
};
