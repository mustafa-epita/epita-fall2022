import { useState } from "react";

const Animals = () => {
    const [animalsList, setAnimalsList] = useState(['Dog', 'Lion', 'Bird', 'Fish']);
    const [searchQuery, setSearchQuery] = useState("");
    const [newAnimal, setNewAnimal] = useState("");

    const onChangeFilterHandler = (event) => {
        setSearchQuery(event.target.value);
    };

    const onChangeAnimalHandler = (event) => {
        setNewAnimal(event.target.value);
    };

    const handleAnimalAdd = (event) => {
        event.preventDefault();
        if (!newAnimal) return
        setAnimalsList([...animalsList, newAnimal]);
        setNewAnimal('');
    }

    return <>
        <h1 className="title">My animals</h1>
        
        <div>
            <input 
                type="input" 
                name="query" 
                value={searchQuery} 
                placeholder='Filter'
                onChange={onChangeFilterHandler}
            />
        </div>

        <ul className="animals-list">
            { animalsList
                .filter((animal => animal.toLowerCase().startsWith(searchQuery.toLowerCase())))
                .map(animal => <li key={`list-${animal}`}>{animal}</li>)
            }
        </ul>

        <form onSubmit={handleAnimalAdd}>
            <label>Add a animal</label>
            <input 
                type="test" 
                name="animal" 
                value={newAnimal}
                placeholder='Name of you animal'
                onChange={onChangeAnimalHandler}
            />
            <button type="submit" disabled={!newAnimal}>Add</button>
        </form>
    </>
}

export default Animals;