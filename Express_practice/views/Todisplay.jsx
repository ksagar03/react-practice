import React from 'react'

const Todisplay = ({key,title,content,more_info}) => {
  return (
    <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">{content}</p>
      <a href={more_info} class="btn btn-primary">more_info</a>
    </div>
  </div>
  )
}

export default Todisplay
