const Pet =require('../virtual-pet') ;

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });    
  });

  describe('constructor', () => {
      
    it('has a initial age of 0', () => {
      const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });
  });

  describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });
  });
  it("increment the hunger by 5", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });

  it("decrease fitness by 3", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });

  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");
    pet.age = 30;
    expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");
  });

  describe('walk', () => {
    it('increases fitness by 4', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 4;
      pet.walk();
  
      expect(pet.fitness).toEqual(8);
    });
  });
  describe('walk', () => {
    
      it('increases fitness by to a maximum of 10', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 8;
      pet.walk();
  
      expect(pet.fitness).toEqual(10);
    });
    it("throws an error if the pet is not alive", () => {
      const pet = new Pet("Fido");
      pet.age = 30;
      expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
    });
    
  })
  describe("feed", () => {
    it("decreases hunger level by 3", () => {
      const pet = new Pet("fido");
      pet.hunger = 0;
      pet.feed();
      expect(pet.hunger).toEqual(0);
    });
    it("decreases hunger level by 3", () => {
      const pet = new Pet("fido");
      pet.hunger = 7;
      pet.feed();
      expect(pet.hunger).toEqual(4);
    });
  
    it("decreases hunger level by 3", () => {
      const pet = new Pet("fido");
      pet.hunger = 2;
      pet.feed();
      expect(pet.hunger).toEqual(0);
    });
  
    it("throws an error if the pet is not alive", () => {
      const pet = new Pet("Fido");
      pet.age = 30;
      expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
    });
  });
  
    
  

  describe ('checkUp', () => {
    it("should check if pet is hungry or fit", () => {
      const pet = new Pet("fido");
      pet.fitness = 2;
      pet.hunger = 4;
      pet.checkup();
      expect(pet.checkup()).toEqual("I need a walk");
    });
  
    it("should check if pet is hungry or fit", () => {
      const pet = new Pet("fido");
      pet.fitness = 1;
      pet.hunger = 7;
      pet.checkup();
      expect(pet.checkup()).toEqual("I am hungry AND I need a walk");
    });
    it("should check if pet is hungry or fit", () => {
      const pet = new Pet("fido");
      pet.fitness = 7;
      pet.hunger = 2;
      pet.checkup();
      expect(pet.checkup()).toEqual("I feel great!");
    });
  
    it("throws an error if the pet is not alive", () => {
      const pet = new Pet("Fido");
      pet.age = 30;
      expect(() => pet.checkup()).toThrow("Your pet is no longer alive :(");
    });
  });











 