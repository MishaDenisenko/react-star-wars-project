import React, {Suspense, useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {debounce} from 'lodash';

import {API_SEARCH} from '../../constants/api';

import {getApiResources} from '../../utils/network';
import {withErrorApi} from '../../hoc-helpers/withErrorApi';
import {getPeopleId, getPeopleImg} from '../../services/getPeopleData';
import SearchPageInfo from '../../components/SearchPage/SearchPageInfo';
import UiLoading from '../../components/UI/UiLoading';

import styles from './SearchPage.module.css';
import '../../styles/index.css'
import UiSearch from '../../components/UI/UiSearch';

const SearchPage = ({setErrorApi}) => {
    const [searchValue, setSearchValue] = useState('');
    const [people, setPeople] = useState([]);
    
    const getResponse = async (param) => {
        console.log(param);
        const res = await getApiResources(API_SEARCH + param);
        
        if (res){
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url);
                const img = getPeopleImg(id);
                
                return {
                    name,
                    id,
                    img
                }
            });
            
            setPeople(peopleList);
        }
        
        setErrorApi(!res);
    }
    
    useEffect(() => {
        (async () => await getResponse(''))();
    }, []);
    
    
    const debouncedGetResponse = useCallback(
        debounce(value => getResponse(value), 300),
        []);
    
    const handleOnChange = (value) => {
        setSearchValue(value);
        debouncedGetResponse(value)
    }
    
    return (
        <>
            <h1 className={'header__text'}>Search</h1>
            <UiSearch value={searchValue} inputOnChange={handleOnChange} classes={styles.input__search} placeholder={'Input character\'s name'}/>
            <Suspense fallback={<UiLoading/>}>
                <SearchPageInfo people={people}/>
            </Suspense>
        </>
    );
};

SearchPage.propTypes = {
    setErrorApi: PropTypes.func,
}

export default withErrorApi(SearchPage);