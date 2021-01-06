export const getHeightAndWidthFromDataUrl = dataURL => new Promise(resolve => {
  const img = new Image()
  img.onload = () => {
    resolve({
      height: img.height,
      width: img.width
    })
  }
  img.src = dataURL
})

// This is a partial implementation from this Stack Overflow response: https://stackoverflow.com/questions/7460272/getting-image-dimensions-using-javascript-file-api