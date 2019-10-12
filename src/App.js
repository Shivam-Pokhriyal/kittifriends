import React,{Component} from 'react';
import {connect} from 'react-redux';
import CardList from './CardList.js';
import Searchbox from './Searchbox';
import './App.css';
import Scroll from './Scroll.js';
import ErrorBoundry from './ErrorBoundry.js';
import {setSearchField,requestRobots} from './action.js'
const mapStateToProps=(state)=>{
  return{
    searchField:state.searchRobots.searchField,
    robots:state.requestRobots.robots,
    isPending:state.requestRobots.isPending,
    error:state.requestRobots.error
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
    onRequestRobots:()=> dispatch(requestRobots())
  }
}
class App extends Component
{
  componentDidMount(){
    this.props.onRequestRobots();
  }
  render()
  {
    const {searchField,onSearchChange,robots,isPending}=this.props;
    const filteredRobots=robots.filter(robots=>{
      return robots.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return isPending?<h1>Loading</h1>:
    (
      <div className='tc'>
          <h1 className='f1'>Kittifriends</h1>
          <Searchbox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
      </div>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
