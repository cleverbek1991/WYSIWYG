var people = [{
  title: "16th President of the USA",
  name: "Abraham Lincoln",
  bio: "Lincoln led the United States through its Civil War its bloodiest war and perhaps its greatest moral, constitutional, and political crisis.",
  image: "lincoln.jpg",
  lifespan: {
    birth: 1809,
    death: 1865
  }
},

{
  title: "Brazilian Retired Soccer Player",
  name: "Edson Arantes do Nascimento",
  bio: "Pele is the most successful league goal-scorer in the world, scoring 1281 goals in 1363 games, which included unofficial friendlies and tour games.",
  image: "pele.png",
  lifespan: {
    birth: 1940,
    death: 'present'
  }
},

{
  title: "English Mathematician, Astronomer, and Physicist",
  name: "Sir Isaac Newton",
  bio: "He is widely recognised as one of the most influential scientists of all time and a key figure in the scientific revolution.",
  image: "isaac.jpg",
  lifespan: {
    birth: 1642,
    death: 1726
  }
}]

var container = document.querySelector('#container');
const outputResult = () => {
	for (var i = 0; i < people.length; i += 1) {
	container.innerHTML += `<article class="person${i}"><div class="person">
								<header><h2>${people[i].title}</h2> <p>${people[i].name}</p></Header>
								<section id="section"><p class="bio${i}">${people[i].bio}</p><span class="output"></span></div><img class="img${i}" src="${people[i].image}"></section>
								<footer><p class="lifespan">Lifespan: ${people[i].lifespan.birth} - ${people[i].lifespan.death}</p></footer>
							</div></article>`;
	};
}
outputResult(people);
let target;
container.addEventListener('click', (event) => {
	target = event.target
	target.closest('article').classList.toggle('border');
	let input = document.querySelector('.input');
	input.focus();
	input.addEventListener('keyup', (e) => {
		if (e.keyCode == 13) {
			input.value = '';
		} else {
			let evl = target.closest('article').getElementsByClassName('output')[0];
			evl.innerHTML = e.target.value;
		}
	})
})