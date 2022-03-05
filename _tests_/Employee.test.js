const Employee = require('../lib/Employee');
const employee = new Employee('Peter', 1, 'pcragnol@gmail.com');
const { name, id, email} = employee;

describe('Employee', () => {
  it('should have name, id, and email properties', () => {
    expect(name).toBe('Peter');
    expect(id).toBe(1);
    expect(email).toBe('pcragnol@gmail.com');
  });

  describe('getName', () => {
    it("should return the Employee's name", () => {
      expect(employee.getName()).toBe('Peter');
    });
  });

  describe('getId', () => {
    it("should return the Employee's id", () => {
      expect(employee.getId()).toBe(1);
    });
  });

  describe('getEmail', () => {
    it("should return the Employee's email", () => {
      expect(employee.getEmail()).toBe('pcragnol@gmail.com');
    });
  });

  describe('getRole', () => {
    it('should return "Employee"', () => {
      expect(employee.getRole()).toBe('Employee');
    });
  });
});
