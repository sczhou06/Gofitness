import React from "react";
import TopMenuBarAuth from "../components/TopMenuBarAuth"
import TraineeBanner from "../components/TraineeBanner"
import TrainerFilter from "../components/TrainerFilter"

const TraineeHome = () =>{
    return (
        <div>
            <TopMenuBarAuth/>
            <TraineeBanner/>
            <TrainerFilter/>
        </div>
    );
};

export default TraineeHome;
