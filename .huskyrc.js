const tasks = arr => arr.join(' && ')

module.exports = {
  hooks:{
    "commit-msg": "validate-commit-msg",
    "post-commit": tasks([
      'echo generator changelog',
      'npm run changelog'
    ])
  }
}