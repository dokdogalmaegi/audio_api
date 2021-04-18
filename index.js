const express = require('express');
const app = express();
const axios = require('axios');
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  const test = await axios.get('https://www.music-flo.com/api/meta/v1/track/KPOP/new?page=1&size=100');

  console.log(test.data.data.list[0].artistList);

  let { list } = test.data.data;

  for (let item of list) {
    let artist = '';
    for (let i = 0; i < item.artistList.length; i++) {
      if(item.artistList.length > 1) {
        artist += `${item.artistList[i].name} `;
      } else {
        artist += `${item.artistList[i].name} `;
      }
    }
    console.log(`name : ${item.name}\nartist : ${artist}`);
  }
  res.json(test.data.data.list);
})

app.listen(port, () => {
  console.log(`Node Server On! port : ${port}`);
})