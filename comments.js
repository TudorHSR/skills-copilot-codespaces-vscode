const Member = require('./member');
const Skill = require('./skill');

// Function to create a comment about a member's skill
function commentOnSkill(member, skill, comment) {
    return `${member.getInfo()} has a skill: ${skill.getSkillInfo()}. Comment: ${comment}`;
}

// Example Usage
const john = new Member('John Doe', 30);
const coding = new Skill('Coding', 'Expert');
console.log(commentOnSkill(john, coding, 'John is great at coding!'));

module.exports = commentOnSkill;