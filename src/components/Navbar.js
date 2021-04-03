import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            <Link to="/">
                                <li className="list-group-item active">Create User</li>
                            </Link>
                        </td>
                        <td>
                            <Link to="/userList">
                                <li className="list-group-item active">List of User</li>
                            </Link>
                        </td>
                        <td>
                            <Link to="/updateProfile">
                                <li className="list-group-item active">Update User </li>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>

        </>
    )
}
export default Navbar;