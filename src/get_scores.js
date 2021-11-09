const createNewScore = (user, score) => {
  const userScore = { user, score };
  return fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/r8MdtPvt8QNRAgM5KlJw/scores',
    {
      method: 'POST',
      body: JSON.stringify(userScore),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
};

const getAllScores = () => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/r8MdtPvt8QNRAgM5KlJw/scores');

export { createNewScore, getAllScores };
