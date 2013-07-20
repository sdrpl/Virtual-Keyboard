lang = {
  meta: {
    extension: {
      name: 'Clavier Virtuel', // Extension name.
      description: 'Un clavier virtuel partout où vous en avez besoin. Rend plus surs vos mots de passe. Optez pour la sécurité.' // Extension's short description.
    },
    author: {
      name: 'MyBeautifulRat', // Your real name (first and last name preferred).
      myopera: 'mybeautifulrat', // Your login at MyOpera.
      email: 'mybeautifulrat@gmail.com', // Your e-mail address
      url: 'http://www.opera.com/' // Your website address
    },
    defaultLayout: 'fr', // Default layout code for people speaking your language (check preferences page's source).
    date: '2013-06-29' // When did you finished this translation (YYYY-MM-DD)?
  },
  translation: {
    /**
     * Strings placed below are visible on preferences page.
     */
    options: {
      title: {
        innerHTML: 'Clavier Virtuel &ndash; Préférences'
      },
      header: {
        innerHTML: 'Clavier Virtuel &ndash; Préférences'
      },
      defaultLayout: {
        innerText: 'Disposition active',
        title: 'Ceci est la disposition de clavier réglée par défaut lorsque vous l\'ouvrez pour la première fois sur une page ou rechargez une page. Vous pourrez toujours changer temporairement cette disposition en cliquant sur le bouton situé en bas à droite du clavier virtuel.'
      },
      showButton: {
        innerText: 'Activer le bouton de barre d\'outils',
        title: 'Ceci peut être utile si vous n\'aimez pas utiliser les raccourcis clavier pour activer le clavier virtuel (mdr!) ou si vous ne disposez pas de clavier (tablette). Toutefois, si vous trouvez ce bouton supplémentaire inutile ou ne voulez pas restreindre l\'espace de votre barre d\'adresse - désactivez-le.'
      },
      toolbarIcon: {
        innerText: 'Icône du bouton',
        title: 'Changez l\'icône affichée sur le bouton de votre barre d\'adresse si vous ne trouvez pas celle sélectionnée par défaut suffisament cool à votre goût ;)'
      },
      customShortcut: {
        innerText: 'Raccourci clavier',
        title: 'Notez que certains raccourcis clavier peuvent déjà être réservés par le navigateur Opera ou votre système d\'opération. Dans ce cas, il ne fonctionnera pas, où lancera une autre fonction.'
      },
      showOnClick: {
        innerText: 'Ouvrir sur clic',
        title: 'Ceci affichera le clavier virtuel à chaque fois que vous cliquerez dans un espace de saisie de texte.'
      },
      showOnDoubleClick: {
        innerText: 'Ouvrir sur clic double',
        title: 'Ceci affichera le clavier virtuel à chaque fois que vous ferez un double clic dans un espace de saisie de texte.'
      },
      highlightKeysOnClick: {
        innerText: 'Touches surlignées',
        title: 'Les touches du clavier virtuel sont mises en évidence lorsque vous cliquez dessus. Il est ainsi plus facile de visualiser si on a cliqué la bonne touche ;)'
      },
      useDragHandler: {
        innerText: 'Poignée de déplacement séparée',
        title: 'Activez ceci si vous préférez avoir une poignée distincte pour déplacer le clavier virtuel. Ceci peut être utile afin d\'éviter les erreurs de déplacements intempestifs lorsque vous tapez rapidement.'
      }
    },
    /**
     * Strings placed below are visible on release notes page.
     */
    releaseNotes: {
      title: {
        innerHTML: 'Clavier Virtuel &ndash; Notes de Version'
      },
      header: {
        innerHTML: 'Clavier Virtuel &ndash; Notes de Version'
      },
      congrats: {
        innerHTML: 'Félicitations! Votre extension de Clavier Virtuel a été mise à niveau avec succès vers la version ' + widget.version + ' et est à jour maintenant :)<br />Veuillez redémarrer votre navigateur Opera afin de mettre en fonction la nouvelle version.'
      },
      thankYou: {
        innerText: 'Merci d\'avoir installé et d\'utiliser cette extension. Veuillez lire cette courte introduction pour tout savoir au sujet des changements réalisés depuis la précédente version.'
      },
      important: {
        innerText: 'Important!'
      },
      whatsNew: {
        innerText: 'Qu\'est-ce qui a changé dans cette version?'
      },
      todo: {
        innerText: 'Qu\'est-ce qui nécessite d\'être perfectionné?'
      }
    },
    /**
     * Strings placed below may be visible on more pages.
     */
    globals: {
      linksRate: {
        innerText: 'Vous aimez l\'extension? Évaluez-la!'
      },
      linksDonate: {
        innerHTML: 'Donation au développeur &hearts;'
      },
      linksSupport: {
        innerText: 'Problèmes, questions, idées?'
      },
      translation: {
        innerText: 'Traduction:' // Visible in footer before your name.
      }
    }
  }
};
