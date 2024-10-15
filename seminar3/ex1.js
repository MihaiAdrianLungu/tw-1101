const birthYears = [1990, 2000, 1985, 1995, 2005, 2010];

const currentYear = new Date().getFullYear();

const mappedYears = birthYears.map(year => currentYear - year).filter(age => age >= 18)

console.log(mappedYears);