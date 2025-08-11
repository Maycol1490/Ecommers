🛒 FakeStore E-Commerce Pro
Aplicación de e-commerce desarrollada en React con Vite, que consume la Fake Store API para ofrecer una experiencia de compra simulada.

Funciones principales:

📦 Catálogo dinámico con filtrado por categorías.

🔍 Detalles de producto con imagen, descripción y precio.

🛍 Carrito de compras funcional, gestionado con Redux.

👤 Autenticación y gestión de usuarios (login, edición de perfil).

🧾 Historial de compras almacenado en LocalStorage.

💳 Simulación de compra con persistencia de datos.

📱 Diseño responsive optimizado para cualquier dispositivo.

Tecnologías usadas: React, Vite, Redux, CSS, LocalStorage y Fake Store API.


{
  "username": "mor_2314",
  "password": "83r5^_"
}


src/
│
├── App.jsx
├── main.jsx
│
├── components/
│   ├── Header.jsx
│   ├── ProductCard.jsx
│   ├── FilterCategory.jsx                      
│   └── Cart.jsx
│   └── LoginForm.jsx 
│   └── Header.jsx 
│   └── ProductList.jsx.jsx 
│
│
├── pages/
│   ├── Home.jsx
│   └── ProductDetails.jsx
│   └── Login.jsx  
│   └── Profile.jsx  
│
│
├── hooks/
│   └── useFetch.js
│
├── store/
│   ├── index.js
│   └── slices/
│       ├── products.slice.js
│       ├── cart.slice.js
│       └── loading.slice.js
│       ├── auth.slice.js
│       ├── store.js
│       ├── orders.slice.js
│
│
│
│ 
└── styles/
    └── main.css
    └── filterCategory.css
    └── header.css
    └── home.css
    └── login.css
    └── loginForm.css
    └── ProductCard.css
    └── productDetails.css
    └── profile.css
    └── cart.css
