let violation = document.getElementById('violation').style.display = 'none';
let payment = document.getElementById('payment').style.display = 'none';



function clear() {
	document.getElementByName('search').reset();
}
$(document).ready(function() {
	$('#return-payment').click(function() {
		$('#payment').fadeOut(300);
		$('#form').fadeIn(100);
	});
	$('#btn-payment-js').click(function() {
		$('#payment').fadeIn(300);
		$('#violation').fadeOut(300);
		$('#form').fadeOut(100);
	});

	$('#return-violation').click(function() {
		$('#violation').fadeOut(300);
		$('#form').fadeIn(100);
	});
	$('#btn-violation-js').click(function() {
		$('#violation').fadeIn(300);
		$('#payment').fadeOut(300);
		$('#form').fadeOut(100);
	});

	$('#search').click(function() {
		$('#reset').fadeIn(100);
	});
	$('#reset').click(function() {
		$('#reset').fadeOut(300);
		$('#result').fadeOut(300);
		$('.searchResult').fadeOut(300);
	});

	$('#search').on('input', function() {
		let Value = $(this).val();
		$('#errmsg').empty();
		$('#errmsg').text(Value);
	})
	$('#search').on('keyup paste', function() {
		$('.searchResult').show();
	});
});

