const Manager = require('../lib/Manager');
const manager = new Manager('Peter', 1, 'pcragnol@gmail.com', 1);
const { name, id, email, officeNumber} = manager;

describe('Manager', () => {
  it('should have name, id, email, and officeNumber properties', () => {
    expect(name).toBe('Peter');
    expect(id).toBe(1);
    expect(email).toBe('pcragnol@gmail.com');
    expect(officeNumber).toBe(1);
  });

  describe('getName', () => {
    it("should return the Manager's name", () => {
      expect(manager.getName()).toBe('Peter');
    });
  });

  describe('getId', () => {
    it("should return the Manager's id", () => {
      expect(manager.getId()).toBe(1);
    });
  });

  describe('getEmail', () => {
    it("should return the Manager's email", () => {
      expect(manager.getEmail()).toBe('pcragnol@gmail.com');
    });
  });

  describe('getOfficeNumber', () => {
    it("should return the Manager's office number", () => {
      expect(manager.getOfficeNumber()).toBe(1);
    });
  });

  describe('getRole', () => {
    it('should return "Manager"', () => {
      expect(manager.getRole()).toBe('Manager');
    });
  });
});
