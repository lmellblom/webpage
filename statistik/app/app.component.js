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
var serien_service_1 = require('./serien.service');
var _ = require("lodash");
var AppComponent = (function () {
    function AppComponent(_gameService) {
        this._gameService = _gameService;
        this.timelineSpan = 5;
        this.timelineSpanNr = 5;
        this.heightTimeline = {
            1: 20,
            5: 15,
            15: 10,
            45: 5
        };
    }
    AppComponent.prototype.timeSpanArray = function (time) {
        var start = 0;
        var array = [];
        for (var i = start; i <= 90 - time; i += time) {
            array.push([i + 1, i + time]);
        }
        return array;
    };
    AppComponent.prototype.convertToNr = function (item) {
        this.timelineSpanNr = parseInt(item);
    };
    Object.defineProperty(AppComponent.prototype, "games", {
        get: function () {
            return this._gameService.games;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "getNumberOfGames", {
        get: function () {
            var games = this._gameService.nrOfGames;
            return games;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "getWins", {
        get: function () {
            return this._gameService.nrOfWins;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "getDraws", {
        get: function () {
            return this._gameService.nrOfDraw;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "getLooses", {
        get: function () {
            return this._gameService.nrOfLoose;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "scorers", {
        get: function () {
            return _.reverse(_.sortBy(this._gameService.differentScorers, function (it) { return it.goals.length; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "allGoals", {
        get: function () {
            return this._gameService.allGoals;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.goalsBetweenMin = function (min, max) {
        return _.filter(this.allGoals, function (goal) {
            return goal.minute >= min && goal.minute <= max;
        });
    };
    Object.defineProperty(AppComponent.prototype, "nrOfGoals", {
        get: function () {
            return this._gameService.allGoals.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "zeroGoalsGames", {
        get: function () {
            return this._gameService.condededZeroGoals;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "concededGoals", {
        get: function () {
            return this._gameService.concededGoals.length;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.concededGoalsBetweenMin = function (min, max) {
        return _.filter(this._gameService.concededGoals, function (goal) {
            return goal >= min && goal <= max;
        });
    };
    AppComponent.prototype.concededGoalsHomeBetweenMin = function (min, max) {
        return _.filter(this._gameService.concededGoalsHome, function (goal) {
            return goal >= min && goal <= max;
        });
    };
    AppComponent.prototype.concededGoalsAwayBetweenMin = function (min, max) {
        return _.filter(this._gameService.concededGoalsAway, function (goal) {
            return goal >= min && goal <= max;
        });
    };
    AppComponent.prototype.goalsBetweenHomeMin = function (min, max) {
        return _.filter(this._gameService.goalsHome, function (goal) {
            return goal.minute >= min && goal.minute <= max;
        });
    };
    AppComponent.prototype.goalsBetweenAwayMin = function (min, max) {
        return _.filter(this._gameService.goalsAway, function (goal) {
            return goal.minute >= min && goal.minute <= max;
        });
    };
    Object.defineProperty(AppComponent.prototype, "goalsHome", {
        get: function () {
            return this._gameService.goalsHome;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "goalsAway", {
        get: function () {
            return this._gameService.goalsAway;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "snittGoal", {
        get: function () {
            var nr = this.nrOfGoals / this.getNumberOfGames;
            return nr.toFixed(2);
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: './app.html',
            providers: [serien_service_1.GameService]
        }), 
        __metadata('design:paramtypes', [serien_service_1.GameService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map