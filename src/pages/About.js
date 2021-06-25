import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    
    const detail = query.detail === 'true';
    // URL 쿼리 만들때 받아오는 값은 모두 문자열 so, 'true'


    return (
        <div>
            <h2>
                {match.params.name} 의 소개
            </h2>
            {detail && 'detail: blahblah'}
        </div>
    );
};

export default About;