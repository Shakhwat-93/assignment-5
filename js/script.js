const randomBgButtonGen = document.getElementById("color-button")

function randomColor () {
    hexValues = "0123456789abcdef";
    let color = "#";
    for(let i = 0;i < 6; i++){
        color += hexValues[Math.floor(Math.random() * 16)]  
    }
    return color;
}
randomBgButtonGen.addEventListener("click",function bgchange() {
    document.body.style.backgroundColor = randomColor();
})

// Inner-section linking 

const DiscoverContent = document.getElementById("discover-content");

DiscoverContent.addEventListener("click",function domPage(){
    window.location.href = "inner-section.html";
})

// Calender script here for the date and time 
const newDay = document.getElementById("day");
const newDate = document.getElementById("date");
const newMonth = document.getElementById("month");
const newYear = document.getElementById("year");

const date = new Date();

const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
const getTodayDay = date.getDay()

const Months = ["Jan", "Feb", "Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
const getTodayMonth = date.getMonth();

newDay.innerText = days[getTodayDay];
newYear.innerText = date.getFullYear();
newDate.innerText = date.getDate();
newMonth.innerText = Months[getTodayMonth];

// click works
const taskNumber = document.getElementById("checked-task");
const totalTask = document.getElementById("total-task");
const button1 = document.getElementById("btn-1");
const button2 = document.getElementById("btn-2");
const button3 = document.getElementById("btn-3");
const button4 = document.getElementById("btn-4");
const button5 = document.getElementById("btn-5");
const button6 = document.getElementById("btn-6");
const title1 = document.getElementById("title-1");
const title2 = document.getElementById("title-2");
const title3 = document.getElementById("title-3");
const title4 = document.getElementById("title-4");
const title5 = document.getElementById("title-5");
const title6 = document.getElementById("title-6");
const activityLog1 = document.getElementById("activity-log1")
const activityLog2 = document.getElementById("activity-log2")
const activityLog3 = document.getElementById("activity-log3")
const activityLog4 = document.getElementById("activity-log4")
const activityLog5 = document.getElementById("activity-log5")
const activityLog6 = document.getElementById("activity-log6")

let currentTaskNumber;

button1.addEventListener("click",function taskwork1() {
    alert("Board updated successfully");
    let newTaskNumber = Number(taskNumber.innerText);
    let currentTaskNumber = (newTaskNumber - 1)
    taskNumber.innerText = currentTaskNumber;
    let newTotalTask = Number(totalTask.innerText) ;
    totalTask.innerText =  newTotalTask + 1;
    button1.style.backgroundColor = "#E0E0E0";
    button1.style.color = "#A0A0A0";
    activityLog1.innerText = `You have Complete The Task ${title1.innerText} ${new Date().toLocaleTimeString()}`;
    activityLog1.style.display = "block";
    if(currentTaskNumber === 0) {
        alert("congrates!!!You have completed all the task")
    }
    return currentTaskNumber;
});
button2.addEventListener("click",function taskwork2() {
    alert("Board updated successfully");
    let newTaskNumber = Number(taskNumber.innerText);
    let currentTaskNumber = (newTaskNumber - 1)
    taskNumber.innerText = currentTaskNumber;
    let newTotalTask = Number(totalTask.innerText) ;
    totalTask.innerText =  newTotalTask + 1;
    button2.style.backgroundColor = "#E0E0E0";
    button2.style.color = "#A0A0A0";
    activityLog2.innerText = `You have Complete The Task ${title2.innerText} ${new Date().toLocaleTimeString()}`;
    activityLog2.style.display = "block";
    this.disabled = true;
    if(currentTaskNumber === 0) {
        alert("congrates!!!You have completed all the task")
    }
    return currentTaskNumber;
});
button3.addEventListener("click",function taskwork3() {
    alert("Board updated successfully");
    let newTaskNumber = Number(taskNumber.innerText);
    let currentTaskNumber = (newTaskNumber - 1)
    taskNumber.innerText = currentTaskNumber;
    let newTotalTask = Number(totalTask.innerText) ;
    totalTask.innerText =  newTotalTask + 1;
    button3.style.backgroundColor = "#E0E0E0";
    button3.style.color = "#A0A0A0";
    activityLog3.innerText = `You have Complete The Task ${title3.innerText} ${new Date().toLocaleTimeString()}`;
    activityLog3.style.display = "block";
    this.disabled = true;
    if(currentTaskNumber === 0) {
        alert("congrates!!!You have completed all the task")
    }
    return currentTaskNumber;
});
button4.addEventListener("click",function taskwork4() {
    alert("Board updated successfully");
    let newTaskNumber = Number(taskNumber.innerText);
    let currentTaskNumber = (newTaskNumber - 1)
    taskNumber.innerText = currentTaskNumber;
    let newTotalTask = Number(totalTask.innerText) ;
    totalTask.innerText =  newTotalTask + 1;
    button4.style.backgroundColor = "#E0E0E0";
    button4.style.color = "#A0A0A0";
    activityLog4.innerText = `You have Complete The Task ${title4.innerText} ${new Date().toLocaleTimeString()}`;
    activityLog4.style.display = "block";
    this.disabled = true;
    if(currentTaskNumber === 0) {
        alert("congrates!!!You have completed all the task")
    }
    return currentTaskNumber;
});
button5.addEventListener("click",function taskwork5() {
    alert("Board updated successfully");
    let newTaskNumber = Number(taskNumber.innerText);
    let currentTaskNumber = (newTaskNumber - 1)
    taskNumber.innerText = currentTaskNumber;
    let newTotalTask = Number(totalTask.innerText) ;
    totalTask.innerText =  newTotalTask + 1;
    button5.style.backgroundColor = "#E0E0E0";
    button5.style.color = "#A0A0A0";
    activityLog5.innerText = `You have Complete The Task ${title5.innerText} ${new Date().toLocaleTimeString()}`;
    activityLog5.style.display = "block";
    this.disabled = true;
    if(currentTaskNumber === 0) {
        alert("congrates!!!You have completed all the task")
    }
    return currentTaskNumber;
});
button6.addEventListener("click",function taskwork6() {
    alert("Board updated successfully");
    let newTaskNumber = Number(taskNumber.innerText);
    let currentTaskNumber = (newTaskNumber - 1)
    taskNumber.innerText = currentTaskNumber;
    let newTotalTask = Number(totalTask.innerText) ;
    totalTask.innerText =  newTotalTask + 1;
    button6.style.backgroundColor = "#E0E0E0";
    button6.style.color = "#A0A0A0";
    activityLog6.innerText = `You have Complete The Task ${title6.innerText} ${new Date().toLocaleTimeString()}`;
    activityLog6.style.display = "block";
    this.disabled = true;
    if(currentTaskNumber === 0) {
        alert("congrates!!!You have completed all the task")
    }
    return currentTaskNumber;
});


// History clear button here

const allTask = document.getElementById("activity_text")
const clearButton = document.getElementById("clear-button")

clearButton.addEventListener("click",function cleartaskbtn () {
    allTask.style.display = "none";
})

// project end here.