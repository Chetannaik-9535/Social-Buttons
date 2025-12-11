const Button = props => {
  //  Write your code here.
  const {className, buttonText} = props

  return
  ;<button className={`button ${className}`}>{buttonText}</button>
}

const element = (
  //  Write your code here.
  <div className='Social-Buttons-bg-container'>
    <h1 className='heading'>Social Buttons</h1>
    <div className='button-container'>
      <Button className='like-button' buttonText='Like' />
      <Button className='comment-button' buttonText='Comment' />
      <Button className='share-button' buttonText='Share' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))



 {/* git config --global user.email naikc8468@gmail.com
    git config --global user.name Chetan

     git remote add origin https://github.com/Chetannaik-9535/Social-Buttons.git
     chetan@9535

     git commit -m "Social buttons App" */}