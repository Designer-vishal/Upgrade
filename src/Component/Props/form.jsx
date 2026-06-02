const Forms = () =>{
    const SubmitForm = (e)=>{
        e.preventDefault();
        alert(`Name: ${e.target[0].value} \nEmail: ${e.target[1].value} \nAddress: ${e.target[2].value}`);
    };
    return(
        <>
                <form onSubmit={(e)=>{SubmitForm(e)}}>
                    <input type="text" placeholder="Enter Name" className="search-input"/>
                    <input type="text" placeholder="Enter Email" className="search-input"/>
                    <input type="text" placeholder="Enter Address" className="search-input"/>
                    <button type="submit" className="search-btn">Submit</button>
                </form>
        </>
    )
}
export default Forms;