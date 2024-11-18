// File to store the fish data

const database = {
    fish: [
        {
            name: "Nemo",
            species: "Clownfish",
            length: 3,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://lumiere-a.akamaihd.net/v1/images/07ff8e314e2798d32bfc8c39f82a9601677de34c.jpeg?region=0%2C0%2C600%2C600"
        },
        {
            name: "Dory",
            species: "Blue Tang",
            length: 5,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://lumiere-a.akamaihd.net/v1/images/5b1aceba6bdd980653c0f64fb7ebc07cd28f8dd5.jpeg"
        },
        {
            name: "Bea Goldfishberg",
            species: "Common Goldfish",
            length: 16,
            location: "Living Room Fishbowl",
            diet: "Omnivore",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Gold_fish1.jpg/220px-Gold_fish1.jpg"
        },
        {
            name: "Gill",
            species: "Moorish Idol",
            length: 4,
            location: "Under the Sea",
            diet: "Omnivore",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Zanclus_cornutus_in_Kona.jpg/200px-Zanclus_cornutus_in_Kona.jpg"
        },
        {
            name: "Kenny",
            species: "Tiger Shark",
            length: 144,
            location: "Barrier Reefs",
            diet: "Carnivore",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Tiger_shark.jpg/220px-Tiger_shark.jpg"
        },
        {
            name: "Mr. Piranha",
            species: "Red-bellied piranha",
            length: 12,
            location: "South America",
            diet: "Carnivore",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Pygocentrus_nattereri_-_Karlsruhe_Zoo_01.jpg/220px-Pygocentrus_nattereri_-_Karlsruhe_Zoo_01.jpg"
        },
        {
            name: "Muddy Mudskipper",
            species: "Mudskipper",
            length: 10,
            location: "Hollywood, Yugoslavia",
            diet: "Detritivore",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/GambianMudskippers.jpg/220px-GambianMudskippers.jpg"
        },
        {
            name: "Marlin",
            species: "Royal Blue Tang",
            length: 6,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://example.com/images/marlin.jpg"
        },
        {
            name: "Bubbles",
            species: "Yellow Tang",
            length: 5,
            location: "Hawaiian Reefs",
            diet: "Herbivore",
            image: "https://example.com/images/bubbles.jpg"
        },
        {
            name: "Gill",
            species: "Moorish Idol",
            length: 15,
            location: "Pacific Coral Reefs",
            diet: "Omnivore",
            image: "https://example.com/images/gill.jpg"
        },
        {
            name: "Bruce",
            species: "Great White Shark",
            length: 12,
            location: "Coastal Waters",
            diet: "Carnivore",
            image: "https://example.com/images/bruce.jpg"
        },
        {
            name: "Flounder",
            species: "Flounder",
            length: 9,
            location: "Atlantic Ocean",
            diet: "Carnivore",
            image: "https://example.com/images/flounder.jpg"
        },
        {
            name: "Bloat",
            species: "Pufferfish",
            length: 10,
            location: "Indo-Pacific Region",
            diet: "Carnivore",
            image: "https://example.com/images/bloat.jpg"
        },
        {
            name: "Deb",
            species: "Black and White Damsel",
            length: 6,
            location: "Coral Reefs",
            diet: "Omnivore",
            image: "https://example.com/images/deb.jpg"
        },
        {
            name: "Mr. Ray",
            species: "Spotted Eagle Ray",
            length: 18,
            location: "Coastal Waters",
            diet: "Carnivore",
            image: "https://example.com/images/mr-ray.jpg"
        },
        {
            name: "Angie",
            species: "Angel Fish",
            length: 5,
            location: "Amazon Basin",
            diet: "Omnivore",
            image: "https://example.com/images/angie.jpg"
        },
        {
            name: "Oscar",
            species: "Oscar Fish",
            length: 15,
            location: "South American Rivers",
            diet: "Omnivore",
            image: "https://example.com/images/oscar.jpg"
        },
        {
            name: "Spike",
            species: "Lionfish",
            length: 12,
            location: "Indo-Pacific Region",
            diet: "Carnivore",
            image: "https://example.com/images/spike.jpg"
        },
        {
            name: "Goldie",
            species: "Goldfish",
            length: 6,
            location: "Freshwater Tanks",
            diet: "Omnivore",
            image: "https://example.com/images/goldie.jpg"
        },
        {
            name: "Lucky",
            species: "Discus",
            length: 9,
            location: "Amazon River Basin",
            diet: "Omnivore",
            image: "https://example.com/images/lucky.jpg"
        },
        {
            name: "Sammy",
            species: "Siamese Fighting Fish",
            length: 3,
            location: "Southeast Asia",
            diet: "Carnivore",
            image: "https://example.com/images/sammy.jpg"
        },
        {
            name: "Bluey",
            species: "Blue Gourami",
            length: 15,
            location: "Freshwater Rivers",
            diet: "Omnivore",
            image: "https://example.com/images/bluey.jpg"
        }
    ],
    tips: [
        {
            topic: "Water Temperature",
            text: "Maintain a consistent water temperature between 75-80°F (24-27°C) for most tropical fish."
        },
        {
            topic: "Water Quality",
            text: "Ensure the water is free from harmful chemicals by using a good filtration system and testing water parameters regularly."
        },
        {
            topic: "Feeding Schedule",
            text: "Feed fish in small amounts 1-2 times a day, and avoid overfeeding as it can lead to health problems and poor water quality."
        },
        {
            topic: "Tank Cleaning",
            text: "Clean the tank regularly by doing partial water changes, removing debris, and cleaning the glass to prevent algae buildup."
        },
        {
            topic: "Lighting",
            text: "Provide 8-12 hours of light daily to mimic natural conditions, but avoid excessive light to prevent algae growth."
        }
    ],
    locations: [
        {
            name: "Great Barrier Reef",
            country: "Australia",
            description: "The Great Barrier Reef is the world's largest coral reef system, supporting a diverse array of marine life."
        },
        {
            name: "Living Room Fishbowl",
            country: "Home Aquarium",
            description: "A small, often decorative aquarium in the home, providing a close-up view of fish and aquatic plants."
        },
        {
            name: "Under the Sea",
            country: "Ocean",
            description: "A general term describing the marine environment beneath the ocean's surface, home to diverse marine ecosystems."
        },
        {
            name: "Barrier Reefs",
            country: "Various Coastal Regions",
            description: "Natural underwater structures formed by coral growth, supporting numerous marine species and protecting coastlines."
        },
        {
            name: "South America",
            country: "Brazil, Peru, Colombia",
            description: "South American rivers and lakes are home to a rich variety of freshwater fish, including popular aquarium species like tetras and discus."
        },
        {
            name: "Hollywood, Yugoslavia",
            country: "Fictional",
            description: "A whimsical, imaginary place blending the glamor of Hollywood with the rustic charm of old Yugoslavia, featuring underwater scenes as if seen through a cinematic lens."
        }
    ]

}

// use get function to maintain integrity of the database with copy instead of reference
// this was used in book 3, Dynamite Duo, Defining Villains
export const getFishDatabase = () => {
    return database.fish.map(fishObj => ({ ...fishObj }))
};

export const getTipsDatabase = () => {
    return database.tips.map(tipObj => ({ ...tipObj }))
};

export const getLocationsDatabase = () => {
    return database.locations.map(locationObj => ({ ...locationObj }))
}