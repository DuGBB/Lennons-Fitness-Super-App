import React from 'react';

function ClassSchedule (){

    const handleClassSubmit = (e) => {
        e.preventDefault();
      };

    return (
        <section className="container">
            <h2>Sign Up For Classes!</h2>
            <div className="d-flex row justify-content-center">
            <button onClick={handleClassSubmit} className="btn col-md border w-75 m-1" type="submit" id="yogaBtn">Yoga</button>
            <button onClick={handleClassSubmit} className="btn col-md border w-75 m-1" type="submit" id="spinBtn">Spin</button>
            <button onClick={handleClassSubmit} className="btn col-md border w-75 m-1" type="submit" id="KbBtn">Kick Boxing</button>
            </div>
        </section>
    )
}

export default ClassSchedule;