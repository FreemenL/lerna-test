const tasks = arr => arr.join(' && ')

module.exports = {
  hooks:{
    "commit-msg": "validate-commit-msg",
    "post-commit": tasks([
      'echo commit success',
      'echo test post-commit'
    ])
  }
}