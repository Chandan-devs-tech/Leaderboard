import url from './gameData.js';

const postScore = async (name, score) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: name,
      score,
    }),
  });
  const data = await response.json();
  return data;
};

export default postScore;