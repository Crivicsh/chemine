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