console.log("Hello back to School");

const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;

const oregonWashingtonButton = document.getElementById("onw");
const clearFilterButton = document.getElementById("clear");
const undoButton = document.getElementById("undo");

// Logging workbook Infromation
function logWorkbookInformation() {
  workbook = viz.workbook;
  console.log(`The workbooks name is ${workbook.name}`);

  let sheets = workbook.publishedSheetsInfo;

  sheets.forEach((element) => {
    index = element.index;
    console.log(`The sheet with index ${index} is : ${element.name}`);
  });

  vizActiveSheet = workbook.activeSheet;
  console.log(`The active Sheet is ${vizActiveSheet.name}`);

  listSheets = vizActiveSheet.worksheets;
  listSheets.forEach((element) => {
    index = element.index;
    console.log(`The worksheet with index ${index} is : ${element.name}`);
  });
}

function oregonWashFunction() {
  console.log(oregonWashingtonButton.value);
  //Funktion um Filter zu setzen
  listSheets.forEach((element) => {
    element.applyFilterAsync("State", ["Washington", "Oregon"], "replace");
  });
}

oregonWashingtonButton.addEventListener("click", oregonWashFunction);
// Filter löschen
function clearfunction() {
  listSheets.forEach((element) => {
    element.clearFilterAsync("State");
  });
}

clearFilterButton.addEventListener("click", clearfunction);

// Undo Button Funktion
function undofunction() {
  viz.undoAsync();
}

undoButton.addEventListener("click", undofunction);

viz.addEventListener("firstinteractive", logWorkbookInformation);
