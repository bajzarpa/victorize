document.addEventListener('DOMContentLoaded', function() {
  var css = "._iuz { background-image: url(https://i.imgur.com/BTIaejj.png) !important} ";
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');

  style.type = 'text/css';

  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  head.appendChild(style);
});
