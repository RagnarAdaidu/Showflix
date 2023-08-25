export function getName(arr){
  return arr.map(item => {
    return item.name
  }).join(', ')
}

export function getLanguages(arr){
  return arr.map(item => {
    return item.english_name
  }).join(', ')
}

export function getPosterURL(posterPath){
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`
}

export function useTimeHook(nums){
	let hh = Math.floor(nums / 60)
	let mm = nums % 60

	return `${hh}hr ${mm}mins`
}

export function convertDate(date){
  if(Number(date.split('-')[1]) === 1){
    return date = date.replace('-01-', ' Jan ')
  }
  if(Number(date.split('-')[1]) === 2){
    return date = date.replace('-02-', ' Feb ')
  }
  if(Number(date.split('-')[1]) === 3){
    return date = date.replace('-03-', ' Mar ')
  }
  if(Number(date.split('-')[1]) === 4){
    return date = date.replace('-04-', ' Apr ')
  }
  if(Number(date.split('-')[1]) === 5){
    return date = date.replace('-05-', ' May ')
  }
  if(Number(date.split('-')[1]) === 6){
    return date = date.replace('-06-', ' Jun ')
  }
  if(Number(date.split('-')[1]) === 7){
    return date = date.replace('-07-', ' Jul ')
  }
  if(Number(date.split('-')[1]) === 8){
    return date = date.replace('-08-', ' Aug ')
  }
  if(Number(date.split('-')[1]) === 8){
    return date = date.replace('-09-', ' Sep ')
  }
  if(Number(date.split('-')[1]) === 10){
    return date = date.replace('-10-', ' Oct ')
  }
  if(Number(date.split('-')[1]) === 11){
    return date = date.replace('-11-', ' Nov ')
  }
  if(Number(date.split('-')[1]) === 12){
    return date = date.replace('-12-', ' Dec ')
  }
  

}

export const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

export const moviePosters = [
  "https://i.ebayimg.com/images/g/5DIAAOSwfOBkMimN/s-l1600.jpg",
  "https://artofthemovies.co.uk/cdn/shop/products/IMG_4154_1-780453.jpg?v=1618440300",
  "https://img.buzzfeed.com/buzzfeed-static/complex/images/wjnhpz3osrai5aningjl/titanic.jpg?downsize=900:*&output-format=auto&output-quality=auto",
  "https://themarketingbirds.com/wp-content/uploads/2021/04/Lemony-Snickets-Series-of-Unfortunate-Events.jpg",
  "https://ichef.bbci.co.uk/news/1536/cpsprodpb/AF9D/production/_128875944_godfather_hq_sbs.png",
  "https://ichef.bbci.co.uk/news/1536/cpsprodpb/AF9D/production/_128875944_godfather_hq_sbs.png",
];

export default moviePosters;