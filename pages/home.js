import MainGreeting from '../sections/homePage/mainGreeting';
import MovieCarousel from '../sections/homePage/movieCarousel';
import { GENRES } from '../sharedComponents/enums';
import { useSession } from 'next-auth/react';
import { useMovieResource } from '../sharedComponents/MarmotProvider/useMovieResource'

import { 
  useMovieDB, 
  useUpdateMovieDB,
  useWatchedContext,
  useUpdateWatchedContext,
  useLikedContext,
  useUpdateLikedContext,
 } from '../sharedComponents/MarmotProvider/marmotProvider';

const MovieCollection = [
  {
    title: 'Batman',
    movieID: 1,
    imageUrl: 'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg',
    description: 'This is a movie about guano and blah blahd k;ajamnklf aaoijf;lk aodijfo ma;paosiuf a;ldf a;lsdfas jasdf;lkamf;qwlejqowj fa;odlsf jf;lk aodijfo ma;paosiuf a;ldf a;lsdfas jasdf;lkamf;qwlejqowj fa;odlsf',
    service: 'Shut up',
    url:'https://www.badmovies.org/capsules/1/2headshark/'
  },
  {
    title: 'Superman',
    movieID: 2,
    imageUrl: 'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg',
    description: 'This is a movie about a guy in a cape',
    service: 'Shut up again',
    url:'https://www.badmovies.org/capsules/1/2headshark/'
  },
  {
    title: 'Pookie Goes to Town',
    movieID: 3,
    imageUrl: 'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg',
    description: 'This is a movie about Pookie pookying around.',
    service: 'Pookie up',
    url:'https://www.badmovies.org/capsules/1/2headshark/'
  },
  {
    title: 'Batman',
    movieID: 4,
    imageUrl: 'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg',
    description: 'This is a movie about guano and blah blahd k;ajamnklf aaoijf;lk aodijfo ma;paosiuf a;ldf a;lsdfas jasdf;lkamf;qwlejqowj fa;odlsf jf;lk aodijfo ma;paosiuf a;ldf a;lsdfas jasdf;lkamf;qwlejqowj fa;odlsf',
    service: 'Shut up',
    url:'https://www.badmovies.org/capsules/1/2headshark/'
  },
  {
    title: 'Superman',
    movieID: 5,
    imageUrl: 'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg',
    description: 'This is a movie about a guy in a cape',
    service: 'Shut up again',
    url:'https://www.badmovies.org/capsules/1/2headshark/'
  },
  {
    title: 'Pookie Goes to Town',
    movieID: 6,
    imageUrl: 'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg',
    description: 'This is a movie about Pookie pookying around.',
    service: 'Pookie up',
    url:'https://www.badmovies.org/capsules/1/2headshark/'
  },
  {
    title: 'Batman',
    movieID: 7,
    imageUrl: 'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg',
    description: 'This is a movie about guano and blah blahd k;ajamnklf aaoijf;lk aodijfo ma;paosiuf a;ldf a;lsdfas jasdf;lkamf;qwlejqowj fa;odlsf jf;lk aodijfo ma;paosiuf a;ldf a;lsdfas jasdf;lkamf;qwlejqowj fa;odlsf',
    service: 'Shut up',
    url:'https://www.badmovies.org/capsules/1/2headshark/'
  },
  {
    title: 'Superman',
    movieID: 8,
    imageUrl: 'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg',
    description: 'This is a movie about a guy in a cape',
    service: 'Shut up again',
    url:'https://www.badmovies.org/capsules/1/2headshark/'
  },
  {
    title: 'Pookie Goes to Town',
    movieID: 9,
    imageUrl: 'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg',
    description: 'This is a movie about Pookie pookying around.',
    service: 'Pookie up',
    url:'https://www.badmovies.org/capsules/1/2headshark/'
  },
  {
    title: 'Batman',
    movieID: 10,
    imageUrl: 'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg',
    description: 'This is a movie about guano and blah blahd k;ajamnklf aaoijf;lk aodijfo ma;paosiuf a;ldf a;lsdfas jasdf;lkamf;qwlejqowj fa;odlsf jf;lk aodijfo ma;paosiuf a;ldf a;lsdfas jasdf;lkamf;qwlejqowj fa;odlsf',
    service: 'Shut up',
    url:'https://www.badmovies.org/capsules/1/2headshark/'
  },
  {
    title: 'Superman',
    movieID: 11,
    imageUrl: 'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg',
    description: 'This is a movie about a guy in a cape',
    service: 'Shut up again',
    url:'https://www.badmovies.org/capsules/1/2headshark/'
  },
  {
    title: 'Pookie Goes to Town',
    movieID: 12,
    imageUrl: 'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg',
    description: 'This is a movie about Pookie pookying around.',
    service: 'Pookie up',
    url:'https://www.badmovies.org/capsules/1/2headshark/'
  },
]


export default function Home() {
  const { data, status} = useSession();
  const isLoggedIn = !!(data?.user?.name);
  
  const movieDB = useMovieDB();
  const updateMovieDB = useUpdateMovieDB();

  const userLiked = useLikedContext();
  const updateLiked = useUpdateLikedContext();

  const userWatched = useWatchedContext();
  const updateWatched = useUpdateWatchedContext();

  const addWatched = (movieID) => {
    updateWatched.add(movieID);
  }

  const removeWatched = (movieID) => {
    updateWatched.remove(movieID)
  }

  const addLiked = (movieID) => {
    updateLiked.add(movieID)
  }

  const removeLiked = (movieID) => {
    updateLiked.remove(movieID)
  }

  const handleLike = ( movieID ) => {
    console.log('heart click')
    if (userLiked.includes(movieID)) {
      removeLiked(movieID)
    } else {
      addLiked(movieID)
    }
  }
  const movieData = useMovieResource()
  if (!isLoggedIn) {
      return <h1>Go away!</h1>
  }
  console.log(movieData)
  return (

      <main className="pt-5 m-5 text-center" id='main-content'>
        <div><button onClick={addLiked}>add liked</button></div>
        <div><button onClick={removeLiked}>remove liked</button></div>
        <div><button onClick={addWatched}>add Watched</button></div>
        <div><button onClick={removeWatched}>remove Watched</button></div>

        <MainGreeting/>
        <MovieCarousel genre={GENRES.adult} movies={MovieCollection} handleLike={handleLike}/>
        <MovieCarousel genre={GENRES.adventure} movies={MovieCollection} handleLike={handleLike}/>
        <MovieCarousel genre={GENRES.crime} movies={MovieCollection} handleLike={handleLike}/>
      </main>
  )
}

