'use strict';

// const callback = () => {
//   // Handler when the DOM is fully loaded
//   console.log('\'Allo \'Allo! Content script.....');
// };
// if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
//   callback();
// } else {
//   document.addEventListener("DOMContentLoaded", callback);
// }


// select the target node
var target = document.querySelector('body');
 
// create an observer instance
var observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => { // line needs to be optimized
    var mailTrackSigs = document.querySelectorAll('[data-mt-signature]');
    for(var j = 0; j < mailTrackSigs.length; j++) {
      mailTrackSigs[j].style.display = 'none';
    }
  });    
});
 
// configuration of the observer:
var config = { attributes: true, childList: true };
 
// pass in the target node, as well as the observer options
observer.observe(target, config);

