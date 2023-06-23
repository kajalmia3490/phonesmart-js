// Data show one after one with time interval
let student_Id = ['Kajal', 'Sajal', 'Emon', 'Shukkor', 'Mannan', 'Raihan'];
let names = 0;

let interval = setInterval(() => {
    document.getElementById('devices').innerText += student_Id[names] + '\n';
    if(names == student_Id.length - 1) {
        clearInterval(interval);
    } else {
        names++;
    };
}, 1000);