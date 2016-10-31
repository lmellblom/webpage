"use strict";
var Goal = (function () {
    function Goal() {
    }
    return Goal;
}());
exports.Goal = Goal;
exports.RESULT = {
    won: "vinst",
    draw: "lika",
    lost: "förlust"
};
var Game = (function () {
    function Game() {
    }
    Game.prototype.result = function () {
        if (this.goals.length > this.opponentGoals.length) {
            return exports.RESULT.won;
        }
        else if (this.goals.length === this.opponentGoals.length) {
            return exports.RESULT.draw;
        }
        else {
            return exports.RESULT.lost;
        }
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=models.js.map