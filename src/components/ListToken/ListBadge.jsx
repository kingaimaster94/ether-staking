import React from 'react';

const ListBadge = (props) => {
    return (
        <div
            className="bg-gradient-to-r from-orange-600 to-orange-400 text-white text-sm rounded-md px-2 py-1 font-semibold -mt-4">
            {props.prop2}
        </div>
    );
}

export default ListBadge;