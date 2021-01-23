import React, {useEffect, useState} from "react";
import API from "./utils/Api";
import Table from "./components/Table/index";

function App() {
    
    const [employees, setEmployees] = useState([]); 
    const [search, setSearch] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);
    const tableCellHeaders = ["First", "Last", "E-mail", "Phone"];

    //API call used to retreieve users.  setEmployees sets our employees array state.
    useEffect(() => {
        API.getRandomUsers().then((res) => {
            console.log(res);
            setEmployees(res.data.results);
        })
        //getRandom()
      }, []);

    //   const getRandom = async () => {
    //       console.log('here')
    //     //   try {
    //     //       let result = await  API.getRandomUsers();
    //     //       console.log('result', result)
    //     //   } catch (error) {
    //     //       console.log('err getRandom', error)
    //     //   }
    //   }


    useEffect(() => {
        
    })
        return (
            <div>
                <Table tableCellHeaders={tableCellHeaders} displayTable={employees}/>
  
            </div>
        );
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