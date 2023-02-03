const students = [
  {
    id: 1,
    name: "Jacen",
    discipline: "Ataru",
    expelled: false,
    backgroundcolor: "#3164F0",
  },
  {
    id: 2,
    name: "Jaina",
    discipline: "Makashi",
    expelled: false,
    backgroundcolor: "#01F00F",
  },
  {
    id: 3,
    name: "Ben",
    discipline: "Sokan",
    expelled: false,
    backgroundcolor: "#EBE403",
  },
  {
    id: 4,
    name: "Anakin",
    discipline: "Vaapad",
    expelled: false,
    backgroundcolor: "#CE09E0",
  },
];

// render to dom utility function
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

// HTML COMPONENT FUNCTIONS //

//----------------
//Default card

const defaultCard = () => {
  const domString = `<div class="card">
     <div class="card-body default-card">
      <h5 class="card-title">Welcome to the Jedi Academy</h5>
      <p class="card-text">Click to continue your enrollment.</p>
      <button class="btn btn-primary" id="start">Hit it!</button>
    </div>
  </div>`;
  renderToDom("#defaultCard", domString);
};

// Initialize button
const start = document.querySelector("start");
document.addEventListener("click", (e) => {
  if (e.target.id.includes("start")) {
    sortForm();
    sortButtons();
    studentCard(students);
    expelledStudents();
    document.getElementById("defaultCard").style.display = "none";
  }
});

//----------------

//Add student form
const sortForm = () => {
  const domString = `<form>
  <div id="textHelp" class="form-text">Enter student name.</div>    
  <div class="form-floating form-control-sm mb-3">
        <input type="text" class="form-control" id="name" aria-describedby="textHelp" required>
        <label for="exampleFormControlInput1" class="form-label">Name</label>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>`;
  renderToDom("#sortForm", domString);

  //Add student function
  const form = document.querySelector("form");
  document.addEventListener("submit", (e) => {
    e.preventDefault();

    const disciplines = ["Ataru", "Makashi", "Sokan", "Vaapad"];
    const randomIndex = Math.floor(Math.random() * disciplines.length);
    const randomDiscipline = disciplines[randomIndex];

    const disciplineColors = {
      Ataru: "#3164F0",
      Makashi: "#01F00F",
      Sokan: "#EBE403",
      Vaapad: "#CE09E0",
    };

    const newStudent = {
      id: students.length + 1,
      name: document.querySelector("#name").value,
      discipline: randomDiscipline,
      backgroundcolor: disciplineColors[randomDiscipline],
      expelled: false,
    };
    students.unshift(newStudent);
    studentCard(students);
    form.reset();
  });
};

//Sort buttons
const sortButtons = () => {
  const domString = `
    <div class="button-row">
      <button class="btn btn-secondary btn-lg " id="all">All</button>
      <button class="btn btn-secondary btn-lg buttonRow" id="Ataru">Ataru</button>
      <button class="btn btn-secondary btn-lg buttonRow" id="Makashi">Makashi</button>
      <button class="btn btn-secondary btn-lg buttonRow" id="Sokan">Sokan</button>
      <button class="btn btn-secondary btn-lg buttonRow" id="Vaapad">Vaapad</button>
    </div>
    `;
  renderToDom("#sortBtn", domString);
};

document.querySelector("#sortBtn").addEventListener("click", (e) => {
  console.log("filter button", e.target.id);

  const filter = (filterString) => {
    const newStudentArray = students.filter(
      (students) =>
        students.discipline === filterString && students.expelled === false
    );
    studentCard(newStudentArray);
  };

  if (e.target.id === "all") {
    studentCard(students);
    document.getElementById("expel").style.display = "";
  } else if (e.target.id === "Ataru") {
    filter("Ataru");
    hideExpelled();
  } else if (e.target.id === "Makashi") {
    filter("Makashi");
    hideExpelled();
  } else if (e.target.id === "Sokan") {
    filter("Sokan");
    hideExpelled();
  } else if (e.target.id === "Vaapad") {
    filter("Vaapad");
    hideExpelled();
  }
});

//Function to hide expelled students cards
const hideExpelled = () => {
  document.getElementById("expel").style.display = "none";
};

//Student cards
const studentCard = (students) => {
  let domString = "";
  const notExpelled = students.filter((student) => !student.expelled);

  for (const student of notExpelled) {
    domString += `
 <div class="student-div">
  <div class="card-body" id="student-card" style="background-color:${student.backgroundcolor}">
    
  <img src="jedi-order.png" width="50px" height="auto"><h5 class="card-title">${student.name}</h5>
    <p class="card-text">${student.discipline}</p>
    <a href="#" class="btn btn-primary expel-btn" id="expel--${student.id}">Expel</a>
</div>
</div>
    `;
  }
  renderToDom(".students", domString);
};

//Expel button
document.addEventListener("click", (e) => {
  if (e.target.id.includes("expel")) {
    const [, studentId] = e.target.id.split("--");
    const studentIndex = students.findIndex(
      (obj) => obj.id === Number(studentId)
    );
    if (studentIndex !== -1) {
      students[studentIndex].expelled = true;
    }
    studentCard(students);
    expelledStudents(students);
    console.log(students);
  }
});

//Expelled cards
const expelledStudents = () => {
  let domString = "";
  const isExpelled = students.filter((student) => student.expelled);
  for (const student of isExpelled) {
    domString += `<div class="expel-div">
    <div class="card-body expel-div" id="expel-card">
    <img src="sith-empire-logo.png" width="50px" height="auto">
    <h5 class="card-title">${student.name} fell to the Dark Side</h5>
    <p class="card-text">${student.discipline}</p>
</div>
</div>
    `;
  }
  renderToDom(".expel", domString);
};

//STARTAPP//
const startApp = () => {
  defaultCard();
};

startApp();
