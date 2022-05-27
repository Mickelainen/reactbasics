import './GreetUser.css'

export const GreetUser = (props) => {
    const style = {
        color : 'red'
    };
    const showAlert = () => alert("Header clicked");

    return (
        <h1 className="myHeader" onClick={() => 
            showAlert()} 
            >Welcome to Mickes Webbsajt, {props.name} {props.age} !
        </h1>
    );
};



