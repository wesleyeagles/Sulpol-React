import React from 'react'

const TopNavBar = () => {

  return (
    <div>
    <nav className='bg-bg-topbar h-10 hidden w-full top-0 z-50 lg:block fixed' id='topbar'>
      <div className='container mx-auto h-full'>
          <div className='w-full flex items-center justify-between h-full'>
            <a target="_blank" href='mailto:comercial@sulpo.com.br' className='text-text-topbar text-tiny flex items-center gap-2 h-8'> <svg className='w-4 h-3' xmlns="http://www.w3.org/2000/svg" width="515.206" height="358.41" viewBox="0 0 515.206 358.41"> <g id="noun-mail-1018578" transform="translate(-92.398 -100.788)"> <path id="Caminho_1" data-name="Caminho 1" d="M102.55,100.8A11.2,11.2,0,0,0,92.4,112V448a11.2,11.2,0,0,0,11.2,11.2H596.4A11.2,11.2,0,0,0,607.6,448V112a11.2,11.2,0,0,0-11.2-11.2H103.6c-.352-.016-.7-.016-1.051,0Zm31.324,22.4h432.25L350,299.078ZM114.8,136.5,343,322.179a11.207,11.207,0,0,0,14,0L585.2,136.5V436.8H114.8Z" fill="#81d742"/> </g></svg>comercial@sulpol.com.br</a>
            <a target="_blank" href='https://www.google.com/maps/place/R.+S%C3%A3o+Paulo,+247+-+Mathias+Velho,+Canoas+-+RS,+92340-180/data=!4m2!3m1!1s0x95196557d820fb27:0xd4551155adaedb1c?sa=X&ved=2ahUKEwjrtPeU2ev3AhUXFbkGHWGUD5AQ8gF6BAgfEAE' className='text-text-topbar text-tiny flex items-center gap-2 h-8'><svg className='w-3 h-4' xmlns="http://www.w3.org/2000/svg" width="375.358" height="521.007" viewBox="0 0 375.358 521.007"> <g id="noun-pin-4755050" transform="translate(-162.341 -19.487)"> <path id="Caminho_2" data-name="Caminho 2" d="M350.01,115.35a91.836,91.836,0,1,1-64.934,26.9,91.56,91.56,0,0,1,64.934-26.9Zm0-95.863A187.676,187.676,0,0,1,537.7,207.176c0,36.992-20.059,86.27-47.426,136.16-42.672,77.785-103.41,157.87-131.93,193.17a10.711,10.711,0,0,1-16.766-.137C313,501.021,252.37,421.019,209.767,343.349c-27.367-49.879-47.426-99.156-47.426-136.16A187.676,187.676,0,0,1,350.03,19.5ZM467.58,89.612a166.273,166.273,0,0,0-283.843,117.57c0,32.98,18.934,78.809,44.754,125.87,38.172,69.57,91.125,141.14,121.52,179.64,30.391-38.508,83.344-110.06,121.52-179.64,25.82-47.074,44.754-92.887,44.754-125.87a165.754,165.754,0,0,0-48.7-117.57ZM399.791,157.4A70.408,70.408,0,1,0,420.4,207.178,70.186,70.186,0,0,0,399.791,157.4Z" fill="#81d742"/> </g></svg> Rua São Paulo, n° 247, Canoas (RS)  CEP: 92340-180 - Brasil</a>
            <a target="_blank" href='tel:555130756565' className='text-text-topbar text-tiny flex items-center gap-2 h-8'><svg className='w-4' xmlns="http://www.w3.org/2000/svg" width="504.006" height="503.869" viewBox="0 0 504.006 503.869"> <g id="noun-phone-56382" transform="translate(-98.008 -28.059)"> <path id="Caminho_3" data-name="Caminho 3" d="M596.83,451.46C568.279,519.9,501.342,531.9,479.47,531.9c-6.422,0-106.46,5.3-250.25-131.1C113.5,291.031,99.36,172.991,98.13,150.561c-1.2-21.844,5.055-76.645,80.441-117.36,9.34-5.047,27.859-7.281,32.641-2.5,2.121,2.121,65.4,106.24,67.059,109.69a23.259,23.259,0,0,1,2.5,10.164q0,7.131-10.168,17.836a173.513,173.513,0,0,1-22.113,19.617,214.861,214.861,0,0,0-22.121,18.906Q216.2,216.9,216.2,223.324c.461,11.1,9.559,50.883,78.883,111.79,69.336,60.926,102.73,78.09,105.95,79.277a24.115,24.115,0,0,0,8.023,1.773q6.428,0,16.414-10.16c6.652-6.781,29.035-37.457,36.172-44.238s13.082-10.16,17.84-10.16a23.236,23.236,0,0,1,10.16,2.492c3.449,1.664,107.7,62.668,109.7,64.707,5.406,5.551,1.586,22.855-2.5,32.652" fill="#81d742"/> </g></svg> +55 51 3075-6565 </a>
          </div>
      </div>
    </nav> 

    </div>
  )
}

export default TopNavBar