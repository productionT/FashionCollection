const goods = [
  "img1.png",
  "img2.jpg",
  "img3.png",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.png",
  "img8.png",
  "img9.jpg",
];

for (let i = 0; i < goods.length; i++) {
  const good = `<img
                src="img/${goods[i]}"
                alt="商品画像"
                class="c_lookBook__photo"
              />`;
  const book = document.querySelector(".c_lookBook__goods");
  book.insertAdjacentHTML("beforeend", good);
}

const focusImage = document.querySelector(".c_lookBook__focus img");

const thumbImages = document.querySelectorAll(".c_lookBook__photo");

const fuwa = {
  opacity: [0, 1],
};

thumbImages.forEach((thumbImage) => {
  thumbImage.addEventListener("mouseover", (event) => {
    focusImage.src = event.target.src;
    focusImage.animate(fuwa, 500);
  });
});
