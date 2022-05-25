//cookie的查
function getCookie(key) { //设计者
    let strCookie = document.cookie;
    let arrCookie = strCookie.split("; ");

    for (let i = 0; i < arrCookie.length; i++) {
        let item = arrCookie[i].split("=");
        if (item[0] == key) {
            return item[1];
        }
    }

    return "";
}

//cookie的增改
function setCookie(key, value, day) {
    if (day == undefined) { //会话
        document.cookie = `${key}=${value}`;
    } else { //长生命周期
        let date = new Date();
        date.setDate(date.getDate() + day);
        document.cookie = `${key}=${value};expires=${date}`;
    }
}

//cookie的删
function delCookie(key) {
    setCookie(key, '', -1);
}