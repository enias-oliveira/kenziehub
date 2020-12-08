import { Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import axios from "axios";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

//format for post
//requisition type POST /users

// {
// "email": "gabriel12@gmail.c2om", is required
// "password": "123456", is required
// "name": "Filipe Gutierry", is required
// "bio": "Lorem ipsum dolor emet", is required
// "contact": "123456789", is required
// "course_module": "2o Módulo (Frontend avançado)" is required
// }

const RegistrationForm =()=>{
    const history = useHistory();
    const [form]  = Form.useForm()
    const url = "https://kenziehub.me/users";

    const onFinish = (values) => {
      console.log("Values received from form registration", values);

      axios.post(url, { user: values }).then(function (response) {
        console.log("user successful registration", response);
        history.push("/") //put user to login form instantly
      });
    };

return(
    <>
    
    </>
)





}