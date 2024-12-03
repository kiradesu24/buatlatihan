import React from "react";

type Props = { value : string};

export function LocalComponent ({value} : Props) {
    return (
        <div className="mt-4 text-xl font-bold">
            <ChildLocalComponent value2={value} />
        </div>
    );
}

type Props2 = {value2: string};

export function ChildLocalComponent({value2} : Props2) {
    return value2;
}