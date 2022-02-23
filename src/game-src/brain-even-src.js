/* eslint-disable linebreak-style */

const brainEven = () => {
  const question = Math.floor(Math.random() * 100);
  if (question % 2 === 0) {
    return [question, 'yes'];
  }
  return [question, 'no'];
};

export default brainEven;
