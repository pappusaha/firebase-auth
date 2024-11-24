import { useContext } from "react";
import { DataContext } from "../../AuthProvider/AuthProvider";


const Home = () => {
   const user=useContext(DataContext)
   console.log(user)
    return (
        <div>
  
   
        </div>
    );
};

export default Home;