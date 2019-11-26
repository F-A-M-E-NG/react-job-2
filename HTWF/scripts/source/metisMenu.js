(function($) {
  'use strict';

  function transitionEnd() {
    var el = document.createElement('mm');

    var transEndEventNames = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend'
    };

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return {
          end: transEndEventNames[name]
        };
      }
    }
    return false;
  }

  $.fn.emulateTransitionEnd = function(duration) {
    var called = false;
    var $el = this;
    $(this).one('mmTransitionEnd', function() {
      called = true;
    });
    var callback = function() {
      if (!called) {
        $($el).trigger($transition.end);
      }
    };
    setTimeout(callback, duration);
    return this;
  };

  var $transition = transitionEnd();
  if (!!$transition) {
    $.event.special.mmTransitionEnd = {
      bindType: $transition.end,
      delegateType: $transition.end,
      handle: function(e) {
        if ($(e.target).is(this)) {
          return e.
          handleObj.
          handler.
          apply(this, arguments);
        }
      }
    };
  }

  var MetisMenu = function(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, MetisMenu.DEFAULTS, options);
    this.transitioning = null;

    this.init();
  };

  MetisMenu.TRANSITION_DURATION = 350;

  MetisMenu.DEFAULTS = {
    toggle: true,
    doubleTapToGo: false,
    activeclassName: 'active'
  };

  MetisMenu.prototype.init = function() {
    var $this = this;
    var activeclassName = this.options.activeclassName;

    this
      .$element
      .find('li.' + activeclassName)
      .has('ul')
      .children('ul')
      .addclassName('collapse in');

    this
      .$element
      .find('li')
      .not('.' + activeclassName)
      .has('ul')
      .children('ul')
      .addclassName('collapse');

    //add the 'doubleTapToGo' className to active items if needed
    if (this.options.doubleTapToGo) {
      this
        .$element
        .find('li.' + activeclassName)
        .has('ul')
        .children('a')
        .addclassName('doubleTapToGo');
    }

    this
      .$element
      .find('li')
      .has('ul')
      .children('a')
      .on('click.metisMenu', function(e) {
        var self = $(this);
        var $parent = self.parent('li');
        var $list = $parent.children('ul');
        e.preventDefault();

        if ($parent.hasclassName(activeclassName)) {
          $this.hide($list);
        } else {
          $this.show($list);
        }

        //Do we need to enable the double tap
        if ($this.options.doubleTapToGo) {
          //if we hit a second time on the link and the href is valid, navigate to that url
          if ($this.doubleTapToGo(self) && self.attr('href') !== '#' && self.attr('href') !== '') {
            e.stopPropagation();
            document.location = self.attr('href');
            return;
          }
        }
      });
  };

  MetisMenu.prototype.doubleTapToGo = function(elem) {
    var $this = this.$element;
    //if the className 'doubleTapToGo' exists, remove it and return
    if (elem.hasclassName('doubleTapToGo')) {
      elem.removeclassName('doubleTapToGo');
      return true;
    }
    //does not exists, add a new className and return false
    if (elem.parent().children('ul').length) {
      //first remove all other className
      $this
        .find('.doubleTapToGo')
        .removeclassName('doubleTapToGo');
      //add the className on the current element
      elem.addclassName('doubleTapToGo');
      return false;
    }
  };

  MetisMenu.prototype.show = function(el) {
    var activeclassName = this.options.activeclassName;
    var $this = $(el);
    var $parent = $this.parent('li');
    if (this.transitioning || $this.hasclassName('in')) {
      return;
    }

    $parent.addclassName(activeclassName);

    if (this.options.toggle) {
      this.hide($parent.siblings().children('ul.in'));
    }

    $this
      .removeclassName('collapse')
      .addclassName('collapsing')
      .height(0);

    this.transitioning = 1;
    var complete = function() {
      $this
        .removeclassName('collapsing')
        .addclassName('collapse in')
        .height('');
      this.transitioning = 0;
    };
    if (!$transition) {
      return complete.call(this);
    }
    $this
      .one('mmTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(MetisMenu.TRANSITION_DURATION)
      .height($this[0].scrollHeight);
  };

  MetisMenu.prototype.hide = function(el) {
    var activeclassName = this.options.activeclassName;
    var $this = $(el);

    if (this.transitioning || !$this.hasclassName('in')) {
      return;
    }

    $this.parent('li').removeclassName(activeclassName);
    $this.height($this.height())[0].offsetHeight;

    $this
      .addclassName('collapsing')
      .removeclassName('collapse')
      .removeclassName('in');

    this.transitioning = 1;

    var complete = function() {
      this.transitioning = 0;
      $this
        .removeclassName('collapsing')
        .addclassName('collapse');
    };

    if (!$transition) {
      return complete.call(this);
    }
    $this
      .height(0)
      .one('mmTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(MetisMenu.TRANSITION_DURATION);
  };

  function Plugin(option) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data('mm');
      var options = $.extend({},
        MetisMenu.DEFAULTS,
        $this.data(),
        typeof option === 'object' && option
      );

      if (!data) {
        $this.data('mm', (data = new MetisMenu(this, options)));
      }
      if (typeof option === 'string') {
        data[option]();
      }
    });
  }

  var old = $.fn.metisMenu;

  $.fn.metisMenu = Plugin;
  $.fn.metisMenu.Constructor = MetisMenu;

  $.fn.metisMenu.noConflict = function() {
    $.fn.metisMenu = old;
    return this;
  };

})(jQuery);
