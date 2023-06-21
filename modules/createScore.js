const createScore = (arr, container) => {
  arr.forEach((person) => {
    const para = document.createElement('p');
    para.classList.add('scoreBoardItem');
    para.textContent = `${person.name} : ${person.score}`;
    container.appendChild(para);
  });
};

export default createScore;