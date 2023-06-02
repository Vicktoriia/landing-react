const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const folderPath = path.join(__dirname, '..', 'img', 'portfolio');

async function resizeImage(filePath, width, height, outputPath) {
  await sharp(filePath).resize(width, height).toFile(outputPath);
}

async function getFileInfo(filePath) {
  const filename = path.basename(filePath, path.extname(filePath));
  const title = filename;
  const largeImage = `/img/portfolio/${filename}.jpg`;

  const smallImageFilename = `${filename}_xs`;
  const smallImagePath = path.join(folderPath, `${smallImageFilename}.jpg`);
  const smallImage = `/img/portfolio/${smallImageFilename}.jpg`;

  if (!fs.existsSync(smallImagePath)) {
    await resizeImage(filePath, 300, 500, smallImagePath); // Измените размеры на нужные вам
  }

  return {
    title,
    largeImage,
    smallImage,
    price: '', // Добавление пустого значения для price
  };
}

async function processFolder(folderPath) {
  const fileInfos = [];
  const files = fs.readdirSync(folderPath);

  for (const filename of files) {
    const filePath = path.join(folderPath, filename);
    if (fs.statSync(filePath).isFile()) {
      const fileInfo = await getFileInfo(filePath);
      fileInfos.push(fileInfo);
    }
  }

  return fileInfos;
}

processFolder(folderPath)
  .then(files => {
    const jsonContent = JSON.stringify(files, null, 4);
    const jsonFilePath = path.join(
      __dirname,
      '..',
      '..',
      'src',
      'data',
      'images.json'
    );
    fs.writeFileSync(jsonFilePath, jsonContent);
    console.log('Файл JSON успешно создан.');
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });
