class Course {
  title;
  duration;
  fee;
  description;

  constructor(t, d, f, de) {
    this.title = t;
    this.duration = d;
    this.fee = f;
    this.description = de;
  }

  printDetails() {
    console.log(`******* Course Details ********`);
    console.log(`Title - ${this.title}`);
    console.log(`Duration - ${this.duration}`);
    console.log(`Fee - ${this.fee}`);
    console.log(`Description - ${this.description}`);
    console.log(`*******************************`);
  }
}

let course = new Course(
  "MERN Stack",
  "120 Days",
  18000,
  "Mongo DB, Express JS, React JS, Node JS"
);

course.printDetails();
