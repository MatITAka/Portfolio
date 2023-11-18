import React from "react";
import ScrollCompetences from "./ScrollCompetences"

const CompetencesSection = () => {
    return (
            <div>

                <h2 className="text-center text-4xl font-bold text-white mt-22 mb-4 md:mb-4 md:mt-0">Mes compétences</h2>
                <ScrollCompetences/>
            </div>
    );
};

export default CompetencesSection;