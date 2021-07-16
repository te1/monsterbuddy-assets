const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function getFileNames(directory) {
  let result = [];

  let filePath, stat;

  fs.readdirSync(directory).forEach((fileName) => {
    filePath = path.join(directory, fileName);
    stat = fs.statSync(filePath);

    if (stat.isFile()) {
      result.push(fileName);
    }
  });

  return result;
}

(async () => {
  const raw = './monster/raw/';
  const cropped = './monster/cropped/';

  for (const fileName of getFileNames(raw)) {
    await sharp(raw + fileName)
      .png()
      .extract({
        left: 25,
        top: 130,
        width: 525,
        height: 465,
      })
      .toFile(cropped + fileName.replace(/\.jpg$/, '.png'));
  }
})();
