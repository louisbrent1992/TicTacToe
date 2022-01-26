/* eslint-disable no-unused-expressions */
/* eslint-disable jest/valid-expect */
/* Top 4 most common "expect()" methods */
/*
  1. to.be.empty
  2. to.include()
  3. to.have.lengthOf()
  4. to.be.true
*/

const expect = require("chai").expect;
const {
  averageScore,
  medianScore,
  topScoringStudent,
} = require("../src/Utils/functions");

describe("averageScore", () => {
  it("should return the average score among all students", () => {
    const input = [
      { name: "Shane Carey", score: 9.5 },
      { name: "Rebecca Mills", score: 8.7 },
      { name: "Catarina Lima", score: 9.7 },
    ];
    const expected = 9.3;
    const actual = averageScore(input);
    expect(actual).to.equal(expected);
  });

  it("should return null if input student array is empty", () => {
    const input = [];
    const actual = averageScore(input)
    expect(actual).to.be.null;
  });
});

describe("medianScore", () => {
  it("should return the student with the median score for a list of students", () => {
    const students = [
      { name: "Luana Barbosa", score: 9.2 },
      { name: "Evan Webb", score: 8.4 },
      { name: "Riley Morgan", score: 9.8 },
      { name: "Caleb Tyler", score: 6.9 },
      { name: "Val Avila", score: 7.4 },
    ];
    const actual = medianScore(students);
    const expected = 8.4;
    expect(actual).to.be.a("number");
    expect(actual).to.equal(expected);
  });

  it("should return null if input student array is empty", () => {
    const input = [];
    const actual = medianScore(input)
    expect(actual).to.be.null;
  });
});

describe("topScoringStudent", () => {
  it("should return the student with the highest score for a list of students", () => {
    const students = [
      { name: "Luana Barbosa", score: 9.2 },
      { name: "Evan Webb", score: 8.4 },
      { name: "Riley Morgan", score: 9.8 },
      { name: "Caleb Tyler", score: 6.9 },
      { name: "Val Avila", score: 7.4 },
    ];
    const actual = topScoringStudent(students);
    const expected = { name: "Riley Morgan", score: 9.8 };
    expect(actual).to.be.an("object");
    expect(actual).to.eql(expected);
  });

  it("should return null if input student array is empty", () => {
    const input = [];
    const actual = topScoringStudent(input)
    expect(actual).to.be.null;
  });
});
