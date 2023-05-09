import { routes } from "../../constant";
import "./home.scss";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
    const deleteUser = function (){
        axios.delete('https://localhost:7144/api/account/delete', {username: 'tuantung'});
        CallAPI()
    }

    return (
        <>
            <Link to={routes.EXPLORE}>Explore</Link>
            <button onClick={deleteUser()}>Delete</button>
        </>
    );
}

function CallAPI(){
    axios({
        method: 'get',
        url: 'https://localhost:7144/api/account/get-list',
    }).then((res)=>{
        return console.log(res)
    })
}

export default Home;
