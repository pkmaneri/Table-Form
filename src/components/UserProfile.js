import { useState } from "react";

const UserProfile = (props) => {
    const initailState = {
        "customerName": "",
        "address": "",
        "city": "",
        "country": ""
    }
    const [state, setState] = useState(
        initailState
    )

    const handleOnChange = (e) => {
        // console.log(e)
        const name = e.target.name;
        const value = e.target.value;
        const prevState = JSON.parse(JSON.stringify(state));
        prevState[name] = value;
        setState(prevState)
    }
    const handleClick = () => {
        props["callback"](state);
        setState(initailState)

    }
    return (
        <>
            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            <label>
                                CustomerName
                            </label>
                        </td>
                        <td>
                            <input name="customerName" value={state.customerName} onChange={(e) => handleOnChange(e)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Address
                            </label>
                        </td>

                        <td>
                            <input name="address" value={state.address} onChange={(e) => handleOnChange(e)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                City
                            </label>
                        </td>

                        <td>
                            <input name="city" value={state.city} onChange={(e) => handleOnChange(e)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Country
                            </label>
                        </td>
                        <td>
                            <input name="country" value={state.country} onChange={(e) => handleOnChange(e)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Action
                            </label>
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