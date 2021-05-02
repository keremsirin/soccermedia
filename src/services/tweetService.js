import axios from 'axios'

const url = 'http://localhost:8081/api/tweets'

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
