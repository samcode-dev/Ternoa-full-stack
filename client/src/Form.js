import { useState } from "react";
import "./form.css";
import FormInput from "./components/FormInput";
import axios from "axios"

const App = () => {
  const [formData, setFormData] = useState('');
  const [values, setValues] = useState({
    title: "",
    description: "",
    image: ""
  });

  const [error, setError] = useState({
    found: false,
    message: '',
  });

  const upload = ({ target: { files } }) => {
    let data = new FormData();
    data.append('categoryImage', files[0]);
    data.append('name', files[0].name);
    setValues(...values, {image: data});
  };

  const inputs = [
    {
      id: 1,
      name: "title",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Title should be 3-16 characters and shouldn't include any special character!",
      label: "Title",
      required: true,
    },
    {
      id: 2,
      name: "description",
      type: "text",
      placeholder: "Email",
      errorMessage: "Enter a description!",
      label: "Description",
      required: true,
    }
  ];

  const handleSubmit = async(e) => {
    e.preventDefault();
    // setValues({
    //   image: '',
    //   title: '',
    //   description: ''
    // });
    console.log('hello')

    try {
      const res = await axios.post('http://localhost:8000/api/create', values)
      console.log(res.data);
      setTimeout(() => {
        setValues(res.data.category);
      }, 1000);
    } catch (err) {
      console.log(err.response);
        setError({
          found: true,
          message: err.response.data.errors
        })
    }
    // axios
    // .post('http://localhost:8000/api/create', formData)
    // .then((res) => {
    //   console.log(res.data);
    //   setTimeout(() => {
    //     setInfo(res.data.category);
    //   }, 1000);
    // })
    // .catch((err) => {
    //   console.log(err.response);
    //   setError({
    //     found: true,
    //     message: err.response.data.errors
    //   })
    //   // setTimeout(() => {
    //   //   setError({
    //   //     found: false,
    //   //     message: ''
    //   //   })
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Create Nft</h1>
        <input type="file" name="image" id="image" onChange={upload}/>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
