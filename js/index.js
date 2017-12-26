

function ajax(yan){
    if('XMLHttpRequest' in window){
        var xhr = new XMLHttpRequest();
    }else{
        var xhr = new ActiveXObject( "Microsoft.XMLHTTP" );
    }
    if(yan.type == 'get'){
        xhr.open('get',yan.url+'?'+jsonToString(yan.data),true);
        xhr.send();
    }
    else if(yan.type=='post'){
        xhr.open('post',yan.url,true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(jsonToString(yan.data));
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status>=200&&xhr.status<300||xhr.status==304){
                yan.success(xhr.responseText);
            }
            else{
                yan.error();
            }
        }
    };
    function jsonToString(json){
        var arr = [];
        for(var i in json){
            arr.push(i+'='+json[i])
        };
        return arr.join('&');
    }
}