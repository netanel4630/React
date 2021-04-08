import React from 'react';
import { connect } from "react-redux";
import { selectSong } from "../actions" //because selectSong is an export name -> need to add {}

class SongList extends React.Component{
    
    renderList(){
        return this.props.songs.map((song)=>{
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={()=>this.props.selectSong(song)}
                            >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }
    
    render(){
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

//send to connect functio=> connect functio
//call mapStateToProps and send *reducers* as
// state at the signature
//return object that become props of the class
const mapStateToProps = (state) =>{
    return {songs: state.songs};
}

export default connect(mapStateToProps,{selectSong})(SongList);