export function urlApiByLetter(letter){    return `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`}export function urlApiByName(name){    return `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`}export function urlApiByCategory(category){    return `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`}