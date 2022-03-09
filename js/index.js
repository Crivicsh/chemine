link=document.getElementById('link');
var link_text=document.location.origin + document.location.pathname;
link.href=link_text;

document.getElementById("title").innerText='Chemine - Chemical equations online!';


var paramsString = document.location.search;
var searchParams = new URLSearchParams(paramsString).get('s');
var input=document.getElementsByClassName('input')[0].value=searchParams;