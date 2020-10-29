// import React, { Component } from "react";

// // class NamesForm extends Component {
// //   constructor(props) {
// //     super(props);

// //     this.state = {
// //       value: "",
// //     };

// //     this.handleChange = this.handleChange.bind(this);
// //     this.handleSubmit = this.handleSubmit.bind(this);
// //   }
// //   handleChange(event) {
// //     this.setState({ value: event.target.value });
// //   }

// //   handleSubmit(e) {
// //     alert("Name: " + this.state.value);
// //     e.preventDefault();
// //   }

// //   render() {
// //     return (
// //       <form onSubmit={this.handleSubmit}>
// //         <label>
// //           Name:
// //           <input
// //             type="text"
// //             value={this.state.value}
// //             onChange={this.handleChange}
// //           />
// //         </label>
// //         <input type="submit" value="submit" />
// //       </form>
// //     );
// //   }
// // }

// // export default NamesForm;

// // Textarea Tag

// class EssayForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: "Please write an essay about your favourate DOM Element",
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(e) {
//     this.setState({ value: e.target.value });
//   }

//   handleSubmit(e) {
//     alert("An essay was submitted: " + this.state.value);
//     e.preventDefault();
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Essay:
//             <textarea value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="submit" />
//         </form>
//       </div>
//     );
//   }
// }

// export default EssayForm;

// // Select Tag

// class NamesForms extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: "lime",
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     this.setState({
//       value: e.target.value,
//     });
//   }

//   handleSubmit(e) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     e.preventDefault();
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favourate flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label>
//         <input type="submit" value="submit" />
//       </form>
//     );
//   }
// }

// export default NamesForms;

// // Handling Multiple Inputs

// export class NamesForms extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isGoing: true,
//       numberofGuests: 2,
//     };
//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(e) {
//     const target = e.target;
//     const value = target.type === "checkbox" ? target.checked : target.value;
//     const name = target.name;
//     this.setState({
//       [name]: value,
//     });
//   }
//   render() {
//     return (
//       <div>
//         <form>
//           <label>
//             Is going:
//             <input
//               type="checkbox"
//               name="isGoing"
//               checked={this.state.isGoing}
//               onChange={this.handleInputChange}
//             />
//           </label>
//           <br />
//           <label>
//             Number of Guests:
//             <input
//               type="number"
//               name="numberofGuests"
//               value={this.state.numberofGuests}
//               onChange={this.handleInputChange}
//             />
//           </label>
//         </form>
//       </div>
//     );
//   }
// }

// export default NamesForms;
