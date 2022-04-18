export const people = [
    {
        id: 0,
        name: "Koo",
        age: 25,
        gender: "femal",
    },
    {
        id: 1,
        name: "Kim",
        age: 28,
        gender: "male",
    },
    {
        id: 2,
        name: "Lim",
        age: 27,
        gender: "female",
    },
    {
        id: 3,
        name: "Lee",
        age: 32,
        gender: "male",
    },
    {
        id: 4,
        name: "Gab",
        age: 32,
        gender: "male",
    },
    {
        id: 5,
        name: "KimBab",
        age: 18,
        gender: "female",
    },
    {
        id: 6,
        name: "Kang",
        age: 31,
        gender: "female",
    },
    {
        id: 7,
        name: "우우",
        age: 37,
        gender: "male",
    },
];

export const getById = (id) => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
};
