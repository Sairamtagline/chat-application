import React from "react";
import Input from "./Input";
import Button from "./Button";
const FormItem = ({ formData, onChange, ...data }: any) => {
    switch (data.type) {
        case "text":
            return (
                <>
                    {data.label ? <>{data.label}</> : null}
                    <Input
                        {...data}
                        value={formData[data.name]}
                        onChange={onChange}
                        key={data.label}
                    />
                </>
            );
        case "button":
        case "submit":
            return (
                <Button {...data} type="primary">
                    {" "}
                    {data.content}{" "}
                </Button>
            );
        default:
            return <></>;
    }
};
const Form = ({ formItems, formData, onSubmit, onChange, ...rest }: any) => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        onSubmit && onSubmit();
    };
    return (
        <form onSubmit={handleSubmit} className="chat-input">
            {formItems.map((item: any, index: number) => (
                <FormItem {...{ ...item, formData, onChange }} key={index} />
            ))}
        </form>
    );
};
export default Form;
