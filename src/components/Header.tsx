import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Report Writing App</h1>
            <nav>
                <ul>
                    <li><a href="#editor">Editor</a></li>
                    <li><a href="#sidebar">Sidebar</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;