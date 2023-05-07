import Image from 'next/image'
import Banners from './components/Banners'
import Header from './components/Header'
import {bannerData} from '../data'


export default function Home() {

  return (
    <div className='bg-gradient-to-br from-gray-400 to-gray-900'>
      <Header/>
      <>
        {
          bannerData.map(banner => {
            return(
              <Banners banner={banner}/>
            )
          })
        }
      </>
    </div>
  )
}
