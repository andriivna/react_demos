import './App.css';
import Simpsons from "./components/Simpsons";
import Characters from "./components/Characters";



function App(){
    let classNameItem = 'card';
    return(
        <div className={classNameItem}>
            <div className='top'>
                <h1>Simpsons</h1>
            </div>
         <div className='wrap'>
            <div className = 'main'>
                <Simpsons
                    itemName = {'Homer Jay Simpson'}
                    pic={"https://static.wikia.nocookie.net/characters/images/b/bd/Homer_Simpson.png"}
                />
            </div>

            <div className = 'main'>
                <Simpsons
                    itemName = {'Marjorie Simpson'}
                    pic={"https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png"}
                />
            </div>

            <div className = 'main'>
                <Simpsons
                    itemName = {'Bartholomew JoJo Simpson'}
                    pic={"https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png"}
                />
            </div>

            <div className = 'main'>
                <Simpsons
                    itemName = {'Lisa Marie Simpson'}
                    pic={"https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png"}
                />
            </div>

            <div className = 'main'>
                <Simpsons
                    itemName = {'Abraham Jebediah'}
                    pic={"https://static.wikia.nocookie.net/simpsons/images/a/a9/Abraham_Simpson.png"}
                />
            </div>

        </div>
            <div className='top'>
                <h1>Characters</h1>
            </div>
            <div className='exact'>
                <div className='part'>
                    <Characters
                    itemId ={'787'}
                    itemName = {'Two Crows'}
                    itemStatus = {'Alive'}
                    itemSpecies={'Animal'}
                    itemGender={'unknown'}
                    pic={'https://rickandmortyapi.com/api/character/avatar/787.jpeg'}/>
                </div>

                <div className='part'>
                    <Characters
                        itemId ={'152'}
                        itemName = {'Hammerhead Morty'}
                        itemStatus = {'unknown'}
                        itemSpecies={'Humanoid'}
                        itemGender={'Male'}
                        pic={'https://rickandmortyapi.com/api/character/avatar/152.jpeg'}/>
                </div>

                <div className='part'>
                    <Characters
                        itemId ={'435'}
                        itemName = {'Pripudlian'}
                        itemStatus = {'Alive'}
                        itemSpecies={'Alien'}
                        itemGender={'unknown'}
                        pic={'https://rickandmortyapi.com/api/character/avatar/435.jpeg'}/>
                </div>

                <div className='part'>
                    <Characters
                        itemId ={'441'}
                        itemName = {'Bearded Jerry'}
                        itemStatus = {'Alive'}
                        itemSpecies={'Human'}
                        itemGender={'Male'}
                        pic={'https://rickandmortyapi.com/api/character/avatar/441.jpeg'}/>
                </div>

                <div className='part'>
                    <Characters
                        itemId ={'620'}
                        itemName = {'Ramamama Lord'}
                        itemStatus = {'Alive'}
                        itemSpecies={'Human'}
                        itemGender={'Male'}
                        pic={'https://rickandmortyapi.com/api/character/avatar/620.jpeg'}/>
                </div>

                <div className='part'>
                    <Characters
                        itemId ={'587'}
                        itemName = {'Cavesnake'}
                        itemStatus = {'Dead'}
                        itemSpecies={'Animal'}
                        itemGender={'Male'}
                        pic={'https://rickandmortyapi.com/api/character/avatar/587.jpeg'}/>
                </div>


            </div>

            <div className='all'>
                <Characters/>

            </div>




        </div>
    )
}

    export default App;






