import { Injectable } from '@angular/core';
import { SERIEN } from './serien-data';
import * as _ from "lodash";
import { Game, RESULT, Goal } from './models';

@Injectable()
export class GameService {
    get games(): Game[] {
        return _.map(SERIEN, game=> {
            return _.extend(game, new Game);
        })
    };

    get nrOfGames(): number {
        return this.games.length;
    }

    get nrOfWins(): number {
        let games = _.filter(this.games, (game: Game) => {
            return game.result() === RESULT.won;
        });
        return games.length;
    }

    get nrOfDraw(): number {
        let games = _.filter(this.games, (game: Game) => {
            return game.result() === RESULT.draw;
        });
        return games.length;
    }

    get nrOfLoose(): number {
        let games = _.filter(this.games, (game: Game) => {
            return game.result() === RESULT.lost;
        });
        return games.length;
    }

    get allGoals(): Goal[] {
        let goals: Goal[] = [];
        _.each(this.games, (game: Game)=>{
            goals = goals.concat(game.goals);
        });
        return goals;
    }

    get concededGoals(): number[] {
        let goals: number[] = [];
        _.each(this.games, (game:Game)=>{
            goals = goals.concat(game.opponentGoals);
        });
        return goals;
    }

    get concededGoalsHome(): number[] {
        let goals: number[] = [];
        _.each(this.games, (game:Game)=>{
            if(game.gameState == "home") {
                goals = goals.concat(game.opponentGoals);
            }
        });
        return goals;
    }

    get concededGoalsAway(): number[] {
        let goals: number[] = [];
        _.each(this.games, (game:Game)=>{
            if(game.gameState == "away") {
                goals = goals.concat(game.opponentGoals);
            }
        });
        return goals;
    }

    // de matcher vi släppte in 0 mål
    get condededZeroGoals(): Game[] {
        return _.filter(this.games, (game: Game)=> {
            return game.opponentGoals.length === 0;
        });
    }

    get differentScorers(): any {
        let names: any = [];
        let scorers: any = [];
        let goals = this.allGoals; 
        _.each(goals, (goal: Goal) => {
            if(_.findIndex(names, name=> name === goal.name) === -1) { // not found
                names.push(goal.name);
                let it = {
                    name : goal.name,
                    goals : [goal.minute]
                };
                scorers.push(it);
            } else {
                let ind = _.findIndex(scorers, (scorer: any)=> scorer.name === goal.name);
                scorers[ind].goals.push(goal.minute);
                
            }
        });
        return scorers;
    }

    get goalsHome():Goal[] {
        let temp: Goal[] = [];
        _.each(this.games, (game: Game)=>{
            if(game.gameState == "home") {
                temp = temp.concat(game.goals) 
            }
        })
        return temp;
    }

    get goalsAway():Goal[] {
        let temp: Goal[] = [];
        _.each(this.games, (game: Game)=>{
            if(game.gameState == "away") {
                temp = temp.concat(game.goals) 
            }
        })
        return temp;
    }
    
}


// vilket tidspan gör vi ofta mål?

// vilket tidsspan släpper vi in mål?

