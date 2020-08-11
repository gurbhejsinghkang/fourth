class Movie {
    constructor(title) {
        this.title = title;
    }
    story() {
        return 'no story here';
    }
    get name() {
        return this.title;
    }
}

class Batman extends Movie {
    constructor() {
        super('Batman');
    }
    //
    story() {
        return 'batman protect the city';
    }

}

class Starwars extends Movie {
    constructor() {
        super('star wars');
    }
    //
    story() {
        return 'the force destroys everything';
    }
}

class inheritance extends Movie {
    constructor() {
        super('star wars');
    }
    //
    story() {
        return 'the force destroys everything';
    }
}

function selectMovie() {
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    switch (randomNumber) {
        case 1:
            return new Batman();
            break;
        case 2:
            return new starWars();
            break;
        case 3:
            return new inheritance();
            break;
    }
}
for (let i = 0; i < 3; i++) {
    let movie = selectMovie();
    console.log('movie ' + movie.title + ' is about ' + movie.story);
}