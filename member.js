class Member {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        return `${this.name} is ${this.age} years old.`;
    }
}

module.exports = Member;