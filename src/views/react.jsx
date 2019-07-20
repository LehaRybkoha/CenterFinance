// import json from './src/requests.json';

// class SearchItems extends React.Component {
// 	render() {
// 		return (
// 			<li className="search__item">
//                 <h3 className="search__item-title"></h3>
//                 <p className="search__item-desc"></p>
//                 <button className="search__item-button">Подробнее<i className="fas fa-arrow-right"></i></button>
//             </li>
// 		)
// 	}
// }

// ReactDOM.render(<SearchItems />, document.getElementById('root'))

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       55: [],
//       91: [],
//       78: []
//     };
//   }

//   componentDidMount() {
//     fetch("http://www.json-generator.com/api/json/get/cfafBYLgbS?indent=2")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             items: result.items
//           });
//         },
//         // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
//         // чтобы не перехватывать исключения из ошибок в самих компонентах.
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
//   }

//   render() {
//     const { error, isLoaded, items } = this.state;
//     if (error) {
//       return <div>Ошибка: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Загрузка...</div>;
//     } else {
//       return (
//         <ul>
//           {items.map(item => (
//             <li key={item.name}>
//               {item.name} {item.price}
//             </li>
//           ))}
//         </ul>
//       );
//     }
//   }