import React from 'react'
import Card from './Card'
import imagel1 from '../Assets/image1.jpg'
import imagel2 from '../Assets/image2.jpg'
import imagel3 from '../Assets/image3.jpg'

const cards = [
  {
    id: 1,
    title: 'Fazt Web',
    image: imagel1,
    url: 'https://store.epicgames.com/es-ES/p/destiny-2'
  },
  {
    id: 2,
    title: 'Fazt Blo',
    image: imagel2,
    url: 'https://www.twitch.tv/todowarcraft'
  },
  {
    id: 3,
    title: 'Fazt YouTube',
    image: imagel3,
    url: 'https://www.youtube.com/shorts/3wnzzlq71Ac'
  },

]

function Cards() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
        {
          cards.map(card => (
            <div className='col-md-4' key={card.id}>
              <Card title={card.title} imageSource={card.image} url={card.url}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cards