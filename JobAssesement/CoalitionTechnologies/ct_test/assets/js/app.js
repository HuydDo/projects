const links = document.querySelectorAll(".nav-link");
const tabs = document.querySelector(".tabs");
const schedules = document.querySelectorAll(".schedule");

tabs.addEventListener("click", function (e) {
  // console.log(e.target)
  const id = e.target.dataset.id;
  // console.log(id)
  if (id) {
    //remove active from other link
    links.forEach(function (link) {
      link.classList.remove("active");
      e.target.classList.add("active");
    });
    //hide other link
    schedules.forEach(function (schedule) {
      schedule.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
