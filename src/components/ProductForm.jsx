import { useState } from "react"
const initDataForm = 
  {
    name: '',
    description: '',
    price: ''
  };

  // eslint-disable-next-line react/prop-types
export const ProductForm = ({ handlerAdd }) => {
  const [form, setForm] = useState(initDataForm);
  const { name, description, price } = form;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!name || !description || !price) {
          alert("Debe de completar los datos del formulario!")
          return;
        }
        handlerAdd(form);
        setForm(initDataForm);
      }}>
      <div>
        <input
          placeholder="Name"
          name="name"
          value={name}
          style={{ marginBottom: '2px' }}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
        />
      </div>
      <div>
        <input
          placeholder="Description"
          name="description"
          value={description}
          style={{ marginBottom: '2px' }}
          onChange={(event) =>
            setForm({ ...form, description: event.target.value })
          }
        />
      </div>

      <div>
        <input
          placeholder="Price"
          name="price"
          value={price}
          style={{ marginBottom: '2px' }}
          onChange={(event) => setForm({ ...form, price: event.target.value })}
        />
      </div>

      <div>
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

