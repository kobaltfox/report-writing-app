import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <h2>Tools</h2>
            <button>Save Report</button>
            <button>Export Report</button>
            <button>Clear Text</button>
        </div>
    );
};

export default Sidebar;