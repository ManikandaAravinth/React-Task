import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

export function Notification() {
    return (
        <>
            {/* ---------Notification--------- */}

            <div className="notificationBackground bg-light">
                <div className="noteTitle "><h1 className="text-center">Notifications</h1>
                    <div className="alertName align-items-center">
                        <p className="alertOne bg-primary mt-3 p-2 m-2 ms-5 me-5 text-light"><FontAwesomeIcon icon={faCircleCheck} /> Information Message</p>
                        <p className="alertOne bg-success mt-3 p-2 m-2 ms-5 me-5 text-light"><FontAwesomeIcon icon={faCircleCheck} /> Success Message</p>
                        <p className="alertOne bg-warning mt-3 p-2 m-2 ms-5 me-5 text-light"><FontAwesomeIcon icon={faBell} /> Warning Message</p>
                        <p className="alertOne bg-danger mt-3 p-2 m-2 ms-5 me-5 text-light"><FontAwesomeIcon icon={faCircleExclamation} /> Error Message</p>
                    </div>
                </div>
            </div>

        </>
    );
}
