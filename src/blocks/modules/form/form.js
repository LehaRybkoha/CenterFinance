let violation = document.getElementById('violation').style.display = 'none';
let payment = document.getElementById('payment').style.display = 'none';

function clear() {
	document.getElementByName('search').reset();
}
$(document).ready(function() {
	$('#return-payment').click(function() {
		$('#payment').fadeOut(300);
	});
	$('#btn-payment-js').click(function() {
		$('#payment').fadeIn(300);
		$('#violation').fadeOut(300);
	});

	$('#return-violation').click(function() {
		$('#violation').fadeOut(300);
	});
	$('#btn-violation-js').click(function() {
		$('#violation').fadeIn(300);
		$('#payment').fadeOut(300);
	});

	$('#search').click(function() {
		$('#reset').fadeIn(100);
	});
	$('#reset').click(function() {
		$('#reset').fadeOut(500);
	});
});
var req;
 
function processReqChange() {
    if (req.readyState == 4){      
        if (req.status == 200){
            document.getElementById('content').innerHTML=req.responseText;      
        };        
    };
};
 
function loadXMLDoc(url) {  
    if (window.XMLHttpRequest) {        
        req = new XMLHttpRequest();        
        req.onreadystatechange = processReqChange;        
        req.open("GET", url, true);        
        req.send(null);    
    } else if (window.ActiveXObject) {        
        req = new ActiveXObject("Microsoft.XMLHTTP");        
        if (req) {            
            req.onreadystatechange = processReqChange;
            req.open("GET", url, true);    
            req.send();         
        };   
    };
};
 
function getFile(url){
    loadXMLDoc(url);   
};    


