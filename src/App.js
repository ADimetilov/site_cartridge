import './App.css';
import React, { useState, useEffect } from 'react';
import styles from './Table.module.css';
import { upload } from '@testing-library/user-event/dist/upload';

function ToUpload(){
  const [list_upload, setUpload] = useState([])
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url = "http://10.4.16.9:4433/upload/all";

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Сервер вернул ошибку: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        setUpload(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Детальная ошибка:", error);
        setError(`Не удалось загрузить данные: ${error.message}`);
        setLoading(false);
      });
  }, []);
  //if (loading) return <div className={styles.table}>Загрузка...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;
  return (
    <table name="CartUpload" className={styles.table} border="1">
      <caption>
        <b>Список на заправку</b>
      </caption>
      <thead>
        <tr>
          <th>Модель</th>
          <th>Серийный номер</th>
          <th>Адрес</th>
          <th>Дата</th>
        </tr>
      </thead>
      <tbody>
        {list_upload.map(todo => (
          <tr key={todo.id}>
            <td>{todo.model}</td>
            <td>{todo.serial}</td>
            <td>{todo.adres}</td>
            <td>{todo.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
function ToList() {
  const [list_cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "http://10.4.16.9:4433/cart/all";

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
  
  //if (loading) return <div className={styles.table}>Загрузка...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <table name="cartTable" className={styles.table} border="1">
      <caption><b>Список картриджей</b></caption>
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

function ToListMalahova51() {
  const [list_cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "http://10.3.16.29:4433/cart/all";

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

  //if (loading) return <div className={styles.table}>Загрузка...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <table name="cartTable" className={styles.table} border="1">
      <caption><b>Список картриджей</b></caption>
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


function ToListMalahova53() {
  const [list_cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "http://10.4.16.9:4433/cart/all";

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

  //if (loading) return <div className={styles.load}>Загрузка...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <table name="cartTable" className={styles.table} border="1">
      <caption><b>Список картриджей</b></caption>
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


function ButtonToList() {
  const [activeTable, setActiveTable] = useState(null);
  const [uploadTable, setUploadTable] = useState(null);


  const handleClick = () => {
    setActiveTable('yurina');
    setUploadTable('');
    const urina = document.getElementById('ur')
    urina.style.backgroundColor = "aqua"
    const malahova51= document.getElementById('mal51')
    malahova51.style.backgroundColor = "aliceblue"
    const malahova53 = document.getElementById('mal53')
    malahova53.style.backgroundColor = "aliceblue"
  }
  const handleClick2 = () => {
    setActiveTable('malahova51');
    setUploadTable('');
    const urina = document.getElementById('ur')
    urina.style.backgroundColor = "aliceblue"
    const malahova51= document.getElementById('mal51')
    malahova51.style.backgroundColor = "aqua"
    const malahova53 = document.getElementById('mal53')
    malahova53.style.backgroundColor = "aliceblue"
  }
  const handleClick3 = () => {
    setActiveTable('malahova53');
    setUploadTable('');
    const urina = document.getElementById('ur')
    urina.style.backgroundColor = "aliceblue"
    const malahova51= document.getElementById('mal51')
    malahova51.style.backgroundColor = "aliceblue"
    const malahova53 = document.getElementById('mal53')
    malahova53.style.backgroundColor = "aqua"
  }

  return (
    <>
    <div className={styles.header}><a><b>Картриджи БСМП№2</b></a></div>
      <div className={styles.menu}>
        <button name="urina" id='ur' className={styles.a} onClick={handleClick}><b>Юрина 210а</b></button>
        <button name="malahova51" id = 'mal51' className={styles.a} onClick={handleClick2}><b>Малахова 51</b></button>
        <button name="malahova53" id = 'mal53' className={styles.a} onClick={handleClick3}><b>Малахова 53</b></button>
      </div>
      <div className={styles.table_upload}>
        {activeTable==='yurina' && <button name="urina" className={styles.table_upload_but} onClick={()=>setUploadTable('upload_yurina')}><b>Загрузить картриджи на заправку</b></button>}
      </div>
      <div className={styles.tables}>
        
        {activeTable === 'yurina' && <ToList />}
        {activeTable === 'malahova51' && <ToListMalahova51 />}
        {activeTable === 'malahova53' && <ToListMalahova53 />}
        {uploadTable === 'upload_yurina'&&activeTable==='yurina'&& <ToUpload />}
      </div>

    </>
  );
}




function App() {
  return (
    <div className="App">
      <ButtonToList></ButtonToList>
    </div>
  );
}

export default App;