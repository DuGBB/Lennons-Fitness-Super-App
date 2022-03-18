import React from 'react';

function ClassSchedule (){

    const handleClassSubmit = (e) => {
        e.preventDefault();

      };

    return (
        <section className="container">
            <h2>Sign Up For Classes!</h2>
            <button className="btn" type="submit" id="yogaBtn">Yoga</button>
            <button className="btn" type="submit" id="spinBtn">Spin</button>
            <button className="btn" type="submit" id="KbBtn">Kick Boxing</button>
        </section>
    )
}