import React, { Component } from 'react'
import css from './css/Content.module.css'
import PostItemAPI from './PostItemAPI'
import Loader from './Loader'
import axios from 'axios'
import API_KEY from '../secrets'

export class ContentAPI extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        isLoaded: false,
        posts: [],
        savedPosts: []
      }
    }
  
    componentDidMount() {
      this.fetchImages()
    }

    async fetchImages() {
        axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`)
        .then(response => {
            const fetchedPosts = response.data.hits
            this.setState({
                isLoaded: true,
                posts: fetchedPosts,
                savedPosts: fetchedPosts
              })
        })
    }
    
    handleChange = (e) => {
      const name = e.target.value.toLowerCase();
        const filteredPosts = this.state.savedPosts.filter((post)=>{
            return post.user.toLowerCase().includes(name);
        })

      this.setState({
        posts: filteredPosts
      })
    }
  
    render() {
      return (
        <div className={css.Content}>
          <div className={css.TitleBar}>
            <h1>My Photos</h1>
          </div>
          <div className={css.SearchResults}>
            {this.state.isLoaded ? (
              this.state.posts.map(post => {
                return <PostItemAPI savedPosts={this.state.posts} />
              })
            ) : (<Loader />)}
          </div>
        </div>
      )
    }
  }

export default ContentAPI