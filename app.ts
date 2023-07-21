// define the list of products from which the client chooses and the word client searched for
const products: string[] = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord: string = 'mouse';

function SearchSuggestion(products: string[], searchWord: string) : string[][]{
    let resultProducts: string[];  // a temporary version of products to hold the user's search results
    let searchByLetters: string;  // temporary string to save the search word as it would appear in each stage of the user's typing
    let finalResult: string[][] = [];  // will hold each of the search result arrays for every letter typed

    // sort products lexicographically
    products.sort();
    
    // go over the length of searchWord
    for (let i = 1; i <= searchWord.length; i++) {
        searchByLetters = searchWord.slice(0, i);  // slice the search word to get searchByLetters (see definition)
        resultProducts = products.filter(product => product.includes(searchByLetters));  // filter search results (only those that include searchByLetters)
        resultProducts = resultProducts.slice(0, 3);  //  leave only first 3 elements

        finalResult.push(resultProducts);  // add search results to finalResult
    }

    return finalResult;
}

console.log(SearchSuggestion(products, searchWord));
