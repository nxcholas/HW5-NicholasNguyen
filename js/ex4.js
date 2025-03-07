const studentList = [
  {
    firstName: "Allan",
    lastName: "Able",
    scores: [95, 85, 92, 98],
  },
  {
    firstName: "Amy",
    lastName: "Alexander",
    scores: [80, 88, 100],
  },
  {
    firstName: "Betty",
    lastName: "Barns",
    scores: [70, 80, 90, 100],
  },
  {
    firstName: "Bob",
    lastName: "Bones",
    scores: [75, 85, 95, 85],
  },
  {
    firstName: "Cindy",
    lastName: "Chase",
    scores: [95, 90, 92, 98],
  },
  {
    firstName: "Charles",
    lastName: "Chips",
    scores: [88, 99, 90],
  },
];

// a
studentList.forEach((student) => {
  // add 5 to all scores
  student.scores = student.scores.map((score) => (score += 5));

  // calculate average and add to scores
  const average =
    student.scores.reduce((acc, val) => acc + val, 0) / student.scores.length;
  student.scores.push(average);

  // display results
  console.log(
    `Full name (last, first): ${student.lastName}, ${student.firstName}`
  );
  console.log(`Updated Scores are: ${student.scores}`);
});
