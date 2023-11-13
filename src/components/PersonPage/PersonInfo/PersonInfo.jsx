import React from 'react';
import PropTypes from 'prop-types';

import styles from './PersonInfo.module.css';


const PersonInfo = ({ personInfo }) => {
    return (
        <div className={ styles.wrapper }>
            <ul className={ styles.list__container }>
                { personInfo.map(({ title, data }, index) => (
                    data && (
                        <li className={ styles.list__item } key={ index }>
                            <span className={ styles.item__title }>{ title }: { data }</span>
                        </li>
                    )
                )) }
            </ul>
        </div>
    );
};

PersonInfo.propTypes = {
    personInfo: PropTypes.arrayOf(PropTypes.object),
};

export default PersonInfo;