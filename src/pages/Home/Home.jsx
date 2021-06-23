import{TextField, Button} from "@material-ui/core";
import { useState } from "react";
import './Home.css';

const Home = () => {
    const[name, setName] = useState('')
    const[cataogory, setCatagory] = useState('');
    const[difficulty, setDifficulty] = useState('');
    const[error, setError] = useState(false);
    return (

    <div className="wrapper">
        <div className="wrapper__content">
            <span style={{fontSize:"40px"}}> Set up your details</span>
            <div className="settings__select">


      <TextField
    style={{marginBottom:25}}
    label="Enter your name"
    variant="outlined"
    color="secondary"
    onChange={(e) => setName(e.target.value)}
    />
    <TextField  
    select
    variant="outlined"
    label="select catagory"
    style={{marginBottom:30}}
    onChange={(e) => setCatagory(e.target.value)}
    >
        </TextField>
        <TextField 
        select
        variant="outlined"
        label="select defficulty"
        style={{marginBottom:30}}
        onChange={(e) =>setDifficulty(e.target.value)}
        
        > 


        </TextField>
        <Button 
        variant="contained"
        color="primary"
        size="large"
        >
            Start Quiz

        </Button>
        </div>
    </div>
    <img src="/backQuia.svg"  className="picture" alt="quiz"/>
    </div>
  )
}

export default Home
