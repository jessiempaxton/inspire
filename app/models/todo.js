export default class Todo {
  constructor(data) {
    this.description = data.description
    this._id = data._id
    this.user = data.user
    this.completed = data.completed
  }

  get Template() {
    return `
    <li class="${this.completed ? 'strike' : ''}">${this.description}</li> <button type="button" class="btn btn-default" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">Completed</button> <button type="button" class="btn btn-default" onclick="app.controllers.todoController.removeTodo('${this._id}')">Delete</button>
    `
  }

}