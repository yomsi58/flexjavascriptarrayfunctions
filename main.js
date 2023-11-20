//==================Exercise #1 ==========//
//Given an array of integers.
//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
//If the input array is empty or null, return an empty array
function countPositivesSumNegatives(input) {
    let positiveNums = 0;
    let negativeNums = 0;
    if (input === null || input.length === 0) {
      return [];
    } else {
      input.forEach((num) => num > 0 ? positiveNums++ : negativeNums += num);
    }
    return [positiveNums , negativeNums];
}
//Call method here with parameters
let inputValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
console.log(countPositivesSumNegatives(inputValues));

//==================Exercise #2 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Bob, my name is dog, and I have red eyes!"
let dog_names = ["Bob","HAS","rEd","dog"]

function findWords() {
    for(let i = 0; i < dog_names.length ; i++)
        if (dog_string.search(dog_names[i]) != -1) {
            console.log(`Matched ${dog_names[i]}`);
        } else {
            console.log(`No Matches`);
        }    
}
//Call method here with parameters
console.log(findWords())


//==================Exercise #3 ==========//
//Merge two sorted arrays into one

let a = [1,2,3,5,9];
let b = [4,6,7,8];

function mergeSortedArray(a,b){
	for(var i=0;i<b.length;i++){
		a.push(b[i]);
	}
	
for(i=0;i<a.length;i++)
    {
        for(j=i+1;j<a.length;j++)
        {
            if(a[i]>a[j])
            {
                temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
    }
    return a;
}
//Call method here with parameters
console.log(mergeSortedArray(a,b));

//==================Exercise #4 ==========//
//Invert values

function invert(array) {
    for(let i = 0 ; i < array.length; i++){
      array[i] = array[i] * (-1) 
    }
    return array
  }
  //Call method here with parameters
  console.log(invert([1, -2, 3]))

