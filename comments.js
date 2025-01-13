// Create web server
// Create a module that exports a function that takes a member, a skill, and a comment and returns a string that combines all three in a sentence.

const Member = require('./member');
const Skill = require('./skill');

// Function to create a comment about a member's skill
function commentOnSkill(member, skill, comment) {
    return `${member.getInfo()} has a skill: ${skill.getSkillInfo()}. Comment: ${comment}`;
}

// Example Usage
const john = new Member('John Doe', 30);
const coding = new Skill('Coding', 'Expert');
console.log(commentOnSkill(john, coding, 'John is great at coding with Copilot!'));
console.log(commentOnSkill(john, coding, 'John is a coding genius!'));
module.exports = commentOnSkill;