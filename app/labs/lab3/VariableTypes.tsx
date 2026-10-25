export default function VariableTypes() {
    let numberVariable = 123;
    let floatingPointNumber = 234.345;
    let stringVariable = "Hello World!";
    let booleanVariable = true;
    let isNumber = typeof numberVariable;
    let isString = typeof stringVariable;
    let isBoolean = typeof booleanVariable;
    let myCity = "Boston";
    let myAge = 24;
    let sampleCount = 42;
    let sampleLabel = "Lab 3";
    return (
        <div id="wd-variable-types">
            <h4>Variables Types</h4>
            numberVariable = {numberVariable}           <br />
            floatingPointNumber = {floatingPointNumber} <br />
            stringVariable = {stringVariable}           <br />
            booleanVariable = {booleanVariable + ""}    <br />
            isNumber = {isNumber}                       <br />
            isString = {isString}                       <br />
            isBoolean = {isBoolean}                     <br />
            myCity = {myCity}                           <br />
            typeof myCity = {typeof myCity}             <br />
            myAge = {myAge}                             <br />
            typeof myAge = {typeof myAge}               <br />
            sampleCount = {sampleCount}                 <br />
            typeof sampleCount = {typeof sampleCount}   <br />
            sampleLabel = {sampleLabel}                 <br />
            typeof sampleLabel = {typeof sampleLabel}
            <hr />
        </div>
    );
}