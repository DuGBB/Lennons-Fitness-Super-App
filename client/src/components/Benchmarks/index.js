import React from 'react';

function Benchmarks (){
    
    const [formState, setFormState] = useState({ squat: '', bench: '', deadlift: '', fiveK: '', tenK: '' });
    const { squat, bench, deadlift, fiveK, tenK } = formState;

    const handleBenchmarkSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
          console.log('Submit Form', formState);
        }
      };

      const handleChange = (e) => {

          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
        if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
          console.log('Handle Form', formState);
        }
      };


    return (
        <section className="container">
            <h2>
                Update Your Benchmarks!
            </h2>
            <form>
                <label for="squat">Squat</label>
                <input type="text" id="squat" name="squat"></input>
                <label for="bench">Bench</label>
                <input type="text" id="bench" name="bench"></input>
                <label for="deadlift">Deadlift</label>
                <input type="text" id="deadlift" name="deadlift"></input>
                <label for="fivek">5K</label>
                <input type="text" id="fiveK" name="fiveK"></input>
                <label for="tenK">10K</label>
                <input type="text" id="tenK" name="tenK"></input>
                <input type="submit"></input>
            </form>
        </section>
    )
};

export default Benchmarks