// fetch for All 

export async function getAllfatch() {
    const res = await fetch("https://qurbanihat-ecru.vercel.app/animals.json", {
        cache: "no-store"
    });
    const data = await res.json();
    return data;
}


// animal-details
export async function getCowDetailsById (id) {
    const res = await fetch("https://qurbanihat-ecru.vercel.app/animals.json",{ cache: "no-store"} );
    const data = await res.json();
    return data.find(animal => animal.id === parseInt(id));

}

// Features
 
export async function getFeaturedAnimals (id) {
    const res = await fetch("https://qurbanihat-ecru.vercel.app/animals.json",{ cache: "no-store"} );
    const data = await res.json();
   const cows = data.filter(animal => animal.type === "Cow").slice(0,2);
   const goats = data.filter(animal => animal.type === "Goat").slice(0,2);

   return [...cows, ...goats];

}

