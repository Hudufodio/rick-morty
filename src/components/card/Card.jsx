import './style.scss';
const Card = () => {
  return (
    <div className="card">
      <p className="characters">List of characters</p>
      <div className="card-container">
        <div className="section-image">
          <img src="" alt="" />
        </div>
        <h3 className="text-name">Morty Smith</h3>
        <span className="text-human">Human</span>
        <h4 className="text-location">Earth</h4>
      </div>
    </div>
  )
}

export default Card
