"use strict";
//what is component
//compnent key name ka first letter capital hona chahiay 
// component aik function hai
//component html ka parent element return krta ha
// component re-useable hai
//component me javascript / typeescript kay ander html and css bhi likh skathay hain
// compenent me html key ander javascript / typescript bhi likh saktay hain
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card3 = exports.Card2 = exports.Card = void 0;
const Card = () => {
    let a = " js/ts code component k ander likha ha";
    return (<div> 
            <h3> my first component </h3>
            <h3> {a} </h3>
        </div>);
};
exports.Card = Card;
const Card2 = () => {
    return (<div> This is 2nd ccomponent and arrowfunction </div>);
};
exports.Card2 = Card2;
function Card3() {
    return <p> Component with Name Function</p>;
}
exports.Card3 = Card3;
