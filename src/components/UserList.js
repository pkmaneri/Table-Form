import React from "react";

const UserList = (props) => {
    const handleClickRemove = (i) => {
        props.callback(i)
    }

    const handleClickUpdate = (ele, i) => {
        console.log(ele, i)
        props["callbackUpdate"](ele, i)

    }
    return (
        <>
            <table className="table">
                <tbody>
                    {props?.data?.map((ele, i) => {
                        return (
                            <tr key={i}>
                                
                                <td >{ele.customerName}</td>
                                <td>{ele.address}</td>
                                <td>{ele.city}</td>
                                <td>{ele.country}</td>
                                <td>
                                    <button onClick={handleClickRemove.bind(this, i)}>X</button>
                                    <button onClick={handleClickUpdate.bind(this, ele, i)}>U</button>

                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
export default UserList;