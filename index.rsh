'reach 0.1';

const [isCount, ZERO, ONE, TWO, THREE, FOUR, FIVE] = makeEnum(6);
const [isGuess, GZERO, GONE, GTWO, GTHREE, GFOUR, GFIVE, GSIX, GSEVEN, GEIGHT, GNINE, GTEN] = makeEnum(11);
const [isOutcome, A_WINS, DRAW, B_WINS] = makeEnum(3);

const winner = (aCount, aGuess, bCount, bGuess) => {
  const total = aCount + bCount
  if (aGuess == bGuess) {
    return DRAW
  } else if (total == aGuess) {
    return A_WINS
  } else if (total == bGuess) {
    return B_WINS
  } else {
    return DRAW
  }
}

forall(UInt, aCount => 
  forall(UInt, aGuess => 
    forall(UInt, bCount => 
      forall(UInt, bGuess => 
        assert(isOutcome(winner(aCount, aGuess, bCount, bGuess)))))));

const commonInteract = {
  ...hasRandom,
  getCount: Fun([], UInt),
  getGuess: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null)
}

export const main = Reach.App(() => {
  const A = Participant('Alice', {
    ...commonInteract,
    wager: UInt,
    deadline: UInt,
  });
  const B = Participant('Bob', {
    ...commonInteract,
    acceptWager: Fun([UInt], Null)
  });
  init();

  const informTimeout = () => {
    each([A, B], () => {
      interact.informTimeout();
    });
  };

  A.only(() => {
    const wager = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
  })
  A.publish(wager, deadline).pay(wager);
  commit();

  B.only(() => {
    interact.acceptWager(wager)
  })
  B.publish().pay(wager).timeout(relativeTime(deadline), () => closeTo(A, informTimeout));

  var outcome = DRAW;
  invariant(balance()  == 2 * wager && isOutcome(outcome));
  while (outcome == DRAW) {
    commit();

    A.only(() => {
      const _aCount = interact.getCount();
      const [_aCountCommit, _aCountSalt] = makeCommitment(interact, _aCount);
      const aCountCommit = declassify(_aCountCommit);

      const _aGuess = interact.getGuess();
      const [_aGuessCommit, _aGuessSalt] = makeCommitment(interact, _aGuess);
      const aGuessCommit = declassify(_aGuessCommit);
    });
    A.publish(aCountCommit, aGuessCommit)
    .timeout(relativeTime(deadline), () => closeTo(B, informTimeout));
    commit();

    unknowable(B, A(_aCount, _aCountSalt, _aGuess, _aGuessSalt));
    B.only(() => {
      const bCount = declassify(interact.getCount());
      const bGuess = declassify(interact.getGuess());
    })
    B.publish(bCount, bGuess)
    .timeout(relativeTime(deadline), () => closeTo(A, informTimeout));

    commit();

    A.only(() => {
      const aCount = declassify(_aCount);
      const aCountSalt = declassify(_aCountSalt);

      const aGuess = declassify(_aGuess);
      const aGuessSalt = declassify(_aGuessSalt);
    });
    A.publish(aCount, aCountSalt, aGuess, aGuessSalt)
      .timeout(relativeTime(deadline), () => closeTo(B, informTimeout));
    
    outcome = winner(aCount, aGuess, bCount, bGuess);
    continue;
  }
  assert(outcome == A_WINS || outcome == B_WINS);
  transfer(wager * 2).to(outcome == A_WINS ? A : B)
  commit();

  each([A, B], () => {
    interact.seeOutcome(outcome)
  })
  exit();
});
