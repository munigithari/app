// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="apps-item">
      <img src={imageUrl} className="image1" alt={appName} />
      <p className="paragraph">{appName}</p>
    </li>
  )
}

export default AppItem
