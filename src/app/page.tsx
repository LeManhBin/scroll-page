'use client'
import Banners from './components/Banners'
import {bannerData} from '../data'


export default function Home() {
  
  return (
    <>
      {
        bannerData.map(banner => {
          return(
            <div key={banner.id} >
              <Banners banner={banner}/>
            </div>
          )
        })
      }
    </>
  )
}
