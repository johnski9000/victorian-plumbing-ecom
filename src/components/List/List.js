import React from "react";
import Card from "../Card/Card";
import "./List.modules.css";


const List = ({ list_data }) => {
    return (
        <div className='list'>

            {list_data ? list_data.map((data, index) => {
                return (
                    <Card
                        key={index}
                        data={data}
                    />
                );
            }) : null}
        </div>
    );
};

export default List;