import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const TaskForm = (props) => {
    const { addItem, isSaved, toggleisSaved, id: slno, title: tasktitle, body: taskbody } = props
    const [id, setId] = useState(slno ? slno : uuidv4())
    const [title, setTitle] = useState(tasktitle ? tasktitle : '')
    const [body, setBody] = useState(taskbody ? taskbody : '')
    useEffect(() => {
        if (isSaved) {
            setId(uuidv4())
            setTitle('')
            setBody('')
            toggleisSaved()
        }
    }, [isSaved])

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formdata = { id: id, title: title, body: body }
        addItem(formdata)
    }
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <label>Title</label><br />
                <input type="text" value={title} onChange={handleTitleChange} /><br />
                <label>Body</label><br />
                <input type="text" value={body} onChange={handleBodyChange} /><br /><br />
                <input type="submit" value="save" />

            </form>

        </div>
    )
}
export default TaskForm