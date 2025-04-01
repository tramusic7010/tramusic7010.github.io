        $(function() {
			$('#header').load('include/header.html');
			$('#sidemenu').load('include/nav.html');
			$('#footer').load('include/footer.html');
			
			$(document).on('click','.hamburger',function(){
			$('.hamburger,.hamburger_bg, #sidemenu').toggleClass('open');
			});
		});