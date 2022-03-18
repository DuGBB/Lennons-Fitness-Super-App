import React, { useEffect, useState } from "react";

function Benchmarks (){
    
    const [formState, setFormState] = useState({ squat: '', bench: '', deadlift: '', fiveK: '', tenK: '' });
    const { squat, bench, deadlift, fiveK, tenK } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
          console.log('Submit Form', formState);
      };

      const handleChange = (e) => {

          setFormState({ ...formState, [e.target.name]: e.target.value });
          console.log('Handle Form', formState);

      };


    return (
        <section className="container">
            <h2>
                Update Your Benchmarks!
            </h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="squat">Squat</label>
                <input type="text" className="form-control" id="squat" name="squat"></input>
                <label htmlFor="bench">Bench</label>
                <input type="text" className="form-control" id="bench" name="bench"></input>
                <label htmlFor="deadlift">Deadlift</label>
                <input type="text" className="form-control" id="deadlift" name="deadlift"></input>
                <label htmlFor="fivek">5K</label>
                <input type="text" className="form-control" id="fiveK" name="fiveK"></input>
                <label htmlFor="tenK">10K</label>
                <input type="text" className="form-control" id="tenK" name="tenK"></input>
                <input type="submit"></input>
            </form>
        </section>
    )
};

export default Benchmarks