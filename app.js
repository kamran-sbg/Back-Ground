let urlh = "https://api.unsplash.com/photos/random?count=1";
const accessKey = "PclLFT0r583QS9jbwz2c-qZxufKHEFJ---cG3kRY0g0";
let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let body = document.querySelector("body");
let bodyf = document.querySelector("*");

async function getsFacts() {
  try {
    let config = {
      headers: { Authorization: `Client-ID ${accessKey}` },
    };
    let res = await fetch(urlh, config);
    let fil = await res.json();

    let data1 = fil[0].urls.full;

    let bg = (body.style.backgroundImage = `url(${data1})`);
    console.log(bg);
  } catch (err) {
    console.log(err);
  }
}

// body.addEventListener("click", () => {
//   getsFacts();
// });

// body.addEventListener("touchstart", getsFacts);
// btn.addEventListener("click", getsFacts);

bodyf.addEventListener("click", getsFacts);
