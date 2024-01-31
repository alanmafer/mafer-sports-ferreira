import FeatherIcon from 'feather-icons-react';

export default function Cartwidget () {
    return (
        <a className='relative cursor-pointer'>
          <span className='absolute top-[20px] right-[-10px] bg-red-600 rounded-full h-6 w-6 text-center text-white'>0</span>
          <FeatherIcon icon="shopping-bag"  className='w-8 h-8'/>
        </a>        
    )
}