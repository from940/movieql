import axios from "axios";

const BASE_URL = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json`
const key = "6e5e1406ff2259ca641ece681e5b4a6b"

export const getMovies = async () => {
    try {
        const {
            data: {
                movieListResult : { 
                    movieList: movies 
                }
            }
        } = await axios(BASE_URL, {
            params: {
                key,
                itemPerPage	: 100,
            }
        });
        return movies;
    } catch(err) {
        console.log("Error")
        return
    }
};

export const getByYear = async (year) => {
    try {
        const {
            data: {
                movieListResult : { 
                    movieList: movies 
                }
            }
        } = await axios(BASE_URL, {
            params: {
                key,
                itemPerPage	: 10,
                openStartDt	: year
            }
        });
        return movies;
    } catch(err) {
        console.log("Error")
        return
    }
};

export const getByMovieName = async (movieNm) => {
    try {
        let movieList = []

        const forLoop = async _ => {
            for (let page = 0; page<=10; page++){
                const {
                    data: {
                        movieListResult : { 
                            movieList: movies 
                        }
                    }
                } = await axios(BASE_URL, {
                    params: {
                        key,
                        itemPerPage	: 100,
                        curPage :page, 
                    }
                });
                console.log(movies);
                movieList.push(movies);
            }
        }
    
        console.log(movieList);
        // 100개씩 여러번 가져와서 movies로 만들기 Promise all 
        const filteredMovie = movieList.filter(movie => movie.movieNm.includes(movieNm) || movie.movieNmEn.includes(movieNm));
        return filteredMovie;
    } catch(err){
        console.log(err);
        return
    }
}; 

// export const getByDirectorName = async (directorNm) => {
//     const {
//         data: {
//             movieListResult : { 
//                 movieList: movies 
//             }
//         }
//     } = await axios(BASE_URL, {
//         params: {
//             key,
//             itemPerPage	: 100,
//             // curPage
//         }
//     });
//     console.log(movies)
//     const filteredMovie = movies.filter(movie => {
//         const direcotrList = movie.directors
        
//     });
//     return filteredMovie;
// }; 

// export const getByGenre = async (genre) => {
//     const {
//         data: {
//             movieListResult : { 
//                 movieList: movies 
//             }
//         }
//     } = await axios(BASE_URL, {
//         params: {
//             key,
//             itemPerPage	: 100,
//             // curPage
//         }
//     });
//     console.log(movies)
//     const filteredMovie = movies.filter(movie => {
//         const genreList = movie.genreAlt // , 단위로 잘라서 리스트 만들기
//     } );
//     return filteredMovie;
// }; 


// ================================ >>> ==================================

// export const getMovies = async () => {
//     try {
//         const response = await axios.get(BASE_URL);
//         const movies = response.data.movieListResult.movieList;
//         return movies
//     } catch(err) {
//         console.log('err')
//         return 
//     }
// };

// export const getById = (id) => {
//     const filteredMovie = movies.filter(movie => movie.id === id);
//     return filteredMovie[0];
// };

// export const getByYear = (year) => {
//     const filteredMovie = movies.filter(movie => movie.openDt.slice(0,4))
// }

// export const deleteMovie = (id) => {
//     const cleanedMovies = movies.filter(movie => movie.id !== id);
//     if (movies.length > cleanedMovies.length) {
//         movies = cleanedMovies;
//         return true;
//     } else {
//         return false;
//     }
// };

// const findLastId = () => {
//     return movies[movies.length-1].id;
// };

// export const addMovie = (name, score) => {
//     const newMovie = {
//         id: findLastId()+1,
//         name,
//         score
//     };
//     movies.push(newMovie);
//     return newMovie;
// };