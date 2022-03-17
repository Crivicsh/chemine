//заголовок
document.getElementById("title").innerText='Chemine - Chemical equations online!';
//проверка на отсутствие формы
var link=document.location.search;
console.log(link);
if (link!=''){
    document.location='.';
}
//установка генеральной ссылки сайта
link=document.getElementById('link');
link.href='.';



(async () => {
    var response = await fetch('https://emequations.com/ru/');
    switch (response.status) {
    // status "OK"
    case 200:
        var template = await response.text();
        console.log(template);
    break;
    // status "Not Found"
    case 404:
        console.log('Not Found');
    break;
    }
    })();