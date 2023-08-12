if(location.pathname == '/cart') {
    document.location.href = '/?return_link=cart';
  }
  if(location.href.indexOf('return_link=cart') != -1) {
    setTimeout(function() {
      if(document.querySelector('cart-drawer')) {
        document.querySelector('cart-drawer').open();
      }
    }, 1000);
    let currentPageUrl = window.location.href.replace('?return_link=cart', '');
    window.history.replaceState({}, document.title, currentPageUrl);
  }