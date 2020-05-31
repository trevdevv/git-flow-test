module.exports = {
  rules: { 
    "subject-case": [0, "never", "sentence-case"],
    "header-case": [0, "always",
    "lower-case"],
    "scope-case": [0, "always",
    "lower-case"],
    "type-enum": [0, "never",
    ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert']],
    "type-empty": [0, "always"],
    "subject-empty": [0, "always"],
    "scope-empty": [0, "never"],
    "subject-full-stop": [0, "never",
    "."],
    "header-full-stop": [0, "never", "."],
    "body-leading-blank": [0, "never"]
  }
};