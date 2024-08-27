import { useEffect, useState } from "react";

export const useHttpGet = (url) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setResult(data))
      .finally(() => setLoading(false));
  }, []);

  return [loading, result];
};

export const useForm = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const rules = {};

  const handleSubmit = (callback) => (event) => {
    event.preventDefault();

    let temp = { ...errors };
    for (let key in rules) {
      console.log(rules, "rules");
      console.log(values, "values");

      if (rules[key].required && (!values[key] || !values[key].trim())) {
        temp[key] = rules[key].required;
      } else {
        delete temp[key];
      }
      if (rules[key].minLength && values[key].length < rules[key].minLength) {
        temp[key] = `Minimum length is ${rules[key].minLength}`;
      }
      if (rules[key].maxLength && values[key].length > rules[key].maxLength) {
        temp[key] = `Maximum length is ${rules[key].maxLength}`;
      }
    }

    setErrors(temp);

    if (Object.keys(temp).length == 0) {
      callback(values);
    }
  };

  const register = (key, options = {}) => {
    rules[key] = options;

    return {
      value: values[key] || "",
      onChange: (e) => setValues({ ...values, [key]: e.target.value }),
    };
  };

  const reset = (defaultValue = {}) => {
    if (defaultValue) {
      setValues(defaultValue);
      setErrors({});
    }
  };

  return { handleSubmit, register, errors, reset };
};
