import React from "react";
import Label from "../custom/Label.jsx";

const FilterBox = ({name}) => {
    return (
        <div className="FilterBox">
            <Label content={name}/>
            <img
                src={require('../../../resources/icons/CloseGrey.png')}
                className="FilterBox__close"
            />
        </div>
    );
};
export default FilterBox;