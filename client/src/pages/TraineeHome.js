import React from "react";
import TrainerHome from "./TrainerHome";
import TopMenuBarAuth from "../components/TopMenuBarAuth"
import TraineeBanner from "../components/TraineeBanner"

const TraineeHome = () =>{
    return (
        <div>
            <TopMenuBarAuth/>
            <TraineeBanner/>
        </div>
    );
};

export default TraineeHome;
