const imageContainer = document.querySelector("#gif-container");

const fetchAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  document.querySelector(".title").innerHTML = `Advice #${data.slip.id}`;
  document.querySelector(".text").innerHTML = `"${data.slip.advice}"`;
  console.log("FetchAdvice worked");
};

fetchAdvice();

const fetchGif = () => {
  fetch("https://g.tenor.com/v1/search?q=excited&key=LIVDSRZULELA&limit=8")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let image = data.results[Math.floor(Math.random() * 8)].media[0].gif.url;
      imageContainer.setAttribute("src", image);
      console.log("FetchGifs worked");
      return;
    });
  // document.querySelector(".title").innerHTML = `Gif #${data.slip.id}`;
  // document.querySelector(".text").innerHTML = `"${data.slip.gif}"`;
};

fetchGif();
myBtn.addEventListener("click", () => {
  fetchGif();
  fetchAdvice();
});
