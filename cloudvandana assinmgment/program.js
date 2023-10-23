//Take a sentence as an input and reverse every word in that sentence.
// a. Example - This is a sunny day > shiT si a ynnus yad.

function reverseWords(sentence) {
    let words = sentence.split(' '); 
    let reversedWords = [];
  
    for (let word of words) {
      let reversedWord = '';
      for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i]; 
      }
      reversedWords.push(reversedWord); 
    }
  
    return reversedWords.join(' '); 
  }
  
  const inputSentence = "This is a sunny day";
  const reversedSentence = reverseWords(inputSentence);
  console.log(reversedSentence); // Output: "sihT si a ynnus yad"




  //Perform sorting of an array in descending order.

  function bubbleSortDescending(arr) {
    const n = arr.length;
    let swapped;
  
    do {
      swapped = false;
  
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] < arr[i + 1]) {
          // Swap arr[i] and arr[i + 1]
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr;
  }
  
  const myArray = [5, 2, 9, 1, 5, 6];
  const sortedArray = bubbleSortDescending(myArray);
  console.log(sortedArray);
  
  
  function bubbleSortDescending(arr) {
    let len = arr.length;
    let swapped;
    
    do {
      swapped = false;
      for (let i = 0; i < len - 1; i++) {
        if (arr[i] < arr[i + 1]) {
          // Swap the elements
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    
    return arr;
  }
  
  // Example usage:
  const unsortedArray = [3, 1, 7, 4, 2, 5, 6];
  const sortedArray = bubbleSortDescending(unsortedArray);
  console.log(sortedArray); // Outputs: [7, 6, 5, 4, 3, 2, 1]