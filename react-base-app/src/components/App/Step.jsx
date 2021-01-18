import React from "react";
import History from './History';
import Game from './Game';

function Step(currentStep) {

    const stepNumber = this.currentStep;

    return <button className="step">Etape : {stepNumber}</button>;

}
