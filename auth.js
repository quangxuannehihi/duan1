async function handleSubmit(event) {
    event.prefentDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmpassword = document.getElementById("confirmpassword").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        return alert("email k hop le");

    }
    if(!email || !password || !confirmPassword){
        return alert("nhap du thong tin");

    }
    if(password.length <6){
        return alert("nhap pass > 6");
    }
    if(password.length !== confirmPassword){
        return alert("nhap pass > 6");
    }
}