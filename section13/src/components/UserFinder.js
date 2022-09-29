import { Fragment, Component } from "react";

import ErrorBoundary from "./ErrorBoundary";
import UsersContext from "../store/users-context";
import Users from "./Users";
import classes from "./UserFinder.module.css";

class UserFinder extends Component {
  static contextType = UsersContext; // can only set static contextType property once

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  componentDidMount() {
    // only run the first time after it is rendered
    // Send http request ..
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");
//
//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);
//
//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };
//
//   return (
//     <Fragment>
//       <input type="search" onChange={searchChangeHandler} />
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
