import React from 'react';
import { useForm } from 'react-hook-form';
import './ReactForm.css'

const ReactForm = () => {

    const { register, handleSubmit, watch } = useForm();
    const selectedSector = watch('sector');
  
    const onSubmit = (data) => {
      console.log(data);
    };


    return (
        <section>
             <form onSubmit={handleSubmit(onSubmit)} className="smart-form">
      <label htmlFor="sector">Select Itmem:</label>
      <select {...register('sector')} id="sector" className="selector">
        <option value="sector1">Sector 1</option>
        <option value="sector2">Sector 2</option>
        <option value="Mango">Mango</option>
      </select>

      {selectedSector && (
        <input
          type="text"
          {...register(selectedSector)}
          placeholder={`Enter data for ${selectedSector}`}
          className="sector-input"
        />
      )}

      <button type="submit">Submit</button>
    </form>
        </section>
    );
};

export default ReactForm;