module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: { 
    "subject-case": [0, "never", "sentence-case"],
    "header-case": [0, "always",
    "lower-case"],
    "scope-case": [0, "always",
    "lower-case"],
    "type-enum": [0, "never",
    ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert']],
    "type-empty": [0, "never"],
    "subject-empty": [0, "never"],
    "scope-empty": [0, "never"],
    "subject-full-stop": [0, "never",
    "."],
    "header-full-stop": [0, "never", "."]
  }
};