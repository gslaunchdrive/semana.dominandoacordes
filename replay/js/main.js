$(document).ready(function () {

    function loadConfigs() {
        $.get( "https://glcdn.githack.com/ddmlaunch/configs/-/raw/advocaciacriminalpratica/obrigado.json",  function( data ) {
            var config = data[0];
            
            openCart = config.openCart;
            $('#open-cart').attr("href", config.openCart);
            initializeClock('clock', config.initEvent);
        });
    }

    loadConfigs();
});