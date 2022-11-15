const IntelligentHits = (cpu, enemy) => {
  const player = cpu;
  const dushman = enemy;
  const attackHistory = [];

  const smartAttack = () => {
    let result;
    if (attackHistory.length === 0) {
      result = player.randAttack(dushman.getBoard());
    }

    return result;
  };

  return { smartAttack };
};

export { IntelligentHits };
