import { useState, useEffect } from 'react';
import contactsService from '../services/contacts';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Contactanos = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [showModal, setShowModal] = useState(false); 

  useEffect(() => {
    contactsService.getAll().then(initialContacts => {
      setContacts(Array.isArray(initialContacts) ? initialContacts : []);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newContact = { name, number, email, subject };
    const created = await contactsService.create(newContact);
    setContacts(contacts.concat(created));
    setName('');
    setNumber('');
    setEmail('');
    setSubject('');
    setShowModal(true); 
  };

  return (
    <div>
      <Menu />

      <main style={{
        maxWidth: 500,
        margin: '40px auto',
        padding: 24,
        borderRadius: 12,
        boxShadow: '0 2px 12px #0002',
        background: '#fff'
      }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>Contáctanos</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Número de teléfono"
            value={number}
            onChange={e => setNumber(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Asunto"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            required
            rows={2}
            style={{
              resize: 'none',
              borderRadius: 6,
              border: '1px solid #ccc',
              padding: 8,
              fontFamily: 'inherit',
              fontSize: 16
            }}
          />
          <button type="submit" style={{
            background: '#1976d2',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            padding: '10px 0',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>Enviar</button>
        </form>
      </main>

      {/* Modal */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100%', height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: 24,
            borderRadius: 12,
            textAlign: 'center',
            width: '90%',
            maxWidth: 400
          }}>
            <h2 style={{ marginBottom: 16 }}> Enviado correctamente</h2>
            <p>Tu formulario ha sido enviado. Te contactaremos pronto.</p>
            <button onClick={() => setShowModal(false)} style={{
              marginTop: 20,
              padding: '10px 20px',
              borderRadius: 8,
              border: 'none',
              backgroundColor: '#1976d2',
              color: '#fff',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Cerrar
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Contactanos;
