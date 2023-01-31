$(document).ready(function(){
	$.getJSON("../..db/group.json",function(data){
		
		//할 일 처리
        alert('working?')
		let menu_list="";
		$.each(data,function(key,value){
			console.log(key);
            alert('111111')
            // if(value.UP_COM_SYS_SN===1) {
                menu_list+="<ul>";
                menu_list+="<li>"+value.Header+"</li>"
                menu_list+="</ul>";
            // }
		});
		$("#jstree").append(menu_list);
	});
});