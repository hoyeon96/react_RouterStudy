import React from 'react';

const Home = ({history}) => {
    return (
        <div>
            <h2>
                Home
                <button onClick={()=>history.push('./posts')}>버어튼</button>
            </h2>
        </div>
    );
};

export default Home;