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
            <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit} className="w-75">
              <div className="d-flex row justify-content-center">
                <label htmlFor="squat" className="d-flex col-md justify-content-center">Squat</label>
                <input type="text" className="form-control col-md" id="squat" name="squat"></input>
                <label htmlFor="bench" className="d-flex justify-content-center col-md">Bench</label>
                <input type="text" className="form-control col-md" id="bench" name="bench"></input>
                <label htmlFor="deadlift" className="d-flex col-md justify-content-center">Deadlift</label>
                <input type="text" className="form-control col-md" id="deadlift" name="deadlift"></input>
                </div>
                <div className="d-flex justify-content-center mt-2">
                <label htmlFor="fivek" className="d-flex col-md justify-content-center">5K</label>
                <input type="text" className="form-control col-md" id="fiveK" name="fiveK"></input>
                <label htmlFor="tenK" className="d-flex col-md justify-content-center">10K</label>
                <input type="text" className="form-control col-md" id="tenK" name="tenK"></input>
                </div>
                <div className="row justify-content-center">
                <input type="submit" className="mt-2 w-50"></input>
                </div>
            </form>
            </div>
        </section>
    )
};

export default Benchmarks