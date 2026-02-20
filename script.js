class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hello, my name is ${this.name}.`;
  }

  getRole() {
    return "Person";
  }
}

// Student Class (Inheritance)
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I'm studying ${this.major}.`;
  }

  getRole() {
    return "Student";
  }
}

// Teacher Class (Inheritance)
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I teach ${this.subject}.`;
  }

  getRole() {
    return "Teacher";
  }
}

// Polymorphism (Same method, different behavior)
const people = [
  new Person("Alex Johnson", 30),
  new Student("Emma Watson", 20, "Computer Science"),
  new Teacher("Dr. James Wilson", 45, "Mathematics")
];

const container = document.getElementById("personContainer");

people.forEach(person => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h2>${person.name} (${person.getRole()})</h2>
    <p><strong>Age:</strong> ${person.age}</p>
    <p class="italic">${person.introduce()}</p>
    ${
      person instanceof Student
        ? `<p><strong>Major:</strong> ${person.major}</p>`
        : ""
    }
    ${
      person instanceof Teacher
        ? `<p><strong>Teaching:</strong> ${person.subject}</p>`
        : ""
    }
  `;

  container.appendChild(card);
});
