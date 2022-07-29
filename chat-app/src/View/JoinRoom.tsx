import React from "react";
import { useMutation } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthData } from "../Redux/auth/action";
import { AppDispatch } from "../Redux/store";
import { ADD_USER } from "../Service/gql-queries";
import Form from "../Shared/Form";
import { joinRoom } from "../Utils/description";

const JoinRoom = () => {
  const navigation = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const auth = useSelector((state: any) => state.auth);
  const [addUser] = useMutation(ADD_USER);

  const onChange = (e: any) => {
    dispatch(setAuthData({ [e.target.name]: e.target.value }));
  };

  const onSubmit = async () => {
    try {
      const res = await addUser({
        variables: {
          user: auth.username,
          id: parseInt(localStorage.getItem("userId") || "") || 0,
        },
      });
      if (res.data) {
        const { addUser } = res.data;
        localStorage.setItem("userName", addUser?.name);
        localStorage.setItem("userId", addUser?.id);
        navigation("/room");
        dispatch(setAuthData({ username: "" }));
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="join-form">
      <span>
        <h3>Join Room</h3>
      </span>
      <Form formItems={joinRoom} formData={auth} {...{ onSubmit, onChange }} />
    </div>
  );
};

export default JoinRoom;
