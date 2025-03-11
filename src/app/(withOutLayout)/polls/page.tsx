import React from 'react';
import PollList from '../../../components/ui/PollList';

import { getAllPublicPolls } from '../../../services/Poll';

const page = async() => {
    const res = await getAllPublicPolls();
    return (
        <>
            <PollList data={res?.data}/>
        </>
    );
};

export default page;