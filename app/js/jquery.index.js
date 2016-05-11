$( function(){

    "use strict";

    $.each( $( '.promo' ), function() {
        new Sliders ( $( this ) );
    } );

    $( '.aside-menu__wrap' ).each( function() {
        Menu( $( this ) );
    });

} );

var Sliders = function( obj ) {

    //private properties
    var _obj = obj,
        _promoSlider = _obj.find( '.promo__swiper'),
        _promoNextSlider = _obj.find( '.promo-button-next'),
        _promoPrevSlider = _obj.find( '.promo-button-prev'),
        _slider;


    //private methods
    var _initSlider = function() {

            _slider = new Swiper ( _promoSlider, {
                autoplay: 4000,
                speed: 500,
                effect : 'fade',
                loop: true,
                nextButton: _promoNextSlider,
                prevButton: _promoPrevSlider
            } );

        },
        _init = function() {
            _initSlider();
        };

    //public properties

    //public methods

    _init();
};

var Menu = function(obj) {

    //private properties
    var _obj = $(this),
        _items=$('.aside-menu__wrap>li');

    //private methods
    var _addEvents = function() {

            _items.on( {
                click: function() {
                    var curElem = $( this ),
                        curMenu= curElem.find( 'ul' );

                    if( curMenu.is( ':visible' ) ) {
                        curMenu.slideUp( 300 );
                        curElem.removeClass( 'open' );
                    }
                    else{
                        curMenu.slideDown( 300 );
                        curElem.addClass( 'open' );
                    }
                    /*if ( event.stopPropagation ) {
                        event.stopPropagation();
                    } else {
                        event.cancelBubble = true;
                    }*/
                }
            });

            /*$('body').on( {

                click: function(e) {

                    var elem=$(e.target);

                    var curElem = $( '.aside-menu__wrap>li' ),
                        curMenu= curElem.find( 'ul' );

                    if( curMenu.is( ':visible' ) ) {
                        curMenu.slideUp( 300 );
                        curElem.removeClass( 'open' );
                    }
                }
            });*/

        },
        _init = function() {


            _addEvents();
        };

    //public properties

    //public methods

    _init();
};