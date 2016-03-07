export default {
  _request (url, options) {
    return new Promise((resolve, reject) => {
      return window.fetch(url, options).then(
        (response) => {
          if (!response.ok) {
            return response.json().then((json) => reject(errorMessage(json)))
          }

          return response.json().then(
            (json) => {
              return resolve(json)
            }
          )
        }
      ).catch(() => {
        console.info('catch', arguments)
      })
    })
  },
  get (url) {
    const options = {
      headers: this._headers(),
      method: 'GET',
      mode: 'cors'
    }

    return this._request(rootUrl + url, options)
  },
  post (url, data) {
    const options = {
      headers: this._headers(),
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'cors'
    }

    return this._request(rootUrl + url, options)
  }
}
