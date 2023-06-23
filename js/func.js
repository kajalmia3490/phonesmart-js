// button click function here
let phone_name = ['iPhone', 'oppo', 'Samsung', 'Xiomi', 'Redmi', 'Google Pixel', 'Symphony', 'Walton', 'mi', 'Blackberry', 'Vivo', 'Nokia', 'iTel', 'Huawei'];

let names = 0;

// button click function (next)
function nextClickButton() {
    document.getElementById('devices').innerHTML = phone_name[names];
    if (names == phone_name.length - 1) {
        return 0;
    } else {
        names++;
    }
}

// button click function (previous)
function previousClickButton() {
    document.getElementById('devices').innerHTML = phone_name[names];
    if (names == phone_name.length + 1) {
        return 0;
    } else {
        names--;
    }
}