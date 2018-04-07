const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

/*----------------------- forEach -------------------------*/
// companies.forEach((company, index, companies) => console.log(index + ' = ' + company.name))

/*----------------------- filter --------------------------*/
// let canDrink = []
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

// const canDrink = ages.filter((age) => age >= 21)

// Filter retail companies
// const retailCompanies = companies.filter(company => company.category === 'Retail')

// Get 80s companies
// const eightiesCompanies = companies.filter(company => (company.start >= '1980' && company.end < 1990))

// Get companies that lasted 10 years or more
// const lastedTenYears = companies.filter(company => (company.end - company.start) >= 10)

/*---------------------- map ---------------------------*/

// Create array of company names
// const companyName = companies.map( company => `${company.name} [${company.start} - ${company.end}]` )

// Square root of ages
// const ageMap = ages
//     .map( age => Math.sqrt(age) )
//     .map( age => age * 2 )

/*---------------------- sort -----------------------------*/

// sorting companies by start year
// const sortCompanies = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1))

// Sorting ages
// const sortAges = ages.sort((a, b) => b - a)

/*----------------------- reduce -----------------------------*/

// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }

// const ageSum = ages.reduce((sum, age) => {
//     return sum + age;
// }, 0);

// const ageSum = ages.reduce((sum, age) => sum + age, 0);

// Get total years of all companies
// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

// Combine Methods
const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((sum, age) => sum + age, 0)

console.log(combined);