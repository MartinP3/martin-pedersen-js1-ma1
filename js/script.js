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
    complain() {
        return "Meow!";
    },
}

console.log(cat.complain());

// Question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3
heading.style.fontSize = "2em";

// Question 4
heading.classList.add("subheading");

// Question 5
const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

// Question 6
resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7
function catNames(list) {

    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}
catNames(cats);

// Question 8  
function createCats(cats) {

    let html = "";

    for (let i = 0; i < cats.length; i++) {

        let catAge = "Age unknown";

        if (cats[i].age) {
            catAge = cats[i].age;
        }

        html += `
        <div><h5> ${cats[i].name} </h5>
        <p> ${cats[i].age} </p></div>`
    }

    return html;
}

const newHTML = createCats(cats);

const catsContainer = document.querySelector(".cat-container");
catsContainer.innerHTML = newHTML;

// I honestly can't figure out how it's ending up as undefined and not "Age unknown"
// I had the same troubles in ma1 lesson 4 but i couldnt quite understand why it was this way