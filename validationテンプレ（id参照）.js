
// formタグから onsubmit="return submitChk()" で呼び出す
// HTML側に id="errors" のdiv要素を配置しておく

function submitChk() {

    let errors = validate();
    
    if (errors.length) return show_errors(errors);
        
    return true;
}

function show_errors (errors) {
    let list_element = document.getElementById('errors');
    let ul_element = document.createElement('ul');
    let li_element;
    errors.forEach(element => {
        li_element = document.createElement('li');
        li_element.textContent = element;
        ul_element.appendChild(li_element);
    });
    if (list_element.lastChild) list_element.removeChild(list_element.lastChild);
    list_element.appendChild(ul_element)
    return false;
}

function validate() {
    let id = [
        "sample_1",
        "sample_2",
        "sample_3",
    ];
    let values = {};
    id.forEach(key => values[key] = document.getElementById(key).value);
    let errors = [];
    if (!values["sample_1"]) errors.push("sample_1");
    if (!values["sample_2"]) errors.push("sample_2");
    if (!values["sample_3"]) errors.push("sample_3");
    return errors;
}