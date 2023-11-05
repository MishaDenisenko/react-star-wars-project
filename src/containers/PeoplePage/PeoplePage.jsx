import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";

import {withErrorApi} from "../../hoc-helpers/withErrorApi";

import {getApiResources} from "../../utils/network";

import {getPeopleId, getPeopleImg} from "../../services/getPeopleData";
import PeopleList from "../../components/PeoplePage/PeopleList";

import {API_PEOPLE} from "../../constants/api";

import styles from "./PeoplePage.module.css";


const PeoplePage = ({setErrorApi}) => {
    const [people, setPeople] = useState([]);


    const getResource = async (url) => {
        const res = await getApiResources(url);

        if (res) {
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

        setErrorApi(!res);
    }

    useEffect(() => {
        getResource(API_PEOPLE)
    }, [])

    return (
        <>
            <h1 className={"header__text"}>Navigation</h1>
            {people && <PeopleList people={people}/>}
        </>
    );
};

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);