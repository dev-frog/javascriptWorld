var a = 10;

var add5 = function(num){
    var b = 5;
    console.log('add5 -',num + b);

    var add10 = function(num2){
        console.log('add10 -',num2 + a);
    };
    add10(3);

    var add15 = function(num3){
        var c = 15;
        console.log('add15 -',num3 + c);
        add10(3);
    };

    add15(3);
};

add5(3);