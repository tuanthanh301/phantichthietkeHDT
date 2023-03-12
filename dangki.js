// sign up
let signUp = document.querySelector(".btn-submit");
let dataUser = JSON.parse(localStorage.getItem("data"));

signUp.onclick = function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let name = document.getElementById("username").value;
    let flagSuccess = true;
    let hasEmail = false;
    //   Kiểm tra tính hợp lệ của password
    if (password.length < 5 || password.length >= 20) {
        alert("Password không hợp lệ");
        flagSuccess = false;
    }
    //   Kiểm tra tính hợp lệ của email
    if (!email.includes("@") && !email.includes(".com")) {
        alert("Email không hợp lệ");
        flagSuccess = false;
    }

    if (flagSuccess) {
        // Kiểm tra sự tồn tại của email trong data
        if (dataUser === null) {
            dataUser = [];
            dataUser.push({
                email,
                password,
                name,
            });
        } else {
            for (data of dataUser) {
                if (data.email === email) {
                    hasEmail = true;
                }
            }
            if (!hasEmail) {
                dataUser.push({
                    email,
                    password,
                    name,
                });
                alert("Đăng ký thành công");
                console.log("Email: ", email);
                console.log("Password: ", password);
                console.log("Name: ", name);
            } else {
                alert("Email đã tồn tại");
            }
        }
        localStorage.setItem("data", JSON.stringify(dataUser));
    }
}; F