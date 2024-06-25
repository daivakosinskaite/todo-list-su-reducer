import { useGlobalContext } from "../../context/TasksContext";
import { useState } from "react";

const AddTask = () => {
    const { addTask, handleForm } = useGlobalContext();
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        description: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        addTask(formData);
        handleForm(false);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text" placeholder="Title" name="title" className="form-control" onChange={handleChange} />
            </div>

            <div className="form-group">
                <textarea name="description" className="form-control" onChange={handleChange}></textarea>
            </div>

            <div className="form-control">
                <button className="btn btn-primary">Add</button>
            </div>
        </form>
    );
};

export default AddTask;
