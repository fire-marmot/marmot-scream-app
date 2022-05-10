import MainGreeting from '../sections/homePage/mainGreeting';
import MovieCard from '../sharedComponents/movieCard';


const MovieList1 = ({number}) => {
  const movies = [];
  for (let i = 0; i<number; i++) {
    movies.push(<MovieCard 
      title={'Sample Movie Card'}
      imageUrl={'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg'}
      description={'While the young adults are exploring the atoll, and sometimes each other, the shark takes every opportunity to eat them.'}
      service={'Netflix'}
      url={'https://www.badmovies.org/capsules/1/2headshark/'}
      />)
  }
  return movies;
}

const MovieList2 = ({ number }) => {
  const movies = [];
  for (let i = 0; i<number; i++) {
    movies.push(<MovieCard 
      title={'Sample Movie Card2'}
      imageUrl={'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg'}
      description={'While the young adults are exploring the atoll, and sometimes each other, the shark takes every opportunity to eat them.'}
      service={'Netflix'}
      url={'https://www.badmovies.org/capsules/1/2headshark/'}
      />)
  }
  return movies;
}

export default function Home() {
  return (
      <main className="text-center m-5 pt-5" id='main-content'>
        <MainGreeting/>
        <div className='grid grid-cols-4'>
          <div style={{ overflow: 'hidden', maxHeight: '400px', scroll:'smooth'}}>
            <MovieList1 number={10}/>
          </div>
          <div className='scroll-auto'>
            <MovieList2 number={12} className='cols-1'/>
          </div>
        </div>
      </main>
  )
}
