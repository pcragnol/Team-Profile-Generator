const Intern = require('../lib/Intern');
const intern = new Intern('Peter', 1, 'pcragnol@gmail.com', 'University of New Hampshire');
const { name, id, email, school} = intern;

describe('Intern', () => {
  it('should have name, id, email, and school properties', () => {
    expect(name).toBe('Peter');
    expect(id).toBe(1);
    expect(email).toBe('pcragnol@gmail.com');
    expect(school).toBe('University of New Hampshire');
  });

  describe('getName', () => {
    it("should return the Intern's name", () => {
      expect(intern.getName()).toBe('Peter');
    });
  });

  describe('getId', () => {
    it("should return the Intern's id", () => {
      expect(intern.getId()).toBe(1);
    });
  });

  describe('getEmail', () => {
    it("should return the Intern's email", () => {
      expect(intern.getEmail()).toBe('pcragnol@gmail.com');
    });
  });

  describe('getSchool', () => {
    it("should return the Intern's school", () => {
      expect(intern.getSchool()).toBe('University of New Hampshire');
    });
  });

  describe('getRole', () => {
    it('should return "Intern"', () => {
      expect(intern.getRole()).toBe('Intern');
    });
  });
});
