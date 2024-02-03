const fetching = async (word) => {
  // try {
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const response = await fetch(url);

  if (!response.ok) {
    document.getElementById("data").innerHTML = ` <p class="danger-text">
      Enter Correct Word to search !
  </p> `;

    throw new Error("Error fetching data");
  }

  const data = await response.json();
  const dataBox = document.getElementById("data");

  // Clear previous content
  dataBox.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    // Box content
    let boxes = [];

    for (let m = 0; m < data[i].meanings.length; m++) {
      boxes.push(
        `<h3 class='main-heading'> "${data[i].word}" as a "${data[i].meanings[m].partOfSpeech}"</h3> `
      );

      if (data[i].meanings[m].definitions.length > 0) {
        boxes.push(`<h4>Definition</h4>`);

        for (
          let j = 0;
          j < data[i].meanings[m].definitions.length && j < 5;
          j++
        ) {
          boxes.push(
            `<li class='defination-item'> ${data[i].meanings[m].definitions[j].definition}</li>`
          );
        }
      }

      if (data[i].meanings[m].synonyms.length > 0) {
        boxes.push(` <h4>Synonyms</h4>`);

        for (let k = 0; k < data[i].meanings[m].synonyms.length && k < 5; k++) {
          boxes.push(
            `<li class='synonym-item'>${data[i].meanings[m].synonyms[k]}</li>`
          );
        }
      }

      if (data[i].meanings[m].antonyms.length > 0) {
        boxes.push(` <h4>Antonyms </h4>`);

        for (let k = 0; k < data[i].meanings[m].antonyms.length && k < 5; k++) {
          boxes.push(
            `<li class='ayntonym-list'>${data[i].meanings[m].antonyms[k]}</li>`
          );
        }
      }
      let box = document.createElement("div");
      box.setAttribute("class", "result-box");

      boxes.forEach((boxContent) => {
        box.insertAdjacentHTML("beforeend", boxContent);
      });

      dataBox.appendChild(box);

      boxes = [];
    }

    // Insert each box content at the end of the dataBox
  }
  // } catch (error) {
  //       const dataBox = document.getElementById('data');
  //       dataBox.innerHTML = `<p class='result-box' >Error is your Input...${error}</p>`;
  // }
};

// Attach an event listener to the search button
document.getElementById("search").addEventListener("click", (event) => {
  event.preventDefault();

  let value = document.getElementById("input").value;

  if (value == "") {
    document.getElementById("data").innerHTML = ` <p class="default-text">
        Search Something on the Dictionary
    </p> `;
  } else {
    fetching(value);
  }
});
