let movies = [
    {
        id: 0,
        name: "어벤져스 - 홈커밍",
        score: 2
    },
    {
        id: 1,
        name: "스파이더맨 - 라스트게임",
        score: 4
    },
    {
        id: 2,
        name: "스타워즈 - 뉴타운",
        score: 5
    },
    {
        id: 3,
        name: "롤링루즈",
        score: 10
    },
];

export const getMovies = () => movies;

export const getById = (id) => {
    const filteredMovie = movies.filter(movie => movie.id === id);
    return filteredMovie[0];
};

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
};

const findLastId = () => {
    return movies[movies.length-1].id;
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: findLastId()+1,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};