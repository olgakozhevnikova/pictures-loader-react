const url = 'https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA';

const headers = {
  'Accept': 'application/json'
}

export const get = () =>
  fetch(url, { headers })
    .then(res => res.json())
    .then(data => data.data.images)
