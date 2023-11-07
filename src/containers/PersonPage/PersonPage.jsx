import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import PropTypes from 'prop-types';

import {getApiResources} from '../../utils/network';
import {withErrorApi} from '../../hoc-helpers/withErrorApi';

import {API_PERSON} from '../../constants/api';
import PersonInfo from '../../components/PersonPage/PersonInfo';

import styles from './PersonPage.module.css';
import PersonPhoto from '../../components/PersonPage/PersonPhoto';
import {getPeopleImg} from '../../services/getPeopleData';
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack';


const PersonPage = ({ setErrorApi }) => {
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    
    const { id } = useParams();
    
    useEffect(() => {
        (async () => {
            const res = await getApiResources(API_PERSON + `/${ id }/`);
            
            if (res) {
                setPersonInfo([
                    { title: 'Height', data: res['height'] },
                    { title: 'Mass', data: res['mass'] },
                    { title: 'Hair Color', data: res['hair_color'] },
                    { title: 'Skin Color', data: res['skin_color'] },
                    { title: 'Eye Color', data: res['eye_color'] },
                    { title: 'Birth Year', data: res['birth_year'] },
                    { title: 'Gender', data: res['gender'] },
                ]);
                
                setPersonName(res.name);
                setPersonPhoto(getPeopleImg(id));
            }
            
            console.log(personInfo);
            
            setErrorApi(!res);
        })();
    }, []);
    
    
    return (
        <>
            <PersonLinkBack/>
            
            <div className={ styles.wrapper }>
                <span className={ styles.person__name }>{ personName }</span>
                <div className={ styles.container }>
                    
                    <PersonPhoto personName={ personName } personPhoto={ personPhoto }/>
                    { personInfo && <PersonInfo personInfo={ personInfo }/> }
                </div>
            </div>
        </>
    );
};

PersonPage.propTypes = {
    setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);