const pickWeights = {
  // Round 1
  1: 1000,
  2: 717,
  3: 514,
  4: 491,
  5: 468,
  6: 446,
  7: 426,
  8: 406,
  9: 387,
  10: 369,
  11: 358,
  12: 347,
  13: 336,
  14: 325,
  15: 315,
  16: 305,
  17: 296,
  18: 287,
  19: 278,
  20: 269,
  21: 261,
  22: 253,
  23: 245,
  24: 237,
  25: 230,
  26: 223,
  27: 216,
  28: 209,
  29: 202,
  30: 196,
  31: 190,
  32: 184,
  // Round 2
  // Round 3
  // Round 4
  // Round 5
  // Round 6
  // Round 7
}

export default function useTradeEngine() {
  const proposeTrade = (tradingFor, tradingUsing) => {
    const likelihoodOfTrade = getLikelihood(tradingFor, tradingUsing)
    const randomChance = Math.floor(Math.random() * 100)

    return randomChance >= likelihoodOfTrade
  }

  const getLikelihood = (tradingFor, tradingUsing) => {
    const forWeight = getWeightFromPicks(tradingFor)
    const usingWeight = getWeightFromPicks(tradingUsing)

    return (usingWeight / forWeight) * 100;
  }

  const getPickWeight = (pick) => {
    return pickWeights[pick]
  }

  const getWeightFromPicks = (picks) => {
    let weight = 0

    picks.forEach((pick) => {
      weight += getPickWeight(pick.pick)
    })

    return weight
  }

  return {
    proposeTrade,
    getLikelihood,
  }
}
