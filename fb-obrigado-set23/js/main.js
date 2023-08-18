
$(document).ready(function () {

    let groupWhats = '';

    function loadConfigs() {
        $.get( "https://glcdn.githack.com/ddmlaunch/configs/-/raw/advocaciacriminalpratica/obrigado.json",  function( data ) {
            var config = data[0];
            groupWhats = config.invitationLink;
            $('#whatsapp').attr("href", config.invitationLink);
            initializeClock('clock', config.initEvent);
        });
    }

    function redirectWhatsApp() {
        setTimeout(function () {
            window.location.href = groupWhats;
        }, 15000);
    }

    loadConfigs();
    redirectWhatsApp();
});