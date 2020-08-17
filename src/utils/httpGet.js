const httpGet = (url) => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = function () {
    // eslint-disable-next-line eqeqeq
    if (this.status == 200) {
      resolve(this.response);
    } else {
      const error = new Error(this.statusText);
      error.code = this.status;
      reject(error);
    }
  };
  xhr.onerror = function () {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject({ error: 'Network Error' });
  };
  xhr.send();
});

export default httpGet;
