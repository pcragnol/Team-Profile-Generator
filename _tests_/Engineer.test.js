const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Peter', 1, 'pcragnol@gmail.com', 'pcragnol');
const { name, id, email, github} = engineer;

describe('Engineer', () => {
  it('should have name, id, email, and github properties', () => {
    expect(name).toBe('Peter');
    expect(id).toBe(1);
    expect(email).toBe('pcragnol@gmail.com');
    expect(github).toBe('pcragnol');
  });

  describe('getName', () => {
    it("should return the Engineer's name", () => {
      expect(engineer.getName()).toBe('Peter');
    });
  });

  describe('getId', () => {
    it("should return the Engineer's id", () => {
      expect(engineer.getId()).toBe(1);
    });
  });

  describe('getEmail', () => {
    it("should return the Engineer's email", () => {
      expect(engineer.getEmail()).toBe('pcragnol@gmail.com');
    });
  });

  describe('getGithub', () => {
    it("should return the Engineer's GitHub username", () => {
      expect(engineer.getGithub()).toBe('pcragnol');
    });
  });

  describe('getRole', () => {
    it('should return "Engineer"', () => {
      expect(engineer.getRole()).toBe('Engineer');
    });
  });
});
