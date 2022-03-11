//заголовок
document.getElementById("title").innerText='Chemine - Chemical equations online!';
//проверка на отсутствие формы
var link=document.location.search;
if (link==''){
    document.location='.';
}
//установка генеральной ссылки сайта
link=document.getElementById('link');
link.href='.';
//установка введенных значений в input
var paramsString = document.location.search;
var searchParams = new URLSearchParams(paramsString).get('s');
var input=document.getElementsByClassName('input')[0].value=searchParams;



//подготовка строки для поиска в базе
searchParams = searchParams.replace(/\s/g, '');
searchParams = searchParams.toLowerCase();
console.log(searchParams);

//база, временная 
var reactions = {
    'hcl+mno2' : `
    <span class="compound"><span class="coefficient">4</span><span class="space">&nbsp;</span><span class="group"><span class="element">H</span><span class="element">Cl</span><span class="oxidation-number-data-wrapper"><span class="oxidation-number-data" data-on="-I"></span></span></span><span class="space">&nbsp;</span><span class="physical-state">(aq)</span></span><span class="space"> </span><span class="plus">+</span><span class="space"> </span><span class="compound"><span class="group"><span class="element">Mn</span><span class="oxidation-number-data-wrapper"><span class="oxidation-number-data" data-on="IV"></span></span><span class="element">O</span><sub class="count">2</sub></span><span class="space">&nbsp;</span><span class="physical-state">(s)</span></span><span class="space"> </span><span class="arrow">→</span><span class="space"> </span><span class="compound"><span class="coefficient">2</span><span class="space">&nbsp;</span><span class="group"><span class="element">H</span><sub class="count">2</sub><span class="element">O</span></span><span class="space">&nbsp;</span><span class="physical-state">(l)</span></span><span class="space"> </span><span class="plus">+</span><span class="space"> </span><span class="compound"><span class="group"><span class="element">Cl</span><sub class="count">2</sub><span class="oxidation-number-data-wrapper"><span class="oxidation-number-data" data-on="0"></span></span></span><span class="space">&nbsp;</span><span class="physical-state">(g)</span></span><span class="space"> </span><span class="plus">+</span><span class="space"> </span><span class="compound"><span class="group"><span class="element">Mn</span><span class="oxidation-number-data-wrapper"><span class="oxidation-number-data" data-on="II"></span></span><span class="element">Cl</span><sub class="count">2</sub><span class="oxidation-number-data-wrapper"><span class="oxidation-number-data" data-on="-I"></span></span></span><span class="space">&nbsp;</span><span class="physical-state">(aq)</span></span><span class="space"> </span>`,

}
//вывод результата searchParams
content=document.getElementById('section-content');
//если реакция в базе, то сделать вывод реакции
if (searchParams in reactions){
    console.log(searchParams);
    var reaction = document.createElement('div');
    reaction.innerHTML=reactions[searchParams];
    console.log(reaction.children);
} 
//иначе сделать вывод alert-alert
else {
    var alert = document.createElement('div');
    alert.className = 'alert-alert';
    alert.innerHTML=`<span>Таких веществ не существует, или реакция между ними невозможна</span><div class='alert-alert-picture'><img src="img/alert-alert-picture.png"></div>`;
    content.append(alert);
}