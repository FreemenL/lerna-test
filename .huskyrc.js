const tasks = arr => arr.join(' && ')
module.exports = {
  'hooks': {
    'pre-commit': tasks([
      'echo will commit',
      'echo will commit2'
    ])
  }
}