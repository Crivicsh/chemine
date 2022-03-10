link=document.getElementById('link');
var link_text=document.location.origin + document.location.pathname;
link.href=link_text;

document.getElementById("title").innerText='Chemine - Chemical equations online!';


var reactions = {'hcl+mno2':[{"coefficient" : 4, "group":{"H":"", "Cl":""}, "physical-state":"(aq)", "color":"white"},"plus",{"coefficient" : "", "group":{"Mn": "", "O": 2}, "physical-state":"(s)", "color":"brown"},"arrow",{"coefficient" : 2, "group":{"H": 2, "O": ""}, "physical-state":"(l)", "color":"white"},"plus",{"coefficient" : "", "group":{"Cl": 2}, "physical-state":"(g)", "color":"green"},"plus",{"coefficient" : "", "group":{"Mn": "", "Cl": "2"}, "physical-state":"(aq)", "color":"pink"}],
'h2+o2':[{"coefficient" : 2, "group":{"H":"2"}, "physical-state":"(g)", "color":"white"},'plus',{"coefficient" : '', "group":{"O":"2"}, "physical-state":"(g)", "color":"white"},"arrow",{"coefficient" : 2, "group":{"H": 2, "O": ""}, "physical-state":"(l)", "color":"white"}],

};
var paramsString = document.location.search;
var searchParams = new URLSearchParams(paramsString).get('s');
var input=document.getElementsByClassName('input')[0].value=searchParams;
/*searchParams = searchParams.replace(/\s/g, '');
searchParams = searchParams.toLowerCase().split('=')[0];
console.log(searchParams);*/