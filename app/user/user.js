let phrases = require('./ua');

function User(name) {
    this.name = name;
}

User.prototype.hello = function(who) {
    console.log(phrases.Hello +", " + who.name)
};

module.exports.User = User;