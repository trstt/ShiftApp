    $('#openMenu').tapend(function(){
        $('.wrapper').animate(
			{left: '0'},
			200,
			"linear"
		);
        $('#closeMenu').css('display','block');
    }).stop(true);

    $('.closeMenu').on('tapend tapmove', function(){
        $('.wrapper').animate(
			{
				left: '-80vw',
			},
			100,
			"swing"
		);
        $(this).css('display', 'none');
    }).stop(true);
