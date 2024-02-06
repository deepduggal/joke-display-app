
async function fetchJoke() {
  const response = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,explicit&type=single');
  const joke = await response.json();
  console.log(joke);
  return joke;
}


function displayJoke() {

}

fetchJoke().then(joke => {
  document.querySelector('.card > .joke').innerHTML = joke.joke;
});
