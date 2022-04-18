import { getMovies, getByYear, getByMovieName } from "./db";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        moviesByYear: (_, {year}) => getByYear(year),
        moviesByMovieName: (_, {name}) => getByMovieName(name),
    },
    // Mutation: {
    //     addMovie: (_, {name, score}) => addMovie(name, score),
    //     deleteMovie: (_, {id}) => deleteMovie(id),
    // }
};

export default resolvers;