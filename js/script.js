const cats = [
  {
    name: "Blob",
    age: 10
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21
  }
];


// Question 1

const cat = {
  complain: () => {
    console.log('Meow');
  }
}

// Question 2

const heading = document.querySelector('h3')
heading.innerHTML = 'Updated heading';

// Question 3

heading.style.fontSize = '2em';

// question 4

heading.classList.add('subheading');

// question 5

const paragraphs = document.querySelectorAll('p');
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = 'red';
}

// Question 6

/* Comment */
/* The wording of this question did not make it clear to me if i should have a yellow background on the div or the
* p element. So i made a solution for both scenarios.
* It was later confirmed in the Discord Forum it was the .results div who should have the yellow bg.
* I have left my solution for adding a p element with a yellow bg stay, but commented out.
*  */

/* // Set background on DIV to yellow, and put a new P element in it.*/
const resultsContainer = document.querySelector('.results');
resultsContainer.style.backgroundColor = 'yellow';
resultsContainer.innerHTML = '<p>New paragraph</p>';

/* --- */

/* // Create a P element with yellow background and the provided text, and append it in the DOM where specified.
const newParagraph = document.createElement('p');
newParagraph.style.backgroundColor = 'yellow';
newParagraph.innerHTML = 'New paragraph';
resultsContainer.appendChild(newParagraph);
*/

// Question 7

const listNames = (list) => {
  let i = 0;
  for(i; i < list.length; i++) {
    console.log(list[i].name);
  }
}
listNames(cats);

// Question 8

const createCats = (cats) => {
  let catsList = "";
  const checkAgeExist = (ageVal) => {
    if(ageVal === undefined) {
      return 'Age Unknown';
    }
    return ageVal;
  }
  for(let i = 0; i < cats.length; i++) {
    catsList += `<div><h5>${cats[i].name}</h5><p>${checkAgeExist(cats[i].age)}</p></div>`;
  }
  return catsList;
}
document.querySelector('.cat-container').innerHTML = createCats(cats);
