import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";

import {withErrorApi} from "../../hoc-helpers/withErrorApi";

import {getApiResources} from "../../utils/network";

import {getPeopleId, getPeopleImg, getPeoplePageId} from "../../services/getPeopleData";
import {useQueryParams} from "../../hooks/useQueryParams";

import PeopleList from "../../components/PeoplePage/PeopleList";
import PeopleNavigation from "../../components/PeoplePage/PeopleNavigation";

import {API_PEOPLE} from "../../constants/api";

import styles from "./PeoplePage.module.css";


const PeoplePage = ({setErrorApi}) => {
    const [people, setPeople] = useState([]);

    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);

    const query = useQueryParams();
    const queryPage = query.get('page');

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

            setPrevPage(res?.previous);
            setNextPage(res?.next);
            setCounterPage(getPeoplePageId(url));
        }

        setErrorApi(!res);
    }

    useEffect(() => {
        getResource(API_PEOPLE + queryPage)
    }, []);

    return (
        <>
            <PeopleNavigation getResource={getResource} prevPage={prevPage} nextPage={nextPage} counterPage={counterPage}/>
            {people && <PeopleList people={people}/>}
        </>
    );
};

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);