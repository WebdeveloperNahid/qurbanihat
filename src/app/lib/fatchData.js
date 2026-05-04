export async function getCowDetailsById (id) {
    const res = await fetch("http://localhost:3000/animals.json");
    const data = await res.json();
    return data.find(animal => animal.id === parseInt(id));

}