import { useContext, useEffect, useState } from "react";
import { TravelContext } from "../contex/TravelContext";
import { Link, useParams } from "react-router-dom";

function EditTravel () {
    const{  travels, setTravels} = useContext(TravelContext);
    const[currentTravel, setCurrentTravel] = useState();
    const {destination} = useParams();
    const [dest, setDest] = useState("");
    const[date, setDate] = useState("");
    const [group, setGroup ] = useState("");
    useEffect(() => {
        const currTravel = travels.filter(t => t.destination === destination) [0];
        setCurrentTravel(currTravel);
    },  [destination]);
    const saveChanges = () =>{
        const obj = {
            destination: dest,
            date: date,
            group: group
        };


        const updatedValues = travels.map(travel =>
            travel.destination === destination ? obj : travel
        );
        setTravels(updatedValues);
    }
    return (
<>
        <input type="text" value={ dest || currentTravel?.destination} onChange={(e) => setDest(e.target.value)} placeholder="Destination" />
        <input type="text" value={date || currentTravel?.date} onChange={(e) => setDate(e.target.value)} placeholder="date" />
      
        <input type="text" value={ group||currentTravel?.group} onChange={(e) => setGroup(e.target.value)} placeholder="group" />
<button onClick={saveChanges}>
    <Link to="/travelList" >
     save </Link> </button>
</>

    )
}

export default EditTravel;