var txtAnim = document.getElementById('txt');

var typewriter = new Typewriter(txtAnim, {
    
    delay: 55,
});

typewriter
.typeString('Pour que votre maison ou votre immeuble de bureaux vous obéisse')
.pauseFor(500)
.typeString(' au <span style ="color: gray "><strong> « doigt et </strong></span>')
.pauseFor(200)
.typeString(' <span style ="color: gray"><strong>  à la voix »</strong></span>')
.pauseFor(500)
.start();