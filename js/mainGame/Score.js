function Score() {
  var view = View.getInstance();

  var mainWrapper;
  var scoreWrapper;
  var trashScoreWrapper;
  var totalScoreWrapper;
  var lifeCountWrapper;
  var levelWrapper;

  this.trashScore;
  this.totalScore;
  this.lifeCount;

  var that = this;

  this.init = function() {
    that.trashScore = 0;
    that.totalScore = 0;
    that.lifeCount = 5;

    mainWrapper = view.getMainWrapper();

    scoreWrapper = view.create('div');
    trashScoreWrapper = view.create('div');
    totalScoreWrapper = view.create('div');
    lifeCountWrapper = view.create('div');
    levelWrapper = view.create('div');

    view.addClass(scoreWrapper, 'score-wrapper');
    view.addClass(trashScoreWrapper, 'trashscore');
    view.addClass(totalScoreWrapper, 'total-score');
    view.addClass(lifeCountWrapper, 'life-count');
    view.addClass(levelWrapper, 'level-num');

    view.append(scoreWrapper, levelWrapper);
    view.append(scoreWrapper, lifeCountWrapper);
    view.append(scoreWrapper, trashScoreWrapper);
    view.append(scoreWrapper, totalScoreWrapper);
    view.append(mainWrapper, scoreWrapper);

    that.updatetrashScore();
    that.updateTotalScore();
    that.updateLifeCount();
    that.updateLevelNum(1);
  };

  this.updatetrashScore = function() {
    if (that.trashScore == 100) {
      that.trashScore = 0;
      that.lifeCount++;
      that.updateLifeCount();
    }

    view.setHTML(trashScoreWrapper, 'trash: ' + that.trashScore);
  };

  this.updateTotalScore = function() {
    view.setHTML(totalScoreWrapper, 'Score: ' + that.totalScore);
  };

  this.updateLifeCount = function() {
    view.setHTML(lifeCountWrapper, 'x ' + that.lifeCount);
  };

  this.updateLevelNum = function(level) {
    view.setHTML(levelWrapper, 'Level: ' + level);
  };

  this.displayScore = function() {
    view.style(scoreWrapper, { display: 'block', background: '#185325' });
  };

  this.hideScore = function() {
    view.style(scoreWrapper, { display: 'none' });

    that.trashScore = 0;
    that.lifeCount = 5;
    that.totalScore = 0;
    that.updatetrashScore();
    that.updateTotalScore();
    that.updateLifeCount();
  };

  this.gameOverView = function() {
    view.style(scoreWrapper, { background: 'black' });
  };
}
