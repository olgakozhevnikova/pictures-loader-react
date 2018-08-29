const url = 'https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA';

export const get = () =>
  fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.data.images))
