import React from 'react';

import { Redirect } from 'react-router-dom';

const logged = false; 

const MyPage = () => {
    return (
        // <div>
        //     <h2>
        //         Home
        //     </h2>
        // </div>
        <div>
            {
                !logged && <Redirect to="/login" />
            }
            마이페이지
        </div>
    );
};

export default MyPage;