// fetch
const url = `${process.env.REACT_APP_SERVER_URL}/marker`;
const options = { method: 'GET' };

export const getMarkers = () => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(async (response) => {
        resolve(await response.json());
      })
      .catch((error) => console.log(error));
  });
};
