import { useEffect, useState } from 'react';
const API_URL = "http://localhost:3001/api/tasks/"
const POST_URL = "http://localhost:3001/api/tasks"
const PUT_URL = "http://localhost:3001/api/tasks/"

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const [updateId, setUpdateId] = useState('');
  const [deleteId, setDeleteId] = useState('');
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }

  const postTask = () => {
    fetch(POST_URL,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: title || 'Tarea agregada desde el front', description, completed })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      fetchTasks();
    })
    .catch(error => console.error('Error creating task:', error));
  }

  const updateTask = (id) => { 
    fetch(`${PUT_URL}${id}`,{
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: title || 'Tarea actualizada desde el front', description, completed })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      fetchTasks();
    })
    .catch(error => console.error('Error updating task:', error));
  }

  const deleteTask = (id) => {
    fetch(`${API_URL}${id}`,{
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      fetchTasks();
    })
    .catch(error => console.error('Error deleting task:', error));
  }

  useEffect(()=>{

    fetchTasks()
  },[])

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">CRUD de Tareas</h1>
      <div className="row justify-content-center align-items-start">
        <div className="col-lg-5 col-md-6 mb-4">
          <form onSubmit={e => e.preventDefault()} className="p-4 border rounded shadow bg-white">
            <div className="row mb-3">
              <div className="col-6">
                <label className="form-label">ID para actualizar:</label>
                <input type="number" value={updateId} onChange={e => setUpdateId(e.target.value)} placeholder="ID update" className="form-control form-control-sm" />
              </div>
              <div className="col-6">
                <label className="form-label">ID para eliminar:</label>
                <input type="number" value={deleteId} onChange={e => setDeleteId(e.target.value)} placeholder="ID delete" className="form-control form-control-sm" />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Título de la tarea:</label>
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Título" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Descripción:</label>
              <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Descripción" className="form-control" />
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" checked={completed} onChange={e => setCompleted(e.target.checked)} id="completedCheck" />
              <label className="form-check-label" htmlFor="completedCheck">Completada</label>
            </div>
            <div className="d-flex gap-2 justify-content-between">
              <button type="button" onClick={postTask} className="btn btn-success btn-sm flex-fill">Crear (POST)</button>
              <button type="button" onClick={() => updateTask(updateId)} className="btn btn-primary btn-sm flex-fill">Actualizar (PUT)</button>
              <button type="button" onClick={() => deleteTask(deleteId)} className="btn btn-danger btn-sm flex-fill">Eliminar (DELETE)</button>
            </div>
          </form>
        </div>
        <div className="col-lg-7 col-md-6">
          <div className="bg-white p-3 border rounded shadow">
            <h2 className="mb-3">Lista de tareas</h2>
            <div className="table-responsive">
              <table className="table table-striped align-middle">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Descripción</th>
                    <th>Completada</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map(task => (
                    <tr key={task.id}>
                      <td>{task.id}</td>
                      <td>{task.title}</td>
                      <td>{task.description}</td>
                      <td>{task.completed ? 'Sí' : 'No'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App