import React, { Component } from "react";
import { Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
import "./Progress.css";
class Progress extends Component {
  state = {
    modalViseble: false,
    open: [],
    pendint: [],
    inproge: [],
    progress: [],
    opneval: "",
  };

  toggleModal = () => {
    this.setState({
      modalViseble: !this.state.modalViseble,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    let title = e.target[0].value;
    this.props.progressUser(title);
    this.toggleModal();
  };

  deleteProgress = (index) => {
    const { progress } = this.props;
    progress.splice(index, 1);
    this.setState({
      progress: this.state.progress,
    });
  };

  render() {
    const { modalViseble } = this.state;
    const { progress } = this.props;

    return (
      <div className="box  ">
        <h1 className="text-center  text-[30px] py-[15px] bg-gray-200 ">
          Progress
        </h1>
        {progress.map((item, index) => {
          return (
            <div key={index} className="flex gap-8 py-4 px-5">
              <h2>{item.title}</h2>
              <button className="btn btn-info">Edite</button>
              <button onClick={this.deleteProgress} className="btn btn-danger">Delete</button>
            </div>
          );
        })}
        <div className="py-[12px] bg-gray-200 add_card">
          <button
            onClick={this.toggleModal}
            className="btn btn-success w-[150px] mx-auto d-block"
          >
            Add User
          </button>
          <Modal isOpen={modalViseble} toggle={this.toggleModal}>
            <ModalHeader>
              <h3>add User</h3>
            </ModalHeader>
            <ModalBody>
              <form id="form" onSubmit={this.submitForm}>
                <input
                  type="text"
                  placeholder="title"
                  required
                  className="form-control my-1"
                />
                <select
                  onClick={this.selectChange}
                  className="form-control my-1"
                >
                  <option value="Open">Open</option>
                  <option value="Pendint">Pendint</option>
                  <option value="Inproge">Inproge</option>
                  <option value="Progress">Progress</option>
                </select>
              </form>
            </ModalBody>
            <ModalFooter>
              <button
                form="form"
                className="py-2 px-4 bg-slate-300 rounded-lg hover:bg-slate-400"
              >
                Save
              </button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Progress;
