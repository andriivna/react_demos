
import Character from './Characters';

function Characters(){
    let [characters, setCharacters] = useState([]);
    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => (
            setCharacters(value.results)
        ));

    return(<div>
        {characters.map((character,index) =>(<Character item = {character.results} key={index}/>))}
    </div>)
}

export default Characters

