import CardAnimals from "./card";

async function getCategories() {
    const res = await fetch("http://localhost:3000/animals.json");
    const data = await res.json();
    return data;
}

const AllAnimals =async ({animal}) => {
    const allAnimals = await getCategories();
    console.log(allAnimals,"All----Animals")
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4  gap-4 container mx-auto" >
            {
                allAnimals.map(animal => <CardAnimals key={animal.id} animal={animal} ></CardAnimals>)
            }
        </div>
    );
};

export default AllAnimals;