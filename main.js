const students = [
  {
    name: "Jacen",
    discipline: "ataru",
    expelled: false,
  
},
  {
  name: "Jaina",
  discipline: "makashi",
  expelled: false,

},
  {
  name: "Ben",
  discipline: "sokan",
  expelled: false,

},
  {
  name: "Anakin",
  dicipline: "vaapad",
  expelled: false,

},
];

// render to dom utility function
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};
  


  // HTML COMPONENT FUNCTIONS //
  


  //Default card

  const defaultCard = () => {
    const domString = `<div class="card">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
  renderToDom("#defaultCard", domString);
  };

  //Add student form
/* <form>
  <div class="mb-3">    
  <div id="emailHelp" class="form-text">Enter student name.</div>
    <label for="exampleInputEmail1" class="form-label">Student Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form> */

  //Sort buttons
  const sortButtons = () => {
    const domString = `
    <div class="d-flex flex-wrap justify-content-between my-3">
      <button class="btn btn-secondary btn-lg buttonRow" id="All">All</button>
      <button class="btn btn-secondary btn-lg buttonRow" id="ataru">Ataru</button>
      <button class="btn btn-secondary btn-lg buttonRow" id="makashi">Makashi</button>
      <button class="btn btn-secondary btn-lg buttonRow" id="sokan">Sokan</button>
      <button class="btn btn-secondary btn-lg buttonRow" id="vaapad">Vaapad</button>
    </div>
    `;
    renderToDom("#sortBtn", domString);
  };

  //Student cards
 const studentCard = (students) => {
  let domString = "";
  for (const student of students) {
    domString += `
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${student.name}</h5>
    <p class="card-text">${student.dicipline}</p>
    <a href="#" class="btn btn-primary">Expel</a>
  </div>
</div>
    `;
  }
  renderToDom("#students", domString);
 };

  //Expelled cards


  // EVENT LISTENERS //


  //STARTAPP//
const startApp = () => {
  defaultCard();
  console.log(defaultCard);
};

startApp();
