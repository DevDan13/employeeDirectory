import React, { useEffect, useState } from "react";
import API from "./utils/Api";
import Table from "./components/Table/index";
import Search from "./components/SearchForm/index";

function App() {

    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredEmployees, setFilteredEmployees] = useState([]);
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


    //this hook states that if there is a search query, the result will filter through the employee array
    //based on name.  This is fired up with each change of the search.
    useEffect(() => {
        if (search) {
            const filteredResult = employees.filter(employee => {
                if (
                    employee.name.first.toLowerCase().includes(search) ||
                    employee.name.last.toLowerCase().includes(search)
                ) {
                    return employee;
                }
            });
            //console.log(filteredResult);
            setFilteredEmployees(filteredResult);
        }
    }, [search, employees])

    //renders the Search and Table components to the page. Table needs to display the search bar.
    //if there is no search inthe Search Bar all users will be displayed else the filtered employees will render.
    return (
        <div>
            <Search search={search} setSearch={setSearch} />
            <Table tableCellHeaders={tableCellHeaders} displayTable={!search ? employees : filteredEmployees} />
        </div>
    );
}

export default App;