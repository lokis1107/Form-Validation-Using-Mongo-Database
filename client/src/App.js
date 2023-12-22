import React, { useEffect, useState } from "react";
import p1 from "./image/p1.jpg";
import axios from "axios";
import { Form, Button } from "semantic-ui-react";

axios.defaults.baseURL = "http://localhost:8080/";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    lat: "",
    long: "",
  });

  const initalValue = {
    name: "",
    email: "",
    mobile: "",
    address: "",
    lat: "",
    long: "",
  };

  const [formValue, setFormValue] = useState(initalValue);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(valiData(formData));
    setIsSubmit(true);
    const data = await axios.post("/create", formData);
    console.log(data);
  };

  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formValue);
    }
  }, [formError]);

  const valiData = (values) => {
    const errors = {};
    const regex = /\S+@\S+\.\S+/;
    if (!values.name) {
      errors.name = "School name is required";
    }
    if (!values.email) {
      errors.email = "Email name is required";
    }
    if (!values.mobile) {
      errors.mobile = "Mobile number name is required";
    }
    if (!values.address) {
      errors.address = "Address name is required";
    }
    if (!values.lat) {
      errors.lat = "Latitude name is required";
    }
    if (!values.long) {
      errors.long = "Longitude name is required";
    }
    return errors;
  };

  return (
    <div>
      <div>
        <img
          src={p1}
          alt="Background"
          className="flex-1 h-full w-full absolute"
        />
        <div className="relative items-center justify-center flex flex-1">
          <div
            className=" p-5 border bg-white shadow-3xl rounded-xl flex-col mt-24"
            style={{ width: 500 }}
          >
            <Form onSubmit={handleSubmit}>
              <div>
                <Form.Field>
                  <label className=" text-lg font-bold text-gray-900">
                    School Name
                  </label>
                  <input
                    placeholder="School Name"
                    onChange={handleChange}
                    name="name"
                    value={formValue.name}
                    className="border p-2 rounded-lg w-60 ml-16 border-gray-400"
                  />
                </Form.Field>
              </div>
              <h5 className=" text-red-600 ml-1 -mt-0">{formError.name}</h5>
              <div className=" mt-3">
                <Form.Field>
                  <label className=" text-lg font-bold text-gray-900">
                    Email Id
                  </label>
                  <input
                    placeholder="E Mail"
                    onChange={handleChange}
                    name="email"
                    value={formValue.email}
                    className="border p-2 rounded-lg w-60 ml-28 border-gray-400"
                  />
                </Form.Field>
              </div>
              <h5 className=" text-red-600 ml-1 -mt-0">{formError.email}</h5>
              <div className=" mt-3">
                <Form.Field>
                  <label className=" text-lg font-bold text-gray-900">
                    Mobile Number
                  </label>
                  <input
                    placeholder="Mobile Number"
                    onChange={handleChange}
                    name="mobile"
                    value={formValue.mobile}
                    className="border p-2 rounded-lg w-60 ml-12 border-gray-400"
                  />
                </Form.Field>
              </div>
              <h5 className=" text-red-600 ml-1 -mt-0">{formError.mobile}</h5>
              <div className=" mt-3">
                <Form.Field>
                  <label className=" text-lg font-bold text-gray-900">
                    Address
                  </label>
                  <input
                    placeholder="Address"
                    onChange={handleChange}
                    name="address"
                    value={formValue.address}
                    className="border p-2 rounded-lg w-60 ml-28 border-gray-400"
                  />
                </Form.Field>
              </div>
              <h5 className=" text-red-600 ml-1 -mt-0">{formError.address}</h5>
              <div className=" mt-3">
                <Form.Field>
                  <label className=" text-lg font-bold text-gray-900">
                    Latitude
                  </label>
                  <input
                    placeholder="Latitude"
                    onChange={handleChange}
                    name="lat"
                    value={formValue.lat}
                    className="border p-2 rounded-lg w-60 ml-28 border-gray-400"
                  />
                </Form.Field>
              </div>
              <h5 className=" text-red-600 ml-1 -mt-0">{formError.lat}</h5>
              <div className=" mt-3">
                <Form.Field>
                  <label className=" text-lg font-bold text-gray-900">
                    Longitude
                  </label>
                  <input
                    placeholder="Longitude"
                    onChange={handleChange}
                    name="long"
                    value={formValue.long}
                    className="border p-2 rounded-lg w-60 ml-24 border-gray-400"
                  />
                </Form.Field>
              </div>
              <h5 className=" text-red-600 ml-1 -mt-0">{formError.long}</h5>
              <div className="mt-6 mx-10 items-center ml-36 w-36 p-2 shadow-2xl rounded-lg">
                <Button type="submit" className=" text-center ml-8">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
