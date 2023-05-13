import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <div className="flex-1">
                    <Link to="/"><a className="btn btn-ghost normal-case text-xl">Fifa Management System</a></Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 m-2">
                        <Link to="/matches"><li><a>Matches</a></li></Link>
                        <Link to="/leagues"><li><a>Leagues</a></li></Link>
                        <Link to="/teams"><li><a>Teams</a></li> </Link>
                        <Link to="/players"><li><a>Players</a></li></Link>
                        <li><a>Managers</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;