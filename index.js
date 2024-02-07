//! Crear un array de 10 imagenes:

const array = [
  'https://assets.laliga.com/squad/2023/t186/p60772/256x278/p60772_t186_2023_1_001_000.png',
  'https://assets.laliga.com/squad/2023/t186/p88483/512x512/p88483_t186_2023_1_003_000.png',
  'https://assets.laliga.com/squad/2023/t186/p218449/512x512/p218449_t186_2023_1_003_000.png',
  'https://assets.laliga.com/squad/2023/t186/p50188/512x512/p50188_t186_2023_1_003_000.png',
  'https://assets.laliga.com/squad/2023/t186/p102380/512x512/p102380_t186_2023_1_003_000.png',
  'https://assets.laliga.com/squad/2023/t186/p244855/512x512/p244855_t186_2023_1_003_000.png',
  'https://assets.laliga.com/squad/2023/t186/p44989/512x512/p44989_t186_2023_1_003_000.png',
  'https://assets.laliga.com/squad/2023/t186/p223255/512x512/p223255_t186_2023_1_003_000.png',
  'https://assets.laliga.com/squad/2023/t186/p216183/512x512/p216183_t186_2023_1_003_000.png',
  'https://assets.laliga.com/squad/2023/t186/p246333/512x512/p246333_t186_2023_1_003_000.png',
  'https://assets.laliga.com/squad/2023/t186/p440077/512x512/p440077_t186_2023_1_003_000.png',
  'https://assets.laliga.com/squad/2023/t186/p61316/512x512/p61316_t186_2023_1_003_000.png'
];

//Estructura de HTML que quiero conseguir mediante JS:
/*<section>
    <div>
        <img src="" alt="imagen inyectada">
    </div>
    <div>
        <img src="" alt="imagen inyectada">
    </div>
    <div>
        <img src="" alt="imagen inyectada">
    </div>
    <div>
        <img src="" alt="imagen inyectada">
    </div>
    <div>
        <img src="" alt="imagen inyectada">
    </div>
</section>
*/

const section = document.createElement('section'); //Vacío y en el limbo.

for (let i = array.length - 1; i >= 0; i--) {
  const div = document.createElement('div'); //Crea un elemento <div>
  const img = document.createElement('img'); //Crea un elemento <img

  img.src = array[i]; // Asignar la URL como src del elemento <img>
  img.alt = 'imagen inyectada'; // Asignar "imagen inyectada" como alt del elemento <img>

  if (i === 9 || i === 5) {
    img.classList.add('special-image');
  }

  div.appendChild(img); // Agregar el elemento <img> al elemento <div>
  section.appendChild(div); // Agregar el elemento <div> al elemento <section>
}
document.body.appendChild(section);
