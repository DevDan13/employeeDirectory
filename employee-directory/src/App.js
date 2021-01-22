import {useEffect, Fragment, useState} from "react";
import API from "./utils/Api";

function App() {
    
    const [employees, setEmployees] = useState([]); 
    const [search, setSearch] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);


    useEffect(() => {
        //synonmous with componentDidMoun
        API.getRandomUsers.then((res) => {
            console.log(res.results);
            setEmployees(res.results);
        });
      }, []);

    // loadRandomUsers = () => {
    //     API.getRandomUsers()
    //         .then(res =>
    //             this.setState({
    //                 users: res.data.results
    //             })
    //         )
    //         .catch(err => console.log(err))
    // }
    // componentDidMount(){
    //     this.loadRandomUsers()
    // }



    render() { 
        //console.log(this.state.users)
        return (
            <div>
                
            </div>
        );
    }
}
 
export default App;

//{/* <h1>Hello</h1>
                // {this.state.users.map( (user) => {
                //     return (
                //         <Fragment key>
                //         <p>{user.phone}</p>
                //         <p>{user.name.first}</p>
                //         </Fragment>
                //     )
                // })}