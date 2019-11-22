const fishCollection =[
  {
    name:"Bart",
    species:"Piranha",
    location:"Amazon Forest",
    length:"14", 
    food:"Smaller Fish",
    image: "goldie-fish.jpg"
    },
  {
    name:"Guppy",
    species:"Guppy",
    location:"NC River",
    length:"1.5", 
    food:["Flakes", "Sponges"],
    image: "goldie-fish.jpg" 
    },
  {
    name:"Nemo",
    species:"Orange Clownfish",
    location:"Carribean",
    length:"3", 
    food:["Algae","Crustaceans"],
    image:"goldie-fish.jpg"
    },
  {
    name:"Dory",
    species:"Blue Tang",
    location:"Great Barrier Reef",
    length:"2.5", 
    food:["Seaweed", "Krill"],
    image:"blueTang.jpg"
    },
  {
    name:"Marlin",
    species:"Orange Clownfish",
    location:"Carribean",
    length:"5", 
    food:["Algae", "Crustaceans"], 
    image:"goldie-fish.jpg"
    },
  {
    name:"Goldie",
    species:"Goldfish",
    location:"Petsmart",
    length:"2", 
    food:["Flakes", "Sponges"],
    image:"goldie-fish.jpg"
    }
]
export const useFish = () => {
  return fishCollection
}

// immutability: our core, raw data should be private and hidden 
