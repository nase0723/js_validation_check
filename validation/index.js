
// <form onsubmit="return submitChk()"></form>
// 下記のCDNを使う
// <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"></script>

function submitChk() {

    if (btn) return validate();
    
}

function validate() {
    let values = {};
    let errors = [];
    document.querySelectorAll("input").forEach(element => values[element.name] = element.value);
    
    if (!values["test_1"]) errors.push("test_1");
    if (!values["test_2"]) errors.push("test_2");
    if (!values["test_3"]) errors.push("test_3");

    if (errors.length) {
        swal(errors.join("\n")); 
        return false;
    } else {
        return true;
    }
}