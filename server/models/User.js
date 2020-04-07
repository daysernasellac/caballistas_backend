'use-strict';
class User { 
    constructor({email, password, role}) {
        this.email = email;
        this.password = password;
        this.role = role;
    }
};

User.prototype.save = function() {
    return new Promise((resolve, reject) => {
        resolve(`i'm saving this user ${this.email}`);
    })
}

module.exports = User;
