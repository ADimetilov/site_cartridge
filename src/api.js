import React, { useState, useEffect } from 'react';

function ToList() {
  const [list_cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "http://12pol-cab428-01:4433/cart/all";

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Сервер вернул ошибку: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        setCart(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Детальная ошибка:", error);
        setError(`Не удалось загрузить данные: ${error.message}`);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>ИД</th>
          <th>Наименование</th>
          <th>Количество шт.</th>
        </tr>
      </thead>
      <tbody>
        {list_cart.map(todo => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.name}</td>
            <td>{todo.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}