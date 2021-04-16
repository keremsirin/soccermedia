module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-custom-media': {
      importFrom: [
        {
          customMedia: { '--s': '(min-width: 576px)' }
        },
        {
          customMedia: { '--m': '(min-width: 768px)' }
        },
        {
          customMedia: { '--t': '(min-width: 992px)' }
        },
        {
          customMedia: { '--d': '(min-width: 1200px)' }
        }
      ]
    }
  }
}
