import React, {useEffect, useState} from 'react';
import styles from "./PeoplePage.module.css";
import {API_PEOPLE} from "../../constans/api";
import {getApiResources} from "../../utils/network";
import {getPeopleId, getPeopleImg} from "../../services/getPeopleData";
import PeopleList from "../../components/PeoplePage/PeopleList";

const PeoplePage = () => {

    const [people, setPeople] = useState([]);
    const getResource = async (url) => {
        const res = await getApiResources(url);

        const peopleList = res.results.map(({name, url}) => {
            const id = getPeopleId(url);
            const img = getPeopleImg(id);

            return {
                id,
                name,
                img
            }
        });

        setPeople(peopleList);
    }

    useEffect(() => {
        getResource(API_PEOPLE)
    }, [])

    return (
        <>
            {people && <PeopleList people={people}/>}
        </>
    );
};

export default PeoplePage;