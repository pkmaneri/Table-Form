import { useState, useEffect } from "react";

const UpdateProfile = (props) => {
    const [updateState, setUpdateState] = useState({
        "customerName": "",
        "address": "",
        "city": "",
        "country": ""
    })
    useEffect(() => {
        console.log(props)
        if (props["dataUpdate"] !== undefined && props["dataUpdate"]["ele"] !== undefined) {
            setUpdateState(props["dataUpdate"]["ele"])
        }
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
        props["callback"](props["dataUpdate"]['i'], updateState)

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
                            <input name="customerName" value={updateState.customerName} onChange={(e) => handleOnChange(e)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Address
                            </label>
                        </td>

                        <td>
                            <input name="address" value={updateState.address} onChange={(e) => handleOnChange(e)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                City
                            </label>
                        </td>

                        <td>
                            <input name="city" value={updateState.city} onChange={(e) => handleOnChange(e)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Country
                            </label>
                        </td>
                        <td>
                            <input name="country" value={updateState.country} onChange={(e) => handleOnChange(e)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Action
                            </label>
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