var submit = $(".submit");

submit.on("click",function(){
  cli(submit);
});

function cli(bu){
    bu.css("background-color","green");
    bu.css("border-color","white");
    bu.css("color","white");
    setTimeout(function(){
        bu
        bu.css("background-color","beige");
        bu.css("border-color","grey");
        bu.css("color","black");
    },150);
}