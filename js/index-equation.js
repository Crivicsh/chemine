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
    'naoh+alcl3' : `
    <span class="compound"><span class="coefficient">6</span><span class="space">&nbsp;</span><span class="group"><span class="element">Na</span><span class="element">O</span><span class="element">H</span></span></span><span class="space"> </span><span class="plus">+</span><span class="space"> </span><span class="compound"><span class="group"><span class="element">Al</span><span class="element">Cl</span><sub class="count">3</sub></span></span><span class="space"> </span><span class="arrow">→</span><span class="space"> </span><span class="compound"><span class="coefficient">3</span><span class="space">&nbsp;</span><span class="group"><span class="element">Na</span><span class="element">Cl</span></span></span><span class="space"> </span><span class="plus">+</span><span class="space"> </span><span class="compound"><span class="group"><span class="element">Na</span><sub class="count">3</sub><span class="group"><span class="bracket square">[</span><span class="element">Al</span><span class="group"><span class="bracket round">(</span><span class="element">O</span><span class="element">H</span><span class="bracket round">)</span></span><sub class="count">6</sub><span class="bracket square">]</span></span></span></span><span class="space"> </span>`,
    'hcl+naoh' : `
    <span class="compound"><span class="group"><span class="element">H</span><span class="element">Cl</span></span><span class="space">&nbsp;</span><span class="physical-state">(aq)</span></span><span class="space"> </span><span class="plus">+</span><span class="space"> </span><span class="compound"><span class="group"><span class="element">Na</span><span class="element">O</span><span class="element">H</span></span><span class="space">&nbsp;</span><span class="physical-state">(aq)</span></span><span class="space"> </span><span class="arrow">→</span><span class="space"> </span><span class="compound"><span class="group"><span class="element">H</span><sub class="count">2</sub><span class="element">O</span></span><span class="space">&nbsp;</span><span class="physical-state">(l)</span></span><span class="space"> </span><span class="plus">+</span><span class="space"> </span><span class="compound"><span class="group"><span class="element">Na</span><span class="element">Cl</span></span><span class="space">&nbsp;</span><span class="physical-state">(aq)</span></span><span class="space"> </span>`,
}
//вывод результата searchParams
content=document.getElementById('section-content');
//если реакция в базе, то сделать вывод реакции
if (searchParams in reactions){
    console.log(searchParams);
    var rthrough = document.createElement('div');//создание элемента для перебора значений из базы
    rthrough.innerHTML=reactions[searchParams];
    //пробежка по спарсенным элементам >> убирание <space class='space>, <span class='physical-state'>
    var rthrough_ch=rthrough.children;
    for (var i=0; i<rthrough_ch.length; i++){
        var rthrough_el = rthrough_ch[i];
        content.append(rthrough_el);
        console.log(rthrough_el.innerText)

    }


} 
//иначе сделать вывод alert-alert
else {
    var alert = document.createElement('div');
    alert.className = 'alert-alert';
    alert.innerHTML=`<span>Таких веществ не существует, или реакция между ними невозможна</span><div class='alert-alert-picture'><img src="img/alert-alert-picture.png"></div>`;
    content.append(alert);
}