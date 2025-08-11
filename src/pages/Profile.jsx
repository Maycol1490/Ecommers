import { useState, useEffect } from 'react';
import '../styles/profile.css'

const Profile = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (!userId) {
      window.location.href = '/login';
      return;
    }

    // Obtener datos del usuario
    fetch(`https://fakestoreapi.com/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error(err));

    // Obtener historial de compras
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const userOrders = storedOrders.filter(order => order.userId === userId);
    setOrders(userOrders);
  }, [userId]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    fetch(`https://fakestoreapi.com/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => {
        alert('Perfil actualizado');
        setUser(data);
      })
      .catch(err => console.error(err));
  };

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  if (!user) return <p>Cargando...</p>;

  return (
<div className="profile-container">
  <div className='profile-edit'>
  <h2>Profile</h2>

  <label htmlFor="email">Email</label>
  <input
    id="email"
    name="email"
    value={user.email}
    onChange={handleChange}
  />

  <label htmlFor="username">Username</label>
  <input
    id="username"
    name="username"
    value={user.username}
    onChange={handleChange}
  />

  <label htmlFor="phone">Phone</label>
  <input
    id="phone"
    name="phone"
    value={user.phone}
    onChange={handleChange}
  />

  <div className="profile-actions">
    <button onClick={handleSave}>Save Changes</button>
    <button onClick={handleLogout} className="logout-btn-p">Log Out</button>
  </div>
</div>
  {/* Historial de compras */}
  <div className="order-history">
    <h3>Purchase history</h3>
    {orders.length === 0 ? (
      <p>You have not made any purchases yet.</p>
    ) : (
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <p><strong>Date:</strong> {order.date}</p>
            <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
            <ul>
              {order.items.map(item => (
                <li key={item.id}>{item.title} x {item.quantity}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    )}
  </div>
</div>
  );
};

export default Profile;
