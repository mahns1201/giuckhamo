// fetch
const url = `${process.env.REACT_APP_SERVER_URL}/admin`;
const options = { method: 'POST' };

export const login = (body) => {
  console.log(`body: ${JSON.stringify(body)}`);
  return new Promise((resolve, reject) => {
    fetch(`${url}/login`, { ...options, body: JSON.stringify(body) })
      .then(async (response) => {
        resolve(await response.json());
      })
      .catch((error) => console.log(error));
  });
};
