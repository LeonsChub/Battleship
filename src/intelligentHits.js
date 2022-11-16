const IntelligentHits = (cpu, enemy) => {
  const player = cpu;
  const dushman = enemy;
  const attackHistory = [];

  let seed;
  let inARowX = 0;
  let inARowY = 0;
  let vertReturn = false;

  const smartAttack = () => {
    let result;
    if (attackHistory.length === 0) {
      // if No attacks have been made yet attack a random spot
      result = player.attackBoard([5, 5], dushman.getBoard());
      //result = player.randAttack(dushman.getBoard());
    } else {
      let lastEntry = attackHistory[0];
      if (lastEntry.hasShip) {
        if (inARowY === 0) {
          if (player.canAttackPos([lastEntry.y, lastEntry.x + 1])) {
            result = player.attackBoard(
              [lastEntry.y, lastEntry.x + 1],
              dushman.getBoard()
            );
            inARowX++;
          } else {
            if (player.canAttackPos([lastEntry.y, lastEntry.x - 1])) {
              result = player.attackBoard(
                [lastEntry.y, lastEntry.x - 1],
                dushman.getBoard()
              );
              inARowX++;
            } else {
              result = player.randAttack(dushman.getBoard());
            }
          }
        } else if (inARowX === 0) {
          if (player.canAttackPos([lastEntry.y + 1, lastEntry.x])) {
            result = player.attackBoard(
              [lastEntry.y + 1, lastEntry.x],
              dushman.getBoard()
            );
            inARowY++;
          } else {
            if (player.canAttackPos([lastEntry.y - 1, lastEntry.x])) {
              result = player.attackBoard(
                [lastEntry.y - 1, lastEntry.x],
                dushman.getBoard()
              );
              inARowY++;
            } else {
              result = player.randAttack(dushman.getBoard());
            }
          }
        }
      } else if (!lastEntry.hasShip) {
        if (inARowX !== 0) {
          seed = attackHistory[inARowX];
          inARowX = 0;
          if (player.canAttackPos([seed.y, seed.x - 1])) {
            result = player.attackBoard(
              [seed.y, seed.x - 1],
              dushman.getBoard()
            );
          } else {
            result = player.randAttack(dushman.getBoard());
          }
        } else if (inARowY !== 0) {
          seed = attackHistory[inARowY + 2];
          inARowY = inARowY < 4 ? inARowY : 0;
          if (player.canAttackPos([seed.y - 1, seed.x])) {
            result = player.attackBoard(
              [seed.y - 1, seed.x],
              dushman.getBoard()
            );
          } else {
            result = player.randAttack(dushman.getBoard());
          }
        } else if (attackHistory.length > 2) {
          if (
            attackHistory[0].y === attackHistory[1].y &&
            Math.abs(attackHistory[0].x - attackHistory[1].x) === 2
          ) {
            seed = attackHistory[2];
            result = player.attackBoard(
              [seed.y + 1, seed.x],
              dushman.getBoard()
            );
            inARowY++;
          } else {
            result = player.randAttack(dushman.getBoard());
          }
        } else {
          result = player.randAttack(dushman.getBoard());
        }
      }
      //} else if (inARowX !== 0 && lastEntry.hasShip) {

      //} else if (inARowY !== 0) {
      //  seed = attackHistory[inARowY];
      //  inARowY = 0;
      //  if (player.canAttackPos([seed.y, seed.x - 1])) {
      //    inARowX++;
      //    result = player.attackBoard(
      //      [seed.y, seed.x - 1],
      //      dushman.getBoard()
      //    );
      //  } else {
      //    if (player.canAttackPos([seed.y, seed.x + 1])) {
      //      inARowX++;
      //      result = player.attackBoard(
      //        [seed.y, seed.x + 1],
      //        dushman.getBoard()
      //      );
      //    } else {
      //      if (player.canAttackPos([seed.y - 1, seed.x])) {
      //        result = player.attackBoard(
      //          [seed.y - 1, seed.x],
      //          dushman.getBoard()
      //        );
      //      } else {
      //        result = player.randAttack(dushman.getBoard());
      //      }
      //    }
      //  }
      //} else {
      // else {
      //  result = player.randAttack(dushman.getBoard());
      //}
      //}
      //}
    }
    console.log(result);
    if (seed !== undefined) {
      seed = undefined;
    }
    attackHistory.unshift(result);

    return result;
  };

  return { smartAttack };
};

export { IntelligentHits };
