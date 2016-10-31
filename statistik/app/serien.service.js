"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var serien_data_1 = require('./serien-data');
var _ = require("lodash");
var models_1 = require('./models');
var GameService = (function () {
    function GameService() {
    }
    Object.defineProperty(GameService.prototype, "games", {
        get: function () {
            return _.map(serien_data_1.SERIEN, function (game) {
                return _.extend(game, new models_1.Game);
            });
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(GameService.prototype, "nrOfGames", {
        get: function () {
            return this.games.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameService.prototype, "nrOfWins", {
        get: function () {
            var games = _.filter(this.games, function (game) {
                return game.result() === models_1.RESULT.won;
            });
            return games.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameService.prototype, "nrOfDraw", {
        get: function () {
            var games = _.filter(this.games, function (game) {
                return game.result() === models_1.RESULT.draw;
            });
            return games.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameService.prototype, "nrOfLoose", {
        get: function () {
            var games = _.filter(this.games, function (game) {
                return game.result() === models_1.RESULT.lost;
            });
            return games.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameService.prototype, "allGoals", {
        get: function () {
            var goals = [];
            _.each(this.games, function (game) {
                goals = goals.concat(game.goals);
            });
            return goals;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameService.prototype, "concededGoals", {
        get: function () {
            var goals = [];
            _.each(this.games, function (game) {
                goals = goals.concat(game.opponentGoals);
            });
            return goals;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameService.prototype, "concededGoalsHome", {
        get: function () {
            var goals = [];
            _.each(this.games, function (game) {
                if (game.gameState == "home") {
                    goals = goals.concat(game.opponentGoals);
                }
            });
            return goals;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameService.prototype, "concededGoalsAway", {
        get: function () {
            var goals = [];
            _.each(this.games, function (game) {
                if (game.gameState == "away") {
                    goals = goals.concat(game.opponentGoals);
                }
            });
            return goals;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameService.prototype, "condededZeroGoals", {
        // de matcher vi släppte in 0 mål
        get: function () {
            return _.filter(this.games, function (game) {
                return game.opponentGoals.length === 0;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameService.prototype, "differentScorers", {
        get: function () {
            var names = [];
            var scorers = [];
            var goals = this.allGoals;
            _.each(goals, function (goal) {
                if (_.findIndex(names, function (name) { return name === goal.name; }) === -1) {
                    names.push(goal.name);
                    var it_1 = {
                        name: goal.name,
                        goals: [goal.minute]
                    };
                    scorers.push(it_1);
                }
                else {
                    var ind = _.findIndex(scorers, function (scorer) { return scorer.name === goal.name; });
                    scorers[ind].goals.push(goal.minute);
                }
            });
            return scorers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameService.prototype, "goalsHome", {
        get: function () {
            var temp = [];
            _.each(this.games, function (game) {
                if (game.gameState == "home") {
                    temp = temp.concat(game.goals);
                }
            });
            return temp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameService.prototype, "goalsAway", {
        get: function () {
            var temp = [];
            _.each(this.games, function (game) {
                if (game.gameState == "away") {
                    temp = temp.concat(game.goals);
                }
            });
            return temp;
        },
        enumerable: true,
        configurable: true
    });
    GameService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GameService);
    return GameService;
}());
exports.GameService = GameService;
// vilket tidspan gör vi ofta mål?
// vilket tidsspan släpper vi in mål?
//# sourceMappingURL=serien.service.js.map