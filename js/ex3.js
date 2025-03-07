//Declare studentList Array
const studentList = [
  {
  firstName: "Allan",
  lastName: "Able",
  scores: [95, 85, 92, 98]
  },
  {
  firstName: "Amy",
  lastName: "Alexander",
  scores: [80, 88, 100]
  },
  {
  firstName: "Betty",
  lastName: "Barns",
  scores: [70, 80, 90, 100]
  },
  {
  firstName: "Bob",
  lastName: "Bones",
  scores: [75, 85, 95, 85]
  },
  {
  firstName: "Cindy",
  lastName: "Chase",
  scores: [95, 90, 92, 98]
  },
  {
  firstName: "Charles",
  lastName: "Chips",
  scores: [88, 99, 90]
  },
  ];
  // TO DO - Write higher order functions / There are many solutions
  const studentLastC = studentList.filter(student => student.lastName.startsWith('C'));
  const cLastNameResults = studentLastC.map(student => {
    const minScore = student.scores.reduce((curr, min) => (curr < min ? curr : min), student.scores[0]);
    const maxScore = student.scores.reduce((curr, max) => (curr > max ? curr : max), student.scores[0]);
    const average = student.scores.reduce((acc, val) => acc + val, 0) / student.scores.length;
    return {...student, minScore, maxScore, average}
  })
  
  console.log(cLastNameResults);
  
  
  