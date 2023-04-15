import {Point} from "./Point";
import {Player} from "./Player";

export class TennisGame {
    private player1: Player;
    private player2: Player;
    private score: string;
    static readonly LOVE = "Love";
    static readonly FIFTEEN = "Fifteen";
    static readonly THIRTY = "Thirty";
    static readonly FORTY = "Forty";
    static readonly EMPTY = "";
    static readonly LOVE_ALL = "Love-All";
    static readonly FIFTEEN_ALL = "Fifteen-All";
    static readonly THIRTY_ALL =  "Thirty-All";
    static readonly FORTY_ALL = "Forty-All";
    static readonly DEUCE = "Deuce";

    constructor(player1Name: string, player2Name: string) {
        this.player1 = {name: player1Name, score: 0};
        this.player2 = {name: player2Name, score: 0};
        this.score = '';
    }

    private getPointString(point: Point): string {
        switch (point) {
            case Point.LOVE:
                return TennisGame.LOVE;
            case Point.FIFTEEN:
                return TennisGame.FIFTEEN;
            case Point.THIRTY:
                return TennisGame.THIRTY;
            case Point.FORTY:
                return TennisGame.FORTY;
            default:
                return TennisGame.EMPTY;
        }
    }

    private getEqualScoreString(score: number): string {
        switch (score) {
            case Point.LOVE:
                return TennisGame.LOVE_ALL;
            case Point.FIFTEEN:
                return TennisGame.FIFTEEN_ALL;
            case Point.THIRTY:
                return TennisGame.THIRTY_ALL;
            case Point.FORTY:
                return TennisGame.FORTY_ALL;
            default:
                return TennisGame.DEUCE;
        }
    }

    private getAdvantageOrWinString(player: Player, opponent: Player): string {
        if (player.score - opponent.score === 1) {
            return "Advantage " + player.name;
        } else {
            return "Win for " + player.name;
        }
    }

    getScore(): string {
        if (this.player1.score === this.player2.score) {
            this.score = this.getEqualScoreString(this.player1.score);
        } else if (this.player1.score >= 4 || this.player2.score >= 4) {
            const playerWithHigherScore = this.player1.score > this.player2.score ? this.player1 : this.player2;
            const playerWithLowerScore = playerWithHigherScore === this.player1 ? this.player2 : this.player1;
            this.score = this.getAdvantageOrWinString(playerWithHigherScore, playerWithLowerScore);
        } else {
            this.score = this.getPointString(Point[this.player1.score + ""]) + '-' + this.getPointString(Point[this.player2.score + ""]);
        }
        return this.score;
    }

    wonPoint(playerName: string) {
        if (playerName === this.player1.name) {
            this.player1.score++;
        } else if (playerName === this.player2.name) {
            this.player2.score++;
        }
    }
}
