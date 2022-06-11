import React, { useState, useEffect } from "react";
import "./loading.scss";

const Loading = ({ loading, children }) => {
    const [faded, setFaded] = useState(false);
    
    useEffect(() => {
        loading && setFaded(false);
        !loading && setTimeout(() => setFaded(true), 4000);
        
    }, [loading]);

    if(faded) return children;

    return (
        <div className={"loading-backdrop" +  (loading ? "" : " fade")}>
            <div className="loading-container">
                <svg
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <clipPath id="cut-off-top">
                        <rect id="rect" x="0" y="0" width="1440" height="1200">
                        <animate
                            repeatCount="indefinite"
                            attributeName="y"
                            from="800"
                            to="-400"
                            dur="6s"
                        />
                        </rect>
                    </clipPath>

                    <clipPath id="circle-clip">
                        <circle cx="700" cy="200" r="600" width="1440" height="1340" />
                    </clipPath>

                    <circle
                        cx="700"
                        cy="200"
                        r="600"
                        width="1440"
                        height="1340"
                        strokeWidth="0"
                        fill="#eee"
                    />

                    <g clipPath="url(#circle-clip)">
                        <path
                            fill="#3DD0AE"
                            stroke="white"
                            d="M0 77C 473, 283 822,-100 1800,116 V 220 H 0 V 67"
                        >
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                from="0 600"
                                to="0 -600"
                                dur="6s"
                                repeatCount="indefinite"
                            />

                            <animate
                                repeatCount="indefinite"
                                attributeName="d"
                                dur="2s"
                                values="
                                    M0 77 C 473,283 822,-100 1520,116 V 1420 H 0 V 67 Z;
                                    M0 77 C 473,-40 1222,283 1500,136 V 1420 H 0 V 67 Z; 
                                    M0 77 C 973,383 1722,-53 1400,120 V 1420 H 0 V 67 Z; 
                                    M0 77 C 973,483 822, -100 1350,116 V 1420 H 0 V 67 Z;
                                    M0 77 C 473,283 822,-100 1520,116 V 1420 H 0 V 67 Z
                                    "
                            />
                        </path>

                        <path
                            fill="#22a39f"
                            stroke="white"
                            strokeWidth="4"
                            d="M0 77 C 0,283 822,-100 1800,116 V 1420 H 0 V 67"
                        >
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                from="0 600"
                                to="0 -600"
                                dur="6s"
                                repeatCount="indefinite"
                            />

                            <animate
                                repeatCount="indefinite"
                                attributeName="d"
                                dur="3s"
                                values="
                                    M0 77 C 473,283 822,-100 1520,116 V 1420 H 0 V 67 Z;
                                    M0 77 C 473,-40 1222,283 1500,136 V 1420 H 0 V 67 Z; 
                                    M0 77 C 973,383 1722,-53 1400,120 V 1420 H 0 V 67 Z; 
                                    M0 77 C 973,483 822, -100 1350,116 V 1420 H 0 V 67 Z;
                                    M0 77 C 473,283 822,-100 1520,116 V 1420 H 0 V 67 Z
                                "
                            />
                        </path>
                    </g>
                </svg>
            </div>
        </div>
    );
}

export default Loading;