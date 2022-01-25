
// formタグから onsubmit="return submitChk()" で呼び出す
// HTML側に <div id="errors"></div> を配置しておく

function submitChk() {

    let errors = validate();
    
    if (errors.length) return show_errors(errors);

    return true;
}

function show_errors (errors) {
    let list_element = document.getElementById('errors');
    let ul_element = document.createElement('ul');
    let li_element;
    errors.forEach(error => {
        li_element = document.createElement('li');
        li_element.textContent = error;
        ul_element.appendChild(li_element);
    });
    if (list_element.lastChild) list_element.removeChild(list_element.lastChild);
    list_element.appendChild(ul_element)
    return false;
}

function validate() {
    let values = {};
    let errors = [];
    result = document.querySelectorAll("input");
    result.forEach(element => values[element.name] = element.value);

    if (!values["sample_1"]) errors.push("sample_1");
    
    return errors;
}