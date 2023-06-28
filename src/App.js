import Header from './components/header/Header';
import dataJSON from './data.json';
import Jobs from './components/jobs/Jobs';
import manage from './assets/images/manage.svg';
import account from './assets/images/account.svg';
import eyecam from './assets/images/eyecam-co.svg';
import faceit from './assets/images/faceit.svg';
import insure from './assets/images/insure.svg';
import loopStudio from './assets/images/loop-studios.svg';
import myHome from './assets/images/myhome.svg';
import photosnap from './assets/images/photosnap.svg';
import shortly from './assets/images/shortly.svg';
import airFilter from './assets/images/the-air-filter-company.svg';

const imgList = [
  photosnap,
  manage,
  account,
  myHome,
  loopStudio,
  faceit,
  shortly,
  insure,
  eyecam,
  airFilter,
];

function App() {
  const dataItem = dataJSON.map((objJSON, i) => ({
    id: objJSON.id,
    company: objJSON.company,
    new: objJSON.new,
    featured: objJSON.featured,
    position: objJSON.position,
    postedAt: objJSON.postedAt,
    contract: objJSON.contract,
    location: objJSON.location,
    label: [
      objJSON.role,
      objJSON.level,
      ...objJSON.languages,
      ...objJSON.tools,
    ],
    logo: imgList[i],
  }));

  return (
    <div className="font-mainFont ">
      <Header />
      <Jobs dataItem={dataItem} imgSrc={manage} />
    </div>
  );
}

export default App;

// {

// },
