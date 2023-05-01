function greet(name){
        console.log("안녕 내 이름은 ",name,"야")
        return(name)
}

function meetAt(year,month,day){
    if (month==0,day==0){
        return (year,"년")
    }
    else if (day==0){
        return(year,"년",month,"월")
    }
    else{
        return(year,"/",month,"/",day)
    }
}

meetAt(2022);
meetAt(2032, 3);
meetAt(1987,10,28)