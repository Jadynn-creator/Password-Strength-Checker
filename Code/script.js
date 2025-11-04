let password=document.getElementById("password");
let strengthBar=document.getElementById("power-point");

password.oninput=function(){
    let point=0;
    let value=password.value;
    let widthPower=["1%","25%","50%","75%","100%"];
    let colorPower=["red","orange","yellow","blue","green"];

    if(value.length>=8){
        let arrayTest =[/[0-9]/,/[a-z]/,/[A-Z]/,/[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/];

        arrayTest.forEach((item)=>{
            if(item.test(value)) point++;
        });
        }
    
    power.style.width=widthPower[point];
    power.style.backgroundColor=colorPower[point];
};
