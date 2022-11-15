const IntelligentHits = (cpu, enemy) => {
  const player = cpu;
  const dushman = enemy;
  const attackHistory = [];
  let inARow = 0;

  const smartAttack = () => {
    let result;
    if (attackHistory.length === 0) {
      result = player.attackBoard([0, 2], dushman.getBoard());
      //result = player.randAttack(dushman.getBoard());
    } else {
      if (attackHistory[0].hasShip) {
        if (player.canAttackPos([attackHistory[0].y, attackHistory[0].x + 1])) {
          inARow++;
          result = player.attackBoard(
            [attackHistory[0].y, attackHistory[0].x + 1],
            dushman.getBoard()
          );
        } else {
          if (
            player.canAttackPos([attackHistory[0].y, attackHistory[0].x - 1])
          ) {
            inARow++;
            result = player.attackBoard(
              [attackHistory[0].y, attackHistory[0].x - 1],
              dushman.getBoard()
            );
          } else {
            result = player.randAttack(dushman.getBoard());
          }
        }
      } else {
        if (inARow < 5 && inARow !== 0) {
          if (
            player.canAttackPos([
              attackHistory[inARow].y,
              attackHistory[inARow].x - 1,
            ])
          ) {
            result = player.attackBoard(
              [attackHistory[inARow].y, attackHistory[inARow].x - 1],
              dushman.getBoard()
            );
          }
          inARow = 1;
        } else {
          result = player.randAttack(dushman.getBoard());
        }
      }
    }
    attackHistory.unshift(result);
    return result;
  };

  return { smartAttack };
};

export { IntelligentHits };
