class Skill {
    constructor(skillName, level) {
        this.skillName = skillName;
        this.level = level;
    }

    getSkillInfo() {
        return `${this.skillName} skill level is ${this.level}.`;
    }
}

module.exports = Skill;