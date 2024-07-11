import React from "react";
import './SleepMusic.css';

const SleepMusic = () => {
    const name = [
        "Ocean Waves Relaxing Music",
        "Stress Relief Sleeping Music",
        "Wind Waves Sleeping Music",
        "Soft Piano Music",
        "Deep Space Ambient Music",
        "Deep Relaxation and Rest",
        "Snowfall Symphony Music",
        "Moonlight Stress Relief Music",
        "Ultra Calm Sound Sleep Music",
    ];
    const links = [
        "https://www.youtube.com/embed/L6VBHflOeuY?si=VeVVzY07BFzkcZph",
        "https://www.youtube.com/embed/lh4JdZTJe7k?si=bo2EO3ZUMEBa4SpU",
        "https://www.youtube.com/embed/2OEL4P1Rz04?si=-FNFDT0-eeSJn-jl",
        "https://www.youtube.com/embed/EQ205a0P10Y?si=rDgx7qKorrJha2Rq",
        "https://www.youtube.com/embed/4oY3v0jAWr4?si=H0SiDgfnxqGaOKmZ",
        "https://www.youtube.com/embed/Jum_lYvW3q4?si=asCTUvhzms3Fmhr-",
        "https://www.youtube.com/embed/rU5lm-4vGyE?si=tdD1pJqe_GVTzlMK",
        "https://www.youtube.com/embed/oKTj0bfn0oc?si=85oJeUtLjvIYWSiL",
        "https://www.youtube.com/embed/SaRjRbkW6K4?si=UeCAMz0m9zR580AG",
    ];

    return (
        <div className="Main-page">
            <div className="Head-Text">
                <h1>Sleep Music</h1>
            </div>
            <div>
                <div className="cards">
                    {name.map((name, index) => (
                        <div key={index} className="Card">
                            <div className="head">
                                <p>{name}</p>
                            </div>
                            <div className="youtube">
                                <iframe
                                    src={links[index]}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{marginTop: "1%"}}>
            </div>
        </div>
    );
};

export default SleepMusic;
