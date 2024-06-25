const imagesArr = [];

for (let i = 1; i <= 30; i++) {
  const imageName = `gallery${i}.jpg`;
  imagesArr.push({
    src: `./assets/images/gallery/${imageName}`,
    original: `./assets/images/gallery/${imageName}`,
    width: 300,
    height: 200,
  });
}

export const images = imagesArr;
