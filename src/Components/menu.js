import React from "react";
import { Link } from "react-router-dom";

export function Menu() {
    return (
        <>
            <header>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a className="ak navbar-brand" href="#">AK</a>
                        <button class="navbar-toggler bg-red" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/Congratulation">Congratulation</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/superover">Super Over</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/Socialbutton ">Social Buttons</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/notification">Notification</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/login">Login</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/technology">Technology</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/hooksassignment">Hooksassignment</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/Jsonassignment">Jsonassignment</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/fruitcounter">FruitsCounter</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/feedback">Feedback</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/datefunction">Datefunction</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/Fetchdata   ">Fetchdata</Link>
                                </li>


                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}


{/* <header>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="#">AUTOSCOUT</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link" to="/Register">Register</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link" to="/Login">Login</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header> */}