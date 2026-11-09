"use client";
import Link from "next/link";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import CounterBroken from "./CounterBroken";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ProfileForm from "./profile/ProfileForm";
import ParentStateComponent from "./ParentStateComponent";
import PropDrilling from "./PropDrilling";
import UrlEncoding from "./UrlEncoding";
import ContextExamples from "./context/ContextExamples";
import ZustandExamples from "./zustand/ZustandExamples";
import ReduxExamples from "./redux/ReduxExamples";
import Effect from "./Effect";

export default function Lab4() {
    const sayHello = (message: string) => {
        alert(message);
    };
    const sayMyName = () => {
        alert("My name is Shreyash Sawant");
    };
    const sampleFromParent = () => {
        alert("Sample from parent");
    };
    return (
        <div id="wd-lab4" className="p-4">
            <h2>Lab 4</h2>
            <p className="mb-4 flex flex-wrap gap-3">
                <Link href="/labs/lab4/profile-form" id="wd-lab4-profile-form-link" className="text-blue-600 underline">
                    Profile form, three ways
                </Link>
                <Link href="/labs/lab4/hooks" id="wd-lab4-hooks-link" className="text-blue-600 underline">
                    Writing your own hooks
                </Link>
            </p>
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions
                message="Hello from Lab 4"
                theFunction={sayHello}
                myNameFunction={sayMyName}
                theOtherFunction={sampleFromParent}
            />
            <CounterBroken />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ProfileForm />
            <ParentStateComponent />
            <PropDrilling />
            <UrlEncoding />
            <ContextExamples />
            <ZustandExamples />
            <ReduxExamples />
            <Effect />


        </div>
    );
}