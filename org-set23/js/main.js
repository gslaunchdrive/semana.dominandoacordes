$(document).ready(function () {

    const URLToArray = url => {

        var request = {};
        var pairs = url.substring(url.indexOf('?') + 1).split('&');
        for (var i = 0; i < pairs.length; i++) {
            if (!pairs[i])
                continue;
            var pair = pairs[i].split('=');
            //pair = pairs[i].replace(/\+/g,' ');
            request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]).replace(/\+/g, ' ');
        }
        return request;
    }

    function loadGoogleFont() {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;1,700&display=swap';
        document.head.appendChild(link);
    }

    function loadForm() {
        
        var params = URLToArray(window.location.href)
        if (params) {
            $("[name='field[34]']").val(params['utm_source']);
            $("[name='field[35]']").val(params['utm_campaign']);
            $("[name='field[36]']").val(params['utm_medium']);
            $("[name='field[37]']").val(params['utm_content']);
            $("[name='field[38]']").val(params['utm_term']);
        }
    }
    
    loadForm();
    loadGoogleFont();
});