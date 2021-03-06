(function() {

  $(function() {
    var heatNum, hideCurrent, judgeName, showPage, surfer1, surfer2, surfer3, surfer4, surfer5, surfer6;
    now.displayScoreYellow = function(score) {
      return $('#scoring').append(" <li> <div class='alert alert-yellow'> <p> " + score.judge_name + " " + score.score + "</p> </li>");
    };
    now.displayScoreRed = function(score) {
      return $('#scoring').append(" <li> <div class='alert alert-red'> <p> " + score.judge_name + " " + score.score2 + "</p> </li>");
    };
    now.displayScoreGreen = function(score) {
      return $('#scoring').append(" <li> <div class='alert alert-green'> <p>" + score.judge_name + " " + score.score3 + "</p> </li>");
    };
    now.displayScoreBlue = function(score) {
      return $('#scoring').append(" <li> <div class='alert alert-blue'> <p>" + score.judge_name + " " + score.score4 + "</p> </li>");
    };
    now.displayScoreWhite = function(score) {
      return $('#scoring').append(" <li> <div class='alert alert-white'> <p>" + score.judge_name + " " + score.score5 + "</p> </li>");
    };
    now.displayScoreOrange = function(score) {
      return $('#scoring').append(" <li> <div class='alert alert-orange'> <p>" + score.judge_name + " " + score.score6 + "</p> </li>");
    };
    now.clearTotals = function() {
      return $('#totals').html('');
    };
    now.displayTotalYellow = function(total) {
      return $('#totals').append(" <li> <div class='alert alert-yellow'> <p>" + total + "</p> </li>");
    };
    now.displayTotalRed = function(total) {
      return $('#totals').append(" <li> <div class='alert alert-red'> <p>" + total + "</p> </li>");
    };
    now.displayTotalGreen = function(total) {
      return $('#totals').append(" <li> <div class='alert alert-green'> <p>" + total + "</p> </li>");
    };
    now.displayTotalBlue = function(total) {
      return $('#totals').append(" <li> <div class='alert alert-blue'> <p>" + total + "</p> </li>");
    };
    now.displayTotalWhite = function(total) {
      return $('#totals').append(" <li> <div class='alert alert-white'> <p>" + total + "</p> </li>");
    };
    now.displayTotalOrange = function(total) {
      return $('#totals').append(" <li> <div class='alert alert-orange'> <p>" + total + "</p> </li>");
    };
    hideCurrent = function() {
      $('.page.current').fadeOut(500).removeClass('current');
      return $('.nav li').removeClass('active');
    };
    showPage = function(page) {
      var show;
      show = function() {
        $(".nav li a[href=" + page + "]").parent().addClass('active');
        return $(page).addClass('current').fadeIn(1000);
      };
      return setTimeout(show, 1000);
    };
    $('.nav li a').click(function() {
      hideCurrent();
      return showPage($(this).attr('href'));
    });
    $('.nav li').removeClass('active');
    showPage(window.location.hash || '#home');
    $("#surfer").bind('click', function() {
      return $("#colors").fadeIn(500);
    });
    heatNum = $.cookie('heat_num');
    judgeName = $.cookie('judge_name');
    heatNum = $.cookie('heat_num');
    surfer1 = $.cookie('surfer_1');
    surfer2 = $.cookie('surfer_2');
    surfer3 = $.cookie('surfer_3');
    surfer4 = $.cookie('surfer_4');
    surfer5 = $.cookie('surfer_5');
    surfer6 = $.cookie('surfer_6');
    window.App = Ember.Application.create();
    window.App.scoreBoard = Ember.Object.create({
      score: '',
      surfer: '',
      heatNum: heatNum,
      judgeName: judgeName,
      surfer1: surfer1,
      surfer2: surfer2,
      surfer3: surfer3,
      surfer4: surfer4,
      surfer5: surfer5,
      surfer6: surfer6
    });
    return window.App.ScoreBoardView = Ember.View.extend({
      heatNum: heatNum,
      judgeName: judgeName,
      surfer1: surfer1,
      surfer2: surfer2,
      surfer3: surfer3,
      surfer4: surfer4,
      surfer5: surfer5,
      surfer6: surfer6,
      change: function() {
        return this.set('score', $('input[name=score]').val());
      },
      submit: function() {
        this.set('score', $('input[name=score]').val());
        this.$('form').ajaxSubmit({
          success: function(resp) {
            var error;
            if (resp.errors != null) {
              return $('.scoreboard-errors').addClass('alert').addClass('alert-error').html(((function() {
                var _i, _len, _ref, _results;
                _ref = resp.errors;
                _results = [];
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                  error = _ref[_i];
                  _results.push(error.message);
                }
                return _results;
              })()).join('<br />'));
            } else {
              $('.scoreboard-errors').removeClass('alert').removeClass('alert-error').html('');
              return $('form').resetForm();
            }
          }
        });
        return false;
      }
    });
  });

}).call(this);
