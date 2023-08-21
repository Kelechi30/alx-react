import $ from "jquery";
const _ = require("lodash");
<>
  <p>Holberton Dashboard</p>
  <p>Dashboard data for the students</p>
  <button>Click here to get started</button>
  <p id="count"></p>
  <p>Copyright - Holberton School</p>
</>;

function  updateCounter() {
  counter++;
  $('#count').html(`${counter} clicks on the button`);
}

$("button").on("click", _.debounce(updateCounter, 500));updateCounter() {

}
