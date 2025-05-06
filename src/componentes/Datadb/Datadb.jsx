import React, { useState } from 'react';
import styles from './Formulario.module.css';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Formulario SQLite</h2>
        
        <div className={styles.inputGroup}>
          <label className={styles.label}>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={styles.input}
            placeholder="Ej: Juan"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Apellido</label>
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            className={styles.input}
            placeholder="Ej: Pérez"
          />
        </div>

        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;