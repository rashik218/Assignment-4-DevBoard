function redirectToBlogs() {
  window.location.href = "./blog.html";
}

function redirectToMain() {
  window.location.href = "./index.html";
}
const date = new Date();
const newDate = date.toDateString();
const splitedDate = newDate.split(" ")
const monthYear = document.getElementById('month-year');


setInnerTextByIdandvalue("day", `${splitedDate[0]},`)
setInnerTextByIdandvalue("month-year", `${splitedDate[1]} ${splitedDate[2]} ${splitedDate[3]}`);


const allCompleteBtns = document.querySelectorAll(".completed-btn");
for (const completeBtn of allCompleteBtns) {
  completeBtn.addEventListener("click", function (event) {
    alert("Board update Successfully");

    const taskNumber = getInnerTextByID("task-number");
    const poinCount = getInnerTextByID("point-count");
    const newPoint = poinCount + 1;
    const newTaskNumber = taskNumber - 1;
    setInnerTextByIdandvalue("point-count", newPoint);
    setInnerTextByIdandvalue("task-number", newTaskNumber);
    event.target.style.backgroundColor = "gray";
    event.target.style.opacity = "0.6";
    event.target.style.cursor = "not-allowed";
    if (taskNumber === 1) {
      alert("congrates!!! You have completed all the current task");
    }
  });
}
