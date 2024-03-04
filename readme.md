# Juego de Wordle

 El objetivo del juego es adivinar una palabra oculta de 5 letras. Tienes 6 intentos para adivinar la palabra correcta, y después de cada intento, el juego te dará una respuesta sobre tu suposición.

## Empezando

Para jugar, simplemente abre el archivo ingresa en el enlace, el repositorio se encuentra desplegado

## Cómo Jugar

1. Ingresa una palabra de 5 letras en el campo de entrada.
2. Haz clic en el botón "Adivinar" o presiona Enter para enviar tu suposición.
3. El juego te dará feedback sobre tu suposición:
   - Las letras verdes indican letras correctas en la posición correcta.
   - Las letras amarillas indican letras correctas en la posición incorrecta.
   - Las letras grises indican letras incorrectas.
4. Sigue adivinando hasta que adivines la palabra correcta o te quedes sin intentos.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript
- API de Palabras Aleatorias

## API de Palabras Aleatorias

El juego utiliza una API para obtener una palabra aleatoria de 5 letras de un diccionario. El endpoint de la API utilizado es `https://api.datamuse.com/words?sp=?????`, donde `sp=?????` indica que la API debe devolver una palabra de 5 letras. La respuesta de la API se utiliza como la palabra objetivo para el juego.

