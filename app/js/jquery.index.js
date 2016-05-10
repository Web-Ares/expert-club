$( function(){

    "use strict";

    $.each( $( '.promo' ), function() {
        new Sliders ( $( this ) );
    } );

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