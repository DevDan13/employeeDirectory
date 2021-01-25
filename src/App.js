/* eslint-disable */
import React, { useEffect, useState } from "react";
import API from "./utils/Api";
import Table from "./components/Table/index";
import Search from "./components/SearchForm/index";
import Sort from "./components/SortBtn/index";
import Container from "./components/Container/index";

function App() {

    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    const [sortedEmployees, setSortedEmployees] = useState([]);
    const tableCellHeaders = ["First", "Last", "E-mail", "Phone"];

    //API call used to retreieve users.  setEmployees sets our employees array state.
    useEffect(() => {
        API.getRandomUsers().then((res) => {
            console.log(res);
            setEmployees(res.data.results);
        })
        //getRandom()
    }, []);

    //alternate method not used.

    //   const getRandom = async () => {
    //       console.log('here')
    //     //   try {
    //     //       let result = await  API.getRandomUsers();
    //     //       console.log('result', result)
    //     //   } catch (error) {
    //     //       console.log('err getRandom', error)
    //     //   }
    //   }


    //this hook states that if there is a search query, the result will filter through the employee array based on name.  This is fired up with each change of the search.
    useEffect(() => {
        if (search) {
            const filteredResult = employees.filter(employee => {
                if (
                    employee.name.first.toLowerCase().includes(search) ||
                    employee.name.last.toLowerCase().includes(search) ||
                    employee.name.first.includes(search) ||
                    employee.name.last.includes(search)
                ) {
                    return employee;
                }
            });
            //console.log(filteredResult);
            setFilteredEmployees(filteredResult);
        }
    }, [search, employees]);

    // useEffect(() => {
    //     const sort = employees.sort((a, b) => {
    //         return a.name.first.localeCompare(b.name.first);
    //     });
    //     console.log(sort);
    //     setSortedEmployees(sort);
    // }), [];

    function sortEmployees() {
        let sort
        if (search) {
            sort = filteredEmployees.sort((a, b) => {
                return a.name.first.localeCompare(b.name.first);
            });
            console.log(sort);
        }
        else {
            sort = employees.sort((a, b) => {
                return a.name.first.localeCompare(b.name.first);
            });
            console.log(sort);
        }

        setSortedEmployees(sort)

    }



    //renders the Search and Table components to the page. Table needs to display the search bar.
    //if there is no search in the Search Bar all users will be displayed else the filtered employees will render.
    return (
        <Container>
            <div>
                <Search search={search} setSearch={setSearch} />
                <Table tableCellHeaders={tableCellHeaders} displayTable={!search ? employees : filteredEmployees} sort={sortEmployees} sorted={sortedEmployees}/>
                
            </div>
        </Container>
    );
}

export default App;