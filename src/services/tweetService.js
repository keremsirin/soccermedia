import axios from 'axios'
import getBaseUrl from 'get-base-url'

const url = getBaseUrl() + 'api/tweets/'

class tweetService {
  static getTweets() {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export default tweetService
