(function(){
  'use strict';
  
  // firstly patch in the all important Array.forEach method
  if (!Array.prototype.forEach) {
      Array.prototype.forEach = function (fn, scope) {
          var i, len;
          for (i = 0, len = this.length; i < len; ++i) {
              if (i in this) {
                  fn.call(scope, this[i], i, this);
              }
          }
      };
  }

  // classList is a cool thing, we should use it if we can.
  var supportsClassList = !!document.body.classList;

  // addClass
  if (!Element.prototype.addClass) {
    Element.prototype.addClass = function(className) {
      if (supportsClassList) {
        this.classList.add(className);
      } else {
        this.className += ' ' + className;
      }
    };
  }

  // removeClass
  if (!Element.prototype.removeClass) {
    Element.prototype.removeClass = function(className) {
      if (supportsClassList) {
        this.classList.remove(className);
      } else {
        var regexp = new RegExp('(\\s|^)'+className+'(\\s|$)', 'g');
        this.className = this.className.replace(regexp, '');
      }
    };
  }

  // hasClass
  if (!Element.prototype.hasClass) {
    Element.prototype.hasClass = function(className) {
      if (supportsClassList) {
        return this.classList.contains(className);
      } else {
        var regexp = new RegExp('(\\s|^)'+className+'(\\s|$)', 'g');
        return regexp.test(this.className);
      }
    };
  }

  // toggleClass
  if (!Element.prototype.toggleClass) {
    Element.prototype.toggleClass = function(className) {
      if (this.hasClass(className))
        this.removeClass(className);
      else
        this.addClass(className);
    };
  }
})();
