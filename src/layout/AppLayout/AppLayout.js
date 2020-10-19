import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './AppLayout.css';

function AppLayout({children}) {
    return (
        <div>
            <Header />
            <div className="view-wrapper">
                {children}
            </div>
            <Footer />
        </div>
    )
}

AppLayout.prototype = {
    children: PropTypes.element
};

export default AppLayout;
