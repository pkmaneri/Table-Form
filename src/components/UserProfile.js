import { useState } from "react";

const UserProfile = (props) => {
    const [state, setState] = useState({
        "customerName": "",
        "address": "",
        "city": "",
        "country": ""

    })

    const handleOnChange = (e) => {
        // console.log(e)
        const name=e.target.name;
        const value = e.target.value;
        const prevState = JSON.parse(JSON.stringify(state));
        prevState[name] = value;
        setState(prevState)
    }
    const handleClick = () => {
        props["callback"](state)

    }
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">CustomerName</th>
                        <th scope="col">Address</th>
                        <th scope="col">City</th>
                        <th scope="col">Country</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input name="customerName" value={state.customerName} onChange={(e) => handleOnChange(e)}></input>
                        </td>

                        <td>
                            <input name="address" value={state.address} onChange={(e) => handleOnChange(e)}></input>
                        </td>

                        <td>
                            <input name="city" value={state.city} onChange={(e) => handleOnChange(e)}></input>
                        </td>
                        <td>
                            <input name="country" value={state.country} onChange={(e) => handleOnChange(e)}></input>
                        </td>
                        <td>
                            <button onClick={handleClick.bind(this)}>Add</button>
                        </td>
                    </tr>

                </tbody>
            </table>

        </>
    )
}
export default UserProfile;