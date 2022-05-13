import MainGreeting from '../sections/homePage/mainGreeting';
import MovieCarousel from '../sections/homePage/movieCarousel';
import { GENRES } from '../sharedComponents/enums';


const MovieCollection = [
  {
    title: 'Batman',
    imageUrl: 'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg',
    description: 'This is a movie about guano and blah blahd k;ajamnklf aaoijf;lk aodijfo ma;paosiuf a;ldf a;lsdfas jasdf;lkamf;qwlejqowj fa;odlsf jf;lk aodijfo ma;paosiuf a;ldf a;lsdfas jasdf;lkamf;qwlejqowj fa;odlsf',
    service: 'Shut up',
    url:'https://www.badmovies.org/capsules/1/2headshark/'
  },
  {
    title: 'Superman',
    imageUrl: 'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg',
    description: 'This is a movie about a guy in a cape',
    service: 'Shut up again',
    url:'https://www.badmovies.org/capsules/1/2headshark/'
  },
  {
    title: 'Pookie Goes to Town',
    imageUrl: 'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg',
    description: 'This is a movie about Pookie pookying around.',
    service: 'Pookie up',
    url:'https://www.badmovies.org/capsules/1/2headshark/'
  },
  {
    title: 'Batman',
    imageUrl: 'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg',
    description: 'This is a movie about guano and blah blahd k;ajamnklf aaoijf;lk aodijfo ma;paosiuf a;ldf a;lsdfas jasdf;lkamf;qwlejqowj fa;odlsf jf;lk aodijfo ma;paosiuf a;ldf a;lsdfas jasdf;lkamf;qwlejqowj fa;odlsf',
    service: 'Shut up',
    url:'https://www.badmovies.org/capsules/1/2headshark/'
  },
  {
    title: 'Superman',
    imageUrl: 'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg',
    description: 'This is a movie about a guy in a cape',
    service: 'Shut up again',
    url:'https://www.badmovies.org/capsules/1/2headshark/'
  },
  {
    title: 'Pookie Goes to Town',
    imageUrl: 'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg',
    description: 'This is a movie about Pookie pookying around.',
    service: 'Pookie up',
    url:'https://www.badmovies.org/capsules/1/2headshark/'
  },
  {
    title: 'Batman',
    imageUrl: 'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg',
    description: 'This is a movie about guano and blah blahd k;ajamnklf aaoijf;lk aodijfo ma;paosiuf a;ldf a;lsdfas jasdf;lkamf;qwlejqowj fa;odlsf jf;lk aodijfo ma;paosiuf a;ldf a;lsdfas jasdf;lkamf;qwlejqowj fa;odlsf',
    service: 'Shut up',
    url:'https://www.badmovies.org/capsules/1/2headshark/'
  },
  {
    title: 'Superman',
    imageUrl: 'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg',
    description: 'This is a movie about a guy in a cape',
    service: 'Shut up again',
    url:'https://www.badmovies.org/capsules/1/2headshark/'
  },
  {
    title: 'Pookie Goes to Town',
    imageUrl: 'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg',
    description: 'This is a movie about Pookie pookying around.',
    service: 'Pookie up',
    url:'https://www.badmovies.org/capsules/1/2headshark/'
  },
  {
    title: 'Batman',
    imageUrl: 'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg',
    description: 'This is a movie about guano and blah blahd k;ajamnklf aaoijf;lk aodijfo ma;paosiuf a;ldf a;lsdfas jasdf;lkamf;qwlejqowj fa;odlsf jf;lk aodijfo ma;paosiuf a;ldf a;lsdfas jasdf;lkamf;qwlejqowj fa;odlsf',
    service: 'Shut up',
    url:'https://www.badmovies.org/capsules/1/2headshark/'
  },
  {
    title: 'Superman',
    imageUrl: 'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg',
    description: 'This is a movie about a guy in a cape',
    service: 'Shut up again',
    url:'https://www.badmovies.org/capsules/1/2headshark/'
  },
  {
    title: 'Pookie Goes to Town',
    imageUrl: 'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg',
    description: 'This is a movie about Pookie pookying around.',
    service: 'Pookie up',
    url:'https://www.badmovies.org/capsules/1/2headshark/'
  },
]


export default function Home() {
  return (
      <main className="text-center m-5 pt-5" id='main-content'>
        <MainGreeting/>
        <MovieCarousel genre={GENRES.adult} movies={MovieCollection}/>
        <MovieCarousel genre={GENRES.adventure} movies={MovieCollection}/>
        <MovieCarousel genre={GENRES.crime} movies={MovieCollection}/>
      </main>
  )
}

