

setInterval (() => {

    var today = new Date();
		var hourNow = today.getHours();
        var minNow = today.getMinutes();
        var secNow = today.getSeconds();
        var mNow = today.getMilliseconds();
		var time;


   

time =  hourNow +':'+ minNow +':' + secNow 



        document.getElementById('90').innerHTML = time;
},1

)
    