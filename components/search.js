// Include React
import React from 'react';
// Including the Link component from React Router to navigate within our application without full page reloads
import { Link } from 'react-router-dom'

// Create the Main component
class Search extends Component {

    render() {
        return (
            <div className="Search">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Search</h3>
                    </div>

                    <div className="panel-body">Topic</div>
                    <input type="text" />

                    <div className="panel-body">Start Year</div>
                    <input type="text" />

                    <div className="panel-body">End Year</div>
                    <input type="text" />

                    <input type="submit" value="Search" />

                </div>
            </div>
        );
    }
}
// Export the component back for use in other files
export default Search;
