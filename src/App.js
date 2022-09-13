import './App.css';
import Simpsons from "./components/Simpsons";



function App(){
    let classNameItem = 'card';
    return(
        <div className="wrap">


            <div className = 'main'>
                <Simpsons
                    itemName = {'Homer Jay Simpson'}
                    pic={"https://static.wikia.nocookie.net/simpsons/images/0/0c/Homer_simpson_and_donut-1090.png/revision/latest?cb=20110911170400&path-prefix=pl"}
                />
            </div>

            <div className = 'main'>
                <Simpsons
                    itemName = {'Marjorie Simpson'}
                    pic={"https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png/revision/latest?cb=20201222215318"}
                />
            </div>

            <div className = 'main'>
                <Simpsons
                    itemName = {'Bartholomew JoJo Simpson'}
                    pic={"https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png/revision/latest?cb=20190409004756"}
                />
            </div>

            <div className = 'main'>
                <Simpsons
                    itemName = {'Lisa Marie Simpson'}
                    pic={"https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png/revision/latest?cb=20190409004811"}
                />
            </div>

            <div className = 'main'>
                <Simpsons
                    itemName = {'Abraham Jebediah'}
                    pic={"https://static.wikia.nocookie.net/simpsons/images/a/a9/Abraham_Simpson.png/revision/latest?cb=20201222214913"}
                />
            </div>





        </div>
    )
}

    export default App;



