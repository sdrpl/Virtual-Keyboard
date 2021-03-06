window.addEventListener('DOMContentLoaded', function()
{
  if ('translation' in lang)
  {
    var langSelectors = {
      options: {
        title: 'title',
        header: 'h1.title',
        defaultLayout: '[for="defaultLayout"]',
        showButton: '[for="showButton"]',
        toolbarIcon: '[for="toolbarIcon"]',
        customShortcut: '[for="customShortcut"]',
        showOnClick: '[for="showOnClick"]',
        showOnDoubleClick: '[for="showOnDoubleClick"]',
        highlightKeysOnClick: '[for="highlightKeysOnClick"]',
        useDragHandler: '[for="useDragHandler"]'
      },
      releaseNotes: {
        title: 'title',
        header: 'h1.title',
        congrats: '#notes h2',
        thankYou: '#thankYou',
        important: '#important',
        whatsNew: '#whatsNew',
        todo: '#todo'
      },
      globals: {
        linksRate: '#links a.rate',
        linksDonate: '#links a.donate',
        linksSupport: '#links a.support',
        translation: '#copyrights .translation'
      }
    };
    
    var page = document.location.pathname.slice(1, -5);
    var s, t;
    
    switch (page)
    {
      case 'options':
        s = langSelectors.options;
        t = lang.translation.options;
        break;
      case 'release-notes':
        s = langSelectors.releaseNotes;
        t = lang.translation.releaseNotes;
        break;
    }
    
    for (var i in t)
      for (var j in t[i])
        if (j != 'querySelector')
          document.querySelector(s[i])[j] = t[i][j];
    
    var m = lang.meta;
    var a = m.author;
    
    document.querySelector('#copyrights > p:last-child').innerHTML
      = '<p><span class="translation">Translation:</span> '
      + '<a href="' + a.url + '">' +  a.name + '</a> '
      + '(<a href="http://my.opera.com/' + a.myopera + '/">' + a.myopera + '</a>) '
      + ' &ndash; <a href="http://my.opera.com/sdrpl-addons/forums/topic.dml?id=1018992">Something wrong with translation?</a>'
      + '</p>';
    
    s = langSelectors.globals;
    t = lang.translation.globals;
    
    for (var i in t)
      for (var j in t[i])
        if (j != 'querySelector')
          document.querySelector(s[i])[j] = t[i][j];
  }
}, false);
