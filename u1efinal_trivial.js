//Declaro Array Preguntas Geografia
var preguntasGeografia = [
    "¿Dónde se ubica el desierto de Gobi?",
    "¿En qué país se ubican las ruinas de Esparta?",
    "Cual es el rio más largo del mundo?",
    "Cúantos continentes hay en la Tierra?",
    "¿Cuántos océanos hay en la Tierra",
    "Cuál es la parte más seca de la Tierra?"
];

//Declaro Array Respuestas Geografia
var respuestasGeografia = [
    "Asia",
    "Grecia",
    "Nilo",
    "6",
    "5",
    "La Antártida"
];

//Declaro Array Preguntas Arte
var preguntasArte = [
    "¿En que museo está la Mona Lisa?",
    "¿Cuándo nació Goya?",
    "'La piedad' es una escultura de?",
    "¿En que año pinto Picasso el 'Guernica'?",
    "¿Qué nombre recibe el estilo arquitectónico de las construcciones árabes en la península?",
    "¿En que siglo se inició el Renacimiento?"
];

//Declaro Array Respuestas Arte
var respuestasArte = [
    "Louvre",
    "1746",
    "Miguel Ángel",
    "1937",
    "Mozárabe",
    "Siglo XV"
];

//Declaro Array Preguntas Espectaculo
var preguntasEspectaculo = [
    "¿Qué conocido cómico imitó a Hitler en la película 'El Gran Dictador'?",
    "¿Quién fue el famoso cantante del grupo musical Queen?",
    "¿Cómo se llama la madre de Simba en la película de Disney 'El Rey León'?",
    "¿Cómo se llama la protagonista de la saga de videojuegos 'The Legend of Zelda'?",
    "¿A qué saga de películas pertenece el personaje conocido como Jack Sparrow?",
    "¿Cómo se llama el antagonista principal de la película de Disney 'El Rey León'?",
];

//Declaro Array Respuestas Espectaculo
var respuestasEspectaculo = [
    "Charles Chaplin",
    "Freddie Mercury",
    "Sarabi",
    "Link",
    "Piratas del Caribe",
    "Scar"
];

//Declaro Array Preguntas Historia
var preguntasHistoria = [
    "¿Quién fue el primer presidente de la democracia española tras el franquismo?",
    "Quién fue el primer presidente de Estados Unidos?",
    "¿En qué año se creó la Organización de las Naciones Unidas?",
    "¿Qué emperador romano es conocido entre otras cosas por haber intentado someterse a operaciones de cambio de sexo?",
    "¿Quiénes fueron, según la leyenda, los dos hermanos fundadores de la ciudad de Roma?",
    "¿Cuánto duró la Guerra de los Cien Años?"
];

//Declaro Array Respuestas Historia
var respuestasHistoria = [
    "Adolfo Suárez",
    "George Washington",
    "1942",
    "Marco Aurelio",
    "Rómulo y Remo",
    "116"
];

//Declaro Array Preguntas Ciencia
var preguntasCiencia = [
    "¿Cuál es el nombre técnico del miedo o fobia a las alturas?",
    "¿Cuál es el ave de mayor envergadura que sigue viva actualmente?",
    "¿Cuál es el principal tipo de célula que forma parte del sistema nervioso de humanos y otros animales?",
    "¿Qué especie de anfibio es conocida por su increíble capacidad para regenerar partes de su cuerpo que han sido dañadas o amputadas?",
    "¿Alrededor de qué planeta orbitan los satélites Ganímedes, Calisto, Ío y Europa?",
    "¿Qué período de la era paleozoica tuvo lugar entre el Devónico y el Pérmico?"

];

//Declaro Array Respuestas Ciencia
var respuestasCiencia = [
    "Acrofobia",
    "Albatros",
    "Neurona",
    "Ajolote",
    "Júpiter",
    "Carbonífero"
];

//Declaro Array Preguntas Deporte
var preguntasDeporte = [
    "¿Cuándo se celebró la primera Copa Mundial de Fútbol?",
    "¿Qué atleta tiene el record plusmarca de velocidad en los 100 metros lisos?",
    "¿Qué equipo de fútbol ha ganado más Mundiales hasta el momento?",
    "¿En qué ciudad española está el estadio de fútbol de Mestalla?",
    "¿Qué deporte jugado con un bate y una pelota es el más popular en la India?",
    "¿En qué ciudad argentina nació el futbolista Lionel Messi?"
];

//Declaro Array Respuestas Deporte
var respuestasDeporte = [
    "1930",
    "Usain Bolt",
    "Brasil",
    "Valencia",
    "Críquet",
    "Rosario"
];

//Declaro un array main para las preguntas de cada categoría
var preguntasArray = new Array(5);
preguntasArray[0] = preguntasGeografia;
preguntasArray[1] = preguntasArte;
preguntasArray[2] = preguntasEspectaculo;
preguntasArray[3] = preguntasHistoria;
preguntasArray[4] = preguntasCiencia;
preguntasArray[5] = preguntasDeporte;

//Declaro un array main para las respuestas de cada categoría
var respuestasArray = new Array(5);
respuestasArray[0] = respuestasGeografia;
respuestasArray[1] = respuestasArte;
respuestasArray[2] = respuestasEspectaculo;
respuestasArray[3] = respuestasHistoria;
respuestasArray[4] = respuestasCiencia;
respuestasArray[5] = respuestasDeporte;

var pregunta = "";
var posibleRespuesta = "";

//Bucle For construido para recorrer la longitud del array de preguntas y acumular el contenido de la "i" en una variable
for (var i = 0; i<=preguntasArray.length; i++){
    pregunta += preguntasArray[i];
}

//Bucle For construido para recorrer la longitud del array de respuestas y acumular el contenido de la "i" en una variable
for (var i = 0; i<=respuestasArray.length; i++){
    posibleRespuesta += respuestasArray[i];
}

//Genero número random
var numRandom = Math.floor(Math.random()*preguntasArray.length);

var respuestaActual = '';

//Inicio las variables de conteo
var conteo = 0;
var conteoIncorrecto = 0;
 
function seleccionarPregunta(){
    
    //Declaro el valor a la variable que recoje del HTML
    var valor = document.getElementById("tipoPregunta");
    valor = valor[valor.selectedIndex].id

    //Compruebo que el valor sea diferente a "-"
    if(valor!='-'){
        valor = parseInt(valor);
        mostrarPregunta(valor);
    }
}

//Creo el menú del desplegable sobre las categorias
function mostrarPregunta(categoria){
    switch(categoria){
            case 0: 
                var respuesta = preguntasGeografia[numRandom];
                respuestaActual = respuestasGeografia[numRandom];
            break;
            case 1: 
                var respuesta = preguntasArte[numRandom];
                respuestaActual = respuestasArte[numRandom];
            break;
            case 2: 
                var respuesta = preguntasEspectaculo[numRandom];
                respuestaActual = respuestasEspectaculo[numRandom];
            break;
            case 3: 
                var respuesta = preguntasHistoria[numRandom];
                respuestaActual = respuestasHistoria[numRandom];
            break;
            case 4:                             
                var respuesta = preguntasCiencia[numRandom];
                respuestaActual = respuestasCiencia[numRandom];
            break;

            case 5:                             
                var respuesta = preguntasDeporte[numRandom];
                respuestaActual = respuestasDeporte[numRandom];
            break;

        }
    document.getElementById(categoria).style.display = "none"; 
    esconderTitulo();
    document.getElementById("Pregunta").innerHTML = respuesta+'<br>';
}

//Genero número aleatorio para asignarlo al array principal de preguntas
function preguntaRandom(){
    return numRandom = Math.floor(Math.random()*preguntasArray.length);
}

//
function aceptarRespuesta(){
    //Declaro e inicio variable con el valor del id "Respuesta" del HTML
    var respuesta = document.getElementById("Respuesta").value;
    if(respuesta==''){return false;} //Controlo que la respuesta no sea en blanco y el botón aceptar no es válido sin contenido

    //Bucle if para comparar el resultado 
    if(respuesta===respuestaActual){
        conteo++; 
        if(conteo == 4){
            alert('¡Ennhorabuena has ganado!');
        }
    }
    else{
        conteoIncorrecto++;
        if(conteoIncorrecto == 3){
            alert('Lo siento, has perdido');
        }

    }
    //Añado "-" en la primera opción al cargar el HTML en "Elije una"
    document.getElementById("tipoPregunta").value = '-';
    //Una vez se cargue una nueva categoría, el desplegable de seleccionar categoría aparece vacío
    document.getElementById("Respuesta").value = '';
    mostrarTitulo();
}

//Oculto y bloqueo la categoria una vez vuelvo al menú desplegable
function esconderTitulo(){
    document.getElementById("DivTitulo").style.display = "none";

    document.getElementById("DivPregunta").style.display = "block";

}

//Oculto y bloqueo la categoria una vez vuelvo al menú desplegable
function mostrarTitulo(){
    document.getElementById("DivTitulo").style.display = "block";

    document.getElementById("DivPregunta").style.display = "none";
}
