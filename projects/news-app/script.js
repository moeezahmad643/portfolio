// .......................................................................................................................
function showArticles(result) {
	console.log(result)

	let URL = `https://gnews.io/api/v4/search?q=${result}&apikey=d9eb82fadaba2611cdafdf95e13cf87e&lang=en&country=pk`

	fetch(URL)
		.then((res) => res.json())
		.then((data) => {

			document.getElementById('card-box').innerHTML=''

			console.log(data.articles);

			data.articles.map((cardData) => {

				let card = document.createElement('div')
				card.innerHTML = `
			<div class="col-sm mx-4 my-4 card px-0" style="min-width: 10rem; max-width: 15rem;">

				<img src="${cardData.image}" class="card-img-top" style='height:150px' alt="${cardData.title}">
			
				<div class="card-body">
			        <h6 class="card-title">${cutTitle(cardData.title)}</h6>

			        <small class="card-text">${cutDescription(cardData.description)}</small>
			        <a href="${cardData.url}" class="btn btn-primary">Visit</a>
			    </div>   
			</div>   `

				document.getElementById('card-box').appendChild(card)

			})
		})
}


document.getElementById("searchButton").addEventListener("click", function (event) {
	event.preventDefault()
	let search = document.getElementById('search').value
	showArticles(search)

})

document.getElementById("search").addEventListener("keypress", function (event) {
	// If the user presses the "Enter" key on the keyboard
	if (event.key === "Enter") {
		event.preventDefault();
		let search = document.getElementById('search').value
		showArticles(search)
	}
})



let newstopics = ["communications", 'Space', 'natures', 'sciences', 'matches', 'computes', 'social media', 'war', 'dollar', 'revoluton']
let n = Math.floor(Math.random() * 9);

let newstopic = newstopics[n];
// let URL = `https://gnews.io/api/v4/search?q=${newstopic}&apikey=FAKE&lang=en&country=pk&max=20`
let URL = `https://gnews.io/api/v4/search?q=${newstopic}&apikey=29ccb9ae3d4eec537c1983a9a75c533d&lang=en&country=pk`
let data;
fetch(URL)
	.then((res2) => res2.json())
	.then((data2) => {

		console.log(data2.articles);


		data2.articles.map((cardData) => {

			let card = document.createElement('div')
			card.innerHTML = `
			<div class="col-sm mx-4 my-4 card px-0" style="min-width: 10rem; max-width: 15rem;">

				<img src="${cardData.image}" class="card-img-top" style='height:150px' alt="${cardData.title}">
			
				<div class="card-body">
			        <h6 class="card-title">${cutTitle(cardData.title)}</h6>

			        <small class="card-text">${cutDescription(cardData.description)}</small>
			        <a href="${cardData.url}" class="btn btn-primary">Visit</a>
			    </div>   
			</div>   `

			document.getElementById('card-box').appendChild(card)

		})

	})

function cutTitle(text) {
	let string = text[0] + text[1] + text[2] + text[3] + text[4] + text[5] + text[6] + text[7] + text[8] + text[9] + text[10] + text[11] + text[12] + text[13] + text[14]
		+ text[15] + text[16] + text[17] + text[18] + text[19] + text[20] + text[21]
		+ text[22] + text[23] + text[24] + text[25] + text[26] + text[27] + text[28] + text[29] + '...'
	// console.log(string);
	return string
}

function cutDescription(text) {
	let string = text[0]

	for (let i = 1; i <= 100; i++) {
		if (text[i] != undefined){
			string += text[i]
		} else{
			continue;
		}
	}

	console.log(string);
	return string
}
