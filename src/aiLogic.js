export function bestMoveAi(game) {
    let bestMove = null;
    let bestScore = -1000;
    let gameCopy = [...game];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (game[i][j] === null) {
                gameCopy[i][j] = 'o';
                let score = minimax(gameCopy, 0, false);
                if (score > bestScore) {
                    bestScore = score;
                    bestMove = {i, j};
                }
                gameCopy[i][j] = null;
            }
        }
    }
    return bestMove;
}

export function checkForWin(game) {
    const lines = [
        [game[0][0], game[0][1], game[0][2]],
        [game[1][0], game[1][1], game[1][2]],
        [game[2][0], game[2][1], game[2][2]],
        [game[0][0], game[1][0], game[2][0]],
        [game[0][1], game[1][1], game[2][1]],
        [game[0][2], game[1][2], game[2][2]],
        [game[0][0], game[1][1], game[2][2]],
        [game[0][2], game[1][1], game[2][0]],
    ];
    
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (a && a === b && a === c) {
            if(a === 'o'){
                return 1;
            } else if(a === 'x') {
                return -1;
            }
        }
    }

    if (game.reduce((a, b) => a.concat(b)).every(cell => cell !== null)) {
        return 0; 
    }

    return null;
}
  

function minimax(game, depth, isMax) {
    let winner;
    
    winner = checkForWin(game);
    if (winner !== null)
        return winner;
    if (isMax) {
        let bestScore = -1000;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (game[i][j] === null) {
                    game[i][j] = 'o';
                    let score = minimax(game, depth + 1, false);
                    bestScore = Math.max(score, bestScore);
                    game[i][j] = null;
                }
            }
        }
        return bestScore;
    }
    else {
        let bestScore = 1000;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (game[i][j] === null) {
                    game[i][j] = 'x';
                    let score = minimax(game, depth + 1, true);
                    bestScore = Math.min(score, bestScore);
                    game[i][j] = null;
                }
            }
        }
        return bestScore;
    };
}