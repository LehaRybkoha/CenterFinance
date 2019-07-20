function clear() {
	document.getElementByName('search').reset();
}
$(document).ready(function() {
	$('#search').click(function() {
		$('#reset').fadeIn(100);
	});
	$('#reset').click(function() {
		$('#reset').fadeOut(500);
	});
})