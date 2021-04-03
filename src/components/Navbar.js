import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <table className="table">
                <tr>
                    <td>
                        <Link exect to="/">
                            <li className="list-group-item">UserProfile</li>
                        </Link>
                    </td>
                    <td>
                        <Link exect to="/userList">
                            <li className="list-group-item">UserList</li>
                        </Link>
                    </td>
                    <td>
                        <Link exect to="/updateProfile">
                            <li className="list-group-item">UpdateProfile </li>
                        </Link>
                    </td>
                </tr>
            </table>

        </>
    )
}
export default Navbar;