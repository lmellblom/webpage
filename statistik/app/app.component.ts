import { Component, ViewEncapsulation } from '@angular/core';
import {GameService} from './serien.service';
import {Game, Goal} from './models'
import * as _ from "lodash";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.html',
    providers: [GameService]
})
export class AppComponent {
    public timelineSpan = 5;
    public timelineSpanNr = 5;

    public heightTimeline:any = {
        1: 20,
        5: 15,
        15: 10,
        45: 5
    }

  constructor(private _gameService: GameService) {
    } 

    timeSpanArray(time: number) {
        let start = 0;
        let array: number[][] = [];
        for(let i = start; i<=90-time; i+=time) {
            array.push([i+1, i+time]);
        }
        return array;
    }

    convertToNr(item: string) {
        this.timelineSpanNr = parseInt(item);
    }

  get games() {
      return this._gameService.games;
  }

  get getNumberOfGames() {
    let games = this._gameService.nrOfGames;
    return games;
  }

  get getWins(): number {
      return this._gameService.nrOfWins;
  }

  get getDraws(): number {
      return this._gameService.nrOfDraw;
  }

  get getLooses(): number {
      return this._gameService.nrOfLoose;
  }

  get scorers() {
      return _.reverse(_.sortBy(this._gameService.differentScorers, (it:any)=>it.goals.length));
  }

  get allGoals() {
      return this._gameService.allGoals;
  }
  
  goalsBetweenMin(min:number, max:number) {
      return _.filter(this.allGoals, (goal: Goal) => {
          return goal.minute >= min && goal.minute <= max;
      });
  }

  get nrOfGoals() {
      return this._gameService.allGoals.length;
  }

  get zeroGoalsGames(): Game[] {
      return this._gameService.condededZeroGoals;
  }

  get concededGoals(): number {
      return this._gameService.concededGoals.length;
  }

  concededGoalsBetweenMin(min:number, max:number) {
      return _.filter(this._gameService.concededGoals, (goal: number) => {
          return goal >= min && goal <= max;
      });
  }

  concededGoalsHomeBetweenMin(min:number, max:number) {
      return _.filter(this._gameService.concededGoalsHome, (goal: number) => {
          return goal >= min && goal <= max;
      });
  }

  concededGoalsAwayBetweenMin(min:number, max:number) {
      return _.filter(this._gameService.concededGoalsAway, (goal: number) => {
          return goal >= min && goal <= max;
      });
  }

  goalsBetweenHomeMin(min:number, max:number) {
      return _.filter(this._gameService.goalsHome, (goal: Goal) => {
          return goal.minute >= min && goal.minute <= max;
      });
  }

  goalsBetweenAwayMin(min:number, max:number) {
      return _.filter(this._gameService.goalsAway, (goal: Goal) => {
          return goal.minute >= min && goal.minute <= max;
      });
  }

  get goalsHome(): Goal[] {
      return this._gameService.goalsHome;
  }

  get goalsAway(): Goal[] {
      return this._gameService.goalsAway;
  }

    get snittGoal(): string {
      let nr =  this.nrOfGoals / this.getNumberOfGames;
      return nr.toFixed(2); 
    }

}
