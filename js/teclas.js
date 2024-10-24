var context = new AudioContext();

function jsNota(frecuencia) 
{
    var o = context.createOscillator();
    g = context.createGain();
    o.connect(g);
    o.type = "sawtooth";
    o.frequency.value = frecuencia;
    g.connect(context.destination);
    o.start(0);
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.4);
}

var notasBlancas = 
{
    '1': 261.63, // do
    '2': 293.66, // re
    '3': 329.63, // mi
    '4': 349.23, // fa
    '5': 392.00, // sol
    '6': 440.00, // la
    '7': 493.88, // si
    '8': 523.25  // do8
};

var notasNegras =
{
    'w': 277.18, // do#
    'e': 311.13, // re#
    'r': 369.99, // fa#
    't': 415.30, // sol#
    'y': 466.16  // la#
};


window.addEventListener('keydown', function(event) 
{
    var tecla = event.key;
    var frecuencia;

    if (tecla in notasBlancas) 
        {
        frecuencia = notasBlancas[tecla];
        } 
    else if (tecla in notasNegras) 
        {
        frecuencia = notasNegras[tecla];
        }

    if (frecuencia) 
        {
        jsNota(frecuencia);
        }
});
