document.getElementById("clear-btn")
  .addEventListener("click", function (event) {
    const massageContainer = document.getElementById("task-massage");
    massageContainer.innerHTML = "";
  });

document.getElementById("change-bg").addEventListener("click", function () {
  const bgColors = [
    "bg-gray-200",
    "bg-red-200",
    "bg-purple-200",
    "bg-lime-200",
    "bg-cyan-300",
    "bg-sky-400",
    "bg-fuchsia-300"
  ];
  const body = document.body;
  const randomColorIndex = Math.floor(Math.random() * bgColors.length);
  const randomColor = bgColors[randomColorIndex];
  body.classList.remove(...bgColors);
  body.classList.add(randomColor);
});

function redirectToBlogs() {
  window.location.href = "./blog.html";
}

function redirectToMain() {
  window.location.href = "./index.html";
}

const date = new Date();
const newDate = date.toDateString();
const splitedDate = newDate.split(" ");
const monthYear = document.getElementById("month-year");

setInnerTextByIdandvalue("day", `${splitedDate[0]},`);
setInnerTextByIdandvalue(
  "month-year",
  `${splitedDate[1]} ${splitedDate[2]} ${splitedDate[3]}`
);

const allCompleteBtns = document.querySelectorAll(".completed-btn");
for (const completeBtn of allCompleteBtns) {
  completeBtn.addEventListener("click", function (event) {
    const newTime = new Date();
    let hour = newTime.getHours();
    const minute = newTime.getMinutes();
    const second = newTime.getSeconds();
    let ampm = "";
    if (hour >= 12) {
      ampm = "PM";
    } else {
      ampm = "AM";
    }
    hour = hour % 12 || 12;
    alert("Board update Successfully");
    const massageContainer = document.getElementById("task-massage");
    const title = event.target.parentNode.parentNode.childNodes[3].innerText;

    const div = document.createElement("div");
    div.classList.add(
      "pb-2",
      "pl-3",
      "mt-6",
      "text-lg",
      "bg-gray-100",
      "rounded-lg",
      "mx-4",
      "mb-5"
    );
    div.innerText = `
    You have completed the task ${title} at 0${hour}: ${minute}: ${second} ${ampm}
    `;
    massageContainer.appendChild(div);
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