export class Goal {
    minute: number;
    name: string;
}

export const RESULT = {
    won: "vinst",
    draw: "lika",
    lost: "förlust"
}

export class Game {
    opponent: string;
    opponentGoals: number[]; // only the time when the goal was scored
    date: string;
    gameState: string;
    goals: Goal[];

    result(): string {
        if (this.goals.length > this.opponentGoals.length) {
            return RESULT.won;
        } else if(this.goals.length === this.opponentGoals.length) {
            return RESULT.draw;
        } else {
            return RESULT.lost;
        }
    }
}

