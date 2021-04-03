import { useState, useEffect } from "react";

const UpdateProfile = (props) => {
    const [updateState, setUpdateState] = useState({
        "customerName": "",
        "address": "",
        "city": "",
        "country": ""

    })
    useEffect(() => {
        // console.log(props)
        if( props["dataUpdate"]["updateObj"]["ele"]!==undefined)
        setUpdateState(props["dataUpdate"]["updateObj"]["ele"])
    }, [props])

    const handleOnChange = (e) => {
        console.log(e)
        const name = e.target.name;
        const value = e.target.value;
        const prevState = JSON.parse(JSON.stringify(updateState));
        prevState[name] = value;
        setUpdateState(prevState)
    }
    const handleClickUpdate = () => {
        // console.log(props)
        props["callback"](props["dataUpdate"]["updateObj"]['i'],updateState)

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
                            <input name="customerName" value={updateState.customerName} onChange={(e) => handleOnChange(e)}></input>
                        </td>

                        <td>
                            <input name="address" value={updateState.address} onChange={(e) => handleOnChange(e)}></input>
                        </td>

                        <td>
                            <input name="city" value={updateState.city} onChange={(e) => handleOnChange(e)}></input>
                        </td>
                        <td>
                            <input name="country" value={updateState.country} onChange={(e) => handleOnChange(e)}></input>
                        </td>
                        <td>
                            <button onClick={handleClickUpdate.bind(this)}>Update</button>
                        </td>
                    </tr>

                </tbody>
            </table>

        </>
    )
}
export default UpdateProfile;