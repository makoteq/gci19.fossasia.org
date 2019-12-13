(function() {
    var urls = ['https://i.imgur.com/oCkEbrA.png', 'https://i.imgur.com/A040Lxr.png', 'https://i.imgur.com/QIxIKBH.png', 'https://i.imgur.com/Q2BAOd2.png'];
    function swap() {
      document.getElementById('#404div').setAttribute('src', urls[Math.round(Math.random() * urls.length)]);
    }
  
    // Mozilla, Opera and webkit nightlies currently support this event
    if ( document.addEventListener ) {
      window.addEventListener( 'load', swap, false );
    // If IE event model is used
    } else if ( document.attachEvent ) {
      window.attachEvent( 'onload', swap );
    }
  })();