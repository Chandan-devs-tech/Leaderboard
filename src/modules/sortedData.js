const sortedArr = (data) => {
  const updatedArr = [...data];
  return updatedArr.sort((a, b) => b.score - a.score);
};
export default sortedArr;