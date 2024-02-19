import React from 'react'
import Search from '../../components/Search';
import ItenListContainer from '../../components/ItemListContainer';

function Home() {
  return (
    <div className='py-5 px-20'>
        <Search />
        <ItenListContainer />
    </div>
  )
}

export default Home;