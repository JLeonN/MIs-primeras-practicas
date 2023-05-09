import './App.css';
import Testimonio from './Componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Estos son nuestros conocidos de la vida</h1>
        <Testimonio
        nombre='Dean Winchester'
        pais='Kansas'
        imagen='DeanWinchester'
        cargo='Cazador de monstruos'
        empresa='Lawrence Kansas'
        testimonio='Dean Winchester es el mayor de los hermanos Winchester. Nació el 24 de enero de 1979 en Lawrence, Kansas. Cuando era muy pequeño, su madre fue trágicamente asesinada por un emblemático demonio (Azazel, también conocido como "Ojos amarillos") que, se escabulló hasta su hogar en Kansas con el objetivo de maldecir a través de su sangre a su hermano pequeño Sam (Jared Padalecki), que por aquel entonces es un recién nacido.' />
        <Testimonio
        nombre='Penny'
        pais='Nebraska'
        imagen='Penny'
        cargo='Mesera'
        empresa='The Cheesecake Factory'
        testimonio='Penny (Kaley Cuoco), a lo largo de las 12 temporadas, se convirtió en uno de los personajes más importantes y queridos de la ficción' />
        <Testimonio
        nombre='John Wick'
        pais='Continental'
        imagen='John Wick'
        cargo='Sicario'
        empresa='Tarasov Mob'
        testimonio='Cuando Helen murió, lo perdí todo. Hasta que ese perro llegó a mi puerta. Un último regalo de mi esposa. En ese momento, recibí algo parecido a la esperanza. Una oportunidad para llorar solo. ¡Y su hijo me quitó eso! Robó Eso de mí! Mató eso de mí! La gente sigue preguntando si he vuelto. Y realmente no he tenido una respuesta. Pero ahora, sí, ¡estoy pensando que he vuelto! Así que puedes entregar tu hijo... ¡o puedes morir gritando junto a él!' />
      </div>
    </div>
  );
}

export default App;