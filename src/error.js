const errors = {
  wrongJDK: function() {
    throw new Error('you are using the wrong JDK');
  }
};

module.exports = errors;