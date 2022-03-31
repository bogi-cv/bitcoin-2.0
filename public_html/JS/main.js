


$(document).ready(function () {


    if ($('.lead-carousel').length > 0) {
        $('.lead-carousel').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            items: 1,
            autoplay: true,
            autoplaytimeout: 3000

        });
    }

    if ($('.customer-comments').length > 0) {
        $('.customer-comments').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            items: 1,
            autoplay: true,
            autoplayTimeout: 5000,

            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                768: {
                    items: 2,
                    nav: true
                }
            }

        });
    }

    if ($('.brands-carousel').length > 0) {
        $('.brands-carousel').owlCarousel({
            loop: true,

            responsiveClass: true,
            items: 1,
            autoplay: true,
            autoplayTimeout: 2000,

            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                576: {
                    items: 2,
                    nav: true
                },
                992: {
                    items: 3,
                    nav: true
                },
                1200: {
                    items: 6,
                    nav: true
                }
            }

        });
    }

    $('.toggle-submenu').click(function () {
        $(this).toggleClass('navbar-toggler-icon fa-times');
    });


    $('.counter').counterUp({
        delay: 5

    });

    $('[data-fancybox="gallery"]').fancybox({
        thumbs: {

            autoStart: true
        }
    });






    // animation start
    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var pozicija = $(this).offset().top;
            var animacija = $(this).attr('data-animation');
            var delay = $(this).attr('data-delay');
            if (pozicija < scroll + windowHight - 100) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
            }
        });

    }



    animation();

    $(window).scroll(function () {
        animation();
    });
// animation end        

    //validation

    if ($('.login-form').length > 0) {
        $(function () {
            $(".login-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                },
                rules: {
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true,
                        minlength: 9
                    }

                },
                messages: {
                    email: {
                        required: 'Email is required',
                    },
                    password: {
                        required: 'Password is required',
                        minlength: 'Password must contain at least 9 characters'
                    }

                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.error-msg'));
                }

            });
        });

    }





    if ($('.register-form').length > 0) {
        $(function () {
            $(".register-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                },
                rules: {
                    firstName: {
                        required: true

                    },
                    lastName: {
                        required: true
                    },
                    yourEmail: {
                        required: true
                    },
                    newPassword: {
                        required: true,
                        minlength: 9
                    },
                    repeatPassword: {
                        required: true,
                        equalTo: '#password'
                    }

                },
                messages: {
                    firstName: {
                        required: 'Please write your name',
                    },
                    lastName: {
                        required: 'Please write your last name',
                    },
                    yourEmail: {
                        required: 'Please write your Email'
                    },
                    newPassword: {
                        required: 'Password is required',
                        minlength: 'Password must contain at least 9 characters'
                    },
                    repeatPassword: {
                        required: 'Please repeat your password',
                        equalTo: 'Passwords do not match'
                    }


                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.error-msg'));
                }

            });
        });

    }








});

