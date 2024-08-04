import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import PublicProfile from './PublicProfile.js'
import './CSS/Search.css'


const Search = () => {

    const user = useSelector(state => state.session.user);
    const userId = user.id;

    const [profiles, setProfiles] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);


    let userCount = 0;

    useEffect(() => {
        if (!userId) {
            return
        }
        async function fetchData() {
            const response = await fetch(`/api/users/`);
            const profObj = await response.json();
            const userArr = profObj.users;
            userCount = userArr.length;
          setProfiles(userArr);
          setSearchResults(userArr);
        };
        fetchData();
    }, []);


    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    };

    useEffect(() => {
        let results = profiles.filter(profile =>
            profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            profile.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            profile.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
            profile.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setSearchResults(results);
    }, [searchTerm]);


    return (
        <div id='bodyDiv'>
            <div id='searchDiv'>
                <form action="/" method="get">
                    <input
                        type="text"
                        value={searchTerm}
                        placeholder="  Search names or descriptions"
                        id='searchInput'
                        onChange={handleSearchChange}
                    />
                    {/* <button type="submit" id='searchButton'>Search</button> */}
                </form>
            </div>
            <div id='profilesDiv'>
            {searchResults.map((profile, i) => (
                <PublicProfile oneProfile={profile} key={i} />
            ))}
            </div>
        </div>
    )

}

export default Search
