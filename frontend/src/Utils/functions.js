// Finds the average score for an array of student scores
function averageScore(students) {
  if (!students.length) return null;
  let totalScore = 0;
  for (let i = 0; i < students.length; i++) {
    totalScore += students[i].score;
  }
  return Number((totalScore / students.length).toFixed(1));
}

// Finds the median score for an array of student scores
function medianScore(students) {
  if (!students.length) return null;
  const sortedList = students.sort((a, b) => a.score - b.score);
  const midpoint = Math.floor(sortedList.length / 2);

  return sortedList[midpoint].score;
}

// Finds the top scoring student for an array of student scores
function topScoringStudent(students) {
  if (!students.length) return null;
  const sortedList = students.sort((a, b) => b.score - a.score);
  return sortedList[0];
}

module.exports = { averageScore, topScoringStudent, medianScore };
