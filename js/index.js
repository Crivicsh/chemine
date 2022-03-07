var paramsString = document.location.search; // ?page=4&limit=10&sortby=desc  
var searchParams = new URLSearchParams(paramsString);
console.log(paramsString);

const url = 'https://chemequations.com/en/' + paramsString;
console.log(url);
document.getElementById("title").innerText=url;

var array = [{"coefficient" : 4, "group":{"H":"", "Cl":""}, "physical-state":"(aq)", "color":"white"},
"plus",
{"coefficient" : "", "group":{"Mn": "", "O": 2}, "physical-state":"(s)", "color":"brown"},
"arrow",
{"coefficient" : 2, "group":{"H": 2, "O": ""}, "physical-state":"(l)", "color":"white"},
"plus",
{"coefficient" : "", "group":{"Cl": 2}, "physical-state":"(g)", "color":"yellow"},
"plus",
{"coefficient" : "", "group":{"Mn": "", "Cl": "2"}, "physical-state":"(aq)", "color":"pink"}];
console.log(array[2]['group']['O']);
/*
for (var form of array){
    if ((typeof form)=='string') {
        document.body.insertAdjacentHTML("afterbegin", `<div class="alert">
    <strong>Всем привет!</strong> Вы прочитали важное сообщение.
  </div>`);    
    }
};
*/
if (paramsString!=''){
    document.querySelector('.section-content form#form-equation').remove();
    document.querySelector('.section-content .instruction-window').remove();
    nav = document.querySelector('nav');
    nav.insertAdjacentHTML("beforeend",
`<form id="form-equation" method="get">
<fieldset class="inputgroup">
    <input class='input' type="text" name="s" value="${searchParams.get("s")}" placeholder="Enter a reaction, e.g. &quot;hcl + naoh&quot;" autofocus="" class="ui-autocomplete-input" autocomplete="off">
    <input type="hidden" name="ref" value="input">
    <div class="button-wrapper">
        <button title="Submit" type="submit" class="btn btn-default">
            <span>
                Submit
            </span>
        </button>
    </div>
</fieldset>    
</form>`);
};
