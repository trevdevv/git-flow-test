module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: { 
    "subject-case": [0, "always", "sentence-case"],
    "header-case": [0, "always",
    "lower-case"],
    "scope-case": [0, "always",
    "lower-case"],
    "type-enum": [0, "always",
    ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert']],
  }
};